// src/routes/todoRoutes.js

// import necessary modules
const express = require('express');
const router = express.Router();

// Initialize the router
const ctrl = require('../controllers/todoController');
router.get('/', ctrl.getAllTodos);





module.exports = router;

