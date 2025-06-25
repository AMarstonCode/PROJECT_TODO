const User = require("../models/userModel");
const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const addUser = await User.create({ name, email, password });
    res.status(201).send(addUser);
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

module.exports = {
   createUser
}