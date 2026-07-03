+++
title = "Progressive delivery"
description = "Automate the widen: let Mica step a rollout up on a schedule while a guard watches the metrics, and pause the moment something drifts."
date = "2026-06-20"
weight = 5
toc = true
[extra]
tag = "advanced"
status = "off"
+++

Progressive delivery is a rollout that widens itself. Instead of a human
nudging the percentage every few hours, you describe the ramp once — the steps,
the dwell time, and the metric that has to hold — and Mica advances it. This
pattern ships **off** by default because an unattended ramp without a guard can
widen a regression to everyone while you sleep.

<!-- more -->

## Describe the ramp

A schedule is a list of steps and how long to hold at each. Mica advances to
the next step only after the dwell time elapses *and* the attached guard is
still green.

```yaml
flag: new-checkout
schedule:
  guard: { metric: checkout_error_rate, op: less_than, threshold: 0.01 }
  steps:
    - { percent: 5,  hold: 1h }
    - { percent: 25, hold: 4h }
    - { percent: 50, hold: 8h }
    - { percent: 100 }
```

## The guardrail is mandatory here

The `guard` is what makes this pattern safe. Without it, a schedule is just a
countdown to 100% that ignores reality. With it, a step that would push the
error rate past the threshold pauses the ramp instead of advancing.

```bash
mica schedule start new-checkout
# → step 1/4 · 5% · guard checkout_error_rate < 1% · holding 1h
```

> Never start a schedule on a flag without a guard attached. Mica will warn,
> and this guide stays flipped off until your flag defines one. An unguarded
> schedule is the fastest way to roll a bad build out to everyone.

## Pause, resume, and abort

A paused ramp holds its current percentage and stops the clock. You can resume
it after a fix, or abort back to zero — which is a kill that also clears the
schedule so it cannot silently resume.

```bash
mica schedule pause  new-checkout   # freeze at the current step
mica schedule resume new-checkout   # continue from where it paused
mica schedule abort  new-checkout   # kill + drop the schedule
```

## Bake time beats step count

The instinct is to add more, smaller steps. What actually catches regressions
is dwell time: a metric that looks fine at minute two often turns at minute
forty as caches warm and slow queries pile up. Prefer four honest steps with
real hold windows over twenty steps that each last a minute.
