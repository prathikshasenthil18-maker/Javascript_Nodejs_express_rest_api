#!/usr/bin/env node
/**
 * Production build: syntax-check sources, then copy src/ → dist/.
 */
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const src = path.join(root, "src");
const dist = path.join(root, "dist");

const check = spawnSync(process.execPath, [path.join("scripts", "version-check.js")], {
  cwd: root,
  stdio: "inherit",
});
if (check.status !== 0) process.exit(check.status || 1);

function walk(dir) {
  const out = [];
  fs.readdirSync(dir).forEach(function (name) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) out.push.apply(out, walk(full));
    else if (name.endsWith(".js")) out.push(full);
  });
  return out;
}

walk(src).forEach(function (file) {
  const r = spawnSync(process.execPath, ["--check", file], { encoding: "utf8" });
  if (r.status !== 0) {
    console.error(r.stderr || r.stdout);
    process.exit(r.status || 1);
  }
});

fs.rmSync(dist, { recursive: true, force: true });
fs.cpSync(src, dist, { recursive: true });
console.log(JSON.stringify({ build: "ok", outDir: "dist", files: walk(dist).length }));
