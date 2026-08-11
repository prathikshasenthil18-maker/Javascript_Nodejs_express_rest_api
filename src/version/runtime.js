const RUNTIME = {
  customerVersion: 18,
  syntaxLabel: "ES2022 / Node.js 18",
  language: "javascript",
  projectType: "Node.js + Express REST API",
  scenario: "1 - Monolithic",
  enginesNode: ">=18",
};
function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) throw new Error("unable_to_read_node_version");
  if (major < 18) {
    throw new Error("node_too_old: need >=18, found " + process.versions.node);
  }
  return { hostMajor: major, targetMajor: 18 };
}
module.exports = { RUNTIME, assertCompatibleNode };
