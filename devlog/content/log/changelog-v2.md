+++
title = "Changelog: Project Atlas v2.0"
date = "2025-06-10"
tags = ["changelog", "atlas", "release"]
description = "Release notes for Project Atlas v2.0.0"
+++

{{< version number="2.0.0" >}} — Released 2025-06-10

## What's new

### Parallel build pipeline

The build system now processes files in parallel using a fiber pool. This reduces build times by **60-70%** on multi-core machines.

```crystal
ParallelHelper.execute(files) do |file|
  process(file)
end
```

### New configuration format

We've migrated from YAML to TOML for the config file. The new format is stricter but catches errors earlier.

### Breaking changes

- `config.yml` is no longer supported — migrate to `config.toml`
- The `--legacy` flag has been removed
- Minimum Crystal version bumped to 1.12

## Migration guide

1. Rename `config.yml` to `config.toml`
2. Convert YAML syntax to TOML (see [converter tool](https://example.com))
3. Run `atlas check` to validate your new config

{{< alert type="warning" message="Back up your <code>config.yml</code> before migrating. The converter is one-way." >}}

## Bug fixes

- Fixed memory leak in file watcher (#142)
- Corrected permalink generation for nested sections (#156)
- Resolved feed generation crash when posts have no date (#161)
