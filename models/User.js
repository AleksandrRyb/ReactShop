import mongoose from "mongoose";

const { String } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requried: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      //Select excluding passport from returning user, but we can return in manually
      select: false
    },
    role: {
      type: String,
      requried: true,
      default: "user",
      enum: ["user", "admin", "root"]
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
