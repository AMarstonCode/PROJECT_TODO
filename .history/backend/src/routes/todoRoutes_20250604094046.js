
const express = require('express');
const router = express.Router();

// Init
const ctrl = require('../controllers/todoController');
router.get('/', ctrl.getAllTodos);





module.exports = router;

