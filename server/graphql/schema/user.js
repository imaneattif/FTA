// graphql/schema/user.js
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = require('graphql');
const User = require('../../models/User');  // Assuming you have a User model

// User Type
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        workouts: {
            type: new GraphQLList(require('./workout').WorkoutType),
            resolve(parent, args) {
                // Placeholder: Link to workouts the user has logged
            }
        }
    })
});

module.exports = {
    UserType
};
