import express, { Request, Response, Express } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("hello world.");
});

app.get("/api/", (req: Request, res: Response) => {
  res.send("api endpoint");
});

app.listen(port, () => {
  console.log("Running Server on port " + port);
});
