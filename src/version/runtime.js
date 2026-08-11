const RUNTIME = {
  customerVersion: 24,
  syntaxLabel: "ES2024+ / Node.js 24",
  language: "javascript",
  projectType: "Node.js + Express REST API",
  scenario: "1 - Monolithic",
  enginesNode: ">=24",
};
function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) throw new Error("unable_to_read_node_version");
  if (major < 24) {
    throw new Error("node_too_old: need >=24, found " + process.versions.node);
  }
  return { hostMajor: major, targetMajor: 24 };
}
module.exports = { RUNTIME, assertCompatibleNode };
