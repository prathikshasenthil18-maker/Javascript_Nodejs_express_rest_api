const { createApp } = require("./app");
const { RUNTIME } = require("./version/runtime");

const store = {
  orders: [
    { id: "ord_alpha", sku: "ALPHA", active: true, score: 90 },
    { id: "ord_beta", sku: "BETA", active: false, score: 70 },
    { id: "ord_gamma", sku: "GAMMA", active: true, score: 85 },
  ],
};

const port = Number(process.env.PORT || 3000);
const app = createApp(store);

if (require.main === module) {
  app.listen(port, function () {
    console.log(
      JSON.stringify({
        listening: true,
        port: port,
        customerVersion: RUNTIME.customerVersion,
        syntax: RUNTIME.syntaxLabel,
      }),
    );
  });
}

module.exports = { app, store };
