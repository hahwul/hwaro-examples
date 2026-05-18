+++
title = "Manual"
description = "A short reading guide to the terminal."
date = "2026-05-12"
+++

Stratum BI is a single-screen working terminal for a revenue desk. It is dense on purpose. The team that uses it knows the shape of the screen the way a trader knows the shape of their layout — when something is in the wrong place, your eye notices before you do.

## Reading the screen, top to bottom

- **A1–A4** are the four headline numbers. A1 is the position; A2–A4 are the things that move it. If A1 is green and any of A2–A4 are red, you are walking into a meeting with a *current* answer and an *aging* risk.
- **B1** is the segment breakdown. Sort it by the column you are about to defend. The default sort is the desk's chosen lead.
- **B2** is the rolling six-week heatmap. It is the one panel on the screen that you read with your hand, not your head — the eye finds the dark or the bright square first.
- **C1–C3** are the working columns. Watchlist, pipe stages, feed. C3 is the only panel that moves between refreshes; everything else is stable per refresh.
- **D1–D2** are the analytical reads. D1 links to the desk's longer notes; D2 calls out concentration on the open pipe.

## Refresh cadence

The warehouse refreshes at **06:00 New York** weekdays. The terminal reads the refresh and re-renders at **06:05**. The numbers do not change during the day. If you see a number change without a refresh, the desk has filed a correction; the feed (C3) will say so.

## Keyboard

- `⌘K` — clear the command line
- `↵` — run the current command
- `F4` — switch layout profile (desk / sales / executive)
- `?` — keyboard reference

The terminal works without a keyboard. Most desk members never learn the shortcuts; the layout is meant to be read, not driven.

## Profiles

The terminal ships with three layout profiles. The **desk** profile is the one above. The **sales** profile rearranges C1/C2/D2 to lead with pipe stage and concentration. The **executive** profile drops the feed and replaces it with the goal-progress board.

> The terminal exists to let the team have the same picture in their head at the same time. The shortcuts and the profiles are for after that goal is met.
