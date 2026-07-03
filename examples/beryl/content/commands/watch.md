+++
title = "beryl watch"
description = "Run drift detection continuously on an interval and forward findings to a webhook, without reconciling anything automatically."
date = "2025-04-22"
weight = 30
toc = true
[extra]
synopsis = "beryl watch [--stack <name>] [--interval <duration>] [--webhook <url>] [--min-severity <level>]"
+++

<div class="replay" role="group" aria-label="Example beryl watch session detecting drift mid-run">
  <p class="replay-prompt"><span class="replay-user">ops@fleet:~$</span> <span class="replay-cmd">beryl watch --stack prod-payments --interval 5m</span></p>
  <pre class="replay-output"><span class="rl-ctx">~ watching 42 resources in prod-payments, polling every 5m</span>
<span class="rl-ctx">~ 14:02:10  no drift</span>
<span class="rl-add">+ 14:07:11  aws_launch_template.worker_v3   instance_type overridden t3.large -&gt; t3.xlarge</span>
<span class="rl-ctx">~ event forwarded to webhook in 118ms</span></pre>
  <p class="replay-summary">watch: running &mdash; press ctrl-c to stop, or send SIGTERM for a clean shutdown</p>
</div>

`beryl watch` runs the exact comparison `plan` runs, on a timer, and stays
in the foreground until you stop it. It is deliberately a detector, not an
actuator: it never calls `apply` on your behalf, even when it finds drift
it has seen before. Pair it with a paging rule on its webhook events or a
scheduled `apply --yes` job if you want detection and reconciliation on
different cadences.

<!-- more -->

## What it does

On each interval, `watch` performs the same declared-versus-live
comparison as `plan`, against the same ignore rules, and diffs the result
against the previous poll rather than against a static baseline. Only new
or changed findings are emitted as events; a resource that has been
drifted since the last three polls is not re-reported every five minutes.
Events above `--min-severity` are posted to `--webhook` as JSON; all events
are also written to the process's own structured log regardless of
severity, so a sidecar can tail them without a network dependency.

State from one poll to the next lives in memory by default and is lost on
restart, which is intentional &mdash; `--state-ttl` controls how long a
previously-seen finding is suppressed from re-alerting, and a restart
simply resets that clock rather than losing drift history you would need
for an audit. Use `beryl plan --json` on a schedule instead if you need a
durable, queryable record.

## Flags

| Flag | Description |
|---|---|
| `--stack <name>` | Limit watching to one declared stack. |
| `--interval <duration>` | Poll interval, e.g. `30s`, `5m`, `1h`. Defaults to `5m`. |
| `--webhook <url>` | POST a JSON event for every new finding at or above `--min-severity`. |
| `--min-severity <level>` | One of `info`, `warning`, `error`. Defaults to `warning`. |
| `--state-ttl <duration>` | How long a finding is suppressed from re-alerting once reported. Defaults to `24h`. |
| `--once` | Run a single poll and exit; useful for testing a webhook without leaving the process running. |

## Examples

```sh
# watch one stack, alerting only on error-severity drift
beryl watch --stack prod-payments --min-severity error --webhook https://hooks.example.internal/beryl

# smoke-test the webhook without starting a long-running process
beryl watch --stack prod-payments --once --webhook https://hooks.example.internal/beryl
```

## Exit codes

`watch` runs until interrupted. `SIGTERM` or `SIGINT` triggers a clean
shutdown after the current poll finishes and exits `0`. Any other exit
means the watch loop itself failed &mdash; exit `1`, with the reason
written to the process log.

## See also

- [beryl plan](/commands/plan/) &mdash; the on-demand version of the same comparison.
- [beryl ignore](/commands/ignore/) &mdash; silence expected divergence so watch stops alerting on it.
