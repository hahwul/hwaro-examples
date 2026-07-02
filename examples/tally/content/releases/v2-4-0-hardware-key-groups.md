+++
title = "Hardware-key groups and vault templates"
date = "2026-05-28"
description = "Register several security keys under a named group, and stamp new vaults from reusable templates."
[extra]
version = "v2.4.0"
security = false
codename = "Keyring"
+++

Version 2.4.0 is a feature release. If you carry more than one hardware key, this
is the update that stops you from enrolling each of them, one at a time, into
every vault you own. You can now define a **key group** once and attach it to any
vault. It contains no security fixes, so upgrading is optional &mdash; but the
migration is painless and reversible.

<!-- more -->

## Added

- **Hardware-key groups.** Bundle a primary key and its backups under a single
  name, then unlock any vault the group is attached to with any member. Define a
  group in `~/.config/tally/keys.toml`:

  ```toml
  [group.daily]
  label = "Daily carry"
  keys = [
    "fido2:0x8f21…a4",   # YubiKey 5C
    "fido2:0x1c07…9d",   # backup in the safe
  ]
  ```

- **Vault templates.** Stamp a new vault with a predefined folder tree and
  policy. `tally vault new --template work` seeds folders, sets the auto-lock
  timeout, and requires a group with at least two keys.

## Changed

- The unlock prompt now names which key it is waiting for, so you are not left
  guessing which device to tap when a group has several members.
- `tally doctor` reports each vault's key group and flags any group that has
  fallen to a single enrolled key.

## Upgrading

Vault files written by 2.4.0 stay readable by 2.3.x, so a staged rollout across
machines is safe. Run `tally migrate keys` once to fold existing per-vault keys
into a `default` group; pass `--dry-run` first to preview the change.
