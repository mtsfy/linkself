import express from "express";
import { requireAuth } from "../middleware/auth";
import {
  createNewLink,
  editLinkInfo,
  toggleLinkStatus,
  getAllLinks,
  getLinkInfo,
  deleteLink,
} from "../controllers/link";

const router = express.Router();

router.get("/", getAllLinks);
router.post("/new", requireAuth, createNewLink);
router.put("/:linkId/edit", requireAuth, editLinkInfo);
router.patch("/:linkId/toggle", requireAuth, toggleLinkStatus);
router.delete("/:linkId/delete", requireAuth, deleteLink);
router.get("/:linkId", getLinkInfo);

export default router;
