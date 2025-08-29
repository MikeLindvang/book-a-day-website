import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export class OpenAIClient {
  constructor() {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key not configured');
    }
  }

  async generateInsights(documents) {
    const prompt = this._buildInsightsPrompt(documents);
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a world-class sales copywriting expert and market research analyst. You ONLY respond with valid JSON. Never include markdown, explanations, or any text outside the JSON structure."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.3,
      max_tokens: 2000,
      response_format: { type: "json_object" }
    });

    return this._parseJsonResponse(completion.choices[0].message.content);
  }

  async generateSalesCopy(insightSheet, template, options = {}) {
    const prompt = this._buildSalesCopyPrompt(insightSheet, template, options);
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a world-class sales copywriter. You ONLY respond with valid JSON containing sales copy sections. Never include markdown, explanations, or any text outside the JSON structure."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.4, // Slightly higher for more creative copy
      max_tokens: 3000,
      response_format: { type: "json_object" }
    });

    return this._parseJsonResponse(completion.choices[0].message.content);
  }

  _buildInsightsPrompt(documents) {
    const docsByType = documents.reduce((acc, doc) => {
      acc[doc.type] = acc[doc.type] || [];
      acc[doc.type].push(doc);
      return acc;
    }, {});

    let prompt = `Analyze the following business documents and extract key insights for sales copywriting. Return ONLY valid JSON.

DOCUMENTS:
`;

    Object.entries(docsByType).forEach(([type, docs]) => {
      prompt += `\n${type.toUpperCase()} DOCUMENTS:\n`;
      docs.forEach((doc, index) => {
        prompt += `${index + 1}. ${doc.title}\n${doc.content}\n\n`;
      });
    });

    prompt += `
IMPORTANT: You must respond with ONLY valid JSON. No markdown, explanations, or text outside the JSON structure.

Return this exact JSON structure:

{
  "insights": [
    {
      "category": "product|audience|messaging|positioning|objections|benefits|social_proof|urgency",
      "title": "[insight title]",
      "content": "[detailed insight content]",
      "confidence": [number 0-1]
    }
  ],
  "summary": {
    "productName": "[product name]",
    "targetAudience": "[target audience description]", 
    "primaryBenefit": "[main value proposition]",
    "pricePoint": "[pricing info if available]",
    "urgency": "[urgency/scarcity elements]"
  }
}

Focus on extracting:
- Product features, benefits, and unique selling points
- Target audience demographics, psychographics, pain points
- Key messaging themes and positioning
- Potential objections and how to address them
- Social proof elements and credibility markers
- Urgency and scarcity opportunities
- Pricing psychology and positioning

Provide specific, actionable insights that can be used to write compelling sales copy.`;

    return prompt;
  }

  _buildSalesCopyPrompt(insightSheet, template, options) {
    const { tone = 'professional', length = 'medium', customInstructions = '' } = options;

    let prompt = `Generate sales copy based on the provided insights and template structure.

INSIGHTS:
${JSON.stringify(insightSheet.insights, null, 2)}

SUMMARY:
${JSON.stringify(insightSheet.summary, null, 2)}

TEMPLATE FRAMEWORK: ${template.framework}
TEMPLATE SECTIONS:
${template.sections.map(section => `- ${section.name}: ${section.description}`).join('\n')}

COPY REQUIREMENTS:
- Tone: ${tone}
- Length: ${length}
- ${customInstructions}

IMPORTANT: You must respond with ONLY valid JSON. No markdown, explanations, or text outside the JSON structure.

Return this exact JSON structure:

{
  "sections": [
    {
      "name": "[section name matching template]",
      "title": "[section title/headline]",
      "content": "[section content - can include paragraphs, bullets, etc.]",
      "type": "[headline|paragraph|list|button|testimonial]",
      "metadata": {
        "placeholder": false,
        "sectionTitle": "[section name]"
      }
    }
  ],
  "metadata": {
    "framework": "${template.framework}",
    "tone": "${tone}",
    "length": "${length}",
    "generatedAt": "${new Date().toISOString()}"
  }
}

Generate compelling, conversion-focused copy that:
- Uses the insights to create relevant, targeted messaging
- Follows the ${template.framework} framework structure
- Maintains the specified tone throughout
- Addresses target audience pain points and desires
- Includes strong calls-to-action
- Incorporates social proof and urgency where appropriate
- Is optimized for conversions

Make each section engaging and persuasive while staying true to the insights provided.`;

    return prompt;
  }

  _parseJsonResponse(responseText) {
    try {
      // Clean the response text
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
      
      return JSON.parse(cleanedResponse);
    } catch (error) {
      console.error('Failed to parse OpenAI JSON response:', error);
      console.error('Raw response:', responseText);
      throw new Error('Failed to parse AI response as JSON');
    }
  }

  getUsageStats(completion) {
    return {
      promptTokens: completion.usage?.prompt_tokens || 0,
      completionTokens: completion.usage?.completion_tokens || 0,
      totalTokens: completion.usage?.total_tokens || 0,
      estimatedCost: ((completion.usage?.total_tokens || 0) * 0.00015 / 1000).toFixed(6)
    };
  }
}

export default new OpenAIClient();
