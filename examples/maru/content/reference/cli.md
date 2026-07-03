+++
title = "The maru CLI"
description = "Every subcommand, from build and explain to the cache and graph tools."
date = "2025-08-08"
weight = 1
toc = true

[extra]
node = "ref:cli"
+++

Every maru workflow goes through a single binary. Commands are grouped into
building, inspecting, and cache management. Global flags apply everywhere;
`maru <command> --help` prints the specifics.

<!-- more -->

## Building

```sh
maru build [TARGET...]     # build the given targets, or all if omitted
maru run TARGET            # build TARGET, then execute its primary output
maru watch [TARGET...]     # rebuild on change, using the same cache
```

`build` is the workhorse. With no target it builds every leaf in the graph; with
one or more targets it builds only those and their transitive dependencies.
`watch` reuses the on-disk cache, so the first rebuild after an edit touches only
the affected subgraph.

## Inspecting

```sh
maru graph [--format dot|json]   # print the resolved task graph
maru explain TARGET              # show TARGET's cache key and inputs
maru status                      # list tasks and whether they are cached
maru doctor                      # check environment, cache, and sandbox support
```

`explain` is the tool you reach for when a task rebuilds unexpectedly: it prints
the full key and marks the first input whose digest differs from the cached run.

## Cache management

```sh
maru cache stats            # hit rate, entry count, and total size
maru cache gc [--keep AGE]  # prune entries older than AGE, e.g. 20d
maru cache push TARGET      # upload results to the configured remote
maru cache verify           # re-hash entries and drop any that are corrupt
```

## Global flags

| Flag | Effect |
| --- | --- |
| `--jobs N` | Run up to `N` tasks in parallel. Defaults to the CPU count. |
| `--no-cache` | Ignore cached results for this run; still writes new entries. |
| `--check-hermetic` | Run each task twice and compare outputs byte for byte. |
| `--base DIR` | Treat `DIR` as the project root instead of the current directory. |
| `--quiet` / `--verbose` | Lower or raise log detail. |

Exit codes are stable: `0` success, `1` a task failed, `2` a configuration or
graph error (a cycle, an undeclared output), and `3` a sandbox violation. CI
systems can branch on these without parsing output.
