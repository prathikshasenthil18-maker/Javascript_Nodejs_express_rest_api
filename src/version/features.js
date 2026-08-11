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
function intersectKeys(a, b) {
  return [...new Set(a ?? []).intersection(new Set(b ?? []))];
}
function deferred() {
  return Promise.withResolvers();
}
function nodeMajor() { return 24; }
module.exports = {
  hasOwn, lastItem, sortDesc, findLastMatch, intersectKeys, deferred, nodeMajor,
};
