+++
title = "beryl lock"
description = "Freeze a resource against reconciliation while it stays visible in drift reports, for incidents and planned manual changes."
date = "2025-07-09"
weight = 40
toc = true
[extra]
synopsis = "beryl lock <resource> [--reason <text>] [--expires <duration>] [--list] [--release <resource>]"
+++

<div class="replay" role="group" aria-label="Example beryl lock command placing a temporary hold on one resource">
  <p class="replay-prompt"><span class="replay-user">ops@fleet:~$</span> <span class="replay-cmd">beryl lock aws_launch_template.worker_v3 --reason "manual capacity bump during traffic spike" --expires 6h</span></p>
  <pre class="replay-output"><span class="rl-ctx">~ locked aws_launch_template.worker_v3 for 6h0m, expires 20:11 UTC</span>
<span class="rl-ctx">~ beryl apply will skip this resource until the lock releases or expires</span>
<span class="rl-ctx">~ beryl plan will continue to report it as drifted</span></pre>
  <p class="replay-summary">lock: <strong>1</strong> resource locked &middot; 3 active locks in prod-payments</p>
</div>

A lock is a temporary, resource-scoped hold on reconciliation. It does not
hide drift &mdash; `plan` and `watch` keep reporting a locked resource
exactly as before &mdash; it only tells `apply` to skip it. Reach for a
lock when a manual change is deliberate and short-lived: an emergency
capacity bump during an incident, a hand-edited security group while a
migration is in flight, anything you want visible but untouched until the
work is finished.

<!-- more -->

## What it does

Locks are stored alongside your declared state and are shared by anyone
running `beryl apply` against the same backend, not just the operator who
created the lock. Every lock requires a `--reason`, which is printed
verbatim in `plan` output next to the resource so the next person to look
at the drift report understands why it hasn't been reconciled. Locks
either expire on their own via `--expires` or are released explicitly with
`--release`; an expired lock is treated as absent starting from the next
run, no separate cleanup step required.

Locking a resource does not exempt it from `beryl ignore` rules or vice
versa &mdash; the two operate at different layers. A lock blocks the
*action* of reconciling a whole resource, temporarily. An ignore rule
blocks the *detection* of drift on a specific field, until you say
otherwise.

## Flags

| Flag | Description |
|---|---|
| `<resource>` | The resource address to lock, e.g. `aws_security_group.checkout_lb`. |
| `--reason <text>` | Required. Recorded with the lock and shown in `plan` output. |
| `--expires <duration>` | Auto-release after this duration, e.g. `6h`, `3d`. Defaults to `24h` if omitted. |
| `--list` | Print all active locks across the current stack, with reason and remaining time. |
| `--release <resource>` | Remove a lock before it expires. |

## Examples

```sh
# lock a resource for the length of a maintenance window
beryl lock aws_security_group.checkout_lb --reason "migration cutover" --expires 3h

# see everything currently locked and why
beryl lock --list

# release a lock early once the manual work is done
beryl lock --release aws_launch_template.worker_v3
```

## Exit codes

| Code | Meaning |
|---|---|
| `0` | Lock created, listed, or released successfully. |
| `1` | Beryl could not complete the request — backend unreachable or malformed input. |
| `4` | The named resource has no matching entry in declared state. |

## See also

- [beryl apply](/commands/apply/) &mdash; the command a lock protects a resource from.
- [beryl ignore](/commands/ignore/) &mdash; the field-level equivalent, aimed at detection instead of reconciliation.
