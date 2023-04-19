import express from "express";
const router = express.Router();
import { homecontroller } from "../controller/homecont.js";

router.get("/", homecontroller);

export default router;
