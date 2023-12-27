require("dotenv").config;
const express = require("express");

//Connection To Db
const connectToDb = require("./config/connectToDb");

connectToDb();

//Init App
const app = express();
app.use(express.json());

//Running The Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
