+++
title = "About the lab"
description = "The team behind Mosaic Bionics, what the console shows, and how to read it during a shift handover."
+++

Mosaic Bionics is a small, vertically integrated fermentation house operating out of a
converted dairy in the lower Hudson Valley. We run three pilot-scale stirred-tank
bioreactors (one 30 L, two 200 L) and a 96-well screening deck wired to an in-house
control plane. The bench team is five people: two strain engineers, one media chemist,
one process engineer, and a lab manager who refuses to be called anything other than
"the lab manager." The console you are reading is the artifact we stare at during shift
handover at 07:00 and 19:00 every day.

## What the console shows

The signature element at the top is the **96-well expression mosaic** — twelve columns,
eight rows of hexagonal cells representing the active screening plate. Each cell is
filled with one of five discrete saturation bins, mapped from the strain's measured
relative fluorescence at the most recent timepoint. The bins are bucketed, not
interpolated: a cell either crosses a threshold or it does not. We do this deliberately,
because the human eye is better at counting bins than at reading continuous color, and
because a faint gradient hides the cells that just barely cleared the cutoff. The four
strip charts immediately below the mosaic are the live state of the pilot reactors —
**pH, dissolved oxygen, OD600,** and **temperature** — captured at one-minute resolution
over the trailing six hours. The batch-yield ledger lists the last twelve fermentations
in reverse chronological order, with strain identifier, final titer in g/L, yield
against the theoretical maximum, and an out-of-spec flag if any control loop tripped.

## How to read it during handover

Start at the mosaic. If you see clustering — a column or row of high-bin cells — that is
almost always a plate effect (an edge well evaporated, a media stock was miscounted)
and not real signal. Move to the strip charts: anything pH below 6.4 or DO under 25
percent during exponential phase needs eyes on it. Then read the anomaly log at the
bottom of the console, oldest first, and clear what you can before the next shift
inherits it.

The lab is open to visitors on the first Friday of each month. Mind the autoclave room
and do not eat the agar.
