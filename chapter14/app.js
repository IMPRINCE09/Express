import express from "express";
const app = express();
const PORT = process.env.PORT || 8088;
import web from "./routes/web.js";
import mylogger from "./middleware/logger_middleware.js";
app.set("view engine", "ejs");
app.use(mylogger);
app.use("/", web);

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
