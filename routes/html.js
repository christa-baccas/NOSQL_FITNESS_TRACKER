const path = require('path');
const express = require("express");


module.exports = function (app) {
    // path to the homepage/index of the site
    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    // path to continue a workout or add a new workout 
    app.get("/exercise", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

  };