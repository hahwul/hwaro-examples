+++
title = "The task API"
description = "Every attribute a task table accepts: inputs, outputs, cmd, deps, sandbox, env, and fetch."
date = "2025-11-20"
weight = 3
toc = true

[extra]
node = "ref:task"
+++

A task is a `[task.<name>]` table in `maru.toml`. This page documents every
attribute a task accepts and how each one participates in the cache key. Unless
noted, every field is optional.

<!-- more -->

## Core attributes

```toml
[task.bundle]
inputs  = ["src/**/*.js", "package.json"]
outputs = ["dist/bundle.js", "dist/bundle.js.map"]
cmd     = "esbuild src/index.js --bundle --outfile=dist/bundle.js"
deps    = ["install"]
```

| Field | Type | Meaning |
| --- | --- | --- |
| `inputs` | glob list | Files made visible to the command; part of the key. |
| `outputs` | glob list | Files the command must produce; anything else is rejected. |
| `cmd` | string | The command to run, after variable expansion; part of the key. |
| `deps` | task list | Explicit ordering when there is no file dependency to infer it. |

Most ordering is inferred: if one task's `inputs` overlap another's `outputs`,
maru adds the edge for you. Use `deps` only for side-effecting tasks that share
no files, such as a database migration that a test task must follow.

## Execution attributes

```toml
[task.render]
sandbox = "strict"          # strict (default) | loose
network = false             # true only for declared fetches
timeout = "5m"              # fail the task if it runs longer
retries = 0                 # re-run on failure, for genuinely flaky tools
```

`sandbox = "loose"` disables input isolation and is meant only for temporary
debugging — maru prints a warning on every loose task so one never survives into
a committed build.

## Environment

```toml
[task.render.env]
allow = ["LANG", "TZ"]                 # pass these through from the caller
set   = { NODE_ENV = "production" }     # define these inside the sandbox
```

Both `allow` and `set` are folded into the cache key, so a task keyed with
`NODE_ENV=production` will not reuse an entry built with `NODE_ENV=test`.

## Fetching

```toml
[task.icons]
outputs = ["vendor/icons.zip"]
fetch   = "https://example.com/icons-3.1.zip"
digest  = "blake3:5d9c…f0a2"
network = true
```

A task with a `fetch` downloads the URL, verifies it against `digest`, and treats
the result as a normal output. The `digest` — not the URL — is what enters the
key, so the fetch is reproducible even if the URL later changes. A `fetch` task
may not also declare `cmd`; it does exactly one thing. See the
[hermetic guide](/guides/hermetic/) for why network access is opt-in and
why every fetch must be pinned.
