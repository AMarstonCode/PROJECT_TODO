// src/routes/todoRoutes.js
const { createTodo } = require("../controllers/todoController");
// import necessary modules

const express = require('express');
const router = express.Router();
const { deleteTodo } = require('../controllers/todoController');

// Initialize the router
//const ctrl = require('../controllers/todoController');

// calls

//router.get('/', ctrl.getTodos);
router.post("/", createTodo);
router.delete('/todos/:id', deleteTodo);






module.exports = router;

