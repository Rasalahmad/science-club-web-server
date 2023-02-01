import express from "express";
import dotenv from "dotenv";
import committeeRouter from "./routers/committeeRouter.js";
import facultyRouter from "./routers/facultyRouter.js";
import noticeRouter from "./routers/noticeRouter.js";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

const corsOrigin = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOrigin));

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

// routing setup
app.use("/api/committee", committeeRouter);
app.use("/api/faculty", facultyRouter);
app.use("/api/notice", noticeRouter);

app.listen(process.env.PORT, () => {
  connect();
  console.log("Connected");
});
