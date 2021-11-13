const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  exercise: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter a workout name.",
      },
      type: {
        type: String,
        trim: true,
        required: "Enter the type of workout",
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
    },
  ],
});

workoutSchema.virtual("totalDuration").get(function () {
 // reduce the array to get the total sum of durations
 return this.exercises.reduce((total, exercise) => {
  return total + exercise.duration;
}, 0);
});
// The 0 at the end initializes total to start at 0

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
