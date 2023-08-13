import mongoose from "mongoose";
const { Schema } = mongoose;

const jobSchema = new Schema(
  {
    jobTitle: {
      type: String,
      require: [true, "Job must have a title"],
    },
    companyName: {
      type: String,
      require: [true, "Company must have a name"],
    },
    logo: {
      type: String,
      require: [true, "Company must have a logo"],
    },
    description: {
      type: String,
      require: [true, "Job must have a description"],
    },
    location: {
      type: String,
      require: [true, "Job must have a location"],
    },
    salary: {
      type: Number,
      require: [true, "Job must have a salary"],
    },
    type: {
      type: String,
      enum: ["Remote", "Part Time", "Full Time"],
      require: [true, "Jub must have a type"],
    },
    experience: {
      type: String,
      require: [true, "Job must have a experience"],
    },
    skills: {
      type: String,
      require: [true, "Job must have a skills"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Job || mongoose.model("Job", jobSchema);
