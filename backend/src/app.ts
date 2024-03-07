import express, { Request, Response, Express, json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config";
import authRoutes from "./routes/auth";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(json());

app.use("/api/auth", authRoutes);

connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log("Running Server on port: " + port);
});

export default app;
