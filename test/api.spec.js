const request = require("supertest");
const { expect } = require("chai");
const { createApp } = require("../src/app");

describe("api v1", function () {
  it("health", async function () {
    const app = createApp({ orders: [] });
    const res = await request(app).get("/api/v1/health");
    expect(res.status).to.equal(200);
    expect(res.body.ok).to.equal(true);
  });
  it("lists orders", async function () {
    const app = createApp({
      orders: [{ id: "1", sku: "A", active: true, score: 10 }],
    });
    const res = await request(app).get("/api/v1/orders");
    expect(res.status).to.equal(200);
    expect(res.body.data).to.have.length(1);
  });
  it("creates order", async function () {
    const store = { orders: [] };
    const app = createApp(store);
    const res = await request(app).post("/api/v1/orders").send({ sku: "kit" });
    expect(res.status).to.equal(201);
    expect(res.body.data.sku).to.equal("KIT");
    expect(store.orders).to.have.length(1);
  });
});
