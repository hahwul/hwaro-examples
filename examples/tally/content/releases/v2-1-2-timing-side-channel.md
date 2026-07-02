+++
title = "Close a timing side channel in the vault index"
date = "2025-09-03"
description = "A security patch: vault-index lookups were not constant-time and could leak whether an entry existed. Upgrade recommended."
[extra]
version = "v2.1.2"
security = true
codename = "Level"
+++

Version 2.1.2 is a **security patch**. A researcher reported that lookups against
the in-memory vault index short-circuited on the first non-matching byte, so the
time a lookup took leaked whether a given entry name existed &mdash; a weak but
real oracle for anyone who could measure it on a shared machine. This release
makes index comparisons constant-time. Upgrading is recommended for everyone.

<!-- more -->

## Security

- **TAL-2025-006 &mdash; non-constant-time index comparison (low/moderate).** Entry
  lookups now compare full-length digests in constant time regardless of where
  the first difference falls, removing the timing distinction between "no such
  entry" and "entry exists but wrong". Reported responsibly by an external
  researcher; see the [Security](@/security.md) page for the disclosure timeline.
- Search queries are salted per session so repeated identical queries do not
  produce a stable, correlatable access pattern in memory.

## Fixed

- A rare panic when unlocking a vault whose index had exactly one entry.
- `tally export --json` now emits a trailing newline, fixing pipelines that
  choked on the missing terminator:

  ```console
  $ tally export --json --vault personal | jq '.entries | length'
  248
  ```

## Upgrading

Drop-in for any 2.1.x install; no schema or key changes. If you run Tally on a
multi-user host, upgrade promptly &mdash; that is the environment where the
timing oracle was measurable.
