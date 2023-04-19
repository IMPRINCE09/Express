// const express = require("express");
import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello world i am here");
});

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});
