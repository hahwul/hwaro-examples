+++
title = "Access control and tokens"
description = "Scope publish rights to teams and tokens instead of a shared password, with expiry on everything."
date = "2025-04-22"
weight = 4
toc = true
tags = ["access", "tokens", "teams"]
[extra]
level = "Access"
minutes = 7
+++

Every credential in Zircon is a scoped, expiring token — there is no
standing admin password and no unscoped API key. A token can read, a
token can publish, or a token can administer; a single token is never
all three unless you explicitly create it that way. <!-- more -->

## Creating scoped tokens

```bash
zircon token create --scope read --name ci-install --expires 30d
zircon token create --scope publish --name ci-release --expires 90d
zircon token create --scope admin --name platform-oncall --expires 7d
```

Short expiries are cheap to renew and expensive to lose track of in the
wrong direction. A `read` token leaking is an inconvenience; an `admin`
token leaking is an incident — so admin tokens default to the shortest
lifetime the CLI allows.

## Teams and package ownership

```bash
zircon team create platform --members alice,bao,dev-infra
zircon team grant platform --publish "@acme/*"
```

Ownership is scoped by package prefix, not assigned package-by-package.
Granting the `platform` team publish rights on `@acme/*` means anyone on
that team can publish `{{ pkg(name="@acme/http-kit") }}` or
`{{ pkg(name="@acme/config-loader") }}` without a separate grant for
each new package the team creates under that scope.

## Auditing who published what

```bash
zircon audit log --package @acme/http-kit --since 30d
# 2025-04-19  publish  @acme/http-kit@4.2.0  token=ci-release  team=platform
# 2025-03-18  publish  @acme/http-kit@4.1.0  token=ci-release  team=platform
```

{% alert(type="warning") %}
Revoking a team's grant does not retroactively invalidate versions it
already published — those stay installable. It only stops the team from
publishing new versions under that scope going forward. Use
`zircon package yank` separately if a specific version needs to come
down.
{% endalert %}

With mirroring, provenance, and scoped access control in place, a
Zircon instance covers the three things teams usually discover they
need only after outgrowing a shared, unscoped registry token.
