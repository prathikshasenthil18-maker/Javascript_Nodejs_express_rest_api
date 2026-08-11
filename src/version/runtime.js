const RUNTIME = {
  customerVersion: 14,
  syntaxLabel: "ES2020 / Node.js 14",
  language: "javascript",
  projectType: "Node.js + Express REST API",
  scenario: "1 - Monolithic",
  enginesNode: ">=14",
};
function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) throw new Error("unable_to_read_node_version");
  if (major < 14) {
    throw new Error("node_too_old: need >=14, found " + process.versions.node);
  }
  return { hostMajor: major, targetMajor: 14 };
}
module.exports = { RUNTIME, assertCompatibleNode };
