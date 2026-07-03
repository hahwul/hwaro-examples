+++
title = "Pricing"
description = "The engine and CLI are free. Pricing only applies to the hosted sync relay for teams running a device fleet."
+++

The engine, the CLI, and the query REPL are free and open source under the
Apache License. You can build, embed, and sync devices peer-to-peer without
ever creating an account. Pricing exists for one thing only: the hosted relay
that forwards sync traffic between devices that cannot reach each other
directly, and the fleet tooling built on top of it.

| Plan | Devices | Relay bandwidth | Price |
| --- | --- | --- | --- |
| Solo | up to 3 | 5 GB / month | Free |
| Team | up to 100 | 250 GB / month | $49 / month |
| Fleet | unlimited | metered | Talk to us |

## Solo

For a personal project or a small prototype. Three devices can sync through
the shared relay at no cost, with the same encryption and conflict handling
as every other plan. There is no time limit and no credit card required.

## Team

For a product with a real device fleet. Team adds a private relay region, a
fleet dashboard that shows each device's last-sync time and pending log
size, and role-based access to the dashboard for your engineers.

```bash
$ vector fleet status --plan team
142 devices · 138 synced in the last hour · 4 stale (>24h offline)
```

## Fleet

For hardware manufacturers shipping vector inside a product. Fleet plans are
metered on relay bandwidth rather than device count, and include a
dedicated relay cluster, a signed SLA, and direct engineering support for
migration planning at launch.

Every plan runs the identical open-source engine — upgrading changes what you
pay for the relay, never what the database itself can do. See the
[sync relay](/features/) section of the feature list for how conflicts
resolve between devices, and the [changelog](/changelog/) for what shipped
in each release.
