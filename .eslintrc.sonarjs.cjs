module.exports = {
  root: true,
  parserOptions: { ecmaVersion: 2022, sourceType: "script" },
  env: { es2022: true, node: true },
  plugins: ["sonarjs"],
  extends: ["plugin:sonarjs/recommended-legacy"],
  ignorePatterns: ["node_modules/", "coverage/", "dist/", "reports/"],
  rules: { "sonarjs/cognitive-complexity": ["error", 5] },
};
