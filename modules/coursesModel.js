import mongoose from "mongoose";

const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Course Name is required"],
      trim: true,
    },
    course_id: {
      type: String,
      required: [true, "Course ID is required"],
      trim: true,
    },
    semester: {
      type: String,
      required: [true, "Semester is required"],
    },
    department: {
      type: String,
      required: [true, "Department is required"],
    },
    credit: {
      type: Number,
      default: 3,
    },
    marks: String,
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("course", courseSchema);

export default Course;
