const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a type of workout.",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter the name of the workout",
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});

workoutSchema.virtual("totalDuration").get(function () {
 // reduce the array to get the total sum of durations
 return this.exercises.reduce((total, exercises) => {
  return total + exercises.duration;
}, 0);
});
// The 0 at the end initializes total to start at 0

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
