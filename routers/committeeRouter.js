import express from "express";
import { postCommittee } from "../controllers/committeeController";
import avatarUpload from "../middleware/avatarUpload";

const router = express.Router();

router.post("/committee", avatarUpload, postCommittee);

export default router;
