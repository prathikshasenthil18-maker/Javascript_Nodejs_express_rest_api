const RUNTIME = {
  customerVersion: 12,
  syntaxLabel: "ES2019 / Node.js 12",
  language: "javascript",
  projectType: "Node.js + Express REST API",
  scenario: "1 - Monolithic",
  enginesNode: ">=12",
};
function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) throw new Error("unable_to_read_node_version");
  if (major < 12) {
    throw new Error("node_too_old: need >=12, found " + process.versions.node);
  }
  return { hostMajor: major, targetMajor: 12 };
}
module.exports = { RUNTIME, assertCompatibleNode };
