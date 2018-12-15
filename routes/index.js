// ROUTES MAIN INDEX

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const {authController} = require('../controllers');
const jwt = require('jsonwebtoken');

// Protect the API
router.use("/api", authController.verifyToken, (req, res) => {
  jwt.verify(req.token, "mySecretKey", (err,authData)=> {
    if(err){
      res.sendStatus(403)
    } else {
      res.json({
        message: "Valid Token",
        authData
      })
    }
  })
});

// API Routes
router.use("/api", apiRoutes);

// Autentication routes
router
  .route("/login")
  .post(authController.login);

// Matches with "/api/logout"
router
  .route("/logout")
  .post(authController.logout);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
