import express from "express";
const app = express();
const port = process.env.PORT || "3000";
import web from "./routes/web.js";

app.use("/", web);
app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.send("this is home ");
// });

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port} `);
});
