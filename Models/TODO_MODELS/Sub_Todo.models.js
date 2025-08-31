import mongoose from "mongoose";
import { type } from "os";

const sub_todoSchema = new mongoose.Schema(
  {
    content: {
      type: string,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);
export const sub_todo = mongoose.model("sub_todo", sub_todoSchema);
