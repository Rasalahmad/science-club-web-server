import mongoose from "mongoose";

const cseResultSchema = mongoose.Schema({
  stdId: {
    type: String,
    required: true,
  },
  stdName: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  examType: {
    type: String,
    required: true,
  },
  courses: [
    {
      course_id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      marks: {
        type: Number,
        required: true,
      },
      credit: {
        type: Number,
        required: true,
      },
    },
  ],
});

const CSEResult = mongoose.model("cse-result", cseResultSchema);

export default CSEResult;
