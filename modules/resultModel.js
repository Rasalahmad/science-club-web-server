import mongoose from "mongoose";

const resultSchema = mongoose.Schema({
  department: {
    type: String,
    enum: ["CSE", "BBA", "English", "HTM", "GDS", "MBA"],
    required: true,
  },
  semester: {
    type: Number,
    enum: [8],
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  exam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exam",
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Result = mongoose.model("result", resultSchema);

export default Result;
