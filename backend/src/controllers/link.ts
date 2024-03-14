import express, { NextFunction, Request, Response } from "express";
import { Link } from "../models/link";
import { User } from "../models/user";
export const createNewLink = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    const currentUser = req.user;

    const { url, title } = req.body;

    if (!url || !title) {
      res.status(400).json({
        message: "Parametrs are missing.",
      });
    }

    const newLink = await Link.create({
      url: url,
      title: title,
      isActive: true,
    });

    if (newLink) {
      res.status(201).json({
        message: "Link created successfully.",
        link: newLink,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error,
    });
  }
};

export const getLinkDetail = async (req: Request, res: Response) => {
  try {
    const linkId = req.params.linkId;

    if (!linkId) {
      res.status(400).json({
        message: "LinkId is required.",
      });
    }

    const link = await Link.findOne({ _id: linkId });

    if (!link) {
      res.status(404).json({
        message: "Link not found",
      });
    }

    res.status(200).json({
      link: link,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      error: error,
    });
  }
};
