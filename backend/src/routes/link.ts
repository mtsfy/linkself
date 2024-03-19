import express from "express";
import { requireAuth } from "../middleware/auth";
import { createNewLink, getAllLinks, getLinkDetail } from "../controllers/link";

const router = express.Router();

router.get("/", getAllLinks);
router.post("/new", requireAuth, createNewLink);
router.get("/:linkId", getLinkDetail);

export default router;
