import express from "express";
import { getResult, postResult } from "../controllers/cseController.js";

const router = express.Router();

router.post("/cse", postResult);
router.get("/cse", getResult);

export default router;
