+++
title = "Offline sync with encrypted change-logs"
date = "2026-02-17"
description = "Move a vault between machines with an append-only encrypted change-log. No server, no account, still offline-first."
[extra]
version = "v2.3.0"
security = false
codename = "Ferry"
+++

Version 2.3.0 brings the feature people ask for most without breaking the promise
on the tin: syncing a vault across machines **without a server or an account**.
Tally now writes an append-only, encrypted change-log you can carry on any dumb
transport &mdash; a USB stick, a shared folder, a private git remote. The vault
still lives locally; the log is just a way to replay edits.

<!-- more -->

## Added

- **Encrypted change-logs.** Each edit is recorded as an entry sealed with the
  vault key. Export and import are one command each:

  ```console
  $ tally sync export --vault personal --to /media/key/personal.tlog
  $ tally sync import --vault personal --from /media/key/personal.tlog
  wrote 12 entries · 0 conflicts · vault at rev 341
  ```

- **Conflict resolution** that is deterministic and reviewable: entries are
  ordered by a Lamport clock, and any true conflict is surfaced as a diff you
  approve rather than silently merged.

## Changed

- Key derivation moved to **Argon2id** with retuned defaults (256&nbsp;MiB, 3
  passes) and a per-vault calibration step so unlock stays near one second on
  the slowest machine you enroll.

## Fixed

- Large vaults (10k+ entries) open roughly 40% faster after an index rewrite.
- Autotype window matching is case-insensitive again on X11.

## Upgrading

The change-log format is versioned; a 2.3.0 log will not import into 2.2.x, so
upgrade every machine you sync before exchanging logs. Existing vaults are
re-encrypted with the new KDF parameters on first unlock.
