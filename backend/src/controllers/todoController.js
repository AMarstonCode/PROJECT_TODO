const Todo = require("../models/Todo");

const createTodo = async (req, res) => {
  const { title } = req.body;

  try {
    const addTodo = await Todo.create({ title });
    res.status(201).send(addTodo);
  } catch (error) {
    console.error("Error creating todo:", error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (deletedTodo) {
      res.status(200).send({ message: "Todo deleted" });
    } else {
      res.status(404).send({ message: "Todo not found" });
    }
  } catch (err) {
    console.error(err);
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).send(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).send({ message: "Internal server error" });
  }
}

module.exports = {
  createTodo,
  getTodos,
  deleteTodo
};
