+++
title = "Quickstart"
description = "Install the Zircon server, create your first token, and point npm or pip at it."
date = "2025-01-14"
weight = 1
toc = true
tags = ["setup", "quickstart"]
[extra]
level = "Setup"
minutes = 6
+++

A Zircon instance is a single static binary plus two dependencies: a
Postgres database for metadata and an S3-compatible bucket for package
blobs. There is no separate control plane and no required Kubernetes
operator — one process serves the registry API, the web UI, and the
mirror cache. <!-- more -->

## Install the binary

```bash
curl -fsSL zircon.sh/install | sh
zircon --version
```

The install script drops a binary at `/usr/local/bin/zircon` and does not
touch your shell profile. If you'd rather manage the version yourself,
container images are published for every release.

## Bring up a database and start the server

```bash
zircon config init --db postgres://zircon:zircon@localhost:5432/zircon \
  --blobs s3://zircon-blobs
zircon server start --listen 0.0.0.0:8083
```

`zircon config init` writes `zircon.toml` in the current directory and
runs the schema migrations against the database you point it at. It will
refuse to start against a database that already has an incompatible
schema version, so upgrades are explicit rather than automatic.

## Create your first token and publish

```bash
zircon token create --scope publish --name ci-runner
zircon login --token $ZIRCON_TOKEN
zircon add ferrous-cache
```

That last line installs {{ pkg(name="ferrous-cache") }} through your new
registry — a good first package to try, since a fresh instance has
nothing mirrored yet and this confirms the whole path end to end.

Every token is scoped at creation — `publish`, `read`, or `admin` — and
can carry an expiry. There is no unscoped root token; even the account
that ran `zircon config init` authenticates with a scoped token like
everyone else.

{% alert(type="note") %}
Point your package manager's config at `http://localhost:8083` (or
whatever host you deployed to) and it behaves exactly like talking to a
public registry — `npm install`, `pip install`, and `cargo add` all work
unmodified once the registry URL and token are set.
{% endalert %}

From here, the next step is usually [mirroring your existing
upstreams](/guides/mirroring/) so a Zircon instance can serve packages
your teams already depend on, not just the ones you publish yourself.
