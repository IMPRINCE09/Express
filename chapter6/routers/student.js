import express from "express";
const router = express.Router();

//all student data is available
router.get("/all", (req, res) => {
  res.send("all student");
});

router.post("/create", (req, res) => {
  res.send("new  student");
});

router.put("/update", (req, res) => {
  res.send("student updated");
});
router.delete("/delete", (req, res) => {
  res.send("student record deleted");
});

export default router;
