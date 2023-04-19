// that conatines all the routers page
import express from "express";
const router = express.Router();
import { homecontroller } from "../controllers/homecont.js";

router.get("/", homecontroller);

export default router;
