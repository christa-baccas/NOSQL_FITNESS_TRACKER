const router = require("express").Router();
const Workout = require("../models/Workouts");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", (req,res) => {
  Workout.create(req.body) 
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

// router.put("/api/workouts/:id", (req, res) => {
//   Workout.findOneAndUpdate(
//       //where id 
//     { _id: params.id },
//     // push new data into the exercise db
//     { $push: { exercises: req.body } },
//     { new: true }
//   )
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// router.get("/api/workouts/range", (req,res) => {
//   Workout.aggregate([
//     {
//       $sort: {_id: -1}
//     },
//     {
//       $limit: 7
//     },
//     {
//       $addFields: {totalDuration: {$sum: "$exercise.duration"}}
//     }
//   ]).then((data) => {
//     res.json(data);
//   })
//   .catch((err) => {
//     res.json(err);
//   });
// });

module.exports = router;