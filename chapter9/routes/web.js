import express from "express";
const router = express.Router();
import { homecontroller } from "../controller/homecontroller.js";
import { aboutcontroller } from "../controller/aboutcontroller.js";

router.get("/", homecontroller);
router.get("/about", aboutcontroller);

export default router;
