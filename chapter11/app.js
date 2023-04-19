import express from "express";
const app = express();
const port = process.env.PORT || "3000";
import web from "./routes/web.js";

app.use("/", web);

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});
