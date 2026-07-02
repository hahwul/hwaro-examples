+++
title = "Targeting rules"
description = "Layer attribute rules on top of a rollout to expose a specific cohort — internal staff, one region, a paid tier — before you widen to everyone."
date = "2026-05-27"
weight = 2
toc = true
[extra]
tag = "core"
status = "on"
+++

Percentage rollouts answer *how many*; targeting rules answer *who*. A
targeting rule matches attributes on the context and forces a variant for
everyone in the cohort, regardless of their bucket. Rules run top to bottom;
the first match wins, and the percentage rollout is the fallthrough.

<!-- more -->

## Rules evaluate in order

A flag is a short decision list. Mica walks the rules from top to bottom,
returns the variant of the first rule whose conditions all match, and only
reaches the percentage rollout when nothing above it matched.

```yaml
flag: new-checkout
rules:
  - if: { attribute: email, op: ends_with, value: "@mica.dev" }
    serve: true          # staff always on
  - if: { attribute: plan, op: in, value: [enterprise] }
    serve: false         # hold enterprise back
  - rollout: { percent: 10 }   # everyone else: 10%
default: false
```

Order is the whole grammar. Put the narrowest, most important cohorts at the
top so a broad rule never shadows them.

## Operators

Conditions combine an attribute, an operator, and a value. Mica ships the
operators most rollouts need: `equals`, `in`, `contains`, `starts_with`,
`ends_with`, `greater_than`, `matches_regex`, and `semver_gte` for version
gating a mobile client.

```ts
const context = {
  key: user.id,
  email: user.email,
  plan: user.plan,
  appVersion: "4.2.0",
  country: "PT",
};
```

## A safe cohort-first rollout

The pattern most teams use: turn the flag fully on for staff, hold it off for
your riskiest segment, and let a small percentage of the long tail in. You get
real production signal from people who can file a bug, without exposing the
accounts that would escalate.

```bash
mica rule add new-checkout --if 'email ends_with @mica.dev' --serve true
mica rule add new-checkout --if 'plan in enterprise' --serve false
mica rollout set new-checkout --percent 10
```

## Individual overrides

For one-off debugging, pin a single context key to a variant. Overrides sit
above every rule, so they win unconditionally and are the fastest way to
reproduce a user's exact experience.

```bash
mica override set new-checkout --key user_8823 --serve true
```
