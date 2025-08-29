/**
 * Text processing utility functions
 */

/**
 * Trims a string to the specified length
 * @param {string} s - The string to trim
 * @param {number} n - Maximum length
 * @returns {string} - Trimmed string
 */
export function trimTo(s, n) {
  return (s || "").slice(0, n);
}

/**
 * Calculates the average sentence length in words from HTML or plain text
 * @param {string} htmlOrText - HTML or plain text content
 * @returns {number} - Average words per sentence
 */
export function avgSentenceLenWords(htmlOrText) {
  if (!htmlOrText || typeof htmlOrText !== 'string') {
    return 0;
  }
  
  // Strip HTML tags if present
  const plainText = htmlOrText.replace(/<[^>]*>/g, ' ');
  
  // Split into sentences using common sentence endings
  const sentences = plainText
    .split(/[.?!]+/)
    .map(s => s.trim())
    .filter(s => s.length > 0);
  
  if (sentences.length === 0) {
    return 0;
  }
  
  // Count total words across all sentences
  let totalWords = 0;
  for (const sentence of sentences) {
    // Split on whitespace and filter out empty strings
    const words = sentence.split(/\s+/).filter(word => word.length > 0);
    totalWords += words.length;
  }
  
  // Return average words per sentence
  return totalWords / sentences.length;
}
