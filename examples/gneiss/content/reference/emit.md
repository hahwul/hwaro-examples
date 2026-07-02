+++
title = "EMIT"
description = "Grammar and semantics of the EMIT clause: choose between streaming every change, one final row per window, or a graced flush."
date = "2025-02-24"
weight = 40
toc = true
[extra]
clause_number = "4"
+++

<figure class="rr-figure" aria-label="Railroad diagram: EMIT followed by one of CHANGES, FINAL, or AFTER WINDOW CLOSE">
  <svg class="rr" viewBox="0 0 620 220" aria-hidden="true" focusable="false">
    <defs>
      <marker id="rr-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path class="rr-marker-path" d="M0,0 L10,5 L0,10 z"/>
      </marker>
    </defs>
    <g class="rr-rail">
      <path d="M16,110 H70"/>
      <path d="M70,110 C95,110 95,50 120,50"/>
      <path d="M70,110 H120"/>
      <path d="M70,110 C95,110 95,170 120,170"/>
      <path d="M210,50 C260,50 260,110 300,110"/>
      <path d="M198,110 H300"/>
      <path d="M310,170 C350,170 350,110 300,110"/>
      <path d="M300,110 H590" marker-end="url(#rr-arrow)"/>
    </g>
    <circle class="rr-start" cx="12" cy="110" r="3.5"/>
    <circle class="rr-end" cx="596" cy="110" r="5"/>

    <rect class="rr-term" x="120" y="33" width="90" height="34" rx="6"/>
    <text class="rr-term-text" x="165" y="55" text-anchor="middle">CHANGES</text>

    <rect class="rr-term" x="120" y="93" width="78" height="34" rx="6"/>
    <text class="rr-term-text" x="159" y="115" text-anchor="middle">FINAL</text>

    <rect class="rr-term" x="120" y="153" width="190" height="34" rx="6"/>
    <text class="rr-term-text" x="215" y="175" text-anchor="middle">AFTER WINDOW CLOSE</text>
  </svg>
  <figcaption class="rr-caption">Syntax: <code>EMIT</code> followed by exactly one of <code>CHANGES</code>, <code>FINAL</code>, or <code>AFTER WINDOW CLOSE</code>. <code>FINAL</code> and <code>AFTER WINDOW CLOSE</code> require a <code>WINDOW</code> clause.</figcaption>
</figure>

`EMIT` is the last clause in a query and the only one that governs timing rather than shape. Nothing leaves a running Gneiss query until `EMIT` says so — even a query with no `WINDOW` needs it, since without it there is no rule for when a matched row is considered ready to send.

<!-- more -->

## Grammar

<div class="grammar">
EMIT emission

emission ::= "CHANGES" | "FINAL" | "AFTER WINDOW CLOSE"
</div>

## The three modes

| Mode | Requires WINDOW | Emits |
| --- | --- | --- |
| `CHANGES` | no | Every time the match set changes, immediately. Rows may later be superseded by a revised row for the same key. |
| `FINAL` | yes | Exactly one row per window, the instant the window closes — no revisions, but nothing arrives before the close either. |
| `AFTER WINDOW CLOSE` | yes | One row per window, held until the stream's full allowed lateness has passed, then flushed once. |

```sql
WINDOW TUMBLING (INTERVAL '1' MINUTE)
GROUP BY s.id
EMIT FINAL
```

## Choosing between them

`CHANGES` is the right default for alerting, where seeing a row two seconds sooner is worth occasionally seeing it revised. `FINAL` suits dashboards that expect one settled number per bucket and would rather wait a beat than reprint a row. `AFTER WINDOW CLOSE` is the cautious option for anything downstream that cannot tolerate revision at all — it waits for the same grace period `allowed_lateness` grants incoming events, so a window that closes at `12:00:00` with a two-minute lateness budget won't flush until `12:02:00`.

## Notes

- `FINAL` and `AFTER WINDOW CLOSE` both fail to compile without a `WINDOW` clause — there is no "final" state for a query that never closes anything.
- Switching a running query from `CHANGES` to `FINAL` is a new query, not a live reconfiguration; Gneiss compiles the emission mode into the execution plan.
- `CHANGES` is the only mode compatible with row-level queries that have no `GROUP BY` — a `FINAL` row only makes sense for an aggregate.
