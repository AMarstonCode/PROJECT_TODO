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
