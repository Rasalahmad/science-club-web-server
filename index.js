import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import committeeRouter from "./routers/committeeRouter.js";
import facultyRouter from "./routers/facultyRouter.js";
import noticeRouter from "./routers/noticeRouter.js";
import eventRouter from "./routers/eventRouter.js";
import resultRouter from "./routers/resultRouter.js";
import multer from "multer";

const app = express();

const corsOrigin = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors());

// database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

// access static file
app.use(express.static("upload"));
app.use("/images", express.static("images"));

app.get("/", (req, res) => {
  res.send("Running");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

// routing setup
app.use("/api/committee", committeeRouter);
app.use("/api/faculty", facultyRouter);
app.use("/api/notice", noticeRouter);
app.use("/api/event", eventRouter);
app.use("/api/result", resultRouter);

app.listen(process.env.PORT, () => {
  connect();
  console.log("Connected");
});
