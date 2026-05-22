+++
title = "Lighthouse Mobile"
date = "2026-05-18"
description = "The companion app for Lighthouse — offline-first, low-power, ships May 24."
[extra]
eyebrow = "ACTIVE · PRIORITY 01"
owner = "J. Kang"
metric_label = "BUILD"
metric = "117"
metric_note = "Ships May 24 · TestFlight rolling"
tag = "Shipping"
+++

Lighthouse Mobile is the field companion for the dashboard team. Engineers carry it into
manufacturing floors that don't always have signal, so the whole thing was rebuilt on a local
queue this cycle.

## Status

- **Build 117** rolled to TestFlight this morning, 96 internal seats.
- Last week's regression in the offline sync queue is fixed and confirmed by two manufacturing
  partners.
- Public release scheduled for **May 24**.

## What changed in 117

- Background sync now defers to a 2-minute window instead of running on every wake.
- The site picker remembers the last three filters per device.
- Battery drain on iPad Air 5 dropped 14% in the standing test.

## What's next

We need to make a call about whether the Android tablet build follows in the same release or
ships a week behind. The build itself is ready; the question is whether the support team can
absorb both at once.
