+++
title = "About Tally"
description = "Why an offline-first password manager exists, and the principles behind every release."
+++

Tally is a password manager for people who would rather their secrets never
touch a server they do not control. There is no account to create, no cloud
vault to breach, and no recovery email that can be phished. A vault is a single
encrypted file on your disk, and the only thing that opens it is a hardware key
you can hold in your hand.

This site is the project's changelog. It is deliberately plain: a dotted spine
of padlocks running down the page, one per release, filled in solid whenever a
release closed a security issue. You should be able to glance at the timeline
and know, without reading a word, which updates were housekeeping and which were
patches you cannot skip.

## Principles

- **Offline by default.** The core feature set &mdash; storing, searching, and
  autotyping credentials &mdash; never needs a network. Sync is opt-in and runs
  over transports you choose, using encrypted change-logs (see release 2.3.0).
- **Hardware unlock, not passwords about passwords.** A master password is just
  another secret to steal. Tally wraps the vault key with a FIDO2 authenticator,
  so the vault is inert without the physical key.
- **Legible security.** Every release states its impact in plain language. If a
  version fixed a vulnerability, it says so, with an identifier and a date.
- **Boring on purpose.** We ship slowly, keep the format documented, and avoid
  features that would tempt a vault off your device.

## Who makes it

Tally is built by Tally Labs, a small, fictional team assembled for the Hwaro
examples gallery. Names, versions, and advisories on this site are invented to
demonstrate a calm, security-forward changelog &mdash; but the engineering
practices they describe are the real ones we would recommend.
