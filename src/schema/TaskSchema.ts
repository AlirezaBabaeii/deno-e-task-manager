import { Schema, model } from "npm:mongoose";
const TaskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true,
  },
});

const Task = model("Task", TaskSchema);

export { Task };
