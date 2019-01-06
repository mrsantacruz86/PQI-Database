//HOUSES ROUTES
const router = require("express").Router();
const { houseAuditsController } = require("../../controllers");

// Matches with "/api/houses"
router.route("/")
  .get(houseAuditsController.getAll)
  .post(houseAuditsController.create);

// Matches with "/api/houses/:id"
router
  .route("/:id")
  .get(houseAuditsController.findById)
  .put(houseAuditsController.update)
  .delete(houseAuditsController.remove);

module.exports = router;
