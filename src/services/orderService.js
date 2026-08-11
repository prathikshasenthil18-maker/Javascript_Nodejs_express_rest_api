const catalog = require("../domain/catalog");
const features = require("../version/features");

function summarizeOrders(orders) {
  const list = Array.isArray(orders) ? orders : [];
  const active = catalog.findLastActive(list);
  const scores = list.map(function (o) { return o && o.score != null ? o.score : 0; });
  return {
    count: list.length,
    activeSku: active && active.sku ? active.sku : "none",
    topScore: (features.sortDesc(scores)[0]) || 0,
    lastTag: catalog.pickLastTag(list.map(function (o) { return o && o.sku; })),
  };
}

function createOrder(payload) {
  const sku = catalog.normalizeSku(payload || {});
  return {
    id: "ord_" + sku.toLowerCase(),
    sku: sku,
    active: true,
    score: payload && payload.score != null ? payload.score : 0,
  };
}

module.exports = { summarizeOrders, createOrder };
