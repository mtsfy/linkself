import { InferSchemaType, Schema, model } from "mongoose";

const userSchema = new Schema(
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
    title: {
      type: String,
      requrired: false,
      default: "",
    },
    bio: {
      type: String,
      required: false,
      default: "",
    },
    image: {
      type: String,
      required: false,
      default: null,
    },
    theme: {
      type: String,
      required: false,
      default: "1",
    },
  },
  { timestamps: true }
);

type User = InferSchemaType<typeof userSchema>;
export default model<User>("User", userSchema);
