/**
 * Utility functions for creating stable hashes
 */

/**
 * Creates a stable SHA-256 hash from a JSON object
 * @param {any} obj - The object to hash
 * @returns {Promise<string>} - Hex string hash
 */
export async function sha256JSON(obj) {
  // Create a stable JSON string by sorting keys
  const jsonString = JSON.stringify(obj, Object.keys(obj).sort());
  
  // Convert string to bytes
  const encoder = new TextEncoder();
  const data = encoder.encode(jsonString);
  
  // Generate hash
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  
  // Convert hash to hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  return hashHex;
}
