import express from "express";
import {
  postCommittee,
  getCommittee,
} from "../controllers/committeeController";

const router = express.Router();

router.post("/", postCommittee);
router.get("/", getCommittee);

export default router;
