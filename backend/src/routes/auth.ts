import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  console.log("/auth/register: ", req.headers.host);

  try {
    const user = req.body;
    const { name, username, email, password } = user;

    if (!name || !username || !password || !email) {
      res.status(400).json({
        message: "Parameters are missing.",
      });
    }

    const emailExists = await User.findOne({ email: email }).select("+email");

    if (emailExists) {
      res.status(400).json({
        message: "Email is already in use.",
      });
      return;
    }

    const usernameExists = await User.findOne({ username: username });

    if (usernameExists) {
      res.status(400).json({
        message: "Username is taken.",
      });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name: name,
      username: username,
      email: email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User created successfully.",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error,
    });
  }
});

router.post("/login", async (req: Request, res: Response) => {
  console.log("/auth/login: ", req.headers.host);

  const user = req.body;
  const { email, password } = user;
  try {
    if (!email || !password) {
      res.status(400).json({
        message: "Email and Password is required.",
      });
    }

    const userExists = await User.findOne({ email: email }).select(
      "+password +email"
    );

    if (!userExists) {
      res.status(404).json({
        message: "Invalid username and/or password.",
      });
      return;
    }

    const isCorrectPassword = await bcrypt.compare(
      password,
      userExists.password
    );

    if (!isCorrectPassword) {
      res.status(404).json({
        message: "Invalid username and/or password.",
      });
      return;
    }

    userExists.password = "";
    res.status(200).json({
      message: "User logged in successfully.",
      user: userExists,
    });
  } catch (error) {
    console.log(error);
    res.json(400).json({
      error: error,
    });
  }
});

export default router;
