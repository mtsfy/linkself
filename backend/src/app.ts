import express, { Request, Response, Express } from "express";
import dotenv from "dotenv";
import connectDB from "./config";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

connectDB();

app.listen(port, () => {
  console.log("Running Server on port: " + port);
});
