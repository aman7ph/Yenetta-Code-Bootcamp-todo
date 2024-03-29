const express = require("express");
const router = express.Router();
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todoControllers");

router.route("/").get(getTodos).post(createTodo);
router.route("/:id").put(updateTodo).delete(deleteTodo);

module.exports = router;
