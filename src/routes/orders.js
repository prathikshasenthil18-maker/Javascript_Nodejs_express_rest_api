const express = require("express");
const orderService = require("../services/orderService");

function createOrdersRouter(store) {
  const router = express.Router();

  router.get("/", function (req, res) {
    res.status(200).json({
      data: store.orders,
      summary: orderService.summarizeOrders(store.orders),
    });
  });

  router.post("/", function (req, res) {
    try {
      const order = orderService.createOrder(req.body || {});
      store.orders.push(order);
      res.status(201).json({ data: order });
    } catch (err) {
      res.status(400).json({ error: String(err && err.message ? err.message : err) });
    }
  });

  return router;
}

module.exports = { createOrdersRouter };
