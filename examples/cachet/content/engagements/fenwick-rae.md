+++
title = "Fenwick & Rae Trading"
date = "2026-02-18"
description = "A zero-downtime blue-green cutover, replacing a deploy script run manually from whoever's laptop was in the office."

[extra]
client = "Fenwick & Rae Trading"
status = "active"
duration = "Ongoing retainer"
industry = "Financial services"
outcome = "Zero-downtime cutover; release window went from hours to seconds"
+++

Fenwick & Rae's trading platform could not tolerate a deploy window in any conventional sense — a release during market hours meant a real, measurable cost if it went even slightly wrong, and their existing process assumed someone would be physically present to run a Python script and watch the logs. Remote work had made that assumption increasingly fragile.

<!-- more -->

The prior process was, in fairness, careful: it just wasn't automatic, and it depended on judgment calls ("does that log line look normal?") that only two people on the team felt qualified to make. The goal was to make those judgment calls into automated checks without losing the caution that had kept the platform stable for years.

The rebuild is a blue-green cutover with an automated health gate tight enough to catch what a careful human would have caught, and a rollback that takes effect before a human could react:

```bash
./scripts/deploy-green.sh --build "$SHA"
./scripts/health-gate.sh --window 2s --max-error-rate 0.01
if [ $? -ne 0 ]; then ./scripts/rollback-to-blue.sh; exit 1; fi
./scripts/cut-traffic.sh --target green
```

Release windows dropped from a coordinated multi-hour affair to a two-second health gate, and the two engineers who used to carry the deploy alone can now hand it to anyone on the team. The retainer keeps me on call for the next few release cycles while the team builds confidence running it themselves.
