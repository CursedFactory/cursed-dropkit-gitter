---
description: Triage failing GitHub Actions and babysit reruns to green
agent: gitter_babysitter
---

Use the `gitter_gha_babysit` skill.

Goal:

- Monitor GitHub Actions reruns without parent timeout.
- Provide concise status and escalation guidance.

Process:

1. List recent runs for the target branch (`gh run list --branch <branch> --limit 10`).
2. Inspect the target run (`gh run view <run-id>`).
3. Watch live progress via PTY (`gh run watch <run-id> --interval 10`).
4. If failed, collect logs (`gh run view <run-id> --log-failed`).
5. Route git submission steps through `gitter_commit` + `@gitter_agent`.

Return:

- Run IDs inspected and watched
- Current CI state (green/failing/blocked)
- Failed jobs and first failure signal (if failing)
- Clear next action
