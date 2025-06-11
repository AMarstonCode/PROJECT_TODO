
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

exports.deleteTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);

        if (deletedTodo) {
            return res.status(200).json({ message: "Todo deleted" });
        } else {
            return res.status(404).json({ message: "Todo not found" });
        }
    } catch (err) {
        next(err); // Forward errors to the error handler
    }
};


module.exports = {
  createTodo,
};

// src/controllers/todoController.js