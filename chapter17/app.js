import express from "express";
const app = express();
const PORT = process.env.PORT || "3000";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";
import connectdb from "./db/connectdb.js";
import { multiDoc } from "./models/Student.js";

connectdb(DATABASE_URL);
// createDoc();
multiDoc();
app.listen(PORT, () => {
  console.log(`server is listening  on ${PORT}`);
});
