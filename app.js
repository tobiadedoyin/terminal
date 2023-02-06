const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

const port = process.env.port || 3030;

//middleware
//import route
const postRoute = require("./routes/posts");

app.use("/posts", postRoute);

//postroutes
app.get("/", (req, res) => {
  res.send("I'm at home");
});

//connect mongoDB
mongoose.connect("process.env.DB_CONNECTION", () => {
  console.log("connected");
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
