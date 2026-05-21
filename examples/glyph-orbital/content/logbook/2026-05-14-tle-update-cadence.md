+++
title = "Increased TLE update cadence for the LEO sleeve"
date = "2026-05-14"
description = "We are now ingesting two-line element sets every four hours for the six LEO vehicles, up from every twelve. The change closes a recurring six-second pointing offset at the start of each pass."
tags = ["planning", "ground", "pointing"]
spacecraft = ["GLYPH-1A", "GLYPH-1B", "ARGUS-04", "ARGUS-05"]
+++

Pointing residuals at the start of pass acquisition had been trending consistently positive on the six low-Earth-orbit vehicles — a roughly six-second along-track lag, on average, with a standard deviation of about two seconds. The lag is small enough that the dish track loop closes on the bird within the first ten seconds of horizon, but it shaves real seconds off the usable pass window, and it shows up in the per-pass data-product yield.

The cause was the cadence of our TLE ingest. We pulled the public element sets every twelve hours, and at the worst of the cycle the orbital propagation had drifted by something on the order of two kilometres along-track. That is small in absolute terms but it sits right at the limit of the dish's acquisition pattern, and it explains the consistent direction of the residual.

## The change

We now ingest every four hours, on the hour, against a private commercial feed that we backstop with the public catalogue. The pointing residuals on the LEO sleeve since the change has averaged under one second along-track, which is within the dish's beam half-power point.

## Cost and scope

The commercial feed is around two thousand euros per month for the eight-vehicle subscription tier we are on. The MEO birds are unaffected because their orbits perturb much more slowly and the twelve-hour cadence is still sufficient.

The on-call procedure is updated to ingest a manual TLE when a vehicle has a maneuver in the preceding twenty-four hours, which is the failure mode that the four-hour cadence does not catch.
