// graphql/schema/index.js
const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const { WorkoutType } = require('./workout');
const { UserType } = require('./user');
const Workout = require('../../models/Workout');
const User = require('../../models/User');

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        workout: {
            type: WorkoutType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Workout.findById(args.id);
            }
        },
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return User.findById(args.id);
            }
        }
    }
});

// Mutations
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // Define mutations like adding a user, creating workouts, etc.
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
