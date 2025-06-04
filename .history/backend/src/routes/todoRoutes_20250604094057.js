
const express = require('express');
const router = express.Router();

// Initialize the ro
const ctrl = require('../controllers/todoController');
router.get('/', ctrl.getAllTodos);





module.exports = router;

