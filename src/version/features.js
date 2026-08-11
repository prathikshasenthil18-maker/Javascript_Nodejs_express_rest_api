function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj || {}, key);
}
function lastItem(list) {
  list = Array.isArray(list) ? list : [];
  return list.length ? list[list.length - 1] : null;
}
function sortDesc(values) {
  return (values || []).slice().sort(function (a, b) { return b - a; });
}
function findLastMatch(items, predicate) {
  var list = Array.isArray(items) ? items : [];
  for (var i = list.length - 1; i >= 0; i -= 1) {
    if (predicate(list[i], i)) return list[i];
  }
  return null;
}
function nodeMajor() { return 12; }
module.exports = { hasOwn, lastItem, sortDesc, findLastMatch, nodeMajor };
