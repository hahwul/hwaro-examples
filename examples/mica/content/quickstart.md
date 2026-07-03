+++
title = "Quickstart"
description = "Install an SDK, evaluate your first flag, and roll it out to ten percent of traffic in about five minutes."
date = "2026-05-18"
toc = true
[extra]
tag = "5 min"
status = "on"
+++

This quickstart takes you from an empty project to a live flag serving a
percentage rollout. You will install a typed SDK, evaluate a flag against a
user context, and watch the rollout move from one percent to ten without a
redeploy.

<!-- more -->

## 1. Create a project

Every flag lives inside a project, and every project has two environments by
default: `development` and `production`. Create one from the CLI and copy the
server key it prints — you will need it to initialize the SDK.

```bash
mica projects create checkout-service
# → project "checkout-service" created
# → server key: mica_sk_live_7Qd2… (store this in your secrets manager)
```

Keys are scoped to a single environment. A key that reads production flags can
never write them, and a development key returns `false` for any flag that has
not been promoted.

## 2. Install the SDK

Mica ships typed SDKs for TypeScript, Go, Python, Ruby, and Rust. They share
one evaluation model, so the mental picture you build here transfers to every
language. Install the TypeScript client:

```bash
npm install @mica/sdk
```

## 3. Evaluate a flag

Flag evaluation is local: the SDK streams the ruleset once at startup and keeps
it warm, so a `getBoolean` call never blocks on the network. Pass a **context**
— the identity and attributes Mica uses to decide a bucket — on every call.

```ts
import { Mica } from "@mica/sdk";

const mica = new Mica({ serverKey: process.env.MICA_KEY! });
await mica.ready();

const context = { key: user.id, country: user.country, plan: user.plan };

if (mica.getBoolean("new-checkout", context, false)) {
  renderNewCheckout();
} else {
  renderLegacyCheckout();
}
```

The third argument is the default. If the SDK cannot reach Mica at startup, or
the flag does not exist, evaluation returns the default rather than throwing —
a missing flag should never take down a request.

## 4. Roll it out

Create the flag and start it at one percent. Mica hashes each context key into
a stable bucket, so the same user stays on the same side of the line as you
raise the percentage.

```bash
mica flags create new-checkout --type boolean
mica rollout set new-checkout --percent 1
# widen it once the error rate holds
mica rollout set new-checkout --percent 10
```

That is the whole loop: ship dark, widen slowly, and keep the kill switch one
command away. From here, read [Percentage rollouts](/rollouts/percentage-rollouts/)
to learn how bucketing stays consistent, or [Kill switches](/rollouts/kill-switches/)
to wire an automatic rollback.
