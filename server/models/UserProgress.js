
const mongoose = require('mongoose');

const userProgressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  workoutId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workout',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  duration: {
    type: Number,
    required: true
  },
  feedback: {
    type: String,
    trim: true
  },
  progressMetrics: {
    caloriesBurned: Number,
    distanceCovered: Number
  }
}, {
  timestamps: true  // Adds createdAt and updatedAt timestamps automatically
});

module.exports = mongoose.model('UserProgress', userProgressSchema);

