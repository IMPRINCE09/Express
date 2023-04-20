import express from "express";
const router = express.Router();
import { homecontroller } from "../controllers/homecont.js";
import { aboutcontroller } from "../controllers/aboutcont.js";

router.get("/", homecontroller);
router.get("/about", aboutcontroller);

export default router;
