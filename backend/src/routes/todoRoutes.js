const { createTodo, getTodos, updateTodo, deleteTodo } = require("../controllers/todoController");

const express = require("express");
const router = express.Router();

router.get("/", getTodos);
router.post("/create", createTodo);
router.put("/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

module.exports = router;
