
var require: NodeJS.Require
(id: string) => any
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/todoController');
router.get('/', ctrl.getAllTodos);





module.exports = router;

