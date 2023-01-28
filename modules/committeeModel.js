import mongoose from "mongoose";

const committeeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    about: {
      type: String,
      required: true,
      trim: true,
    },
    designation: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    fbLink: {
      type: String,
    },
    instraLink: {
      type: String,
    },
    linkedIn: {
      type: String,
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const Committee = mongoose.model("committee", committeeSchema);

export default Committee;
