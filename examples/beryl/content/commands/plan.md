+++
title = "beryl plan"
description = "Compute infrastructure drift against declared state and print a reconciliation plan without changing anything."
date = "2025-01-14"
weight = 10
toc = true
[extra]
synopsis = "beryl plan [--stack <name>] [--only <resource>[,<resource>...]] [--json] [--fail-on-drift]"
+++

<div class="replay" role="group" aria-label="Example beryl plan run scoped to two resource types">
  <p class="replay-prompt"><span class="replay-user">ops@fleet:~$</span> <span class="replay-cmd">beryl plan --stack staging-checkout --only aws_security_group,aws_iam_role</span></p>
  <pre class="replay-output"><span class="rl-ctx">~ comparing declared state to 18 live resources in staging-checkout</span>
<span class="rl-add">+ aws_security_group.checkout_lb      ingress 10.0.0.0/8:443 removed out-of-band</span>
<span class="rl-add">+ aws_iam_role.checkout_worker        trust policy modified &mdash; added principal arn:aws:iam::552210:role/oncall-break-glass</span>
<span class="rl-ctx">~ 16 resources match declared state</span></pre>
  <p class="replay-summary">plan: <strong>2</strong> to reconcile &middot; 0 to destroy &middot; 16 unchanged</p>
</div>

`beryl plan` is the read-only half of the loop: it never mutates a
resource, a state file, or a lock. It exists to answer one question
precisely &mdash; which live resources no longer match what is declared
&mdash; and to leave the decision about what to do next to you or to
`beryl apply`.

<!-- more -->

## What it does

For every resource in scope, `plan` fetches the declared definition from
your configured backend and the live definition from the provider's
describe/list API, normalizes both (stripping provider-injected fields
unless `ignore_defaults` is disabled), and diffs the result. Anything that
differs is printed as a finding; anything that matches is folded into the
unchanged count. Findings never include fields covered by an active
`beryl ignore` rule, and resources under an active `beryl lock` are still
reported &mdash; locking blocks `apply`, not detection.

## Flags

| Flag | Description |
|---|---|
| `--stack <name>` | Limit the run to one declared stack. Omit to plan every stack the backend knows about. |
| `--only <resource>[,<resource>...]` | Restrict comparison to specific resource addresses or types, comma-separated. |
| `--json` | Emit the plan as newline-delimited JSON instead of the formatted terminal output, for piping into `jq` or a CI artifact. |
| `--fail-on-drift` | Exit with status `2` when any drift is found, so a CI job can gate on a clean plan. |
| `--quiet` | Print only the summary line, suppressing individual findings. |

## Examples

```sh
# plan every stack the backend knows about
beryl plan

# CI gate: fail the pipeline if any drift is present
beryl plan --stack prod-payments --fail-on-drift

# pipe a machine-readable plan into another tool
beryl plan --stack prod-payments --json | jq '.findings[] | .resource'
```

## Exit codes

| Code | Meaning |
|---|---|
| `0` | No drift found (or `--fail-on-drift` not set). |
| `1` | Beryl could not complete the run — backend unreachable, malformed config, or provider API error. |
| `2` | Drift was found and `--fail-on-drift` was set. |

## See also

- [beryl apply](/commands/apply/) &mdash; reconciles exactly the resources this command flags.
- [beryl watch](/commands/watch/) &mdash; runs the same comparison on a schedule instead of on demand.
