#!/usr/bin/env bun

import { findRepoRoot } from "./helpers/run_root.sh.ts";

const repoRoot = findRepoRoot(import.meta.dir);
const rootLib = await import(`${repoRoot}/index.ts`);
const pluginLib = await import(`${repoRoot}/plugin.ts`);

if (!("GitterDropkitPlugin" in rootLib)) {
  throw new Error("Missing export: GitterDropkitPlugin");
}

if (typeof rootLib.GitterDropkitPlugin !== "function") {
  throw new Error("GitterDropkitPlugin must be a plugin function");
}

if ("createGitterDropkitPlugin" in rootLib) {
  throw new Error("Root module should not export createGitterDropkitPlugin");
}

if (!("createGitterDropkitPlugin" in pluginLib)) {
  throw new Error("Missing export: createGitterDropkitPlugin");
}

console.log("Smoke import passed");
