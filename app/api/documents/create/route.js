import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import Document from '../../../../lib/models/Document';

export async function POST(request) {
  try {
    await dbConnect();

    const { projectId, type, title, content } = await request.json();

    if (!projectId || !type || !title) {
      return NextResponse.json(
        { error: 'projectId, type, and title are required' },
        { status: 400 }
      );
    }

    const document = new Document({
      projectId,
      type,
      title,
      content: content || ""
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