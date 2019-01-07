//ROUTES API INDEX

const router = require("express").Router();
const houseRoutes = require("./houses");
const userRoutes = require("./users");

// House routes
router.use("/houses", houseRoutes);

// User routes
router.use("/users", userRoutes);

module.exports = router;
