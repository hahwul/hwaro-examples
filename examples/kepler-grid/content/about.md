+++
title = "Manual"
description = "Reading guide for the Kepler Grid console."
+++

Kepler Grid is a ground console for a small commercial constellation in low-Earth orbit. The display you just stepped away from is the working surface for two flight directors, four payload engineers and a rotating night shift of three.

## What you are looking at

Every panel in the console is a working board, not a summary. The numbers update on every telemetry tick — sixteen ticks per minute on the s-band, two per minute on the high-rate X-band downlink. When a panel goes dim the source has stopped reporting, not the page.

> Treat the bright sliver. Anything outside the bright sliver was already true ten minutes ago.

The orange marker means *attention without alarm*. A red dot is an alarm; an alarm has always been acknowledged by the time you see it here. The yellow square is operator-defined and survives between shifts.

## What we promise

- The console will be honest. If a stream is stale we show *stale*, not the last value.
- We will publish a logbook entry within an hour of any anomaly leaving safe-mode rehearsal.
- We will not invent a number to fill a panel. An empty panel is a real panel.

## The team

The grid is run jointly by the spacecraft and ground software groups. New shift members read the **Logbook** front to back before they pick up a handover.
