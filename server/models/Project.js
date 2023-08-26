import { Schema, model } from "mongoose";

const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },

  { timestamps: true },
);

const Project = model("Project", ProjectSchema);
export default Project;
