import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

//@desc     Create new order
// @route   POST /api/orders
// @ccess   Private
const createOrderItems = asyncHandler(async (req, res) => {
  res.send("add order items");
});

//@desc     Get logged in user orders
// @route   GET /api/orders/myorders
// @ccess   Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("Get my orders");
});

//@desc     Get order By ID
// @route   GET /api/orders/:id
// @ccess   Private
const getOrderById = asyncHandler(async (req, res) => {
  res.send("Get order By ID");
});

//@desc     Update order to paid
// @route   PUT /api/orders/:id/pay
// @ccess   Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("Update order to paid");
});

//@desc     Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @ccess   Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("Update order to delivered");
});

//@desc     Get all orders
// @route   GET /api/orders
// @ccess   Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  res.send("Get all orders");
});

export {
  createOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
