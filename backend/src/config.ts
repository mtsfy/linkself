import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = process.env.MONGODB_CONNECTION_URL as string;

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected.");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
