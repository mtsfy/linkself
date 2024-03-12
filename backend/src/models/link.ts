import mongoose, { Model, Schema, model } from "mongoose";

export interface LinkInterface {
  url: string;
  title: string;
  isActive: boolean;
}

export const linkSchema = new Schema<LinkInterface>({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
});

export const Link = model<LinkInterface>("Link", linkSchema);
