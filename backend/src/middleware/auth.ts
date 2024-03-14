import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user";

export const requireAuth = (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  console.log(req.cookies);

  const access_token = req.cookies.access_token;

  if (access_token) {
    jwt.verify(
      access_token,
      process.env.JWT_SECRET_KEY!,
      (err: any, user: any) => {
        req.user = user;
      }
    );

    console.log("DECODED TOKEN REQ: ", req.user);

    next();
    try {
    } catch (error) {
      console.log(error);
      res.status(401).json({
        error: error,
      });
    }
  } else {
    res.status(401).json({
      error: "Not authorized.",
    });
  }
};
