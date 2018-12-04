const router = require("express").Router();
const houseRoutes = require("./house");

// House routes
router.use("/houses", houseRoutes);

module.exports = router;
