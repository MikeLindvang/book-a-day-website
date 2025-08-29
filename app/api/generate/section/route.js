import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import InsightSheet from '@/lib/models/InsightSheet';
import Template from '@/lib/models/Template';
import { chatJSON } from '@/lib/openai';
import { buildSectionPrompt } from '@/lib/sectionComposerPrompt';

/**
 * Generate individual section content using AI
 * 
 * POST /api/generate/section
 * Body: { projectId, templateId, sectionKey, options? }
 * 
 * Returns: { ok: true, section: { key, html, headlineAlts }, warnings? }
 */
export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json();
    const { projectId, templateId, sectionKey, options = {} } = body;

    // Validate required fields
    if (!projectId) {
      return NextResponse.json(
        { ok: false, error: 'projectId is required' },
        { status: 400 }
      );
    }

    if (!templateId) {
      return NextResponse.json(
        { ok: false, error: 'templateId is required' },
        { status: 400 }
      );
    }

    if (!sectionKey) {
      return NextResponse.json(
        { ok: false, error: 'sectionKey is required' },
        { status: 400 }
      );
    }

    console.log(`🎯 Generating section "${sectionKey}" for project ${projectId} using template ${templateId}`);

    // Step 1: Connect to database
    await dbConnect();

    // Step 2: Load InsightSheet for projectId
    const insightSheet = await InsightSheet.findOne({ projectId }).lean();
    
    if (!insightSheet) {
      return NextResponse.json(
        { 
          ok: false, 
          error: `No insight sheet found for project ${projectId}. Please create insights first.` 
        },
        { status: 400 }
      );
    }

    // Step 3: Load Template and find the section
    const template = await Template.findById(templateId).lean();
    
    if (!template) {
      return NextResponse.json(
        { 
          ok: false, 
          error: `Template with ID ${templateId} not found` 
        },
        { status: 400 }
      );
    }

    // Find the specific section by key
    const section = template.sections?.find(s => s.key === sectionKey);
    
    if (!section) {
      return NextResponse.json(
        { 
          ok: false, 
          error: `Section "${sectionKey}" not found in template "${template.name}"` 
        },
        { status: 400 }
      );
    }

    console.log(`📋 Found section: ${section.label || sectionKey} (${section.blocks?.length || 0} blocks)`);

    // Step 4: Build prompt using existing buildSectionPrompt function
    const { system, user } = buildSectionPrompt({
      template,
      section,
      sheet: insightSheet,
      options
    });

    // Step 5: Call OpenAI chatJSON
    console.log('🤖 Calling OpenAI to generate section content...');
    const aiResponse = await chatJSON(system, user, {
      model: 'gpt-4o-mini',
      temperature: 0.3,
      maxTokens: 2000
    });

    // Step 6: Guardrails and validation
    const warnings = [];

    // Ensure the response has the correct key
    if (aiResponse.key !== sectionKey) {
      console.warn(`⚠️ AI returned wrong section key: "${aiResponse.key}" (expected "${sectionKey}")`);
      aiResponse.key = sectionKey; // Force correct key
      warnings.push('AI response key corrected to match requested section');
    }

    // Enforce maximum HTML length with sentence-based truncation
    const MAX_HTML_LENGTH = 2000;
    if (aiResponse.html && aiResponse.html.length > MAX_HTML_LENGTH) {
      console.warn(`⚠️ HTML content too long: ${aiResponse.html.length} chars (max ${MAX_HTML_LENGTH})`);
      
      // Find the last complete sentence within the limit
      const truncatedText = aiResponse.html.substring(0, MAX_HTML_LENGTH);
      const sentenceEnders = /[.!?](?=\s|<|$)/g;
      let lastSentenceEnd = -1;
      let match;
      
      while ((match = sentenceEnders.exec(truncatedText)) !== null) {
        lastSentenceEnd = match.index + 1;
      }
      
      if (lastSentenceEnd > 0) {
        aiResponse.html = aiResponse.html.substring(0, lastSentenceEnd);
        warnings.push(`Content truncated at sentence boundary (${lastSentenceEnd} characters)`);
      } else {
        aiResponse.html = aiResponse.html.substring(0, MAX_HTML_LENGTH) + '...';
        warnings.push(`Content truncated to ${MAX_HTML_LENGTH} characters`);
      }
    }

    // Voice rules validation - check for sentence length
    const voiceRules = insightSheet.voiceRules || [];
    const hasShortSentenceRules = voiceRules.some(rule => 
      rule.toLowerCase().includes('short') && 
      rule.toLowerCase().includes('sentence')
    );

    if (hasShortSentenceRules && aiResponse.html) {
      // Calculate average sentence length
      const plainText = aiResponse.html.replace(/<[^>]*>/g, ''); // Remove HTML tags
      const sentences = plainText
        .split(/[.!?]+/)
        .filter(s => s.trim().length > 0);
      
      if (sentences.length > 0) {
        const totalWords = sentences.join(' ').split(/\s+/).filter(w => w.length > 0).length;
        const avgSentenceLength = totalWords / sentences.length;
        
        // Warn if average sentence length exceeds 18 words for "short sentence" rules
        if (avgSentenceLength > 18) {
          warnings.push("Sentence length exceeds 'short' guideline—consider regenerating with length: short.");
        }
      }
    }

    // Ensure we have headlineAlts array
    if (!Array.isArray(aiResponse.headlineAlts)) {
      aiResponse.headlineAlts = [];
      warnings.push('Missing headline alternatives - added empty array');
    }

    // Validate HTML is safe (basic check)
    if (aiResponse.html) {
      const dangerousPatterns = [
        /<script/i,
        /javascript:/i,
        /on\w+\s*=/i,
        /<iframe/i,
        /<object/i,
        /<embed/i
      ];
      
      const hasDangerousContent = dangerousPatterns.some(pattern => 
        pattern.test(aiResponse.html)
      );
      
      if (hasDangerousContent) {
        console.error('🚫 Dangerous HTML content detected, sanitizing...');
        // Basic sanitization - remove dangerous elements
        aiResponse.html = aiResponse.html
          .replace(/<script[^>]*>.*?<\/script>/gi, '')
          .replace(/javascript:/gi, '')
          .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
          .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '')
          .replace(/<object[^>]*>.*?<\/object>/gi, '')
          .replace(/<embed[^>]*>/gi, '');
        
        warnings.push('HTML content sanitized for security');
      }
    }

    console.log('✅ Section generated successfully');
    if (warnings.length > 0) {
      console.log(`⚠️ ${warnings.length} warning(s): ${warnings.join(', ')}`);
    }

    // Step 7: Return successful response
    const response = {
      ok: true,
      section: {
        key: aiResponse.key || sectionKey,
        html: aiResponse.html || '',
        headlineAlts: aiResponse.headlineAlts || []
      },
      warnings // Always include warnings array, even if empty
    };

    return NextResponse.json(response);

  } catch (error) {
    console.error('❌ Section generation error:', error);

    // Handle specific error types
    if (error.message?.includes('OpenAI API')) {
      return NextResponse.json(
        { 
          ok: false, 
          error: 'AI service temporarily unavailable. Please try again.' 
        },
        { status: 503 }
      );
    }

    if (error.message?.includes('Database')) {
      return NextResponse.json(
        { 
          ok: false, 
          error: 'Database connection error. Please try again.' 
        },
        { status: 503 }
      );
    }

    // Generic error response
    return NextResponse.json(
      { 
        ok: false, 
        error: process.env.NODE_ENV === 'development' 
          ? error.message 
          : 'An unexpected error occurred. Please try again.' 
      },
      { status: 500 }
    );
  }
}

/**
 * Handle unsupported HTTP methods
 */
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to generate sections.' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to generate sections.' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to generate sections.' },
    { status: 405 }
  );
}
