// src/routes/todoRoutes.js
const { createTodo } = require("../controllers/todoController");
// import necessary modules

const express = require('express');
const router = express.Router();

// Initialize the router
//const ctrl = require('../controllers/todoController');

// calls

//router.get('/', ctrl.getTodos);
router.post("/create", createTodo);





module.exports = router;

