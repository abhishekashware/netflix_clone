const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path=require("path");

dotenv.config();

app.use(express.json());


app.use(express.static("client/build"));
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname,  "client","build", "index.html"));
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend server is running at port ${process.env.PORT||5000}!`);
});

