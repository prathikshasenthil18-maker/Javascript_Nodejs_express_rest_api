function hasOwn(obj, key) {
  return Object.hasOwn(obj ?? {}, key);
}
function lastItem(list) {
  return (Array.isArray(list) ? list : []).at(-1) ?? null;
}
function sortDesc(values) {
  return (values ?? []).toSorted((a, b) => b - a);
}
function findLastMatch(items, predicate) {
  return (Array.isArray(items) ? items : []).findLast(predicate) ?? null;
}
function nodeMajor() { return 21; }
module.exports = { hasOwn, lastItem, sortDesc, findLastMatch, nodeMajor };
