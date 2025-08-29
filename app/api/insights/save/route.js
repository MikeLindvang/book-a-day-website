import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import InsightSheet from '@/lib/models/InsightSheet';

export async function PATCH(request) {
  try {
    // Parse request body
    const { projectId, fields } = await request.json();

    // Validate required parameters
    if (!projectId) {
      return NextResponse.json(
        { ok: false, error: 'Project ID is required' },
        { status: 400 }
      );
    }

    if (!fields || typeof fields !== 'object') {
      return NextResponse.json(
        { ok: false, error: 'Fields object is required' },
        { status: 400 }
      );
    }

    // Connect to database
    await dbConnect();

    // Update or create insight sheet with upsert
    const sheet = await InsightSheet.findOneAndUpdate(
      { projectId },
      { $set: fields },
      { 
        upsert: true, 
        new: true,
        runValidators: true
      }
    );

    return NextResponse.json({
      ok: true,
      sheet
    });

  } catch (error) {
    console.error('Error saving insight sheet:', error);
    
    // Handle specific MongoDB validation errors
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { ok: false, error: `Validation error: ${error.message}` },
        { status: 400 }
      );
    }

    // Handle duplicate key errors
    if (error.code === 11000) {
      return NextResponse.json(
        { ok: false, error: 'Duplicate entry detected' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}