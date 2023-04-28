import express from "express";
import connectdb from "./db/connectdb.js";
const app = express();
const port = process.env.PORT || "3000";
const DATABASE_URL = "mongodb://localhost:27017/schooldb";

// mongoose.connect("mongodb://localhost:27017/schooldb").then(() => {
//   console.log("connected succesfully");
// });

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});

connectdb(DATABASE_URL);
