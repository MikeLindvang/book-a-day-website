/**
 * JSON parsing utilities with robust error handling
 * 
 * This module provides safe JSON parsing that handles common formatting issues
 * from AI responses, including code fences and markdown formatting.
 */

/**
 * Safely parse JSON with robust fallbacks for common formatting issues
 * 
 * Handles:
 * - Code fences (```json, ```, etc.)
 * - Leading/trailing backticks
 * - Non-JSON text around the actual JSON
 * - Empty or invalid responses
 * 
 * @param {string} str - Raw string that should contain JSON
 * @returns {Object} Parsed JSON object, or empty object {} on failure
 */
export function safeParseJSON(str) {
  // Handle null, undefined, or empty strings
  if (!str || typeof str !== 'string') {
    return {};
  }

  // First attempt: direct parse
  try {
    return JSON.parse(str);
  } catch (error) {
    // Continue to cleanup attempts
  }

  // Clean the string by removing code fences and markdown formatting
  let cleaned = str.trim();
  
  // Remove various forms of code fences
  cleaned = cleaned.replace(/^```(json|javascript|js)?\s*/gmi, '');
  cleaned = cleaned.replace(/```\s*$/gm, '');
  cleaned = cleaned.replace(/^```.*?\n/gm, ''); // Remove opening fence with language
  cleaned = cleaned.replace(/\n```.*?$/gm, ''); // Remove closing fence
  
  // Remove backticks at start/end
  cleaned = cleaned.replace(/^`+/gm, '');
  cleaned = cleaned.replace(/`+$/gm, '');
  
  // Extract JSON object by finding the first { and last }
  const jsonStart = cleaned.indexOf('{');
  const jsonEnd = cleaned.lastIndexOf('}');
  
  if (jsonStart !== -1 && jsonEnd !== -1 && jsonEnd > jsonStart) {
    cleaned = cleaned.substring(jsonStart, jsonEnd + 1);
  }

  // Second attempt: parse cleaned text
  try {
    return JSON.parse(cleaned);
  } catch (error) {
    // Final fallback: return empty object to prevent crashes
    console.warn('⚠️ safeParseJSON: Failed to parse JSON after cleanup, returning empty object');
    console.warn('Original input:', str);
    console.warn('Cleaned input:', cleaned);
    return {};
  }
}
