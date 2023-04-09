import Result from "../modules/resultModel.js";

export const postResult = async (req, res, next) => {
  const result = new Result(req.body);
  try {
    await result.save();
    res
      .status(200)
      .json({ status: true, message: "Result uploaded successfully" });
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
