#!/usr/bin/env bun

import { findRepoRoot } from "./helpers/run_root.sh.ts";

const repoRoot = findRepoRoot(import.meta.dir);
const lib = await import(`${repoRoot}/index.ts`);

if (!("createGitterDropkitPlugin" in lib)) {
  throw new Error("Missing export: createGitterDropkitPlugin");
}

console.log("Smoke import passed");
