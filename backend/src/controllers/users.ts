import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user";

export const register = async (req: Request, res: Response) => {
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
};

export const login = async (req: Request, res: Response) => {
  console.log("/auth/login: ", req.headers.host);

  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        message: "Email and Password is required.",
      });
    }

    const user = await User.findOne({ email: email }).select(
      "+password +email"
    );

    if (!user) {
      res.status(404).json({
        message: "Invalid username and/or password.",
      });
      return;
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) {
      res.status(404).json({
        message: "Invalid username and/or password.",
      });
      return;
    }
    user.password = "";
    const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY!, {
      expiresIn: "1hr",
    });
    // const expiryDate = new Date(Date.now() + 3600000); // 1hr
    res
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite: "strict",
      })
      .status(200)
      .json({
        message: "User logged in successfully.",
        user: user,
      });
  } catch (error) {
    console.log(error);
    res.json(400).json({
      error: error,
    });
  }
};

export const logout = (req: Request, res: Response) => {
  console.log("/logout: ", req.headers.host);

  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json("User logged out successfully.");
  } catch (error) {
    console.log(error);
    res.status(404).json({
      error: error,
    });
  }
};

export const currentUser = async (req: Request, res: Response) => {
  console.log("/: ", req.headers.host);
  try {
    const { _id } = req.body;
    const user = await User.findOne(_id).select("+email");
    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      error: error,
    });
  }
};
