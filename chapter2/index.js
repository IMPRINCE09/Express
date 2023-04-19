import express from "express";

const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Prince kumar patel");
});

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});
