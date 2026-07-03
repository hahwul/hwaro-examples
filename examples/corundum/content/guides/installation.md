+++
title = "Installation and First Boot"
description = "Stand up a Corundum server on a bare host: the binary, the database, the signing key, and the first administrator."
date = "2025-02-04"
weight = 1
toc = true
[extra]
roman = "I"
status = "Setup"
+++

Corundum ships as a single statically linked binary. A production deployment
needs three things beyond it: a PostgreSQL database for durable state, an
asymmetric signing key for tokens, and a TLS-terminating reverse proxy in
front. This guide takes a fresh host to a running server with one administrator
account.

<!-- more -->

## Obtain the binary

Download the release for your platform and verify its checksum before you run
anything. The signature is detached; the public key is published on the release
page and changes only at major versions.

```bash
curl -fsSLO https://get.corundum.example/corundum-1.4.0-linux-amd64
curl -fsSLO https://get.corundum.example/corundum-1.4.0-linux-amd64.sha256
sha256sum --check corundum-1.4.0-linux-amd64.sha256
install -m 0755 corundum-1.4.0-linux-amd64 /usr/local/bin/corundum
```

## Provision the database

Corundum owns its schema and applies migrations on start. Create a database and
a least-privilege role; the server never needs superuser rights after the first
migration.

```bash
createdb corundum
psql corundum -c "CREATE ROLE corundum LOGIN PASSWORD 'change-me';"
psql corundum -c "GRANT ALL ON DATABASE corundum TO corundum;"
```

## Generate a signing key

Tokens are signed, never encrypted, so the private key must stay on the server
and the public key is what the world verifies against. Corundum rotates keys on
a schedule, but it needs a first one.

```bash
corundum keys generate --alg ES256 --out /etc/corundum/keys/
```

`ES256` (ECDSA over P-256) is the default and the right choice for almost every
deployment: the keys are small, the signatures are short, and every conformant
client supports it. Reach for `RS256` only when a legacy client cannot verify
elliptic-curve signatures.

## Write the configuration

Configuration is a single TOML file. The `issuer` value is load-bearing — it
appears in every token and in the discovery document, and clients pin to it, so
set it to the exact external URL and never change it afterward.

```toml
issuer = "https://id.example.com"

[database]
url = "postgres://corundum:change-me@localhost/corundum"

[keys]
directory = "/etc/corundum/keys"
rotation_days = 90

[http]
listen = "127.0.0.1:8412"
trust_forwarded = true
```

## First boot and the first administrator

Start the server, then create the bootstrap administrator. The bootstrap
command works exactly once; after an administrator exists it refuses to run, so
an attacker cannot use it to mint a second one.

```bash
corundum serve --config /etc/corundum/corundum.toml &
corundum admin bootstrap --email ada@example.com
```

The command prints a one-time enrolment link valid for fifteen minutes. Open
it, set a passphrase, and — if you have a security key to hand — enrol it now;
the [hardware-key guide](/guides/hardware-keys/) covers that ceremony in
detail. You now have a running identity server with exactly one account and no
registered clients. The [authorization code flow](/guides/authorization-code-flow/)
is where the next guide begins.
