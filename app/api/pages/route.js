import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect';
import Page from '../../../lib/models/Page';

export async function GET(request) {
  await dbConnect();
  const url = new URL(request.url);
  const slug = url.searchParams.get('slug');
  if (slug) {
    const page = await Page.findOne({ slug }).lean();
    if (!page) {
      return NextResponse.json({ error: 'Page not found' }, { status: 404 });
    }
    return NextResponse.json(page);
  }
  const pages = await Page.find({}).lean();
  return NextResponse.json(pages);
}

export async function POST(request) {
  await dbConnect();
  const data = await request.json();
  try {
    const existing = await Page.findOne({ slug: data.slug });
    if (existing) {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 400 });
    }
    const page = await Page.create(data);
    return NextResponse.json(page, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  await dbConnect();
  const url = new URL(request.url);
  const slug = url.searchParams.get('slug');
  if (!slug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
  }
  const data = await request.json();
  try {
    const page = await Page.findOneAndUpdate({ slug }, data, { new: true, runValidators: true }).lean();
    if (!page) {
      return NextResponse.json({ error: 'Page not found' }, { status: 404 });
    }
    return NextResponse.json(page);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  await dbConnect();
  const url = new URL(request.url);
  const slug = url.searchParams.get('slug');
  if (!slug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
  }
  try {
    await Page.deleteOne({ slug });
    return NextResponse.json({ message: 'Page deleted' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}