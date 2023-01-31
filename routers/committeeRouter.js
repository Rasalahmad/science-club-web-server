import express from "express";
import {
  postCommittee,
  getCommittee,
  updateCommittee,
  deleteCommittee,
} from "../controllers/committeeController.js";
import avatarUpload from "../middleware/avatarUpload";

const router = express.Router();

router.post("/", avatarUpload, postCommittee);
router.get("/", getCommittee);
router.put("/:id", updateCommittee);
router.delete("/:id", deleteCommittee);

export default router;
