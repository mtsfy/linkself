import { InferSchemaType, Schema, model } from "mongoose";

export const linkSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
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
  },
  { timestamps: true }
);

type Link = InferSchemaType<typeof linkSchema>;

export default model<Link>("Link", linkSchema);
