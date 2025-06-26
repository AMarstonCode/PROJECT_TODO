const { createUser, getUser, updateUser, deleteUser } = require("../controllers/userController");

const express = require("express");
const router = express.Router();

router.get("/", getUser);
router.post("/create", createUser);
router.put("/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
