+++
title = "Flag observability"
description = "See which flag served which variant on any request by attaching evaluation reasons to your logs, traces, and metrics."
date = "2026-06-25"
weight = 6
toc = true
[extra]
tag = "advanced"
status = "on"
+++

When a bug report says "checkout looked broken," the first question is: broken
for whom, on which variant? A flag you cannot observe is a variable you cannot
control. Mica attaches an **evaluation reason** to every decision so your
existing logs, traces, and dashboards can answer that question directly.

<!-- more -->

## Evaluation reasons

Every evaluation returns not just a value but *why* it got that value: a
matched rule, the percentage bucket, an override, or the default. Ask for the
detailed form when you need to record it.

```ts
const d = mica.getBooleanDetail("new-checkout", context, false);
// d.value  → true
// d.reason → "RULE_MATCH"     (or PERCENTAGE, OVERRIDE, DEFAULT, KILLED)
// d.ruleIndex → 0
// d.variant → "new"
logger.info("flag.eval", { flag: "new-checkout", ...d });
```

Now a log line explains itself. "Served `new` because RULE_MATCH at index 0"
is a debuggable fact; "the flag was on, probably" is not.

## Put the variant on your traces

Tag spans with the variant and your APM slices latency by branch for free. If
the new checkout is 200ms slower, the trace shows it before a user files a
ticket.

```ts
span.setAttribute("flag.new-checkout", d.variant);
```

## Exposure events

Mica emits an **exposure event** the first time a context sees a variant in a
session. Pipe these into your analytics warehouse and every experiment gets a
clean denominator — you measure conversion against people who were actually
exposed, not everyone who loaded the page.

| Field | Example | Use |
| --- | --- | --- |
| `flag` | `new-checkout` | join to the release |
| `variant` | `new` | split the metric |
| `reason` | `PERCENTAGE` | separate targeted from sampled users |
| `bucket` | `0847` | verify bucketing is uniform |

## Close the loop with the guard

The same metrics that power your dashboards feed the automatic guards from the
[Kill switches](/rollouts/kill-switches/) guide. Once a variant's error rate is
a first-class metric, wiring it to a trip is a one-line change — and your
rollout stops being something you watch and starts being something that watches
itself.
