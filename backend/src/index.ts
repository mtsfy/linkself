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
//const origin = process.env.ORIGIN;
const allowedOrigins = ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://10.0.0.144:3000','https://linkself.vercel.app'];

app.use(cors({
  credentials: true,
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

//app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
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
