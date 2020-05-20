// ROUTES MAIN INDEX

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const { authController } = require("../controllers");
const jwt = require("jsonwebtoken");

// API Routes
// verifyToken middleware is securing all API Routes /api/*
router.use("/api", authController.verifyToken, apiRoutes);

// Autentication routes
router.route("/login").post(authController.login);
//logout action only takes place on the client by destroying the auth token.

router.route("/register").post(authController.register);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.send("WELCOME TO PQI-TOOLS API");
});

module.exports = router;
