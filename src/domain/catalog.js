const features = require("../version/features");

function normalizeSku(raw) {
  const value = raw && (raw.sku != null ? raw.sku : raw.id);
  const obj = raw || {};
  if (!features.hasOwn(obj, "sku") && !features.hasOwn(obj, "id")) {
    throw new Error("sku_or_id_required");
  }
  return String(value == null ? "" : value).trim().toUpperCase();
}
function pickLastTag(tags) {
  return features.lastItem(tags) || "untagged";
}
function sortScoresDesc(scores) {
  return features.sortDesc(scores);
}
function findLastActive(items) {
  return features.findLastMatch(items, function (item) {
    return item && item.active;
  });
}
module.exports = { normalizeSku, pickLastTag, sortScoresDesc, findLastActive };
