+++
title = "About this console"
description = "What the Glyph Orbital console is, who runs it, and how to read what it shows."
+++

Glyph Orbital is the operations console for a small, privately funded constellation of low- and medium-Earth-orbit satellites. The operator is a thirteen-person engineering team based at a single primary ground station in the high desert, with two leased secondary apertures on different continents. The console you are reading is the same one the on-duty controller stares at during a pass.

We publish the console publicly because most of the data on it is already in the open — orbital elements, downlink schedules, vehicle health rollups — and because the kind of operator who would want to fly with us tends to ask for it. The numbers update on a rolling basis. The console is read-only.

## The constellation

The fleet is mixed by design. Six spacecraft sit in sun-synchronous LEO between 450 and 650 kilometres, with the imaging payloads and the inter-satellite links. Two more sit in a medium-Earth orbit near 8,000 kilometres and carry a regional time-transfer payload. The call-signs are assigned in the order the vehicles came off the integration bench — `GLYPH-1A` was the first flight unit, `ARGUS-04` was the fourth of a different bus, and so on. We have lost one spacecraft (`KORE-3B`, deorbited intentionally after a battery-string fault in November 2025).

## How to read the console

The main tile, top-left, is the orbital map. The three nested ellipses are the average altitude shells, drawn flat and not to scale; the small filled squares are spacecraft positions sampled at the timestamp on the masthead. To the right of the map is the constellation roster — one row per bird, with a state dot (green for nominal, amber for caution, red for an open anomaly). Below that, the pass schedule shows the next twelve hours of contacts as bars on a 24-hour grid; the colour of the bar indicates which aperture is committed.

The telemetry strips along the bottom are battery state of charge, downlink signal-to-noise (in decibels), and antenna pointing residual (in millidegrees), sampled at one-minute cadence over the last six hours. The bandwidth-budget block is rolled up from the per-aperture link budget and is the number we pay the most attention to during anomaly response.

## Conventions

All times are UTC. All altitudes are mean above the WGS-84 ellipsoid. Signal-to-noise is reported at the demodulator, after RF chain corrections, not at the antenna feed. We do not redact call-signs of failed birds; they remain in the roster, marked `RETIRED`, until their orbital lifetime expires.
