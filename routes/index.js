// ROUTES MAIN INDEX

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const {authController} = require('../controllers');
const jwt = require('jsonwebtoken');

// Protect the API
// router.all("/api", authController.verifyToken);

// API Routes
router.use("/api", apiRoutes);

// Autentication routes
router
  .route("/login")
  .post(authController.login);
  //logout action only takes place on the client by destroying the auth token.
  
router
  .route("/register")
  .post(authController.register);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
