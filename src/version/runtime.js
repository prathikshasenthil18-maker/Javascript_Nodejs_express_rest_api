const RUNTIME = {
  customerVersion: 21,
  syntaxLabel: "ES2023+ / Node.js 21",
  language: "javascript",
  projectType: "Node.js + Express REST API",
  scenario: "1 - Monolithic",
  enginesNode: ">=21",
};
function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) throw new Error("unable_to_read_node_version");
  if (major < 21) {
    throw new Error("node_too_old: need >=21, found " + process.versions.node);
  }
  return { hostMajor: major, targetMajor: 21 };
}
module.exports = { RUNTIME, assertCompatibleNode };
