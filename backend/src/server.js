require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
console.log("MONGO_URI is:", process.env.MONGO_URI);
const connect = "mongodb+srv://amarston648:nftw63EQyMD2@cluster0.8fg8blo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// to use enviroment variables access the process.env //
const connectDB = async () => {
  try {
    await mongoose.connect(connect, {
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
//const errorHandler = require("./middleware/errorHandler.js");
//app.use(errorHandler.errorHandler());

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
