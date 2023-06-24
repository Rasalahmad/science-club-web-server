import mongoose from "mongoose";

const englishResultSchema = mongoose.Schema({
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
      creditHours: {
        type: Number,
        required: true,
      },
    },
  ],
});

const EnglishResult = mongoose.model("english-result", englishResultSchema);

export default EnglishResult;
