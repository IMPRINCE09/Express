import express from "express";
import { join } from "path";
const app = express();
const port = process.env.PORT || "3000";
import web from "./routes/web.js";

const options = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["html", "html"],
  index: "false",
  maxAge: "id",
  redirect: false,
  setHeader: function (res, path, stat) {
    res.set("x-timestamp", Date.now());
  },
};
//static file code
app.use(express.static(join(process.cwd(), "public"), options));

app.use("/", web);

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});
