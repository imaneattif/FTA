
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
 * Hashes a password.
 * @param {string} password - The password to hash.
 * @returns {Promise<string>} The hashed password.
 */
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

/**
 * Compares a plaintext password with a hash.
 * @param {string} password - The plaintext password.
 * @param {string} hashedPassword - The hashed password.
 * @returns {Promise<boolean>} True if the passwords match, false otherwise.
 */
const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

/**
 * Generates a JWT token.
 * @param {Object} payload - The payload to encode in the JWT.
 * @param {string} secret - The secret key for signing the token.
 * @param {Object} options - JWT signing options.
 * @returns {string} The generated JWT token.
 */
const generateToken = (payload, secret = process.env.JWT_SECRET, options = { expiresIn: '1h' }) => {
  return jwt.sign(payload, secret, options);
};

/**
 * Verifies a JWT token.
 * @param {string} token - The token to verify.
 * @param {string} secret - The secret key for verifying the token.
 * @returns {Promise<Object>} The decoded JWT payload if valid.
 */
const verifyToken = (token, secret = process.env.JWT_SECRET) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) return reject(err);
      resolve(decoded);
    });
  });
};

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken
};
