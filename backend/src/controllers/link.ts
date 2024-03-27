import { Request, Response } from "express";
import Link from "../models/link";

export const createNewLink = async (req: Request | any, res: Response) => {
  console.log("/link/new", req.headers.host);

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
      userId: currentUser._id,
    });

    if (newLink) {
      const allLinks = await Link.find({ userId: currentUser._id }).sort({
        createdAt: -1,
      });
      res.status(201).json({
        message: "Link created successfully.",
        link: newLink,
        allLinks: allLinks,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error,
    });
  }
};

export const getLinkInfo = async (req: Request, res: Response) => {
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

export const getAllLinks = async (req: Request, res: Response) => {
  try {
    const links = await Link.find({});

    res.status(200).json({
      links: links,
    });
  } catch (error) {
    console.log(error);
  }
};

export const editLinkInfo = async (req: Request | any, res: Response) => {
  try {
    const linkId = req.params.linkId;
    const user = req.user;

    if (!linkId) {
      return res.status(400).json({
        message: "LinkId is required.",
      });
    }

    const { isActive, url, title } = req.body;

    if (!isActive || !url || !title) {
      return res.status(400).json({
        message: "Parameters are missing.",
      });
    }

    const link = await Link.findOne({ _id: linkId, userId: user._id });

    if (!link) {
      return res.status(404).json({
        message: "Link not found.",
      });
    }

    link.url = url;
    link.title = title;
    link.isActive = isActive;

    await link.save();

    res.status(200).json({
      message: "Link updated successfully.",
      link: link,
    });
  } catch (error) {}
};

export const toggleLinkStatus = async (req: Request | any, res: Response) => {
  console.log("/:linkId/toggle", req.headers.host);

  try {
    const linkId = req.params.linkId;
    const user = req.user;

    if (!linkId) {
      return res.status(400).json({
        message: "LinkId is required.",
      });
    }

    // const { isActive } = req.body;

    // if (!isActive) {
    //   return res.status(400).json({
    //     message: "Parameters are missing.",
    //   });
    // }

    const link = await Link.findOne({ _id: linkId, userId: user._id });

    if (!link) {
      return res.status(404).json({
        message: "Link not found.",
      });
    }
    const newStatus = !link.isActive;

    link.isActive = newStatus;
    await link.save();

    res.status(200).json({
      message: "Link updated successfully.",
      link: link,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};
