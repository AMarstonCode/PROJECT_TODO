const { createTodo, getTodos, deleteTodo } = require("../controllers/todoController");

const express = require("express");
const router = express.Router();

router.get("/", getTodos);
router.post("/create", createTodo);
router.delete("/delete/:id", deleteTodo);

module.exports = router;
