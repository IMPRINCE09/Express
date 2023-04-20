import express from "express";
const app = express();
const port = process.env.PORT || "4000";
import web from "./routes/web.js";

app.use("/", web);

app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
