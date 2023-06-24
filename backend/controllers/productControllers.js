import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @description     Fetch all products
// @route           GEt /api/products
// @access          public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product Id not found");
  }
});
