+++
title = "Hardware-Key Enrollment"
description = "Turn on WebAuthn: enrol roaming security keys and platform passkeys, and require a hardware factor per client."
date = "2025-08-22"
weight = 5
toc = true
[extra]
roman = "V"
status = "Normative"
+++

Passwords are a shared secret, and shared secrets leak. WebAuthn replaces them
with a private key that never leaves the authenticator — a roaming security key
on a USB or NFC token, or a platform passkey bound to a laptop or phone.
Corundum treats both through one enrolment ceremony and can require a hardware
factor on a per-client basis.

<!-- more -->

## Enable WebAuthn

The relying party id must be the registrable domain of your issuer, and the
origin must be its exact `https` URL. Get these wrong and browsers will refuse
the ceremony without a useful error, so set them deliberately.

```toml
[webauthn]
rp_id = "example.com"
rp_name = "Example Identity"
origin = "https://id.example.com"
user_verification = "required"
```

## The registration ceremony

Registration proves the user possesses an authenticator and binds its public
key to the account. The server issues a challenge; the authenticator signs it
and returns a fresh credential.

1. The account holder, already signed in, requests a new credential.
2. Corundum returns creation options: a random challenge, the relying party id,
   the user handle, and the algorithms it accepts.
3. The browser invokes the authenticator, which mints a key pair and asks the
   user to confirm with a touch or a biometric.
4. The authenticator returns an attestation object containing the new public
   key and a signature over the challenge.
5. Corundum verifies the signature and the origin, then stores the public key
   and its credential id against the account.

```json
{
  "challenge": "k9Xr2c1v...base64url",
  "rp": { "id": "example.com", "name": "Example Identity" },
  "user": { "id": "gY3f...", "name": "ada@example.com", "displayName": "Ada" },
  "pubKeyCredParams": [
    { "type": "public-key", "alg": -7 },
    { "type": "public-key", "alg": -257 }
  ],
  "authenticatorSelection": { "userVerification": "required", "residentKey": "preferred" },
  "timeout": 60000
}
```

The `alg` values are COSE identifiers: `-7` is ES256, `-257` is RS256. Listing
ES256 first asks authenticators to prefer the smaller elliptic-curve key.

## Authentication

At sign-in the roles reverse. Corundum sends a challenge and the list of
credential ids registered to the account; the authenticator signs the challenge
with the matching private key, and the server verifies it against the stored
public key. Because the private key never leaves the device, there is nothing
on the wire for an attacker to capture and replay.

## Requiring a hardware factor

Some clients guard operations that a phishable factor should never protect. Mark
those clients so that Corundum rejects any session not backed by a verified
hardware credential.

```bash
corundum client update ledger-web --require-hardware-key
```

With this set, a user whose account has only a passphrase is prompted to enrol
a key before the flow completes. Treat the [Security Model](../../security/) as
required reading before you turn this on across a fleet.
