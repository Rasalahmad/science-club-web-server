import CSEResult from "../modules/cseModel.js";

export const postResult = async (req, res, next) => {
  const result = new CSEResult(req.body);
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

export const getResult = async (req, res, next) => {
  try {
    const { studentId, semester, exam } = req.query;
    const result = await CSEResult.find({
      studentId: studentId,
      semester: semester,
      exam: exam,
    });
    console.log(result);
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
