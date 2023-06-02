import express from "express";
import { getCseResult, postCseResult } from "../controllers/cseController.js";
import { getBbaResult, postBbaResult } from "../controllers/bbaController.js";
import { getGdsResult, postGdsResult } from "../controllers/gdsController.js";
import {
  getEnglishResult,
  postEnglishResult,
} from "../controllers/englishController.js";
import { getHtmResult, postHtmResult } from "../controllers/htmController.js";
import { getMbaResult, postMbaResult } from "../controllers/mbaController.js";

const router = express.Router();

// cse
router.post("/cse", postCseResult);
router.get("/cse", getCseResult);

// bba
router.post("/bba", postBbaResult);
router.get("/bba", getBbaResult);

// gds
router.post("/gds", postGdsResult);
router.get("/gds", getGdsResult);

// english
router.post("/english", postEnglishResult);
router.get("/english", getEnglishResult);

// htm
router.post("/htm", postHtmResult);
router.get("/htm", getHtmResult);

// mba
router.post("/mba", postMbaResult);
router.get("/mba", getMbaResult);

export default router;
