import express from "express";
import {
  postCommittee,
  getCommittee,
  updateCommittee,
  deleteCommittee,
} from "../controllers/committeeController.js";

const router = express.Router();

router.post("/", postCommittee);
router.get("/", getCommittee);
router.put("/:id", updateCommittee);
router.delete("/:id", deleteCommittee);

export default router;
