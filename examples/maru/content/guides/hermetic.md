+++
title = "Hermetic task graphs"
description = "Sandboxed inputs, a scrubbed environment, and no network — the guarantees that make a maru build reproducible."
date = "2025-07-15"
weight = 4
toc = true

[extra]
node = "sandbox:exec"
+++

Caching is only safe if a task's declared inputs are its *only* inputs. maru
enforces that with a sandbox: every task runs against a tree containing exactly
what it asked for, and nothing else is reachable.

<!-- more -->

## The sandbox

Before running a command, maru assembles a temporary root from the task's
`inputs`, mounts it read-only, and redirects the task's writable area to a
staging directory. When the command finishes, maru checks that every declared
output exists and that nothing was written elsewhere. A task that tries to read
`/etc/hostname` or a sibling file it never declared simply fails to find it.

```toml
[task.render]
inputs  = ["content/**/*.md", "templates/*.html"]
outputs = ["public/**"]
cmd     = "site render"
sandbox = "strict"   # default; "loose" only for debugging
```

## A scrubbed environment

Environment variables leak machine state into builds, so maru clears them and
passes through only what a task names:

```toml
[task.render.env]
allow = ["LANG", "TZ"]
set   = { NODE_ENV = "production" }
```

Anything not listed is absent inside the sandbox. A task cannot behave one way
because `DEBUG=1` happened to be exported in your shell and another way in CI.

## No network, on purpose

By default a task has no network access. Fetching a dependency mid-build is the
classic way to make a graph non-reproducible: the remote can change, disappear,
or rate-limit you. Instead, declare fetches as their own tasks with a pinned
digest, so the fetched bytes become a normal, content-addressed input:

```toml
[task.deps]
outputs = ["vendor/lib.tar.gz"]
fetch   = "https://example.com/lib-2.4.tar.gz"
digest  = "blake3:5d9c…f0a2"
network = true
```

maru downloads the archive once, verifies it against `digest`, and caches it
like any other output. Every task downstream depends on those exact bytes, not
on the URL being reachable. Run `maru build --check-hermetic` to have maru run
each task twice in independent sandboxes and confirm the outputs are
byte-identical — the strongest signal that your graph is truly hermetic.
