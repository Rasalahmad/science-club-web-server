import express from "express";
import {
  deleteNotice,
  getNotice,
  postNotice,
  updateNotice,
} from "../controllers/noticeController.js";
import avatarUpload from "../middleware/avatarUpload.js";

const router = express.Router();

router.post("/", avatarUpload, postNotice);
router.get("/", getNotice);
router.put("/:id", updateNotice);
router.delete("/:id", deleteNotice);

export default router;
