import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import Document from '../../../../lib/models/Document';

export async function POST(request) {
  try {
    await dbConnect();

    const { _id, type, title, content } = await request.json();

    if (!_id) {
      return NextResponse.json(
        { error: '_id is required' },
        { status: 400 }
      );
    }

    const updateFields = {};
    if (type !== undefined) updateFields.type = type;
    if (title !== undefined) updateFields.title = title;
    if (content !== undefined) updateFields.content = content;

    const document = await Document.findByIdAndUpdate(
      _id,
      updateFields,
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