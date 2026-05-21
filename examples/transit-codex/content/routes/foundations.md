+++
title = "Foundations"
description = "The red line. Concepts, vocabulary, and the layout of the whole system."
date = "2026-02-01"
weight = 1
template = "doc"
[extra]
line = "R"
line_name = "Red Line"
color = "#e63946"
station = "01"
transfers = [
  { line = "B", color = "#1d4ed8" },
  { line = "G", color = "#138a36" }
]
+++

The red line carries the foundation traffic — the vocabulary, the mental model, the layout of the whole system. Every other line connects here at least once. Board at the southern terminus and ride north through four stops.

## Station R01 · Vocabulary

Every documentation system has a private dialect. This one is no exception. The four words you need before riding any further:

- **Line** — a thematic guide. Red runs foundations, Blue runs operations, Green runs signals, Orange runs maintenance.
- **Station** — a single chapter, the smallest unit of documentation that stands on its own.
- **Transfer** — a cross-reference that lets you change lines without going back to the map.
- **Headway** — the time between revisions to a guide.

Memorize the first three. The fourth will become obvious when you maintain the system.

## Station R02 · The mental model

Documentation lives on rails. A guide is a sequence of stations, and the rails between them are explicit. You always know what comes before and what comes after a chapter, because every page is a stop on a line. You never lose your place — the map is in your hand.

> If you cannot tell which line you are riding, the system is broken.

## Station R03 · Transfers

Some concepts belong on multiple lines. *Authentication* is a topic on Operations (Blue) but also a station on Signals (Green) because it produces telemetry. We do not duplicate the content — we mark the station as a **transfer**, and the reader takes one of the two lines depending on what they came for.

```
[Authentication]
  Blue ─── Operations · Station B02
  Green ── Signals · Station G02
```

Transfers cost nothing and reduce duplication. Use them aggressively.

## Station R04 · Maintenance discipline

A documentation system without maintenance discipline ages into a museum. This one runs like a transit authority: pages are deprecated, not deleted; new stations are appended in sequence, not inserted between two stops; lines are renamed only when the underlying system shifts.

Continue to the [Operations line](/routes/operations/) to learn what runs day-to-day.
