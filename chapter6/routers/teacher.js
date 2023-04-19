import express from "express";
const router = express.Router();

router.get("/all", (req, res) => {
  res.send("all teachers");
});
router.post("/post", (req, res) => {
  res.send("new teachers");
});
router.put("/update", (req, res) => {
  res.send("updated student teachers");
});
router.delete("/delete", (req, res) => {
  res.send("deleted  teachers");
});

export default router;
