

/**
 * Saves the user's token to localStorage.
 * @param {string} token - User's authentication token.
 */
export const saveToken = (token) => {
    localStorage.setItem('userToken', token);
  };
  
  /**
   * Retrieves the user's token from localStorage.
   * @returns {string|null} The user's token if it exists, otherwise null.
   */
  export const getToken = () => {
    return localStorage.getItem('userToken');
  };
  
  /**
   * Removes the user's token from localStorage.
   */
  export const removeToken = () => {
    localStorage.removeItem('userToken');
  };
  
  /**
   * Checks if the user is logged in.
   * @returns {boolean} True if the user has a token, otherwise false.
   */
  export const isLoggedIn = () => {
    const token = getToken();
    return !!token;  // Convert token presence to a boolean
  };
  
  