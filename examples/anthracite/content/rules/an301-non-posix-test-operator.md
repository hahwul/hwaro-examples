+++
title = "Non-POSIX Test Operator in a /bin/sh Script"
description = "[[ ]], ==, and other bash-only test syntax parse fine under bash but are a syntax error the moment /bin/sh resolves to dash, busybox ash, or posix mode."
date = "2025-10-29"
weight = 50
toc = true
[extra]
code = "AN301"
severity = "error"
category = "portability"
+++

A script that starts with `#!/bin/sh` is making a portability promise:
run me with whatever POSIX-compliant shell this system provides, not
specifically bash. Anthracite checks that promise literally. When it sees
a `#!/bin/sh` shebang, it flags any bashism that a strict POSIX shell will
reject outright — most commonly `[[ ... ]]`, `==` inside `[ ]`, and
`function name {}` declarations.

<!-- more -->

## What it flags

```sh
#!/bin/sh
if [[ "$STAGE" == "prod" ]]; then
  echo "refusing to run in production"
  exit 1
fi
```

This is entirely valid bash. It is also a syntax error under `dash`,
which is `/bin/sh` on Debian and Ubuntu, and under `busybox ash`, which is
`/bin/sh` in most minimal container base images. A script that only ever
gets run with `bash deploy.sh` never notices; the same script invoked as
`./deploy.sh` from a Debian-based CI image or a distroless container fails
before it prints a single line.

## The fix

```sh
#!/bin/sh
if [ "$STAGE" = "prod" ]; then
  echo "refusing to run in production"
  exit 1
fi
```

`[ ]` with a single `=` is POSIX and works identically across `dash`,
`ash`, `ksh`, and `bash`. If the script genuinely needs bash-only
features — arrays, `[[ ]]` pattern matching, `local -n` — the honest fix
is changing the shebang to `#!/usr/bin/env bash`, not silencing the
finding; AN301 exists specifically to keep the shebang and the syntax in
agreement.

## Suppressing a finding

```sh
#!/bin/sh
# anthracite: disable-file=AN301 -- re-execs under bash on line 4, see below
[ -n "$BASH_VERSION" ] || exec bash "$0" "$@"
```

## See also

- [local Keyword Used Outside a Function](/rules/an342-local-outside-function/) — a second common `#!/bin/sh` bashism.
- [Expansion of a Possibly-Unset Variable](/rules/an228-expansion-of-unset-variable/) — frequently found in the same scripts.
