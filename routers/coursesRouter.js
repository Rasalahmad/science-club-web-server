import express from "express";
import { getCourses, postCourse } from "../controllers/coursesController.js";

const router = express.Router();

router.post("/", postCourse);
router.get("/", getCourses);

export default router;
