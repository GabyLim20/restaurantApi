const express = require("express");
const orderController = require("../controllers/orderController"); 
const validateOrderRequest = require("../middleware/validateMiddleware"); 
const { orderSchema } = require("../models/orderModel");

const router = express.Router();

router.get("/", orderController.getOrders);
router.post('/addOrder', validateOrderRequest(orderSchema), orderController.addOrders );
router.post('/edit/:id', validateOrderRequest(orderSchema), orderController.editOrder );
router.delete('/:id', orderController.deletOrder );

module.exports = router;
