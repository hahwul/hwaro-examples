+++
title = "Flight Rules"
description = "The operating philosophy behind the MCC-7 mission-control console."
tags = ["flight-rules", "console"]
categories = ["meta"]
+++

MCC-7 Flight is a mission-control console for tracking a single orbiter through ascent, insertion, and station-keeping. Every panel on this board exists to answer one question fast: is the vehicle nominal, or is something trending toward a no-go?

The aesthetic borrows from 1960s and 1970s consoles -- dark instrument panels, seven-segment readouts, solid status lamps, and a trajectory plot drawn on a hard cyan grid. No decoration that does not carry a reading.

## flight-control doctrine

1. **A lamp is a commitment.** Green is go, amber is caution, red is no-go. Color is never used for mood, only for state.
2. **Readouts over prose.** Numbers live in monospace seven-segment style so a controller can scan a row of gauges without reading words.
3. **The plot is the truth.** The orbital trajectory is the hero widget; metrics and tables annotate it, never replace it.

## console parameters

- **Engine**: Hwaro static site generator, compiled in Crystal.
- **Styling**: bespoke vanilla CSS, solid fills and box-shadow glows only -- no gradients.
- **Widgets**: inline SVG trajectory plot and stroke-dasharray gauge arcs.

> Flight, this is Guidance -- we are go on the timeline. All systems compiled with Hwaro.
