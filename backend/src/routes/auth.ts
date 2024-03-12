import express from "express";

import { currentUser, login, logout, register } from "../controllers/users";
import { requireAuth } from "../middleware/auth";

const router = express.Router();

router.get("/", requireAuth, currentUser);

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

export default router;
