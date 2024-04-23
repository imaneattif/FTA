const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } = require('graphql');
const Workout = require('../models/Workout');

const WorkoutType = new GraphQLObjectType({
  name: 'Workout',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    duration: { type: GraphQLInt },
    difficultyLevel: { type: GraphQLString },
    description: { type: GraphQLString },
    recommendedEquipment: { type: GraphQLString },
    imageUrl: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    workouts: {
      type: new GraphQLList(WorkoutType),
      resolve(parent, args) {
        return Workout.find();
      }
    },
    workout: {
      type: WorkoutType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Workout.findById(args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery });
