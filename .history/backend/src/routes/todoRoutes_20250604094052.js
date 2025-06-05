
const express = require('express');
const router = express.Router();

// Initialize
const ctrl = require('../controllers/todoController');
router.get('/', ctrl.getAllTodos);





module.exports = router;

