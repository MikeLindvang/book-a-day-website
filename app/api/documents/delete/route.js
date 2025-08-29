import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import Document from '../../../../lib/models/Document';

export async function POST(request) {
  try {
    await dbConnect();

    const { _id } = await request.json();

    if (!_id) {
      return NextResponse.json(
        { error: '_id is required' },
        { status: 400 }
      );
    }

    const result = await Document.deleteOne({ _id });

    if (result.deletedCount === 0) {
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