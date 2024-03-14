import express from "express";
import { requireAuth } from "../middleware/auth";
import { createNewLink, getLinkDetail } from "../controllers/link";

const router = express.Router();

router.post("/new", requireAuth, createNewLink);
router.get("/:linkId", getLinkDetail);

export default router;
