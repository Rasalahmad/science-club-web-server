import express from "express";
import { postResult } from "../controllers/cseController.js";

const router = express.Router();

router.post("/cse", postResult);

export default router;
