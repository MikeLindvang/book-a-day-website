import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import InsightSheet from '@/lib/models/InsightSheet';
import Template from '@/lib/models/Template';
import { chatJSON } from '@/lib/openai';
import { buildSectionPrompt } from '@/lib/sectionComposerPrompt';

/**
 * Helper function to run section generation with proper error handling
 * @param {Object} params - Section generation parameters
 * @param {Object} params.template - Template object
 * @param {Object} params.section - Section object
 * @param {Object} params.sheet - InsightSheet object
 * @param {Object} params.options - Generation options
 * @returns {Promise<Object>} Section result with key, html, headlineAlts, warnings
 */
async function runSection({ template, section, sheet, options }) {
  try {
    console.log(`🎯 Generating section "${section.key}"`);

    // Build prompt using existing buildSectionPrompt function
    const { system, user } = buildSectionPrompt({
      template,
      section,
      sheet,
      options
    });

    // Call OpenAI chatJSON with conservative settings
    const aiResponse = await chatJSON(system, user, {
      model: 'gpt-4o-mini',
      temperature: 0.3,
      maxTokens: 2000
    });

    // Validation and guardrails
    const warnings = [];

    // Ensure the response has the correct key
    const expectedKey = section.key || section.name;
    if (aiResponse.key !== expectedKey) {
      console.warn(`⚠️ AI returned wrong section key: "${aiResponse.key}" (expected "${expectedKey}")`);
      aiResponse.key = expectedKey; // Force correct key
      warnings.push('AI response key corrected to match requested section');
    }

    // Note: Length caps and voice rule validation are now handled in the main flow

    // Basic HTML sanitization
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

    // Ensure we have headlineAlts array
    if (!Array.isArray(aiResponse.headlineAlts)) {
      aiResponse.headlineAlts = [];
      warnings.push('Missing headline alternatives - added empty array');
    }

    console.log(`✅ Section "${expectedKey}" generated successfully`);
    if (warnings.length > 0) {
      console.log(`⚠️ ${warnings.length} warning(s): ${warnings.join(', ')}`);
    }

    return {
      key: aiResponse.key || expectedKey,
      html: aiResponse.html || '',
      headlineAlts: aiResponse.headlineAlts || [],
      warnings // Always include warnings array, even if empty
    };

  } catch (error) {
    console.error(`❌ Failed to generate section "${expectedKey}":`, error);
    
    // Return minimal placeholder with warning
    return {
      key: expectedKey,
      html: `<p>Failed to generate content for ${section.label || section.title || expectedKey}. Please try regenerating this section.</p>`,
      headlineAlts: [],
      warnings: [`Failed to generate section: ${error.message}`] // Always array format
    };
  }
}

/**
 * Simple concurrency limiter to avoid overwhelming the API
 * @param {Array} tasks - Array of async task functions
 * @param {number} limit - Maximum concurrent tasks
 * @returns {Promise<Array>} Results array in original order
 */
async function limitConcurrency(tasks, limit = 2) {
  const results = new Array(tasks.length);
  const executing = [];

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i]().then(result => {
      results[i] = result;
    });

    executing.push(task);

    if (executing.length >= limit) {
      await Promise.race(executing);
      executing.splice(executing.findIndex(t => t === task), 1);
    }
  }

  // Wait for remaining tasks
  await Promise.all(executing);
  return results;
}

/**
 * Generate complete draft from template sections
 * 
 * POST /api/generate/draft
 * Body: { projectId, templateId, options? }
 * 
 * Returns: { ok: true, draft: { sections: [...] }, warnings? }
 */
export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json();
    const { projectId, templateId, options = {} } = body;

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

    console.log(`🚀 Starting draft generation for project ${projectId} using template ${templateId}`);

    // Step 1: Connect to database
    await dbConnect();

    // Step 2: Load InsightSheet
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

    // Step 3: Load Template
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

    if (!template.sections || template.sections.length === 0) {
      return NextResponse.json(
        { 
          ok: false, 
          error: `Template "${template.name}" has no sections defined` 
        },
        { status: 400 }
      );
    }

    console.log(`📋 Found template "${template.name}" with ${template.sections.length} sections`);

    // Step 4: Generate all sections with concurrency control
    const startTime = Date.now();
    const allWarnings = [];

    // Create task functions for each section
    const sectionTasks = template.sections.map(section => 
      () => runSection({ template, section, sheet: insightSheet, options })
    );

    // Run sections with concurrency limit of 2-3 to avoid rate limits
    const CONCURRENCY_LIMIT = 2;
    const sectionResults = await limitConcurrency(sectionTasks, CONCURRENCY_LIMIT);

    // Step 5: Aggregate results and collect warnings
    const generatedSections = [];
    sectionResults.forEach((result, index) => {
      generatedSections.push(result);
      
      // Collect warnings (always an array now)
      if (result.warnings && result.warnings.length > 0) {
        allWarnings.push(...result.warnings.map(w => 
          `Section "${result.key}": ${w}`
        ));
      }
    });

    // Step 6: Verify all template sections exist and create placeholders for missing ones
    const templateSectionKeys = new Set(template.sections.map(s => s.key || s.name));
    const generatedSectionKeys = new Set(generatedSections.map(s => s.key));
    const missingSectionKeys = [...templateSectionKeys].filter(key => !generatedSectionKeys.has(key));

    // Create minimal placeholders for missing sections
    if (missingSectionKeys.length > 0) {
      console.log(`⚠️ Missing sections detected: ${missingSectionKeys.join(', ')}`);
      
      missingSectionKeys.forEach(key => {
        const templateSection = template.sections.find(s => (s.key || s.name) === key);
        const placeholder = {
          key: key,
          html: `<p>Content for ${templateSection?.title || key} section will be generated here. Please regenerate this section.</p>`,
          headlineAlts: [],
          warnings: [`Section "${key}" was missing - added placeholder`]
        };
        
        generatedSections.push(placeholder);
        allWarnings.push(`Section "${key}": Missing section - added placeholder`);
      });
    }

    // Step 7: Enforce length caps and validate content
    const finalSections = generatedSections.map(section => {
      const sectionWarnings = [...(section.warnings || [])];
      
      // Enforce HTML length cap (2000 chars) with sentence-based truncation
      if (section.html && section.html.length > 2000) {
        console.warn(`⚠️ Section "${section.key}" HTML too long: ${section.html.length} chars`);
        
        const truncatedText = section.html.substring(0, 2000);
        const sentenceEnders = /[.!?](?=\s|<|$)/g;
        let lastSentenceEnd = -1;
        let match;
        
        while ((match = sentenceEnders.exec(truncatedText)) !== null) {
          lastSentenceEnd = match.index + 1;
        }
        
        if (lastSentenceEnd > 0) {
          section.html = section.html.substring(0, lastSentenceEnd);
          sectionWarnings.push(`Content truncated at sentence boundary (${lastSentenceEnd} characters)`);
        } else {
          section.html = section.html.substring(0, 2000) + '...';
          sectionWarnings.push('Content truncated to 2000 characters');
        }
      }
      
      return {
        ...section,
        warnings: sectionWarnings
      };
    });

    // Step 8: Check voice rules for sentence length warnings
    const voiceRules = insightSheet.voiceRules || [];
    const hasShortSentenceRules = voiceRules.some(rule => 
      rule.toLowerCase().includes('short') && 
      rule.toLowerCase().includes('sentence')
    );

    if (hasShortSentenceRules) {
      finalSections.forEach(section => {
        if (section.html) {
          // Calculate average sentence length
          const plainText = section.html.replace(/<[^>]*>/g, ''); // Remove HTML tags
          const sentences = plainText
            .split(/[.!?]+/)
            .filter(s => s.trim().length > 0);
          
          if (sentences.length > 0) {
            const totalWords = sentences.join(' ').split(/\s+/).filter(w => w.length > 0).length;
            const avgSentenceLength = totalWords / sentences.length;
            
            // Warn if average sentence length exceeds 18 words for "short sentence" rules
            if (avgSentenceLength > 18) {
              const warning = "Sentences longer than voice rules. Consider regenerating with length: short.";
              if (!allWarnings.some(w => w.includes("Sentences longer than voice rules"))) {
                allWarnings.push(warning);
              }
            }
          }
        }
      });
    }

    const processingTime = Date.now() - startTime;

    console.log(`✅ Draft generation completed in ${processingTime}ms`);
    console.log(`📊 Generated ${finalSections.length} sections (${missingSectionKeys.length} placeholders) with ${allWarnings.length} total warnings`);

    // Step 9: Return successful response with enhanced structure
    const response = {
      ok: true,
      draft: {
        sections: finalSections,
        metadata: {
          templateId,
          templateName: template.name,
          framework: template.framework,
          projectId,
          generatedAt: new Date().toISOString(),
          processingTime,
          sectionsGenerated: finalSections.length,
          sectionsWithPlaceholders: missingSectionKeys.length,
          options
        }
      },
      warnings: allWarnings
    };

    if (allWarnings.length > 0) {
      console.log(`⚠️ Returning ${allWarnings.length} warnings`);
    }

    return NextResponse.json(response);

  } catch (error) {
    console.error('❌ Draft generation error:', error);

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
    { error: 'Method not allowed. Use POST to generate drafts.' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to generate drafts.' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to generate drafts.' },
    { status: 405 }
  );
}
