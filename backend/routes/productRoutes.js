import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
  createProduct,
} from "../controllers/productControllers.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/:id").get(getProductById);

export default router;
