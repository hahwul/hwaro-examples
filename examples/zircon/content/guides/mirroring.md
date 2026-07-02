+++
title = "Mirroring upstream registries"
description = "Cache npm, PyPI, and crates.io behind your own registry so builds stay green when upstream doesn't."
date = "2025-02-20"
weight = 2
toc = true
tags = ["mirroring", "npm", "pypi"]
[extra]
level = "Operations"
minutes = 8
+++

A mirror is a namespace that proxies an upstream registry and caches
every version it ever serves. The first request for a package fetches
and stores it; every request after that is served from local storage,
even if the upstream registry is down, rate-limiting you, or has removed
the version entirely. <!-- more -->

## Add a mirror

```bash
zircon mirror add npm --upstream https://registry.npmjs.org
zircon mirror add pypi --upstream https://pypi.org/simple
zircon mirror add crates --upstream https://crates.io
```

Each mirror gets its own namespace under your registry — `npm/lodash`,
`pypi/requests`, `crates/serde`. Package managers that support a single
registry override (npm's `registry`, pip's `index-url`, cargo's
`source.crates-io.replace-with`) resolve everything through the mirror
transparently; nothing in application code changes.

## Caching policy

By default a mirror caches forever once a version is fetched — package
registries treat published versions as immutable, and Zircon trusts
that contract. Metadata like dist-tags and the "latest" pointer is
revalidated on a short TTL instead, so `zircon add express` on
{{ pkg(name="express") }} still resolves to a current version while the
tarball itself is served
from cache on every subsequent install.

```toml
[mirror.npm]
upstream = "https://registry.npmjs.org"
cache_forever = true
metadata_ttl = "5m"
```

## Falling back when upstream is unreachable

```bash
zircon mirror status npm
# upstream: degraded (3 consecutive timeouts)
# serving from cache: 41,208 cached versions available
```

{% alert(type="warning") %}
A mirror can only serve what it has already cached. The first install of
a brand-new package still depends on the upstream being reachable — plan
a warm-up pass in CI for packages you know you'll need before an outage
window, rather than discovering the gap during one.
{% endalert %}

Mirroring solves availability. The next guide, [signing and
provenance](/guides/provenance/), solves the harder problem: proving that
what you cached — or published yourself — is what it claims to be.
