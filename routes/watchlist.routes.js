import express from "express";
import {
  addToWatchList,
  getWatchListByUserId,
  updateWatchListItem,
  deleteWatchListItem
} from "../controllers/watchlist.controller.js";

const router = express.Router();

router.post("/", addToWatchList);                        // Add crop to watchlist
router.get("/:userId", getWatchListByUserId);            // Get all crops for user
router.put("/:id", updateWatchListItem);                 // Update crop name
router.delete("/:id", deleteWatchListItem);              // Delete watchlist item

export default router;
