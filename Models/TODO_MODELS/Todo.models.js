import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema(
  {
    content: {
      type: string,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    sub_todos: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "sub_todo",
    },
  },
  { timestamps: true }
);
export const todo = mongoose.model("todo", TodoSchema);
