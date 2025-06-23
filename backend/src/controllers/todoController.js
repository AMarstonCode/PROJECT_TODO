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

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params
    const updates = req.body
    const data = await Todo.findByIdAndUpdate(id, updates, { new: true, runValidators: true })
    if (data != null) {
      res.status(200).send(data)

    } else {
      res.status(404).send({ message: "Todo not found" })

    }
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
}

const getTotalTasks = async (req,res) => {

  try {
    const count = await Todo.countDocuments();
    res.status(200).send({totalTasks:count})
  }catch(err) {
    console.error(err)
    res.status(500).send(err)
  }
}

module.exports = {
  createTodo,
  getTodos,
  deleteTodo,
  updateTodo,
  getTotalTasks
};
