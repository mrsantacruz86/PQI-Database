//ROUTES API INDEX

const router = require("express").Router();
const houseRoutes = require("./houses");
const userRoutes = require("./users");
const { authController } = require("../../controllers");

// House routes
router.use("/houses", houseRoutes);

// User routes
router.use("/users", userRoutes);

// Autentication routes

// Matches with "/api/login"
router
	.route("/login")
	.post(authController.login);

// Matches with "/api/logout"
router
	.route("/logout")
	.post(authController.logout);

module.exports = router;
