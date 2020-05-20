//HOUSES ROUTES
const router = require("express").Router();
const { houseController } = require("../../controllers");

// Matches with "/api/houses"
router.route("/")
  .get(houseController.getAll)
  .post(houseController.create);

// Matches with "/api/houses/:id"
router
  .route("/:id")
  .get(houseController.findById)
  .put(houseController.update)
  .delete(houseController.remove);

module.exports = router;
