import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    // Check if API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const { blocks } = await request.json();

    // Extract content from blocks for analysis
    const contentSummary = extractContentSummary(blocks);

    const prompt = `As a world-class sales copywriting expert, analyze this sales page content and provide specific, actionable feedback.

CONTENT TO ANALYZE:
${contentSummary}

IMPORTANT: You must respond with ONLY valid JSON. Do not include any markdown, explanations, or text outside the JSON structure.

Return this exact JSON structure:

{
  "score": [number from 0-100],
  "summary": "[brief 1-2 sentence overall assessment]",
  "strengths": [
    {
      "title": "[strength title]",
      "description": "[detailed explanation]"
    }
  ],
  "issues": [
    {
      "type": "critical|warning|suggestion",
      "title": "[issue title]", 
      "description": "[detailed explanation]",
      "priority": [1-5],
      "examples": ["specific example 1", "specific example 2"]
    }
  ],
  "suggestions": [
    {
      "title": "[improvement title]",
      "description": "[detailed explanation]",
      "impact": "high|medium|low",
      "examples": ["specific example 1", "specific example 2"]
    }
  ]
}

CRITICAL: Return ONLY the JSON object above, nothing else.

Focus on:
- Headlines and hooks (emotional impact, clarity, benefit-driven)
- Call-to-action effectiveness (urgency, clarity, placement)
- Social proof and credibility elements
- Benefit vs feature balance
- Psychological triggers and persuasion techniques
- Overall sales funnel flow and conversion optimization
- Content structure and readability

Provide specific, implementable suggestions with examples.`;

    // Log usage for cost tracking (optional)
    const startTime = Date.now();
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // More cost-effective model
      messages: [
        {
          role: "system",
          content: "You are a world-class sales copywriting expert. You ONLY respond with valid JSON. Never include markdown, explanations, or any text outside the JSON structure. Your responses must be parseable JSON objects."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.3, // Lower temperature for more consistent JSON formatting
      max_tokens: 1500,
      response_format: { type: "json_object" } // Force JSON output
    });

    // Log usage metrics (optional - you can store this in a database)
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    
    console.log('AI Analysis Usage:', {
      model: 'gpt-4o-mini',
      timestamp: new Date().toISOString(),
      responseTime: `${responseTime}ms`,
      promptTokens: completion.usage?.prompt_tokens,
      completionTokens: completion.usage?.completion_tokens,
      totalTokens: completion.usage?.total_tokens,
      estimatedCost: `$${(completion.usage?.total_tokens * 0.00015 / 1000).toFixed(6)}` // Rough estimate
    });

    const responseText = completion.choices[0].message.content;
    
    // Clean and parse the AI response
    let analysis;
    try {
      // Clean the response text - remove markdown and extra formatting
      let cleanedResponse = responseText.trim();
      
      // Remove common markdown patterns
      cleanedResponse = cleanedResponse.replace(/```json\s*/gi, '');
      cleanedResponse = cleanedResponse.replace(/```\s*/g, '');
      cleanedResponse = cleanedResponse.replace(/^\s*`+/gm, '');
      cleanedResponse = cleanedResponse.replace(/`+\s*$/gm, '');
      
      // Find JSON object boundaries
      const jsonStart = cleanedResponse.indexOf('{');
      const jsonEnd = cleanedResponse.lastIndexOf('}');
      
      if (jsonStart !== -1 && jsonEnd !== -1) {
        cleanedResponse = cleanedResponse.substring(jsonStart, jsonEnd + 1);
      }
      
      analysis = JSON.parse(cleanedResponse);
      
      // Ensure the analysis has all required fields with defaults
      analysis = {
        score: analysis.score || 75,
        summary: analysis.summary || "AI analysis completed",
        strengths: Array.isArray(analysis.strengths) ? analysis.strengths : [],
        issues: Array.isArray(analysis.issues) ? analysis.issues : [],
        suggestions: Array.isArray(analysis.suggestions) ? analysis.suggestions : [],
        metrics: analysis.metrics || calculateMetrics(blocks)
      };
      
    } catch (parseError) {
      console.log('JSON parsing failed, creating smart fallback structure');
      
      // Try to extract meaningful content from the response
      const score = extractScore(responseText) || 75;
      const summary = extractSummary(responseText) || "AI analysis completed";
      
      analysis = {
        score: score,
        summary: summary,
        strengths: [{ 
          title: "Analysis Available", 
          description: "AI provided analysis but in an unexpected format. Please review the suggestions below for insights." 
        }],
        issues: [{ 
          type: "suggestion", 
          title: "Content Review", 
          description: "The AI identified areas for improvement in your sales copy. Consider the suggestions provided.", 
          priority: 3, 
          examples: [] 
        }],
        suggestions: [{ 
          title: "Review AI Feedback", 
          description: "Check the console logs for detailed AI feedback, or try the analysis again for a better-formatted response.", 
          impact: "medium", 
          examples: [] 
        }],
        metrics: calculateMetrics(blocks)
      };
    }

    return NextResponse.json(analysis);

  } catch (error) {
    console.error('OpenAI API Error:', error);
    
    // Return different error messages based on error type
    if (error.code === 'insufficient_quota') {
      return NextResponse.json(
        { error: 'OpenAI API quota exceeded. Please check your billing.' },
        { status: 429 }
      );
    }
    
    if (error.code === 'invalid_api_key') {
      return NextResponse.json(
        { error: 'Invalid OpenAI API key. Please check your configuration.' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to analyze content. Please try again.' },
      { status: 500 }
    );
  }
}

function extractScore(text) {
  const scoreMatch = text.match(/"score":\s*(\d+)/i);
  return scoreMatch ? parseInt(scoreMatch[1]) : null;
}

function extractSummary(text) {
  const summaryMatch = text.match(/"summary":\s*"([^"]+)"/i);
  return summaryMatch ? summaryMatch[1] : null;
}

function calculateMetrics(blocks) {
  const metrics = {
    headlines: 0,
    ctas: 0,
    testimonials: 0,
    benefits: 0,
    urgency: 0,
    totalWords: 0
  };

  blocks.forEach(block => {
    switch (block.type) {
      case 'heading':
        metrics.headlines++;
        metrics.totalWords += (block.data.text || '').split(' ').length;
        break;
      case 'button':
        metrics.ctas++;
        metrics.totalWords += (block.data.text || '').split(' ').length;
        break;
      case 'testimonial':
        metrics.testimonials++;
        metrics.totalWords += (block.data.quote || '').split(' ').length;
        break;
      case 'paragraph':
        metrics.totalWords += (block.data.text || '').split(' ').length;
        // Simple benefit detection
        if ((block.data.text || '').toLowerCase().includes('benefit') || 
            (block.data.text || '').toLowerCase().includes('advantage')) {
          metrics.benefits++;
        }
        break;
      case 'list':
        if (block.data.items) {
          metrics.totalWords += block.data.items.join(' ').split(' ').length;
          metrics.benefits += block.data.items.length; // Lists often contain benefits
        }
        break;
      default:
        if (block.data.text) {
          metrics.totalWords += block.data.text.split(' ').length;
        }
    }
  });

  return metrics;
}

function extractContentSummary(blocks) {
  let summary = "SALES PAGE CONTENT:\n\n";
  let sectionCount = {};
  
  blocks.forEach((block, index) => {
    const section = block.section || 'general';
    sectionCount[section] = (sectionCount[section] || 0) + 1;
    
    switch (block.type) {
      case 'heading':
        summary += `HEADING (${block.data.level}): ${block.data.text}\n`;
        break;
      case 'paragraph':
        summary += `PARAGRAPH: ${block.data.text.substring(0, 200)}${block.data.text.length > 200 ? '...' : ''}\n`;
        break;
      case 'button':
        summary += `CALL-TO-ACTION: "${block.data.text}" -> ${block.data.href}\n`;
        break;
      case 'testimonial':
        summary += `TESTIMONIAL: "${block.data.quote}" - ${block.data.author}\n`;
        break;
      case 'list':
        summary += `LIST (${block.data.type}): ${block.data.items.join(', ')}\n`;
        break;
      case 'image':
        summary += `IMAGE: ${block.data.alt} (${block.data.src})\n`;
        break;
      default:
        summary += `${block.type.toUpperCase()}: [Content block]\n`;
    }
    summary += "\n";
  });

  summary += "\nSTRUCTURE ANALYSIS:\n";
  summary += `Total blocks: ${blocks.length}\n`;
  Object.entries(sectionCount).forEach(([section, count]) => {
    summary += `${section} section: ${count} blocks\n`;
  });

  return summary;
}
