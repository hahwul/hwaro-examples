+++
title = "Unquoted Variable Expansion"
description = "A bare $variable expansion in command position can word-split on IFS and glob against the filesystem before the command ever runs."
date = "2025-01-14"
weight = 10
toc = true
[extra]
code = "AN101"
severity = "error"
category = "quoting"
+++

Anthracite flags any `$variable` or `${variable}` expansion that appears
outside double quotes in a position where the shell performs word splitting
and pathname expansion — which is to say, almost anywhere on a command
line. This is the single most common finding in the corpus we test
against: it accounts for roughly a third of all AN1xx hits in real
deploy scripts.

<!-- more -->

## What it flags

```sh
rm -rf $BUILD_DIR/*
cp $SRC $DEST
```

Both lines look correct until `$BUILD_DIR` contains a space, or `$SRC`
happens to expand to something that matches more than one file after glob
expansion runs. The shell does not know your intent was "one path" — it
splits the expansion on `IFS` and then expands any remaining glob
characters, handing `rm` or `cp` an argument list you never wrote.

## The fix

```sh
rm -rf "${BUILD_DIR:?}"/*
cp "$SRC" "$DEST"
```

Quoting collapses the expansion back to a single word, exactly as it was
assigned. The `:?` in the first example is a second, independent
safeguard: it aborts the script with an error if `BUILD_DIR` is ever
empty, which turns a catastrophic `rm -rf /*` into a controlled failure
instead of a silent one.

## Suppressing a finding

A single line can be exempted with a trailing directive when the
expansion is deliberately unquoted — for example, when a variable holds
multiple space-separated flags on purpose:

```sh
$EXTRA_FLAGS make build  # anthracite: disable=AN101 -- intentional word split
```

## See also

- [Unquoted Command Substitution](/rules/an117-unquoted-command-substitution/) — the same failure mode, one layer deeper.
- [Word Splitting on an Unquoted Array Expansion](/rules/an214-word-splitting-unquoted-expansion/) — the array-specific variant.
