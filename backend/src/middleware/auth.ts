import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const access_token = req.cookies.access_token;

  if (access_token) {
    const token_decoded = jwt.verify(access_token, process.env.JWT_SECRET_KEY!);

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
