const express = require("express");
const { createOrdersRouter } = require("./routes/orders");
const { RUNTIME } = require("./version/runtime");

function createApp(store) {
  const app = express();
  app.use(express.json());

  app.get("/api/v1/health", function (req, res) {
    res.status(200).json({
      ok: true,
      customerVersion: RUNTIME.customerVersion,
      syntax: RUNTIME.syntaxLabel,
      projectType: RUNTIME.projectType,
    });
  });

  app.use("/api/v1/orders", createOrdersRouter(store));

  app.use(function (req, res) {
    res.status(404).json({ error: "not_found" });
  });

  return app;
}

module.exports = { createApp };
