const Todo = require("../models/user.js");

const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const addUser = await User.create({ username, email, password });
    res.status(201).send(addUser);
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await Todo.findByIdAndDelete(id);

    if (deletedUser) {
      res.status(200).send({ message: "User deleted" });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (err) {
    console.error(err);
  }
};

const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send({ message: "Internal server error" });
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const updates = req.body
    const data = await Todo.findByIdAndUpdate(id, updates, { new: true, runValidators: true })
    if (data != null) {
      res.status(200).send(data)

    } else {
      res.status(404).send({ message: "User not found" })

    }
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
}


module.exports = {
  createUser,
  getUser,
  deleteUser,
  updateUser
};
