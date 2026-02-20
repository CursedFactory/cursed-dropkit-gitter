# cursed-dropkit-gitter

Dropkit package for git and GitHub workflows, with `gitter_`-prefixed agents, commands, and skills.

## Included content

- Agents:
  - `gitter_agent`
  - `gitter_babysitter`
- Commands:
  - `gitter_commit_all`
  - `gitter_gha_babysit`
- Skills:
  - `gitter_commit`
  - `gitter_gha_babysit`

## File tree

```text
.
├── index.ts
├── plugin.ts
├── files/
│   ├── agent/
│   │   ├── gitter_agent.md
│   │   └── gitter_babysitter.md
│   ├── command/
│   │   ├── gitter_commit_all.md
│   │   └── gitter_gha_babysit.md
│   └── skills/
│       ├── gitter_commit/
│       │   └── SKILL.md
│       └── gitter_gha_babysit/
│           └── SKILL.md
├── scripts/
└── package.json
```

## Style templates included

Imported from `cursed-fab` guidance and applied in git workflows:

- Commit title: `[NO-ISSUE] {System} // {Desc} (Tags: TAG1, TAG2)`
- Branch naming: `vfp/agent/{branch_name}`
- PR body sections:
  - `## Scope`
  - `## Risks`
  - `## Verification`

## Use in OpenCode plugin config

```ts
import { createGitterDropkitPlugin } from "@cursed-factory/dropkit-gitter";

export const GitterPlugin = createGitterDropkitPlugin({
  service: "dropkit-gitter",
  namespace: "dropkit-gitter",
});
```

Then register that plugin in your `opencode.json` plugin list.

## Scripts

- `bun run check`
- `bun run test`
- `bun run build`
- `bun run ci`
- `bun run version:set -- 0.1.1`
- `bun run publish:npm:dry-run`
