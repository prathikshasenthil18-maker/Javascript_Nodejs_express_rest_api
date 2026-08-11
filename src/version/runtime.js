const RUNTIME = {
  customerVersion: 20,
  syntaxLabel: "ES2023 / Node.js 20",
  language: "javascript",
  projectType: "Node.js + Express REST API",
  scenario: "1 - Monolithic",
  enginesNode: ">=20",
};
function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) throw new Error("unable_to_read_node_version");
  if (major < 20) {
    throw new Error("node_too_old: need >=20, found " + process.versions.node);
  }
  return { hostMajor: major, targetMajor: 20 };
}
module.exports = { RUNTIME, assertCompatibleNode };
