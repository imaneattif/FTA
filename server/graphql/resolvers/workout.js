
const Workout = require('../../models/Workout');

const resolvers = {
    Query: {
        // Get all workouts
        workouts: async () => {
            try {
                return await Workout.find({});
            } catch (error) {
                throw new Error('Failed to fetch workouts.');
            }
        },
        // Get a single workout by ID
        workout: async (_, { id }) => {
            try {
                return await Workout.findById(id);
            } catch (error) {
                throw new Error('Failed to fetch workout.');
            }
        }
    },
    Mutation: {
        // Create a new workout
        addWorkout: async (_, { name, type, duration, difficultyLevel, description, recommendedEquipment, imageUrl }) => {
            const newWorkout = new Workout({
                name,
                type,
                duration,
                difficultyLevel,
                description,
                recommendedEquipment,
                imageUrl
            });
            try {
                return await newWorkout.save();
            } catch (error) {
                throw new Error('Failed to add workout.');
            }
        }
    }
};

module.exports = resolvers;
