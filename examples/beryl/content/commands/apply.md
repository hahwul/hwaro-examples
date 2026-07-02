+++
title = "beryl apply"
description = "Reconcile drifted resources back to their declared definition, touching only what plan flagged."
date = "2025-01-14"
weight = 20
toc = true
[extra]
synopsis = "beryl apply [--stack <name>] [--yes] [--only <resource>[,<resource>...]] [--dry-run] [--adopt]"
+++

<div class="replay" role="group" aria-label="Example beryl apply run reconciling two resources">
  <p class="replay-prompt"><span class="replay-user">ops@fleet:~$</span> <span class="replay-cmd">beryl apply --stack staging-checkout --yes</span></p>
  <pre class="replay-output"><span class="rl-ctx">~ 2 resources targeted for reconciliation, from the last plan</span>
<span class="rl-add">+ aws_security_group.checkout_lb      restoring ingress rule 10.0.0.0/8:443</span>
<span class="rl-add">+ aws_iam_role.checkout_worker        removing out-of-band principal from trust policy</span>
<span class="rl-ctx">~ 0 skipped, 0 failed</span></pre>
  <p class="replay-summary">apply: <strong>2</strong> reconciled &middot; 0 skipped &middot; 0 failed in 4.2s</p>
</div>

`beryl apply` reconciles exactly the resources a `plan` run would flag
&mdash; nothing more. It pushes the declared definition back to the
provider for each drifted field, in isolation from any other change your
provisioning tool might also want to make. It does not read your Terraform
or Pulumi source directly; it reads the same declared state `plan`
compares against.

<!-- more -->

## What it does

By default, `apply` recomputes drift itself before acting, so a stale plan
from an hour ago cannot cause it to overwrite a change that has since been
superseded. Resources under an active [lock](/commands/lock/) are skipped
and counted separately in the summary line, even if they are still
drifted. Fields covered by an [ignore](/commands/ignore/) rule were never
flagged in the first place, so `apply` never touches them.

Two reconciliation directions exist. The default direction pushes declared
state onto the live resource, overwriting the out-of-band change. The
`--adopt` flag does the opposite: it takes the live value and writes it
back into your declared state file, for the cases where the out-of-band
change was actually correct and your infrastructure code is what is
stale.

## Flags

| Flag | Description |
|---|---|
| `--stack <name>` | Limit reconciliation to one declared stack. |
| `--yes` | Skip the interactive confirmation prompt; required for non-interactive shells and CI. |
| `--only <resource>[,<resource>...]` | Reconcile specific resource addresses only, comma-separated. |
| `--dry-run` | Print what would be reconciled without making any provider calls. |
| `--adopt` | Reverse the direction: write the live value into declared state instead of overwriting live. |
| `--parallelism <n>` | Maximum concurrent provider calls. Defaults to `4`. |

## Examples

```sh
# reconcile everything plan currently flags in one stack
beryl apply --stack prod-payments --yes

# reconcile one resource only, after reviewing its plan output
beryl apply --only aws_launch_template.worker_v3 --yes

# accept a legitimate manual change into declared state instead of reverting it
beryl apply --only aws_autoscaling_group.checkout_worker --adopt --yes
```

## Exit codes

| Code | Meaning |
|---|---|
| `0` | All targeted resources reconciled successfully. |
| `1` | Beryl could not start the run — backend unreachable or malformed config. |
| `3` | At least one resource failed to reconcile; others may have succeeded. Check the per-resource output. |

## See also

- [beryl plan](/commands/plan/) &mdash; computes the reconciliation this command performs.
- [beryl lock](/commands/lock/) &mdash; keeps a resource out of `apply`'s reach temporarily.
