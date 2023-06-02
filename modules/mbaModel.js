import mongoose from "mongoose";

const mbaResultSchema = mongoose.Schema({
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
      courseId: {
        type: String,
        required: true,
      },
      courseName: {
        type: String,
        required: true,
      },
      cgpa: {
        type: Number,
        required: true,
      },
    },
  ],
});

const MBAResult = mongoose.model("mba-result", mbaResultSchema);

export default MBAResult;
