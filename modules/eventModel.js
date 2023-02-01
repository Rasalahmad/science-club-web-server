import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "titile is required"],
      trim: true,
    },
    desc: {
      type: String,
      required: [true, "description is required"],
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("events", eventSchema);

export default Event;
