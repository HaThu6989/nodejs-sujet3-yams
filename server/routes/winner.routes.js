import express from "express";
import {
  getAllWinners,
  findNewWinner,
} from "../controllers/winner.controller.js";

const router = express.Router();

router.post("/findNewWinner", findNewWinner);
router.get("/winners", getAllWinners);

export default router;
