import Course from "../modules/coursesModel.js";

// cse
export const postCourse = async (req, res, next) => {
  const result = new Course(req.body);
  try {
    await result.save();
    res
      .status(200)
      .json({ status: true, message: "Post uploaded successfully" });
  } catch (error) {
    if (error.name === "ValidationError") {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors = error.errors[key];
      });
      return res.status(400).json({
        status: false,
        error: errors,
      });
    }
    res.status(500).json({
      status: false,
      message: "Something went wrong",
    });
  }
};

export const getCourses = async (req, res, next) => {
  try {
    const { semester, department } = req.query;
    const result = await Course.find({
      semester: semester,
      department: department,
    });
    res.status(200).json({
      status: true,
      message: "Courses fetch successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Can't get the result",
      error,
    });
  }
};
