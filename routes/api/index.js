//ROUTES API INDEX

const router = require("express").Router();
const houseRoutes = require("./houses");
const userRoutes = require("./users");
const houseAuditRoutes = require("./houseAudits");
const houseAuditItemsRoutes = require("./houseAuditsItems");

// House routes
router.use("/houses", houseRoutes);

// User routes
router.use("/users", userRoutes);

// House Audit routes
router.use("/house-audits", houseAuditRoutes);
router.use("/house-audits-items", houseAuditItemsRoutes);

module.exports = router;
