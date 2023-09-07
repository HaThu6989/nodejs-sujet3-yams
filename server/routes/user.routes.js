import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { login, signup, verify } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/verify", isAuthenticated, verify);

export default router;
