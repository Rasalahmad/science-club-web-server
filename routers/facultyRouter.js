import express from "express";
import {
  deleteFaculty,
  getFaculty,
  postFaculty,
  updateFaculty,
} from "../controllers/facultyController.js";

const router = express.Router();

router.post("/", postFaculty);
router.get("/", getFaculty);
router.put("/:id", updateFaculty);
router.delete("/:id", deleteFaculty);

export default router;
