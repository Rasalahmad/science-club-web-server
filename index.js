import express from "express";
import dotenv from "dotenv";
import committeeRouter from "./routers/committeeRouter.js";
import multer from "multer";
import cors from "cors";

const app = express();

const corsOrigin = {
  origin: "http://localhost:3000", //or whatever port your frontend is using
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOrigin));

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

// upload image
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

app.get("/", (req, res) => {
  res.send("Running");
});

// routing setup
app.use("/api/committee", committeeRouter);

app.listen(process.env.PORT, () => {
  console.log("Connected");
});
