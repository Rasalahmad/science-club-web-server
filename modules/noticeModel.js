import mongoose from "mongoose";

const noticeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Titile is required"],
      trim: true,
    },
    desc: {
      type: String,
      required: [true, "Description is required"],
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("notice", noticeSchema);
