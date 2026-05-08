+++
title = "Orbital Mechanics of the Drift"
date = "2024-05-15"
summary = "Notes on the slow rotation of nebula bodies and the periods that govern their visibility."
template = "page"
+++

The emerald orbs in the void do not hold position. They drift along orbits set at the moment of condensation, and their visibility from any fixed observer is a function of those orbits and nothing else. Predicting when a particular orb will return to its observed position is a matter of measurement, not theory.

## Period Estimation

For a slow-moving body, three observations spread across a long baseline are sufficient to fit a circular orbit. The residuals from that fit indicate whether the orbit is in fact circular or whether an eccentric solution is required. Most nebula orbs are eccentric, but only mildly, and a circular approximation is adequate for visibility forecasting on a one-period horizon.

The period itself is recovered from the angular velocity at the brightest passage, when the orb is closest to the observer. Brightness is integrated over a wide aperture to suppress local turbulence in the diffuse medium that fills the void.

## Conjunctions

Two orbs at similar radii and similar inclinations occasionally align. Visual conjunctions are common because the medium between them is partially transparent, and the back orb's emission passes through the front orb with only minor absorption. The combined emission produces a brief peak in measured flux that does not correspond to any change in either body.

Identifying a conjunction after the fact is straightforward. Predicting one in advance requires accurate periods for both objects and a calibrated reference frame. Errors in the reference frame compound across the prediction interval and dominate the uncertainty by the time the conjunction nears.

## Logging

Each observation is recorded with timestamp, observer position, instrument configuration, and a single measured flux. The log is append-only. Corrections are added as separate entries that reference the original by index. This convention preserves the history of revisions and makes it possible to reconstruct any earlier interpretation of the data.
