import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect';
import Template from '../../../lib/models/Template';

export async function GET(request) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const framework = searchParams.get('framework');
    const tags = searchParams.get('tags');
    const search = searchParams.get('search');
    const sortBy = searchParams.get('sortBy') || 'usageCount';
    const limit = parseInt(searchParams.get('limit')) || 50;
    
    // Build query
    let query = {};
    
    if (category && category !== 'all') {
      query.category = category;
    }
    
    if (framework && framework !== 'all') {
      query.framework = framework;
    }
    
    if (tags) {
      query.tags = { $in: tags.split(',') };
    }
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Sort options
    let sort = {};
    switch (sortBy) {
      case 'newest':
        sort = { createdAt: -1 };
        break;
      case 'rating':
        sort = { rating: -1, ratingCount: -1 };
        break;
      case 'popular':
        sort = { usageCount: -1 };
        break;
      case 'name':
        sort = { name: 1 };
        break;
      default:
        sort = { usageCount: -1 };
    }
    
    const templates = await Template
      .find(query)
      .sort(sort)
      .limit(limit)
      .select('-sections.blocks.data') // Exclude heavy block data for listing
      .lean();
    
    return NextResponse.json(templates);
    
  } catch (error) {
    console.error('Error fetching templates:', error);
    return NextResponse.json(
      { error: 'Failed to fetch templates' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    
    const templateData = await request.json();
    
    // Validate required fields
    if (!templateData.name || !templateData.description || !templateData.framework || !templateData.category) {
      return NextResponse.json(
        { error: 'Missing required fields: name, description, framework, category' },
        { status: 400 }
      );
    }
    
    // Create new template
    const template = new Template({
      ...templateData,
      createdBy: 'user', // In a real app, this would come from auth
      usageCount: 0,
      totalPages: 0
    });
    
    await template.save();
    
    return NextResponse.json(template, { status: 201 });
    
  } catch (error) {
    console.error('Error creating template:', error);
    return NextResponse.json(
      { error: 'Failed to create template' },
      { status: 500 }
    );
  }
}
