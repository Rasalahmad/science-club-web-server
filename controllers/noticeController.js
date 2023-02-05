import Notice from "../modules/noticeModel";

export const postNotice = async (req, res, next) => {
  const notice = new Notice({ ...req.body, image: req?.files[0]?.filename });
  try {
    await notice.save();
    res.status(200).json({
      status: true,
      message: "Notice published successfully",
    });
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
export const getNotice = async (req, res, next) => {
  try {
    const notice = await Notice.find({});
    res.status(200).json({
      status: true,
      message: "Notice fetch successfully",
      data: notice,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Can't get the notice",
      error,
    });
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
    res.status(400).json({
      status: false,
      message: "Can't update the notice",
      error,
    });
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
    res.status(400).json({
      status: false,
      message: "Can't delete the notice",
      error,
    });
  }
};
