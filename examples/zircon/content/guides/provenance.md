+++
title = "Signing and provenance"
description = "Attach a provenance attestation to every publish, and make Zircon refuse installs that don't verify."
date = "2025-03-18"
weight = 3
toc = true
tags = ["provenance", "security", "signing"]
[extra]
level = "Security"
minutes = 9
+++

A provenance attestation is a signed statement: this exact tarball was
built from this exact commit, by this exact builder identity, at this
exact time. Zircon generates one automatically for every publish made
through a CI token, and lets you attach one by hand for anything
published from a laptop. <!-- more -->

## What gets signed

```json
{
  "subject": { "name": "@acme/http-kit", "version": "4.2.0" },
  "builder": { "id": "ci://github-actions/acme/http-kit" },
  "source": {
    "repo": "https://github.com/acme/http-kit",
    "commit": "9f2c1a4e7b3d5f6a8c0e2b4d6f8a0c2e4b6d8f0a"
  },
  "signed_at": "2025-03-18T09:14:02Z"
}
```

The statement is signed with the publishing identity's ed25519 key and
stored alongside the package version, not embedded in the tarball — so
verification never requires unpacking untrusted archives first.

## Requiring verification on install

```bash
zircon policy set require-provenance --scope org --enforce
```

With this policy enabled, `zircon add` on {{ pkg(name="@acme/http-kit") }}
fails closed if the attestation is missing or the signature doesn't
match a trusted builder identity — there is no "warn but continue" mode
for a policy this consequential.

```bash
$ zircon add @acme/http-kit
✗ provenance verification failed for @acme/http-kit@4.2.0
  signature does not match any trusted builder identity
  install blocked by org policy require-provenance
```

## Verifying by hand

```bash
zircon verify @acme/http-kit --provenance
```

This prints the decoded attestation, the builder identity that signed
it, and whether that identity is currently trusted — useful when
auditing a dependency tree after the fact, not just at install time.

{% alert(type="note") %}
Trusted builder identities are configured per-org under `zircon trust`.
Rotate a compromised builder key by revoking its identity — every
attestation it signed becomes untrusted immediately, without needing to
re-sign or republish the packages themselves.
{% endalert %}

Provenance answers "is this what it claims to be." The next guide,
[access control and tokens](/guides/access-control/), answers "who was
allowed to publish it in the first place."
