import mongoose from "mongoose";

const noticeSchema = mongoose.Schema(
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

const Notice = mongoose.model("notice", noticeSchema);

export default Notice;
