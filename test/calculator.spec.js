const { expect } = require("chai");
const { add, divide, isEven } = require("../src/domain/calculator");
describe("calculator", function () {
  it("adds", function () { expect(add(2, 3)).to.equal(5); });
  it("divides", function () { expect(divide(10, 2)).to.equal(5); });
  it("rejects zero divisor", function () {
    expect(function () { divide(1, 0); }).to.throw("cannot divide by zero");
  });
  it("detects even", function () {
    expect(isEven(4)).to.equal(true);
    expect(isEven(5)).to.equal(false);
  });
});
