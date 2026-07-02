+++
title = "Publish API"
description = "POST a package tarball and its provenance attestation in one request."
date = "2025-05-05"
weight = 1
toc = true
tags = ["api", "publish"]
[extra]
method = "POST"
endpoint = "/api/v1/packages/:name/versions"
minutes = 5
+++

Publishing through the API is what the `zircon add` and package-manager
adapters call under the hood — a single multipart request carrying the
tarball, its metadata, and an optional provenance attestation together,
so a version and its proof of origin can never be published separately.
<!-- more -->

## Request

```bash
curl -X POST https://pkg.internal.example/api/v1/packages/http-kit/versions \
  -H "Authorization: Bearer $ZIRCON_TOKEN" \
  -F "manifest=@package.json" \
  -F "tarball=@http-kit-4.2.0.tgz" \
  -F "attestation=@attestation.json"
```

The `attestation` field is optional unless the org has
`require-provenance` enabled, in which case a publish missing it is
rejected with `422 attestation_required` before the tarball is even
stored.

## Response

```json
{
  "name": "@acme/http-kit",
  "version": "4.2.0",
  "sha256": "9b1f2e...c04a",
  "provenance_verified": true,
  "published_at": "2025-05-05T16:02:11Z"
}
```

A `409 version_exists` response means the version string is already
published — like every registry protocol Zircon mirrors, published
versions are immutable and cannot be overwritten, only yanked.

{% alert(type="note") %}
Publishing {{ pkg(name="@acme/http-kit") }} through this endpoint
directly (rather than through `zircon add`) is the normal path for CI
systems that assemble the attestation themselves from build metadata
already available in the pipeline.
{% endalert %}

Once a version lands, [the resolution API](/api/resolve/) is what
package managers call to find it again.
