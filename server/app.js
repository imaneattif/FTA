// server/app.js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./graphql/schema'); // Adjust the import path according to your project structure
require('dotenv').config(); // Ensure that dotenv is installed to manage environment variables

const app = express();

// CORS Middleware for handling Cross-Origin Requests
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('Failed to connect to MongoDB', err));

// GraphQL API endpoint
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true, // Enables GraphiQL when accessing the GraphQL API through a browser
}));

// Export the app to be used by the server
module.exports = app;
