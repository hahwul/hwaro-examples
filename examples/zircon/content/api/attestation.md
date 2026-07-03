+++
title = "Attestation API"
description = "GET the decoded provenance attestation and trust status for a specific published version."
date = "2025-06-09"
weight = 3
toc = true
tags = ["api", "provenance", "security"]
[extra]
method = "GET"
endpoint = "/api/v1/packages/:name/versions/:version/attestation"
minutes = 6
+++

`zircon verify` calls this endpoint to decide whether a version passes
policy; it is also the endpoint to call from a custom audit tool that
wants to check provenance across a whole dependency tree without
shelling out to the CLI for every package. <!-- more -->

## Request

```bash
curl https://pkg.internal.example/api/v1/packages/@acme/http-kit/versions/4.2.0/attestation \
  -H "Authorization: Bearer $ZIRCON_TOKEN"
```

## Response

```json
{
  "subject": { "name": "@acme/http-kit", "version": "4.2.0" },
  "builder": { "id": "ci://github-actions/acme/http-kit", "trusted": true },
  "source": {
    "repo": "https://github.com/acme/http-kit",
    "commit": "9f2c1a4e7b3d5f6a8c0e2b4d6f8a0c2e4b6d8f0a"
  },
  "signature_valid": true,
  "signed_at": "2025-06-08T11:47:33Z"
}
```

`"builder.trusted"` reflects live trust configuration, not a cached
judgment from publish time — if a builder identity is revoked after the
fact, this field flips to `false` on the next request even though
`"signature_valid"` (a pure cryptographic check) stays `true`. Policy
decisions should key off `trusted`, not `signature_valid` alone.

## No attestation on record

```json
{
  "error": "attestation_not_found",
  "message": "no provenance attestation was submitted for this version"
}
```

A `404` here for a package like {{ pkg(name="ferrous-cache") }} means it
was published without provenance — either before your org enabled
`require-provenance`, or through a path that skipped it. It is not, by
itself, evidence the package is unsafe, only that it can't be verified
this way.

Together, [publish](/api/publish/), [resolve](/api/resolve/), and this
endpoint cover everything the `zircon` CLI does over HTTP — there is no
private API the command-line tool uses that this reference doesn't
document.
