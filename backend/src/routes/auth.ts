import express from "express";

import {
  currentUser,
  getUserByUsername,
  login,
  logout,
  register,
  updateProfile,
  updateTheme,
} from "../controllers/users";
import { requireAuth } from "../middleware/auth";

const router = express.Router();

router.get("/", requireAuth, currentUser);

router.get("/:username", getUserByUsername);

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.put("/edit-profile", requireAuth, updateProfile);

router.patch("/edit-theme", requireAuth, updateTheme);

export default router;
