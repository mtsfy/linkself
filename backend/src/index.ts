import express, { Request, Response, Express, json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config";
import authRoutes from "./routes/auth";
import linkRoutes from "./routes/link";
import cookieParser from "cookie-parser";
dotenv.config();

const port = process.env.PORT || 3000;
connectDB();

const app: Express = express();
const origin = process.env.ORIGIN;

app.use(cors({ credentials: true, origin: origin }));
app.use(json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/link", linkRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log("Running Server on port: " + port);
});

export default app;
