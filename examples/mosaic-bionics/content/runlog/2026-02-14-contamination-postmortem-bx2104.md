+++
title = "Postmortem: contamination event on R-200B, batch 2026-031"
date = "2026-02-14"
description = "Foaming, off-spec pH, and a Bacillus subtilis bloom that took out a 200 L fed-batch of BX-2104.7 at hour 38."
tags = ["postmortem", "contamination", "fed-batch"]
[extra]
batch_id = "2026-031"
strain = "BX-2104.7"
reactor = "R-200B"
status = "scrapped"
+++

## Summary

Batch 2026-031 was a 200 L fed-batch of **BX-2104.7** on **R-200B**, intended to extend
the titer record we set in late January. The run was terminated at hour 38 after the
on-line OD600 climbed past 38 — roughly 12 OD higher than the expected exponential
trajectory — and the off-gas analyzer reported an unexplained jump in CO2 evolution
rate that did not correlate with the feed schedule. The plate count we pulled at hour
40 came back at 4.2 × 10^7 CFU/mL of a contaminating organism that ribotyped as
**Bacillus subtilis**, most likely from the inoculum prep line. The batch was scrapped,
the reactor was CIP'd twice, and we steamed the transfer line for ninety minutes
before re-qualifying.

## Timeline

- **Hour 00:00** — inoculation from a 2 L seed at OD 4.1. Initial pH 6.8, DO 78%.
- **Hour 06:00** — exponential phase confirmed. OD 5.6, doubling time on track at 1.8h.
- **Hour 18:00** — induction at OD 14.2. Feed schedule advanced to phase II.
- **Hour 30:00** — DO crash to 18% despite max stir + max sparge. Foam spike.
- **Hour 36:00** — pH excursion to 5.9, antifoam #2 dosed. CER + 22%.
- **Hour 38:00** — terminated. Plate pulled.
- **Hour 40:00** — plate count confirms contamination at 4.2 × 10^7 CFU/mL.

## Root cause

The inoculum was prepared in **shake flask SF-19**, which had been autoclaved on the
same morning as a media-prep run that used unfiltered tap water — a violation of our
SOP. The autoclave cycle completed normally (123 °C, 28 min, F0 verified) so the flask
itself was sterile when it came out. The contamination most likely entered during the
transfer to the seed bioreactor: the sterile filter on the transfer line had been in
service for 41 days, past our 30-day rotation. A post-mortem integrity test on that
filter failed at 18 psi forward flow.

## Corrective actions

1. Filter rotation cadence cut from 30 days to **21 days**, tracked in the maintenance
   board.
2. **Two-person sign-off** added to the inoculum transfer SOP. The receiving engineer
   must verify the filter integrity card before opening the transfer valve.
3. The shake-flask rack has been moved out of the media-prep room entirely. New rack
   lives in the dedicated inoculum room, behind the second airlock.
4. We are evaluating an in-line bioburden sensor for the transfer line. Two vendors
   under quote, decision expected by end of March.

No personnel exposure. The contaminating organism is BSL-1 and was disposed of through
the normal autoclave-and-bleach waste stream.
