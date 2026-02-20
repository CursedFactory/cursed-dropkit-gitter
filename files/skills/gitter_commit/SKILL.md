---
name: gitter_commit
description: Route git status, commit grouping, branch prep, and PR handoff through gitter_agent.
---

## What I do

- Route commit-related workflows to `@gitter_agent` with clear context.
- Enforce a clean-ending flow: summarize, commit, verify status.
- Keep branch and PR prep consistent with shared templates.

## When to use me

Use this whenever:

- The user asks for commits or cleanup of the working tree.
- Changes need commit grouping and predictable final status.
- The user requests branch/PR preparation.

## Orchestration pattern

1. **Global pass**: ask `@gitter_agent` for giant-diff summary + commit buckets.
2. **Commit passes**: execute scoped commits per bucket.
3. **Finalize**: verify `git status --short` and report leftovers.
4. **PR prep (optional)**: draft PR title/body from commit intent and risks.

## Templates (from cursed-fab)

- Commit title:
  - `[NO-ISSUE] {System} // {Desc} (Tags: TAG1, TAG2)`
- Branch naming:
  - `vfp/agent/{branch_name}`
- PR body:
  - `## Scope`
  - `## Risks`
  - `## Verification`

## Handoff template

Send `@gitter_agent` context like:

- Goal: <requested outcome>
- Scope: <paths or feature area>
- Strategy: <global summary | scoped commit unit | pr-prep>
- Boundary: <exact files or globs>
- Clean-state requirement: <must end clean | approved leftovers>
- Notes: <tests run, constraints, message style>

## Return contract

- Commit plan or executed commits (hash + title + files)
- Skipped files and reasons
- Final `git status --short` summary
- If PR requested: title + body draft
