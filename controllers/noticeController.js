import Notice from "../modules/noticeModel";

export const postNotice = async (req, res, next) => {
  const notice = new Notice({ ...req.body, image: req?.files[0]?.filename });
  notice.save();
  res.status(200).json({
    status: true,
    message: "Notice published successfully",
  });
};
export const getNotice = async (req, res, next) => {
  const notice = await Notice.find({});
  res.status(200).json({
    status: true,
    message: "Notice fetch successfully",
    data: notice,
  });
};
export const updateNotice = async (req, res, next) => {
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
};
export const deleteNotice = async (req, res, next) => {
  console.log(req.params.id);
  await Notice.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: true,
    message: "Notice deleted successfully",
  });
};
