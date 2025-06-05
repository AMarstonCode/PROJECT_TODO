
const Todo = require('../models/Todo'); // Adjust the path as needed

const createTodo = async (req, res, next) => {
  const { title } = req.body;

  try {
    const newTodo = await Todo.create({ title });
    res.status(201).json(newTodo);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createTodo,
};

// src/controllers/todoController.js