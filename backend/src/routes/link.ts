import express from "express";
import { requireAuth } from "../middleware/auth";
import {
  createNewLink,
  editLinkInfo,
  toggleLinkStatus,
  getAllLinks,
  getLinkInfo,
} from "../controllers/link";

const router = express.Router();

router.get("/", getAllLinks);
router.post("/new", requireAuth, createNewLink);
router.put("/:linkId/edit", requireAuth, editLinkInfo);
router.patch("/:linkId/toggle", requireAuth, toggleLinkStatus);
router.get("/:linkId", getLinkInfo);

export default router;
