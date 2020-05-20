//HOUSE AUDITS ROUTES
const router = require("express").Router();
const { houseAuditsItemsController } = require("../../controllers");

// Matches with "/api/houses"
router.route("/")
  .get(houseAuditsItemsController.getAll)
  .post(houseAuditsItemsController.create);

// Matches with "/api/houses/:id"
router
  .route("/:id")
  .get(houseAuditsItemsController.findById)
  .put(houseAuditsItemsController.update)
  .delete(houseAuditsItemsController.remove);

module.exports = router;
