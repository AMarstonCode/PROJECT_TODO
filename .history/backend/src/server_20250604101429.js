const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");


// to use enviroment variables access the process.env //
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connected")
  } catch (err) {
    console.error("mongodb connection error: ", err);
  }
};

const app = express();

app.use(cors());
app.use(express.json());

connectDB()
const PORT = process.env.PORT || 5000;
const errorHandler = require("./middleware/errorHandler.js");
app.use(errorHandler.errorHandler());

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
