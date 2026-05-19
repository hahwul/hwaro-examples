+++
title = "Operator manual"
description = "How to read the Lumen Grid console without making the night shift call you."
+++

Lumen Grid is the working console for a distributed delivery network — eighty-two edge sites, four hundred and twelve peering links, and a control plane that is intentionally boring. The page you came from is what the night shift watches; everything below is the rulebook for what those numbers mean.

## Reading the panels

Every panel is live. Numbers move when telemetry moves, and they stop moving when telemetry stops — there is no resampling layer between the edge and the screen. If a panel goes dim, the source has gone away. The panel itself is honest; the world behind it is not.

> The lime square is operator-defined attention. Anything green is fine without you. Anything red is already paged.

The three colored squares mean three different things. **Green** is nominal; the system is doing what it was asked to do and you can ignore it. **Lime** is operator attention — a value worth looking at but not worth a page. **Red** is the alarm color and by the time it surfaces here, somebody has already been woken up.

## Why we keep stale values

Caching a stale value would let a panel look healthy while the underlying source had stopped reporting hours ago. We display the staleness instead. A reading more than thirty seconds old gets a dotted underline. A reading more than ten minutes old gets a strikethrough and a banner. We would rather a panel look broken than lie.

## The team

The grid is run by two on-call rotations — site reliability and edge networking — plus a small platform group that owns the control plane. New on-call read the **Incidents** stream front-to-back before a handover and never accept a shift change with red on the board.
