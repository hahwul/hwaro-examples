+++
title = "beryl ignore"
description = "Suppress drift detection on a specific field of a resource, for divergence that is expected rather than accidental."
date = "2025-09-03"
weight = 50
toc = true
[extra]
synopsis = "beryl ignore <resource> --field <path> [--reason <text>] [--expires <duration>] [--list] [--clear <resource>]"
+++

<div class="replay" role="group" aria-label="Example beryl ignore command suppressing one field permanently">
  <p class="replay-prompt"><span class="replay-user">ops@fleet:~$</span> <span class="replay-cmd">beryl ignore aws_autoscaling_group.checkout_worker --field desired_capacity --reason "capacity managed by external autoscaler" --expires never</span></p>
  <pre class="replay-output"><span class="rl-ctx">~ ignoring aws_autoscaling_group.checkout_worker.desired_capacity permanently</span>
<span class="rl-ctx">~ beryl plan will no longer report divergence on this field</span>
<span class="rl-ctx">~ all other fields on this resource remain monitored</span></pre>
  <p class="replay-summary">ignore: <strong>1</strong> field rule added &middot; 7 active ignore rules in prod-payments</p>
</div>

Some divergence is not drift at all &mdash; it is a second system doing its
job. An external autoscaler adjusting `desired_capacity`, a CDN bumping a
DNS record's TTL, a load balancer injecting tags on target registration:
none of these are mistakes, and reporting them as drift on every `plan`
run trains people to stop reading the output. `beryl ignore` marks a
specific field on a specific resource as expected to diverge, so detection
skips it entirely.

<!-- more -->

## What it does

An ignore rule is narrower than a lock: it targets one field path on one
resource, not the whole resource, and it affects detection rather than
reconciliation. Once a field is ignored, `plan` and `watch` stop comparing
it at all &mdash; it is neither reported as drifted nor counted toward the
unchanged total, since it is functionally invisible to the comparison.
Every other field on the same resource is still compared normally. Rules
default to permanent (`--expires never`) since most ignore reasons are
structural, but a temporary rule is useful when a field is diverging for a
known, time-bound reason, such as a migration that will later bring it
back under declared control.

Field paths use dot notation matching your declared schema, e.g.
`tags.managed-by` or `ingress.0.cidr_blocks`. A rule with no `--field`
applies to every field on that resource, which is rarely what you want and
prints a confirmation prompt unless `--yes` is also passed.

## Flags

| Flag | Description |
|---|---|
| `<resource>` | The resource address the rule applies to. |
| `--field <path>` | Required in practice. Dot-notation path to the field to exclude from comparison. |
| `--reason <text>` | Recorded with the rule; shown in `beryl ignore --list` output. |
| `--expires <duration>` | Auto-expire the rule after this duration. Defaults to `never`. |
| `--list` | Print all active ignore rules across the current stack. |
| `--clear <resource>` | Remove every ignore rule on a resource, or pass `--field` to remove just one. |

## Examples

```sh
# permanently ignore a field managed by an external system
beryl ignore aws_autoscaling_group.checkout_worker --field desired_capacity --reason "capacity managed by external autoscaler"

# ignore a field only until a migration finishes
beryl ignore aws_route53_record.api --field ttl --reason "CDN cutover in progress" --expires 14d

# audit every active suppression before an audit meeting
beryl ignore --list

# stop ignoring a field once the external system is decommissioned
beryl ignore --clear aws_autoscaling_group.checkout_worker --field desired_capacity
```

## Exit codes

| Code | Meaning |
|---|---|
| `0` | Rule added, listed, or cleared successfully. |
| `1` | Beryl could not complete the request — backend unreachable or malformed input. |
| `4` | The named resource has no matching entry in declared state. |

## See also

- [beryl plan](/commands/plan/) &mdash; the command whose output an ignore rule narrows.
- [beryl lock](/commands/lock/) &mdash; the resource-level, temporal equivalent aimed at reconciliation instead of detection.
