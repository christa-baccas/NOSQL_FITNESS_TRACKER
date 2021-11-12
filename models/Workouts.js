const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  exercise:[{
    name: {
      type: String,
      trim: true,
      required: "Exercise Name is Required.",
    },
    type: {
      type: String,
      trim: true,
    },
    weight: {
      type: Number,
    },
    sets: {
      type: Number,
      required: "Exercise Sets are Required.",
    },
    reps: {
      type: Number,
      required: "Exercise Reps is Required.",
    },
    duration: {
      type: Number,
      required: "Exercise Time is Required.",
    }
  }],
  date: {
    type: Date,
    default: Date.now
  },

});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;