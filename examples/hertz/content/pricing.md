+++
title = "Pricing"
description = "Flat, honest pricing for small teams. No per-seat tax, no surprise overages."
+++

Pricing at Hertz follows the same rule as everything else: no surprises. You pay
for the number of checks you run, billed monthly, cancel whenever. Seats are
unlimited on every plan because charging teams to add a teammate is the kind of
thing this product exists to be an alternative to.

## Plans

| Plan   | Checks | Interval | Subscribers | Price      |
|--------|--------|----------|-------------|------------|
| Solo   | 5      | 60s      | 500         | $0 / mo    |
| Team   | 25     | 30s      | 10,000      | $19 / mo   |
| Studio | 100    | 30s      | Unlimited   | $49 / mo   |

Every plan includes multi-region checks, unlimited incidents, the public status
page, the JSON and RSS endpoints, and a custom domain. The only thing that
changes between tiers is how many services you can watch and how often.

## Frequently asked

**Is Solo really free?** Yes, permanently, for five checks. It is the plan we
run our own side projects on. There is no trial clock and no card required.

**What counts as a check?** One URL on one schedule. If you watch the same
endpoint from three regions, that is still one check — the regions are how a
single check votes, not three separate meters.

**Do you charge for downtime?** No. Incidents are unlimited on every plan.
Charging you more during your worst hour would be indefensible.

**Can I self-host?** Not today. Hertz is deliberately a hosted service so your
status page runs on infrastructure independent from the thing it monitors. A
status page that shares a failure domain with your app is worse than none.

**What happens if I cancel?** Your page goes read-only for 30 days, then is
removed. You can export your full incident history as JSON at any time, so the
record is always yours to keep.
