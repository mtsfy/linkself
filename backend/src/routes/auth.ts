import express from "express";

import {
  currentUser,
  getUserById,
  login,
  logout,
  register,
} from "../controllers/users";
import { requireAuth } from "../middleware/auth";

const router = express.Router();

router.get("/", requireAuth, currentUser);

router.get("/userId", getUserById);

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

export default router;
