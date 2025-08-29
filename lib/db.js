/**
 * Simple MongoDB Connection with Mongoose
 * 
 * This module provides a cached connection to MongoDB using Mongoose.
 * It implements connection caching to avoid creating multiple connections
 * in serverless environments like Vercel.
 * 
 * Usage:
 *   import { connectDB } from '@/lib/db';
 *   await connectDB();
 */

import mongoose from 'mongoose';

// Global cache for the connection promise
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Connect to MongoDB with connection caching
 * 
 * @returns {Promise<typeof mongoose>} Mongoose connection
 * @throws {Error} If MONGODB_URI is not defined or connection fails
 */
async function connectDB() {
  // Check for required environment variable
  if (!process.env.MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable in .env.local\n' +
      'Example: MONGODB_URI="mongodb://localhost:27017/sales-boilerplate"'
    );
  }

  // Return existing connection if available
  if (cached.conn) {
    console.log('📦 Using cached MongoDB connection');
    return cached.conn;
  }

  // Create new connection if promise doesn't exist
  if (!cached.promise) {
    console.log('🔌 Creating new MongoDB connection...');
    
    const opts = {
      bufferCommands: false, // Disable command buffering
      maxPoolSize: 10,       // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      bufferMaxEntries: 0,    // Disable mongoose buffering
    };

    cached.promise = mongoose.connect(process.env.MONGODB_URI, opts).then((mongoose) => {
      console.log('✅ MongoDB connected successfully');
      return mongoose;
    }).catch((error) => {
      console.error('❌ MongoDB connection error:', error);
      // Reset promise on error so next call will retry
      cached.promise = null;
      throw error;
    });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    // Reset both promise and connection on error
    cached.promise = null;
    cached.conn = null;
    throw error;
  }
}

/**
 * Get current connection status
 * 
 * @returns {string} Connection state: 'disconnected', 'connected', 'connecting', 'disconnecting'
 */
function getConnectionStatus() {
  if (!mongoose.connection) return 'disconnected';
  
  const states = {
    0: 'disconnected',
    1: 'connected', 
    2: 'connecting',
    3: 'disconnecting'
  };
  
  return states[mongoose.connection.readyState] || 'unknown';
}

/**
 * Gracefully close the MongoDB connection
 * Useful for cleanup in tests or shutdown procedures
 */
async function disconnectDB() {
  if (cached.conn) {
    console.log('🔌 Closing MongoDB connection...');
    await mongoose.connection.close();
    cached.conn = null;
    cached.promise = null;
    console.log('✅ MongoDB disconnected');
  }
}

// Handle connection events for better debugging
if (typeof window === 'undefined') { // Only in Node.js environment
  mongoose.connection.on('connected', () => {
    console.log('🟢 Mongoose connected to MongoDB');
  });

  mongoose.connection.on('error', (err) => {
    console.error('🔴 Mongoose connection error:', err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('🟡 Mongoose disconnected from MongoDB');
  });

  // Graceful shutdown
  process.on('SIGINT', async () => {
    await disconnectDB();
    process.exit(0);
  });
}

// Export the connection function as default and named export
export default connectDB;
export { connectDB, getConnectionStatus, disconnectDB };
