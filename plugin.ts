import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildScopedDirectories, createDropkitPlugin } from "cursed-dropkit";

export type CreateGitterDropkitPluginOptions = {
  service?: string;
  namespace?: string;
  includeGlobal?: boolean;
  includeProject?: boolean;
  summaryToolName?: string | false;
};

/// Create a git-focused dropkit plugin using package defaults.
export function createGitterDropkitPlugin(options: CreateGitterDropkitPluginOptions = {}) {
  const packageRoot = dirname(fileURLToPath(import.meta.url));
  const pluginRootDir = join(packageRoot, "files");

  return createDropkitPlugin({
    service: options.service ?? "dropkit-gitter",
    summaryToolName: options.summaryToolName,
    directories: (root) =>
      buildScopedDirectories({
        pluginRootDir,
        root,
        namespace: options.namespace ?? "dropkit-gitter",
        includeGlobal: options.includeGlobal,
        includeProject: options.includeProject,
      }),
  });
}
