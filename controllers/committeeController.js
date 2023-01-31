import Committee from "../modules/committeeModel";

export const postCommittee = async (req, res, next) => {
  if (req.files && req.files.length > 0) {
    const committee = new Committee({
      ...req.body,
      image: req.files[0].filename,
    });
    await committee.save();
  }
  res
    .status(200)
    .json({ status: true, message: "Member uploaded successfully" });
};

export const getCommittee = async (req, res, next) => {
  const committee = await Committee.find({});
  res
    .status(200)
    .json({
      status: true,
      message: "Data fetch successfully",
      data: committee,
    });
};
