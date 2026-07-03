+++
title = "Anthracite"
description = "Static analysis for shell scripts, documented rule by rule in a coal-dark terminal"
template = "home"
+++

Anthracite reads a shell script the way a careful reviewer does: token by
token, tracing every expansion back to where it was assigned, and flagging
the moment a quoting habit or a bashism could turn a deploy script into an
incident. It ships as a single static binary, runs in under a second on a
typical repository, and speaks a diagnostic format built for terminals —
not a web dashboard you have to tab away to read.

<!-- more -->

## What it checks

Every rule in the manual below falls into one of three families:

- **Quoting bugs** — expansions left bare where word-splitting or globbing
  can rewrite an argument list underneath you.
- **Unsafe expansions** — variables read before they are known to be set,
  or arrays flattened in a way that silently drops empty elements.
- **Portability traps** — bashisms and GNU-only flags that pass locally and
  fail the moment `/bin/sh` resolves to `dash` or `posix` in production.

The session above is a real example: three findings in one deploy script,
caught before any of them reached a production host.

## Try it against your own scripts

Point it at a file, a directory, or your whole repository — Anthracite
walks the tree, skips anything that isn't a shell script by shebang or
extension, and exits non-zero the moment it finds an error-level finding,
which makes it a one-line addition to a CI job. Read
[Installation](/installation/) for the three ways to get the binary onto a
machine, or scroll the rule manual below to see exactly what gets flagged
and why.
