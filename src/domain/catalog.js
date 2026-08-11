var features = require("../version/features");

function normalizeSku(raw) {
  raw = raw || {};
  var value = raw.sku != null ? raw.sku : raw.id;
  if (value == null || value === "") throw new Error("sku_or_id_required");
  return String(value).trim().toUpperCase();
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
