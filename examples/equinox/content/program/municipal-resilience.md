+++
title = "Municipal Resilience"
date = "2026-03-16"
description = "The plan and the purse: turning flood maps into zoning, budgets, and infrastructure a council can actually pass."
[extra]
kicker = "Track 04 · Day 2, Morning"
sessions = [
  { time = "09:00", title = "Writing a resilience plan that survives an election", speaker = "Henrik Dahl, Municipal Resilience Network" },
  { time = "10:15", title = "Financing adaptation before the disaster, not after", speaker = "Dr. Priya Anand, Coastal Finance Initiative" },
  { time = "11:20", title = "Workshop — Zoning for water you can see coming", speaker = "Facilitated by the Equinox planning studio" }
]
+++

Day 2 begins where the science lands: on the desk of a planner who has to turn a
probability map into a document a council will adopt and a budget will fund. This
track is about the unglamorous machinery of resilience — the plan, the purse, and
the ordinance — because that machinery is where adaptation lives or dies.

<!-- more -->

Henrik Dahl opens with the political durability problem. A resilience plan that
depends on one champion dies with that champion's term. He shares a structure for
plans that survive elections: clear trigger points, pre-agreed actions, and
funding tied to measurable coastal conditions rather than to whoever is in office.

Many adaptation plans encode exactly those triggers as machine-readable policy, so
the same thresholds drive the flood model, the alert system, and the budget. A
minimal version reads like this:

```yaml
# resilience-triggers.yml — thresholds shared by model, alerts, and budget
zone: harbour-district
baseline_year: 2020
review_interval_years: 5

triggers:
  - name: annual-flood-days
    metric: days_above_high_water
    threshold: 12          # days/year
    action: fund-dune-reinforcement
  - name: relative-slr
    metric: mean_sea_level_mm
    threshold: 220          # mm above baseline
    action: begin-voluntary-buyouts
```

Dr. Anand tackles money. Adaptation is cheap before a disaster and ruinous after,
yet almost every funding mechanism is built to pay out only once the water is in
the street. She surveys pre-disaster instruments — resilience bonds, revolving
adaptation funds, and value-capture on protected land — and is frank about which
ones survive contact with a real council budget.

The morning closes in the planning studio, where teams redraft a real zoning
ordinance to account for a coastline that will move. The goal is modest and
concrete: language a council could adopt on Monday.
