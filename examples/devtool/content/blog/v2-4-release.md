+++
title = "devtool 2.4 is out"
date = "2025-04-12"
description = "Faster cold starts, parallel plugin execution, and a new plan command"
+++

The 2.4 release lands today after roughly six weeks of work. The headline change is a rewritten plugin scheduler that runs independent plugins in parallel. On the benchmark suite, full builds drop by nineteen percent on average and by thirty-four percent on projects with five or more plugins.

## Parallel plugin execution

Earlier versions executed plugins serially within each hook. Profiling against real projects showed that most plugins were either I/O bound or operated on disjoint file sets, which made the serial constraint unnecessary. The new scheduler analyzes the file globs each plugin declares and dispatches non-overlapping work onto a worker pool sized to the available cores.

Plugins that need ordering can declare an explicit dependency. The scheduler honors the declaration and falls back to serial execution for that pair. Existing plugins continue to work unchanged because the default behavior is conservative.

## The plan command

`devtool plan` is new in this release. It prints the resolved configuration, the list of files that will be read, the plugin call graph, and the capabilities each plugin will request. No files are modified. The command is intended for code review and CI gating where reviewers want a record of what a build would do before merging the change that triggers it.

```bash
$ devtool plan --profile staging
profile: staging
plugins: tailwind -> sitemap -> html-minify
capabilities: fs.read, net.fetch
sources: 412 files (3.2 MB)
```

## Smaller wins

Cold start time dropped from twenty-eight to nineteen milliseconds after moving TOML parsing behind a lazy initializer. The Windows installer now signs the MSI bundle. Error messages from the Lua runtime include source line numbers from the plugin file rather than the runtime stub.

The full changelog is available on GitHub. Upgrade with `brew upgrade devtool` or `scoop update devtool`.
