const { expect } = require("chai");
const catalog = require("../src/domain/catalog");
const features = require("../src/version/features");
const { RUNTIME } = require("../src/version/runtime");
describe("catalog domain", function () {
  it("matches customer version", function () {
    expect(features.nodeMajor()).to.equal(RUNTIME.customerVersion);
  });
  it("normalizes sku", function () {
    expect(catalog.normalizeSku({ sku: " abc " })).to.equal("ABC");
  });
  it("sorts scores", function () {
    expect(catalog.sortScoresDesc([1, 9, 3])).to.deep.equal([9, 3, 1]);
  });
  it("finds last active", function () {
    const items = [
      { sku: "a", active: true },
      { sku: "b", active: false },
      { sku: "c", active: true },
    ];
    expect(catalog.findLastActive(items).sku).to.equal("c");
  });
});
