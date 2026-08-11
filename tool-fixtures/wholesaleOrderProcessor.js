function processWholesaleOrder(order) {
  const lines = order.items || [];
  let total = 0;
  for (let i = 0; i < lines.length; i += 1) {
    const qty = lines[i].qty || 0;
    const price = lines[i].price || 0;
    total += qty * price;
  }
  if (order.discountCode === "SAVE10") total *= 0.9;
  if (order.expressShipping) total += 15;
  return { channel: "wholesale", total: Math.round(total * 100) / 100 };
}
module.exports = { processWholesaleOrder };
