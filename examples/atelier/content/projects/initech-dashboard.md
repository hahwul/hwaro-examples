+++
title = "Initech Operations Dashboard"
description = "A live operations console for a logistics provider — the brief was 'one screen, no tabs.'"
date = "2024-08-15"
+++

## Brief

Initech ran their on-call operations from a wall of three monitors and a printed manifest. Every shift change required someone to walk between screens to reconcile state. They asked for one screen, no tabs, no scroll.

## What We Built

A single-page dashboard with three stacked horizontal bands:

1. **Top band** — current shipments in transit, organized by ETA. The most overdue is always at the left.
2. **Middle band** — vehicle health, sorted by alert severity. Vehicles in nominal state collapse to a single counter.
3. **Bottom band** — staffing roster, with the next two shift transitions highlighted.

The layout fixed at 1920×1080 so it could mirror to the wall display without reflow.

## What We Cut

The original brief listed sixteen widgets. We removed eleven after watching dispatchers actually work — most of the data was either redundant with the live feeds or only consulted during incident reviews, which already had their own tools. The remaining five fit comfortably on one screen.
