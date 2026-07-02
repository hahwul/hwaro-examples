+++
title = "Resolution API"
description = "GET package metadata, dist-tags, and mirrored fallback status for any name in the registry."
date = "2025-05-19"
weight = 2
toc = true
tags = ["api", "resolution"]
[extra]
method = "GET"
endpoint = "/api/v1/packages/:name"
minutes = 5
+++

Every install starts here. This is the endpoint npm, pip, and cargo
adapters call to resolve a name to its available versions, dist-tags,
and — for mirrored namespaces — whether the response came from local
cache or a live upstream fetch. <!-- more -->

## Request

```bash
curl https://pkg.internal.example/api/v1/packages/npm/lodash \
  -H "Authorization: Bearer $ZIRCON_TOKEN"
```

## Response

```json
{
  "name": "lodash",
  "namespace": "npm",
  "dist_tags": { "latest": "4.17.21" },
  "versions": ["4.17.20", "4.17.21"],
  "source": "mirror_cache",
  "upstream_status": "healthy"
}
```

`"source"` is either `"origin"` for a package published directly to
this registry, or `"mirror_cache"` / `"mirror_live"` for a mirrored
namespace — useful for distinguishing "we published this" from
"we're proxying this on your behalf" without a second call.

## Filtering by dist-tag

```bash
curl "https://pkg.internal.example/api/v1/packages/npm/lodash?tag=latest"
```

Requesting a single dist-tag returns just that version's metadata
instead of the full version list, which keeps large packages like
{{ pkg(name="lodash") }} cheap to resolve on every install rather than
shipping hundreds of historical version entries per request.

A `404 not_found` on a mirrored namespace means the upstream registry
also doesn't have it — Zircon does not invent packages that were never
published upstream, it only caches what it fetches. See [the
attestation API](/api/attestation/) for reading provenance on a
specific resolved version.
