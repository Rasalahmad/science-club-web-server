import express from "express";
import {
  postCommittee,
  getCommittee,
} from "../controllers/committeeController";
import avatarUpload from "../middleware/avatarUpload";

const router = express.Router();

router.post("/", avatarUpload, postCommittee);
router.get("/", getCommittee);

export default router;
