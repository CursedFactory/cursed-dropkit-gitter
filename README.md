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

Add the package name directly to your `opencode.json` plugin list.

```json
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": ["@cursed-factory/dropkit-gitter"]
}
```

The package root exports `GitterDropkitPlugin`, so OpenCode can load it directly from npm.

## Copyable agent prompts

Use these prompts if you want an agent to install or uninstall the plugin in your global OpenCode config.

### Install globally

```text
Add `@cursed-factory/dropkit-gitter` to the `plugin` array in `~/.config/opencode/opencode.json`.
If the file does not exist, create it with the OpenCode schema and a `plugin` array.
If the `plugin` array does not exist, add it.
Preserve any existing config entries and avoid duplicates.
```

### Uninstall globally

```text
Remove `@cursed-factory/dropkit-gitter` from the `plugin` array in `~/.config/opencode/opencode.json`.
If the package is not present, leave the config unchanged.
Preserve all other config entries.
```

## Customize the plugin manually

If you want to override `service`, `namespace`, or inclusion flags, import the factory from the subpath instead.

```ts
import { createGitterDropkitPlugin } from "@cursed-factory/dropkit-gitter/plugin";

export const GitterPlugin = createGitterDropkitPlugin({
  service: "dropkit-gitter",
  namespace: "dropkit-gitter",
});
```

## Scripts

- `bun run check`
- `bun run test`
- `bun run build`
- `bun run ci`
- `bun run version:set -- 0.1.1`
- `bun run publish:npm:dry-run`
