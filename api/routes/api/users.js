//USER ROUTES

const router = require("express").Router();
const {userController} = require("../../controllers");

// Matches with "/api/books"
router.route("/")
  .get(userController.getAll)
  .post(userController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
