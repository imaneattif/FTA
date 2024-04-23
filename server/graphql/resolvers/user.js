
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        // Get a single user by ID
        user: async (_, { id }) => {
            try {
                return await User.findById(id);
            } catch (error) {
                throw new Error('Failed to fetch user.');
            }
        },
        // Get all users
        users: async () => {
            try {
                return await User.find({});
            } catch (error) {
                throw new Error('Failed to fetch users.');
            }
        }
    },
    Mutation: {
        // Register a new user
        registerUser: async (_, { name, email, password }) => {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                throw new Error('User already exists with that email');
            }

            const hashedPassword = await bcrypt.hash(password, 12);

            const newUser = new User({
                name,
                email,
                password: hashedPassword
            });

            try {
                const result = await newUser.save();
                const token = jwt.sign({ userId: result.id, email: result.email }, 'your-secret-key', {
                    expiresIn: '1h'
                });

                return { userId: result.id, token: token, tokenExpiration: 1 };
            } catch (error) {
                throw new Error('Failed to register user.');
            }
        },
        // User login
        loginUser: async (_, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new Error('User does not exist!');
            }

            const isEqual = await bcrypt.compare(password, user.password);
            if (!isEqual) {
                throw new AuthenticationError('Password is incorrect!');
            }

            const token = jwt.sign({ userId: user.id, email: user.email }, 'your-secret-key', {
                expiresIn: '1h'
            });

            return { userId: user.id, token: token, tokenExpiration: 1 };
        }
    }
};

module.exports = resolvers;
