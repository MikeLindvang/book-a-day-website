/**
 * Simple OpenAI Client Wrapper
 * 
 * This module provides a lightweight wrapper around the OpenAI API
 * with a focus on JSON-structured responses for chat completions.
 * 
 * Usage:
 *   import { chatJSON } from '@/lib/openai';
 *   const result = await chatJSON(systemPrompt, userPrompt);
 */

import OpenAI from 'openai';

// Initialize OpenAI client
let openaiClient = null;

/**
 * Get or create OpenAI client instance
 * 
 * @returns {OpenAI} OpenAI client instance
 * @throws {Error} If OPENAI_API_KEY is not configured
 */
function getOpenAIClient() {
  if (!openaiClient) {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error(
        'OPENAI_API_KEY environment variable is not set.\n' +
        'Please add it to your .env.local file:\n' +
        'OPENAI_API_KEY="your-api-key-here"'
      );
    }

    openaiClient = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  return openaiClient;
}

/**
 * Robust JSON parser with fallbacks for common formatting issues
 * Uses the centralized safeParseJSON utility for consistent behavior
 * 
 * @param {string} responseText - Raw response text from OpenAI
 * @returns {Object} Parsed JSON object
 */
function parseJSONResponse(responseText) {
  if (!responseText) {
    console.warn('⚠️ Empty response from OpenAI, returning empty object');
    return {};
  }

  console.log('🔧 Parsing JSON response with safeParseJSON...');
  const result = safeParseJSON(responseText);
  
  if (Object.keys(result).length === 0 && responseText.trim().length > 0) {
    console.warn('🛡️ safeParseJSON returned empty object for non-empty response');
    console.warn('Original response:', responseText);
  }
  
  return result;
}

/**
 * Sleep utility for retry delays
 * 
 * @param {number} ms - Milliseconds to sleep
 * @returns {Promise<void>}
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Check if error is retryable (429 rate limit or 5xx server errors)
 * 
 * @param {Error} error - Error to check
 * @returns {boolean} True if error should be retried
 */
function isRetryableError(error) {
  if (error.response?.status) {
    const status = error.response.status;
    return status === 429 || (status >= 500 && status < 600);
  }
  
  // Also retry on certain network errors
  if (error.code) {
    return ['ECONNRESET', 'ETIMEDOUT', 'ENOTFOUND'].includes(error.code);
  }
  
  return false;
}

/**
 * Chat with OpenAI and get JSON response with retry logic
 * 
 * @param {string} systemPrompt - System message to set context/behavior
 * @param {string} userPrompt - User message with the actual request
 * @param {Object} options - Optional configuration
 * @param {string} options.model - Model to use (default: 'gpt-4o-mini')
 * @param {number} options.temperature - Creativity level 0-1 (default: 0.3)
 * @param {number} options.maxTokens - Maximum response tokens (default: 800)
 * @param {boolean} options.forceJSON - Force JSON response format (default: true)
 * @param {number} options.retries - Number of retries (default: 2)
 * @param {number} options.retryDelay - Delay between retries in ms (default: 1000)
 * 
 * @returns {Promise<Object>} Parsed JSON response
 * @throws {Error} If API call fails after all retries or response cannot be parsed
 */
async function chatJSON(systemPrompt, userPrompt, options = {}) {
  const {
    model = 'gpt-4o-mini',    // Fast, efficient model for section calls
    temperature = 0.3,        // Low temperature for consistent JSON structure
    maxTokens = 800,          // Modest token limit for section-sized content
    forceJSON = true,         // Use OpenAI's JSON mode when available
    retries = 2,              // 2-try retry as requested
    retryDelay = 1000         // 1 second delay between retries
  } = options;

  if (!systemPrompt || !userPrompt) {
    throw new Error('Both systemPrompt and userPrompt are required');
  }

  const client = getOpenAIClient();
  let lastError = null;

  // Retry loop: initial attempt + up to {retries} additional attempts
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      if (attempt > 0) {
        console.log(`🔄 Retry attempt ${attempt}/${retries} after ${retryDelay}ms delay...`);
        await sleep(retryDelay);
      }

      console.log(`🤖 Calling OpenAI ${model} with JSON response (attempt ${attempt + 1}/${retries + 1})...`);
      
      // Prepare the request configuration
      const requestConfig = {
        model,
        temperature,
        max_tokens: maxTokens,
        messages: [
          {
            role: 'system',
            content: systemPrompt + (forceJSON ? '\n\nIMPORTANT: You must respond with valid JSON only. No markdown, explanations, or text outside the JSON structure.' : '')
          },
          {
            role: 'user',
            content: userPrompt
          }
        ]
      };

      // Add response format for JSON mode if supported and requested
      if (forceJSON && (model.includes('gpt-4') || model.includes('gpt-3.5'))) {
        requestConfig.response_format = { type: 'json_object' };
      }

      const completion = await client.chat.completions.create(requestConfig);

      if (!completion.choices || completion.choices.length === 0) {
        throw new Error('No response received from OpenAI');
      }

      const responseText = completion.choices[0].message.content;
      const usage = completion.usage;

      // Log usage stats for debugging/monitoring
      if (usage) {
        console.log(`📊 Tokens used: ${usage.total_tokens} (${usage.prompt_tokens} prompt + ${usage.completion_tokens} completion)`);
        const estimatedCost = (usage.total_tokens * 0.00015 / 1000); // Rough estimate for gpt-4o-mini
        console.log(`💰 Estimated cost: $${estimatedCost.toFixed(6)}`);
      }

      // Parse and return the JSON response
      const jsonResponse = parseJSONResponse(responseText);
      console.log('✅ Successfully received and parsed JSON response');
      
      return jsonResponse;

    } catch (error) {
      lastError = error;
      
      // Check if this is a retryable error and we have retries left
      if (isRetryableError(error) && attempt < retries) {
        console.warn(`⚠️ Retryable error (${error.response?.status || error.code}): ${error.message}`);
        continue; // Try again
      }
      
      // If not retryable or no retries left, break out of loop
      break;
    }
  }

  // If we get here, all attempts failed
  console.error('❌ OpenAI API error after all retries:', lastError.message);
  
  // Re-throw with more context for debugging
  if (lastError.response) {
    // OpenAI API error
    throw new Error(`OpenAI API error (${lastError.response.status}): ${lastError.response.data?.error?.message || lastError.message}`);
  } else if (lastError.code === 'ENOTFOUND' || lastError.code === 'ECONNREFUSED') {
    // Network error
    throw new Error(`Network error: Unable to connect to OpenAI API. Check your internet connection.`);
  } else {
    // Other errors (parsing, etc.)
    throw lastError;
  }
}

/**
 * Simple text completion (non-JSON)
 * 
 * @param {string} systemPrompt - System message
 * @param {string} userPrompt - User message
 * @param {Object} options - Optional configuration
 * @returns {Promise<string>} Raw text response
 */
async function chatText(systemPrompt, userPrompt, options = {}) {
  const {
    model = 'gpt-4o-mini',
    temperature = 0.7,
    maxTokens = 1000
  } = options;

  const client = getOpenAIClient();

  try {
    const completion = await client.chat.completions.create({
      model,
      temperature,
      max_tokens: maxTokens,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ]
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('❌ OpenAI text completion error:', error.message);
    throw error;
  }
}

/**
 * Check if OpenAI API is configured and accessible
 * 
 * @returns {Promise<boolean>} True if API is working
 */
async function checkAPIHealth() {
  try {
    const response = await chatText(
      'You are a helpful assistant.',
      'Say "OK" if you can hear me.',
      { maxTokens: 10 }
    );
    
    return response.toLowerCase().includes('ok');
  } catch (error) {
    console.error('🔴 OpenAI API health check failed:', error.message);
    return false;
  }
}

// Export the main functions
export { chatJSON, chatText, checkAPIHealth, parseJSONResponse };

// Default export for convenience
export default chatJSON;
