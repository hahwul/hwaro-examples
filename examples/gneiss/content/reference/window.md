+++
title = "WINDOW"
description = "Grammar and semantics of the WINDOW clause: TUMBLING, HOPPING, and SESSION time windows for aggregating a stream."
date = "2025-02-10"
weight = 30
toc = true
[extra]
clause_number = "3"
+++

<figure class="rr-figure" aria-label="Railroad diagram: WINDOW followed by one of TUMBLING with a duration, HOPPING with a size and advance, or SESSION with a gap">
  <svg class="rr" viewBox="0 0 780 220" aria-hidden="true" focusable="false">
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
      <path d="M220,50 H244"/>
      <path d="M348,50 H356"/>
      <path d="M372,50 C420,50 420,110 480,110"/>
      <path d="M212,110 H230"/>
      <path d="M302,110 H320"/>
      <path d="M416,110 H424"/>
      <path d="M434,110 H480"/>
      <path d="M212,170 H230"/>
      <path d="M294,170 H302"/>
      <path d="M312,170 C360,170 360,110 480,110"/>
      <path d="M480,110 H750" marker-end="url(#rr-arrow)"/>
    </g>
    <circle class="rr-start" cx="12" cy="110" r="3.5"/>
    <circle class="rr-end" cx="756" cy="110" r="5"/>

    <rect class="rr-term" x="120" y="33" width="100" height="34" rx="6"/>
    <text class="rr-term-text" x="170" y="55" text-anchor="middle">TUMBLING</text>
    <text class="rr-punct-text" x="232" y="55" text-anchor="middle">(</text>
    <rect class="rr-nonterm" x="244" y="33" width="104" height="34" rx="6"/>
    <text class="rr-nonterm-text" x="296" y="55" text-anchor="middle">duration</text>
    <text class="rr-punct-text" x="362" y="55" text-anchor="middle">)</text>

    <rect class="rr-term" x="120" y="93" width="92" height="34" rx="6"/>
    <text class="rr-term-text" x="166" y="115" text-anchor="middle">HOPPING</text>
    <text class="rr-punct-text" x="221" y="115" text-anchor="middle">(</text>
    <rect class="rr-nonterm" x="230" y="93" width="72" height="34" rx="6"/>
    <text class="rr-nonterm-text" x="266" y="115" text-anchor="middle">size</text>
    <text class="rr-punct-text" x="311" y="115" text-anchor="middle">,</text>
    <rect class="rr-nonterm" x="320" y="93" width="96" height="34" rx="6"/>
    <text class="rr-nonterm-text" x="368" y="115" text-anchor="middle">advance</text>
    <text class="rr-punct-text" x="420" y="115" text-anchor="middle">)</text>

    <rect class="rr-term" x="120" y="153" width="92" height="34" rx="6"/>
    <text class="rr-term-text" x="166" y="175" text-anchor="middle">SESSION</text>
    <text class="rr-punct-text" x="221" y="175" text-anchor="middle">(</text>
    <rect class="rr-nonterm" x="230" y="153" width="64" height="34" rx="6"/>
    <text class="rr-nonterm-text" x="262" y="175" text-anchor="middle">gap</text>
    <text class="rr-punct-text" x="298" y="175" text-anchor="middle">)</text>
  </svg>
  <figcaption class="rr-caption">Syntax: <code>WINDOW</code> followed by exactly one of <code>TUMBLING</code>, <code>HOPPING</code>, or <code>SESSION</code>. Durations use <code>INTERVAL 'n' UNIT</code>.</figcaption>
</figure>

`WINDOW` is optional, but any query that aggregates with `GROUP BY` needs one — Gneiss has no notion of an aggregate over an entire unbounded stream, since "entire" never arrives. Leaving `WINDOW` out is only valid for row-level queries with no aggregation.

<!-- more -->

## Grammar

<div class="grammar">
WINDOW window_spec

window_spec ::= "TUMBLING" "(" duration ")"
              | "HOPPING" "(" duration "," duration ")"
              | "SESSION" "(" duration ")"
duration    ::= "INTERVAL" string_literal time_unit
time_unit   ::= "SECOND" | "MINUTE" | "HOUR" | "DAY"
</div>

## The three shapes

| Window | Parameters | Behavior |
| --- | --- | --- |
| `TUMBLING` | one duration | Fixed, non-overlapping buckets. Every event belongs to exactly one window. |
| `HOPPING` | size, advance | Fixed-size windows that start every *advance* interval; a size larger than the advance means windows overlap. |
| `SESSION` | one gap | No fixed size — a window stays open while events keep arriving inside the gap, and closes the first time the gap passes empty. |

```sql
WINDOW TUMBLING (INTERVAL '1' MINUTE)
WINDOW HOPPING (INTERVAL '5' MINUTE, INTERVAL '1' MINUTE)
WINDOW SESSION (INTERVAL '2' MINUTE)
```

## Watermarks and lateness

`WINDOW` boundaries are evaluated against the stream's watermark, not wall-clock arrival time. How far behind the watermark an event is allowed to be before Gneiss drops it — `allowed_lateness` — is configured per stream, not per query, since it reflects the reliability of a source rather than anything a particular query needs. See [Windows, Joins, and Late Data](/tutorial/windows-joins-and-late-data/) for how lateness interacts with the choice you make in `EMIT`.

## Notes

- `HOPPING` requires the advance to be less than or equal to the size; an advance larger than the size would leave gaps between windows, which Gneiss treats as a compile error rather than silently allowing.
- `SESSION` windows have no upper bound on duration by default — a stream of events arriving just inside the gap can keep one session open indefinitely.
- Only one `WINDOW` clause is allowed per query. To evaluate the same pattern at two window sizes, run two queries.
