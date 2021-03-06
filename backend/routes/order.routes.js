const express = require("express");
const router = express.Router();
const {
	addOrderItems,
	getOrder,
	updateOrderToPaid,
	payRazorpay,
	getUserOrders,
	getAllOrders,
	updateOrderToDelivered,
} = require("../controllers/order.controllers");
const { protect, admin } = require("../middlewares/authMiddleware");

router
	.route("/")
	.post(protect, addOrderItems)
	.get(protect, admin, getAllOrders);
router.route("/myorders").get(protect, getUserOrders);
router.route("/:id").get(protect, getOrder);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

module.exports = router;
