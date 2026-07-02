+++
title = "Passkey unlock and Wayland autotype"
date = "2025-11-12"
description = "Unlock with a resident FIDO2 credential (passkey) and autotype natively on Wayland compositors."
[extra]
version = "v2.2.0"
security = false
codename = "Meadow"
+++

Version 2.2.0 widens what counts as a hardware key. Alongside touch-to-unlock
security keys, Tally now accepts **resident FIDO2 credentials** &mdash; passkeys
stored on the authenticator itself &mdash; so a single tap both selects and
proves the key with no username step. Linux users on Wayland finally get
first-class autotype.

<!-- more -->

## Added

- **Passkey unlock.** Enroll a resident credential and Tally discovers it at
  unlock time. Enrollment prints the credential id so you can label it later:

  ```console
  $ tally key enroll --resident --vault personal
  Touch your authenticator to create a passkey…
  enrolled: fido2:0x1c07…9d  (resident, hmac-secret)
  ```

  The vault key is wrapped with the authenticator's `hmac-secret` output, so the
  passkey never leaves the device and the vault stays useless without it.

- **Wayland autotype** via the virtual-keyboard protocol, with a portal-based
  fallback for compositors that gate synthetic input.

## Changed

- The unlock window remembers the last-used key per vault and offers it first.
- `tally key list` now shows transport (USB, NFC, internal) and whether a
  credential is resident.

## Fixed

- NFC keys are no longer dropped mid-ceremony on slow readers.
- The tray icon reflects the locked state immediately after an auto-lock.

## Upgrading

No migration is required. Passkey unlock is opt-in per vault; existing
touch-only keys keep working exactly as before.
