import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const SubscriberSchema = new mongoose.Schema(
  {
    name: {
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

export const  Subscriber = mongoose.model("Subscriber", SubscriberSchema);