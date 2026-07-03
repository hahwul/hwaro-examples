+++
title = "local Keyword Used Outside a Function"
description = "local is not defined by POSIX at all; dash and busybox ash accept it as an extension only inside a function body, and reject it anywhere else."
date = "2026-01-15"
weight = 60
toc = true
[extra]
code = "AN342"
severity = "error"
category = "portability"
+++

`local` is one of the more confusing portability traps because it half
works in more places than it fully works. POSIX never defines it; `dash`
and `busybox ash` support it as a widely adopted extension, but only
inside a function body — at the top level of a script it is a syntax
error under those shells even though bash accepts it there too, silently
creating a variable with no scoping effect. Anthracite raises AN342 for
either misuse.

<!-- more -->

## What it flags

```sh
#!/bin/sh
local build_dir="/tmp/build-$$"

prepare() {
  rm -rf "$build_dir"
  mkdir -p "$build_dir"
}
```

Under bash this runs, and `build_dir` behaves like an ordinary global
variable — the `local` keyword is simply wasted. Under `dash`, the exact
same script exits immediately with `local: not in a function`, before
`prepare` is ever defined, let alone called.

## The fix

```sh
#!/bin/sh
build_dir="/tmp/build-$$"

prepare() {
  rm -rf "$build_dir"
  mkdir -p "$build_dir"
}
```

Move the declaration inside a function if it should be scoped, or drop
`local` entirely if it is meant to be a script-wide variable — at the top
level there is no function scope for the keyword to create in the first
place, in any shell.

## Suppressing a finding

```sh
run() {
  local IFS=,  # anthracite: disable=AN342 -- confirmed inside run(), false positive from nested heredoc parsing
  ...
}
```

## See also

- [Non-POSIX Test Operator in a /bin/sh Script](/rules/an301-non-posix-test-operator/) — the other rule that only fires under a `#!/bin/sh` shebang.
- [Rules index](/rules/) — the full manual, evaluation order AN1xx through AN3xx.
