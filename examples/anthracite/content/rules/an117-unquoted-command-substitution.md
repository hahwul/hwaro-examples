+++
title = "Unquoted Command Substitution"
description = "$(...) is subject to the same word splitting and globbing as a bare variable, and it is easy to forget because the syntax already looks self-contained."
date = "2025-03-02"
weight = 20
toc = true
[extra]
code = "AN117"
severity = "error"
category = "quoting"
+++

`$(command)` reads as a finished expression — parentheses closed, nothing
left dangling — so it is tempting to treat it as safe on its own. It is
not. Command substitution is expanded and then word-split exactly like a
variable expansion, and Anthracite raises AN117 wherever one sits unquoted
in an argument position.

<!-- more -->

## What it flags

```sh
tag=$(git describe --tags)
docker build -t app:$(git describe --tags) .
files=$(find . -name '*.log')
rm $files
```

The `docker build` line is the sharper case: if `git describe` ever prints
something with a space in it (a detached-HEAD fallback description can),
the tag argument silently becomes two arguments and the build fails on an
unrelated flag-parsing error three tokens later. The `rm $files` line is
worse — a log filename containing a space turns one delete into two, and a
filename containing a glob character turns it into an unbounded one.

## The fix

```sh
tag="$(git describe --tags)"
docker build -t "app:$(git describe --tags)" .
files=$(find . -name '*.log')
printf '%s\n' "$files" | xargs -r rm
```

Quote the substitution at the point of use. For the `find` case, prefer
carrying results through a loop or `xargs -0`-style separation rather than
a single space-joined string, since filenames themselves can contain
whitespace regardless of how carefully the consuming command is quoted.

## Suppressing a finding

```sh
set -- $(cat "$argfile")  # anthracite: disable=AN117 -- deliberate split into positional params
```

## See also

- [Unquoted Variable Expansion](/rules/an101-unquoted-variable-expansion/) — the base case this rule extends.
- [Expansion of a Possibly-Unset Variable](/rules/an228-expansion-of-unset-variable/) — checked separately from quoting.
