require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require('morgan');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT;

// Define middleware here
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/pqi-database";

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, autoIndex: false })
  .then(() => console.log("MongoDB connected successfuly"))
  .catch(err => console.log(err));

// Start the API server
console.log("NODE_ENV: ", process.env.NODE_ENV);
console.log("MONGODB_URI: ", MONGODB_URI);
console.log("JWT_SECRET: ", process.env.JWT_SECRET);
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
