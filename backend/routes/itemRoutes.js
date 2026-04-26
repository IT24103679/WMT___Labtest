import express from "express";
import {
  createItem,
  deleteItem,
  getItemById,
  getItems,
  updateItem,
} from "../controller/itemController.js";

const router = express.Router();

router.get("/", getItems);
router.get("/:id", getItemById);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;