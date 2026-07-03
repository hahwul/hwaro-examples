+++
title = "Percentage rollouts"
description = "How Mica hashes a context into a stable bucket so a user never flickers between variants as you raise the dial."
date = "2026-06-02"
weight = 1
toc = true
[extra]
tag = "core"
status = "on"
+++

A percentage rollout answers one question on every request: does *this* user
fall inside the exposed slice? Getting that answer right means the same user
lands on the same side of the line each time, and that raising the percentage
only ever adds users — never reshuffles them.

<!-- more -->

## Stable bucketing

Mica turns a rollout into arithmetic. It concatenates the flag key with the
context key, hashes the result with a fixed 64-bit function, and maps the hash
onto a range of 0–9999. A user is exposed when their bucket is below the
threshold implied by the percentage.

```text
bucket = hash("new-checkout:" + user.key) mod 10000
exposed = bucket < percent * 100
```

Because the hash includes the flag key, a user who is in the exposed slice for
one flag is not correlated with any other flag. Two 10% rollouts do not overlap
on the same 10% of people.

## Raising the dial is monotonic

When you move a rollout from 10% to 25%, every user below bucket 1000 is still
below bucket 2500. Nobody who was seeing the new variant loses it. This is the
property that makes widening safe: exposure only grows.

```bash
mica rollout set new-checkout --percent 10
mica rollout set new-checkout --percent 25   # the original 10% is a subset
```

## Choosing the bucketing key

By default Mica buckets on `context.key`, but you can bucket on any attribute.
Bucketing on `accountId` instead of `userId` keeps every member of a team on
the same variant — essential for B2B features where a shared workspace should
not show two different checkouts.

```ts
mica.getBoolean("new-checkout", context, false, {
  bucketBy: "accountId",
});
```

> Pick the bucketing key once, at the start of a rollout. Changing it midway
> re-hashes everyone and does reshuffle the exposed set.

## Sticky across sessions

Bucketing is deterministic, so it needs no server-side state to stay sticky. A
logged-out user identified by a device ID keeps their variant across sessions
as long as that ID is stable. When they log in, pass the real user key and
Mica re-buckets them once — usually the moment to reconcile anonymous and
identified state.
