import express from "express";
const router = express.Router();

router.get("/all", (req, res) => {
  res.send("all student");
});

router.get("/delete/:id([0-9]{2})", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  if (id == 10) {
    console.log(id);
    res.send("prince id is not delted");
  } else res.send(`student deleted ${id}`);
});

router.get("*", (req, res) => {
  res.send("404 page not found");
});

export default router;
