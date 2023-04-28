import express from "express";
const router = express.Router();
import { homecontroller } from "../controller/homecont.js";
import { aboutcontroller } from "../controller/aboutcont.js";

router.get("/", homecontroller);
router.get("/about", aboutcontroller);

export default router;
