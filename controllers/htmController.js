import HTMResult from "../modules/htmModel.js";

export const postHtmResult = async (req, res, next) => {
  const result = new HTMResult(req.body);
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

export const getHtmResult = async (req, res, next) => {
  try {
    const { stdId, semester, examType } = req.query;
    const result = await HTMResult.findOne({
      stdId: new RegExp(stdId, "i"),
      semester: new RegExp(semester, "i"),
      examType: new RegExp(examType, "i"),
    });
    res.status(200).json({
      status: true,
      message: "Result fetch successfully",
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
