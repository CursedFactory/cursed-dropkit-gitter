---
description: Create clean, grouped commits for all current commit-safe changes
agent: gitter_agent
---

Use the `gitter_commit` skill and route commit execution through `@gitter_agent`.

Intent clarification:

- `gitter_commit_all` means commit all commit-safe changes and end with a clean `git status --short`.
- Only leave leftovers when explicitly skipped as unsafe (secrets, credentials, private keys).

Goal:

- Turn the current working tree into a small set of intentional commits.
- End with clean status.

Process:

1. Run one global pass (`git status`, `git diff`, recent `git log`) and produce a giant-diff summary.
2. Propose commit buckets with minimal count.
3. Execute commits bucket-by-bucket with scoped staging.
4. Re-check `git status --short`.
5. If leftovers remain, either commit intentionally or list as skipped with explicit reason.

Style templates (from cursed-fab):

- Commit title: `[NO-ISSUE] {System} // {Desc} (Tags: TAG1, TAG2)`
- Branch name: `vfp/agent/{branch_name}`
- PR body sections:
  - `## Scope`
  - `## Risks`
  - `## Verification`

Rules:

- Prefer as few commits as reasonable while keeping coherent boundaries.
- Do not commit secret-like files.
- Do not push unless explicitly requested.

Return:

- Commit list in order (hash + title + files)
- Any skipped files and why
- Final `git status` summary
