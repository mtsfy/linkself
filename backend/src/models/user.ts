import mongoose, { Schema, model } from "mongoose";

interface UserInterface {
  name: string;
  email: string;
  username: string;
  password: string;
}

const userSchema = new Schema<UserInterface>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      select: false,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
    },
  },
  { timestamps: true }
);

export const User = model<UserInterface>("User", userSchema);
