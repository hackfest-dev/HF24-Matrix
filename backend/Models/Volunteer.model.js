import mongoose from "mongoose";

const VolunteerSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    lastname: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    phonenumber: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    state: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
      },
      district: {
        type: String,
        required: true,
        lowercase: true,
      },
  },
  { timestamps: true }
);

export const  Volunteer = mongoose.model("volunteer", VolunteerSchema);