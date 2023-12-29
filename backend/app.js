const express = require("express");

//Connection To Db
const connectToDb = require("./config/connectToDb");
require("dotenv").config();

connectToDb();

//Init App
const app = express();
app.use(express.json());

//Routes
app.use("/api/auth", require("./routes/authRoute"));

app.use("/api/users", require("./routes/usersRoute"));

//Running The Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
