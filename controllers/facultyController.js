import Faculty from "../modules/facultyModel";

export const postFaculty = async (req, res, next) => {
  if (req.files && req.files.length > 0) {
    const faculty = new Faculty({
      ...req.body,
      image: req.files[0].filename,
    });
    await faculty.save();
  }
  res
    .status(200)
    .json({ status: true, message: "Member uploaded successfully" });
};

export const getFaculty = async (req, res, next) => {
  const faculty = await Faculty.find({});
  res.status(200).json({
    status: true,
    message: "Data fetch successfully",
    data: faculty,
  });
};

export const updateFaculty = async (req, res, next) => {
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
};

export const deleteFaculty = async (req, res, next) => {
  await Faculty.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: true,
    message: "Member Deleted successfully",
  });
};
