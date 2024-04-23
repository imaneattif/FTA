import { getToken } from './auth';

/**
 * Helper function to fetch data from the given URL.
 * @param {string} url - The URL to fetch data from.
 * @param {Object} [options={}] - Optional parameters for fetch.
 * @returns {Promise} The promise resolving to the data, or rejecting with an error.
 */
export const fetchData = async (url, options = {}) => {
  // Retrieve the token and conditionally set the Authorization header
  const token = getToken();
  const headers = new Headers({
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {})
  });

  // Default configuration for fetch
  const defaultConfig = {
    headers,
    ...options,
  };

  try {
    const response = await fetch(url, defaultConfig);
    if (!response.ok) {
      // Handle non-2xx HTTP responses
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();  // Assuming the server response is JSON
  } catch (error) {
    console.error('Fetching error:', error);
    throw error;  // Re-throw the error to be handled by the calling function
  }
};


export default fetchData;
  