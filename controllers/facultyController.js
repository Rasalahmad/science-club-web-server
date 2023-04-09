import Faculty from "../modules/facultyModel.js";

export const postFaculty = async (req, res, next) => {
  const faculty = new Faculty(req.body);
  try {
    await faculty.save();
    res
      .status(200)
      .json({ status: true, message: "Faculty uploaded successfully" });
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

export const getFaculty = async (req, res, next) => {
  try {
    const faculty = await Faculty.find({});
    res.status(200).json({
      status: true,
      message: "Data fetch successfully",
      data: faculty,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Can't get faculties",
      error,
    });
  }
};

export const updateFaculty = async (req, res, next) => {
  try {
    const updated = await Faculty.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      status: true,
      message: "Member updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Faculty can't update",
      error,
    });
  }
};

export const deleteFaculty = async (req, res, next) => {
  try {
    await Faculty.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: true,
      message: "Member Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Can't delete faculty",
      error,
    });
  }
};
