import mongoose from "mongoose";

const resultSchema = mongoose.Schema({
  department: {
    type: String,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
    index: true, // Add an index for faster querying
  },
  marks: {
    type: Number,
    required: true,
  },
  exam: {
    type: String,
    enum: ["mid-term", "final-term"],
    required: true,
  },
});

const Result = mongoose.model("result", resultSchema);

export default Result;
