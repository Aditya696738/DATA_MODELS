import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: string,
      required: true,
      unique: true,
    },
    Email: {
      type: string,
      required: true,
      unique: true,
    },
    password: {
      type: string,
      required: [true, "Password must contain a charecter"],
      unique: true,
    },
  },
  { timestamps: true }
);
export const user = mongoose.model("user", userSchema);
