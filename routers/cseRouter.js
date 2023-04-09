import express from "express";
import { getResult, postResult } from "../controllers/cseController.js";

const router = express.Router();

router.post("/", postResult);
router.get("/", getResult);

export default router;
