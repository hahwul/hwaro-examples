+++
title = "Fix a clipboard-clear race that could strand a secret"
date = "2026-04-09"
description = "A security patch: under load, the clipboard could keep a copied password past its clear timeout. Upgrade promptly."
[extra]
version = "v2.3.1"
security = true
codename = "Sweep"
+++

Version 2.3.1 is a **security patch**. Under heavy system load, the timer that
wipes a copied password from the clipboard could be preempted and never fire,
leaving a secret on the clipboard indefinitely. We recommend upgrading as soon
as your platform's package is available. There are no schema changes.

<!-- more -->

## Security

- **TAL-2026-002 &mdash; clipboard clear could be skipped (moderate).** The clear
  routine ran on a best-effort timer that a busy scheduler could drop. Copies
  now register a monotonic deadline that is re-checked on every clipboard read
  and on app focus, and the copied value is held in locked memory until wiped.
- Clearing now also fires on screen lock and on suspend, not only on the timeout.

## Fixed

- The `--clip-timeout` value set per vault is honored again; a regression in
  2.3.0 fell back to the global default. Verify your setting with:

  ```console
  $ tally config get clip-timeout --vault work
  clip-timeout = 20s   (source: vault)
  ```

- Autotype no longer leaves a trailing character on very fast key sequences.

## Upgrading

Drop-in replacement for any 2.3.x install. After upgrading, confirm the fix is
active &mdash; `tally doctor` prints `clipboard: monotonic clear (ok)` when the
patched path is in use. If you script Tally, note that `tally clip` now exits
non-zero if it cannot arm the clear deadline, rather than copying unprotected.
