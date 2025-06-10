const Todo = require('../models/Todo');

const createTodo = async (req, res) => {
  const { title } = req.body;

  try {
    const addTodo = await Todo.create({ title });
    res.status(201).send(addTodo);
  } catch (error) {
    console.error("Error creating todo:", error);
  }
};

module.exports = {
  createTodo,
};
