module.exports = {
  root: true,
  parserOptions: { ecmaVersion: 2019, sourceType: "script" },
  env: { es2022: true, node: true, mocha: true },
  ignorePatterns: ["node_modules/", "coverage/", "dist/", "reports/", "tool-fixtures/"],
  rules: {
    "no-unused-vars": "warn",
    "no-undef": "error",
    "no-var": "off",
    "prefer-const": "off",
  },
};
