const router = require("express").Router();
const {houseController} = require("../../controllers");

// Matches with "/api/books"
router.route("/")
  .get(houseController.getAll)
  .post(houseController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(houseController.findById)
  .put(houseController.update)
  .delete(houseController.remove);

module.exports = router;
