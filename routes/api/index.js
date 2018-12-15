//ROUTES API INDEX

const router = require("express").Router();
const houseRoutes = require("./houses");
const userRoutes = require("./users");
const { authController } = require("../../controllers");

// House routes
router.use("/houses", houseRoutes);

// User routes
router.use("/users", userRoutes);

module.exports = router;
