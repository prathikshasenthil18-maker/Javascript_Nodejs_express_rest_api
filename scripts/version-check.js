#!/usr/bin/env node
const { assertCompatibleNode, RUNTIME } = require("../src/version/runtime");
try {
  const info = assertCompatibleNode();
  console.log(JSON.stringify({ ok: true, runtime: RUNTIME, host: info }, null, 2));
} catch (err) {
  console.error(String(err && err.message ? err.message : err));
  process.exit(1);
}
