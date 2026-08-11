function add(a, b) { return a + b; }
function divide(a, b) {
  if (b === 0) throw new Error("cannot divide by zero");
  return a / b;
}
function isEven(n) { return n % 2 === 0; }
module.exports = { add, divide, isEven };
