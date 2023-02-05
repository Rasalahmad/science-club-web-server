import Committee from "../modules/committeeModel";

export const postCommittee = async (req, res, next) => {
  const committee = new Committee({
    ...req.body,
    image: req?.files[0]?.filename,
  });
  try {
    if (req.files && req.files.length > 0) {
      await committee.save();
    }
    res
      .status(200)
      .json({ status: true, message: "Member uploaded successfully" });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Member can't upload",
      error,
    });
  }
};

export const getCommittee = async (req, res, next) => {
  try {
    const committee = await Committee.find({});
    res.status(200).json({
      status: true,
      message: "Data fetch successfully",
      data: committee,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data can't fetch",
      error,
    });
  }
};

export const updateCommittee = async (req, res, next) => {
  try {
    const updated = await Committee.findByIdAndUpdate(
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
    res.status(400).json({
      status: false,
      message: "Member can't upload",
      error,
    });
  }
};

export const deleteCommittee = async (req, res, next) => {
  try {
    await Committee.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: true,
      message: "Member Deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Member can't Delete",
      error,
    });
  }
};
