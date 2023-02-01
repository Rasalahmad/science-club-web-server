import Event from "../modules/eventModel";

export const postEvent = async (req, res, next) => {
  const event = new Event({ ...req.body, image: req?.files[0]?.filename });
  event.save();
  res.status(200).json({
    status: true,
    message: "Event published successfully",
  });
};
export const getEvent = async (req, res, next) => {
  const event = await Event.find({});
  res.status(200).json({
    status: true,
    message: "Event fetch successfully",
    data: event,
  });
};
export const updateEvent = async (req, res, next) => {
  const updated = await Event.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.status(200).json({
    status: true,
    message: "Event updated successfully",
    data: updated,
  });
};
export const deleteEvent = async (req, res, next) => {
  console.log(req.params.id);
  await Event.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: true,
    message: "Event deleted successfully",
  });
};
