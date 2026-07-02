+++
title = "Security"
description = "How Tally protects a vault, how hardware-key unlock works, and how to report a vulnerability."
+++

Tally's job is to keep a vault unreadable to everyone except the person holding
the key. This page explains the cryptography, the unlock flow, and how to report
a problem. When a release closes a security issue, it earns a solid padlock on
the [releases timeline](releases/) and a numbered advisory in its notes.

## How a vault is protected

A vault is a single file encrypted with **XChaCha20-Poly1305**. The data key is
never stored; it is derived and wrapped as follows:

1. A random 256-bit **data key** encrypts the vault contents.
2. The data key is wrapped by a **key-encryption key** produced by your hardware
   authenticator's FIDO2 `hmac-secret` extension, salted per vault.
3. Optionally, a passphrase is stretched with **Argon2id** (256&nbsp;MiB, 3
   passes by default) and mixed in, so unlock requires *both* the key and the
   phrase.

Because the key-encryption key only exists while the authenticator is present,
copying the vault file gains an attacker nothing.

## Unlocking with a hardware key

At unlock, Tally runs a FIDO2 assertion and uses the returned secret to unwrap
the data key entirely in locked memory:

```console
$ tally open --vault personal
Touch your key to unlock "personal"…
unlocked · 248 entries · auto-lock in 5m
```

The unwrapped key is zeroed on lock, on suspend, and on process exit. Autotype
and clipboard copies inherit the vault's auto-lock and clear timeouts.

## What Tally does not do

- It never sends a vault, an entry, or a telemetry ping over the network.
- It does not offer account recovery &mdash; lose every enrolled key and the
  vault stays sealed. Enroll a backup key and keep it somewhere safe.
- It does not roll its own primitives; cryptography comes from audited libraries.

## Reporting a vulnerability

Email `security@tally.example` with steps to reproduce. We acknowledge reports
within three business days and aim to ship a fix within thirty. Coordinated
disclosure is welcome; we will credit you in the advisory unless you prefer to
stay anonymous. Advisories use the identifier form `TAL-YYYY-NNN` and are linked
from the release that carries the fix.
