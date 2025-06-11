const { createTodo, deleteTodo } = require("../controllers/todoController");

const express = require("express");
const router = express.Router();


//const ctrl = require('../controllers/todoController');



//router.get('/', ctrl.getTodos);
router.post("/", createTodo);
router.delete("/todos/:id", deleteTodo);

module.exports = router;
