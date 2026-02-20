---
name: gitter_gha_babysit
description: Triage failing GitHub Actions runs, apply focused fixes, and watch reruns with a repeatable loop.
---

## What I do

- Standardize CI recovery loop: inspect failed run -> fix -> verify -> submit -> watch rerun.
- Prefer `gh` CLI for run discovery/log extraction and PTY watch for long sessions.
- Keep fixes minimal and directly tied to failing logs.
- Route git submission through `gitter_commit` + `@gitter_agent`.

## When to use me

Use this when:

- The user asks to fix CI or make GitHub Actions green.
- A branch run failed and we need iterative repair.
- We need repeatable run triage and watch behavior.

## Workflow

1. **List recent runs**
   - `gh run list --branch <branch> --limit 10`
2. **Inspect failed logs**
   - `gh run view <run-id> --log-failed`
3. **Patch root cause**
   - Fix only what the failing logs require.
4. **Verify locally**
   - Run targeted checks for failing path.
5. **Submit update**
   - Use `gitter_commit` and `@gitter_agent` for commit/push flow.
6. **Watch rerun via PTY**
   - `gh run watch <new-run-id> --interval 10`
7. **Repeat until green**

## Guardrails

- Do not guess root cause without failed logs.
- Avoid broad refactors during CI recovery unless explicitly requested.
- If blockers are secrets, permissions, or outages, escalate with clear blocker notes.
