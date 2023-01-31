import express from "express";
import dotenv from "dotenv";
import committeeRouter from "./routers/committeeRouter.js";
import cors from "cors";

const app = express();

const corsOrigin = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOrigin));

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

app.listen(process.env.PORT, () => {
  console.log("Connected");
});
