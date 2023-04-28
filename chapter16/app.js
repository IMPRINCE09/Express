import express from "express";
const app = express();
const PORT = process.env.PORT || "3000";
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb";
import connectdb from "./db/connectdb.js";

connectdb(DATABASE_URL);
app.listen(PORT, () => {
  console.log(`server is listening  on ${PORT}`);
});
