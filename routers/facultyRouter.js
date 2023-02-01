import express from "express";
import {
  deleteFaculty,
  getFaculty,
  postFaculty,
  updateFaculty,
} from "../controllers/facultyController.js";
import avatarUpload from "../middleware/avatarUpload.js";

const router = express.Router();

router.post("/", avatarUpload, postFaculty);
router.get("/", getFaculty);
router.put("/:id", updateFaculty);
router.delete("/:id", deleteFaculty);

export default router;
