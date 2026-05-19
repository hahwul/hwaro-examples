+++
title = "Reading the board"
description = "How to use the Harbor Metrics operations board without slowing the gate down."
+++

Harbor Metrics is the operations board for a working deep-water container terminal. The page you came from is what the duty supervisor watches across an eight-hour shift, and what the night gate consults when a driver presents an unexpected booking. The contents of this manual were written by the people who built the board, not by the people who specified it.

## The numbers

Every number on the board is the smallest one we can be sure of. The current count of containers on the yard is the count at the last reconciliation tick — not the count that would be right if the camera system caught up. If the count has not been reconciled in the last fifteen minutes, the number turns black-on-cream and a clock starts in the corner. We would rather show a stale number with a clock than a fresh number with no provenance.

> Black on cream is a warning. The clock tells you how long the warning has been on. If the clock passes thirty minutes, call the yard.

## Berths and bays

Each berth has a name, a draft, and a fender envelope. The board shows the **occupancy** plot for each berth — the rolling twelve-hour history of arrivals, dwell, and departures. The fender alerts are wired into the same system that drives the alongside lighting; if the board says a fender is hot, the fender is also flashing in real life.

## The team

The terminal is run by a duty supervisor, two yard masters, four gate clerks, and the operating engineers for the four ship-to-shore cranes. Everyone on the rotation has read this manual. New hires read it twice and sign the back page before they touch the board.
