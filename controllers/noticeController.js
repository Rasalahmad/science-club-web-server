import Notice from "../modules/noticeModel";

export const postNotice = async (req, res, next) => {
  try {
    const notice = new Notice({ ...req.body, image: req?.files[0]?.filename });
    notice.save();
    res.status(200).json({
      status: true,
      message: "Notice published successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      return res.status(400).json(errors);
    }
    res.status(500).json("Something went wrong");
  }
};
export const getNotice = async (req, res, next) => {
  try {
    const notice = await Notice.find({});
    res.status(200).json({
      status: true,
      message: "Notice fetch successfully",
      data: notice,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      return res.status(400).json(errors);
    }
    res.status(500).json("Something went wrong");
  }
};
export const updateNotice = async (req, res, next) => {
  try {
    const updated = await Notice.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      status: true,
      message: "Notice updated successfully",
      data: updated,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      return res.status(400).json(errors);
    }
    res.status(500).json("Something went wrong");
  }
};
export const deleteNotice = async (req, res, next) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: true,
      message: "Notice deleted successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      return res.status(400).json(errors);
    }
    res.status(500).json("Something went wrong");
  }
};
