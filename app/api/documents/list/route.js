import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import Document from '../../../../lib/models/Document';

export async function POST(request) {
  try {
    await dbConnect();

    const { projectId } = await request.json();

    if (!projectId) {
      return NextResponse.json(
        { error: 'projectId is required' },
        { status: 400 }
      );
    }

    const documents = await Document.find({ projectId })
      .sort({ updatedAt: -1 });

    return NextResponse.json({ 
      success: true,
      documents 
    });

  } catch (error) {
    console.error('List documents error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch documents' },
      { status: 500 }
    );
  }
}