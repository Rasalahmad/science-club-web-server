import Event from "../modules/eventModel";

export const postEvent = async (req, res, next) => {
  const event = new Event({ ...req.body, image: req?.files[0]?.filename });
  try {
    await event.save();
    res.status(200).json({
      status: true,
      message: "Event published successfully",
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
export const getEvent = async (req, res, next) => {
  try {
    const event = await Event.find({});
    res.status(200).json({
      status: true,
      message: "Event fetch successfully",
      data: event,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Event can't fetch",
      error,
    });
  }
};
export const updateEvent = async (req, res, next) => {
  try {
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
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Event can't update",
      error,
    });
  }
};
export const deleteEvent = async (req, res, next) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: true,
      message: "Event deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Event can't delete",
    });
  }
};
