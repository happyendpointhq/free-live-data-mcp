import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { loadCatalog } from "../src/catalog.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".git"].includes(entry.name)) continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else files.push(file);
  }
}
walk(root);
const secrets = Object.entries(process.env)
  .filter(
    ([name, value]) => /TOKEN|KEY|SECRET/.test(name) && value?.length >= 16,
  )
  .map(([, value]) => value);
let markdownLinks = 0;
for (const file of files) {
  const relative = path.relative(root, file);
  assert(
    !/^\.env(?:\.|$)/.test(path.basename(file)) || relative === ".env.example",
    "Private environment file must not be shipped",
  );
  const text = fs.readFileSync(file, "utf8");
  assert(!text.includes("\u2014"), `Em dash in ${relative}`);
  assert(
    !/https?:\/\/[^\s"'<>]*\.workers\.dev/i.test(text),
    `Private infrastructure URL in ${relative}`,
  );
  assert(
    !/https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?/i.test(text),
    `Local server URL in ${relative}`,
  );
  assert(
    !/\b(?:ghp_|github_pat_)[a-zA-Z0-9_]{20,}\b/.test(text),
    `GitHub credential in ${relative}`,
  );
  for (const secret of secrets)
    assert(!text.includes(secret), `Configured secret in ${relative}`);
  if (file.endsWith(".json")) JSON.parse(text);
  if (file.endsWith(".md")) {
    for (const match of text.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) {
      const target = match[1].split("#")[0];
      if (!target || /^[a-z]+:/i.test(target)) continue;
      assert(
        fs.existsSync(
          path.resolve(path.dirname(file), decodeURIComponent(target)),
        ),
        `${relative}: broken local link`,
      );
      markdownLinks++;
    }
  }
}
const catalog = loadCatalog();
const allowed = new Set(catalog.apis.map((api) => api.id));
assert.deepEqual(new Set(fs.readdirSync(path.join(root, "apis"))), allowed);
for (const id of [
  "redfin",
  "deliveroo",
  "dior",
  "bayut-2",
  "snapdeal",
  "cutshort",
  "similarweb",
  "semrush",
])
  assert(
    !catalog.apis.some((a) => a.id === id || a.id === id + "-api"),
    `Excluded API: ${id}`,
  );
for (const api of catalog.apis) {
  const readme = fs.readFileSync(
    path.join(root, "apis", api.id, "README.md"),
    "utf8",
  );
  assert(readme.includes(api.host));
  assert(readme.includes(api.rapidApiUrl));
  assert(readme.includes("operations.json"));
}
console.log(
  `Verified ${catalog.apis.length} API folders, ${files.length} public files and ${markdownLinks} local documentation links. No credentials, private infrastructure URLs or em dashes found.`,
);
