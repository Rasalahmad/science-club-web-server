import express from "express";
import dotenv from "dotenv";
import committeeRouter from "./routers/committeeRouter.js";
import path from "path";
import cors from "cors";

const app = express();

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

// set static folder
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Running");
});

// routing setup
app.use("/", committeeRouter);

app.listen(process.env.PORT, () => {
  console.log("Connected");
});
