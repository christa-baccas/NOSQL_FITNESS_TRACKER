const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/api.js");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

app.use(router);
require("./routes/html.js")(app);

app.listen(PORT, () => {
  console.log(`App running http://localhost:3000`);
});