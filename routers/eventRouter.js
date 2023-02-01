import express from "express";
import {
  deleteEvent,
  getEvent,
  postEvent,
  updateEvent,
} from "../controllers/eventController.js";

import avatarUpload from "../middleware/avatarUpload.js";

const router = express.Router();

router.post("/", avatarUpload, postEvent);
router.get("/", getEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export default router;
