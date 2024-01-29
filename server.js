const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/dbConfig");
const port = process.env.PORT;
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/todo", require("./routes/todoRoutes"));

app.listen(port, () => console.log(`Running on port ${port}`));
