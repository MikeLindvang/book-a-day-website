'use server';

import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect';
import Document from '../../../lib/models/Document';

// GET /api/documents - Get user's documents
export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const type = searchParams.get('type');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const query = { userId, isActive: true };
    if (type) {
      query.type = type;
    }

    const documents = await Document.find(query)
      .sort({ order: 1, createdAt: -1 });

    return NextResponse.json({ documents });

  } catch (error) {
    console.error('Get documents error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch documents' },
      { status: 500 }
    );
  }
}

// POST /api/documents - Create new document
export async function POST(request) {
  try {
    await dbConnect();

    const { title, type, content, description, userId } = await request.json();

    if (!title || !type || !content || !userId) {
      return NextResponse.json(
        { error: 'Title, type, content, and userId are required' },
        { status: 400 }
      );
    }

    // Get next order number for this user
    const lastDoc = await Document.findOne({ userId })
      .sort({ order: -1 });
    const order = (lastDoc?.order || 0) + 1;

    const document = new Document({
      title,
      type,
      content,
      description,
      userId,
      order
    });

    await document.save();

    return NextResponse.json({ 
      success: true, 
      document 
    }, { status: 201 });

  } catch (error) {
    console.error('Create document error:', error);
    return NextResponse.json(
      { error: 'Failed to create document' },
      { status: 500 }
    );
  }
}

// PUT /api/documents - Update document
export async function PUT(request) {
  try {
    await dbConnect();

    const { id, title, type, content, description, userId } = await request.json();

    if (!id || !userId) {
      return NextResponse.json(
        { error: 'Document ID and User ID are required' },
        { status: 400 }
      );
    }

    const document = await Document.findOneAndUpdate(
      { _id: id, userId },
      { 
        ...(title && { title }),
        ...(type && { type }),
        ...(content && { content }),
        ...(description !== undefined && { description })
      },
      { new: true }
    );

    if (!document) {
      return NextResponse.json(
        { error: 'Document not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      document 
    });

  } catch (error) {
    console.error('Update document error:', error);
    return NextResponse.json(
      { error: 'Failed to update document' },
      { status: 500 }
    );
  }
}

// DELETE /api/documents - Delete document (soft delete)
export async function DELETE(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const userId = searchParams.get('userId');

    if (!id || !userId) {
      return NextResponse.json(
        { error: 'Document ID and User ID are required' },
        { status: 400 }
      );
    }

    const document = await Document.findOneAndUpdate(
      { _id: id, userId },
      { isActive: false },
      { new: true }
    );

    if (!document) {
      return NextResponse.json(
        { error: 'Document not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      success: true 
    });

  } catch (error) {
    console.error('Delete document error:', error);
    return NextResponse.json(
      { error: 'Failed to delete document' },
      { status: 500 }
    );
  }
}
