+++
title = "Materials"
description = "6063-T5 aluminum billet, three-axis CNC machining, and the finishing process behind every Torque case."
date = "2025-09-12"
[extra]
kicker = "MATERIALS — 6063-T5"
+++

We looked at 7075 early on — it's stiffer and the alloy of choice for a lot
of enthusiast keyboard cases — and moved off it once we timed how long it
took the Anvil to rough a case out of it. 7075 machines slower, dulls
tooling faster, and the stiffness advantage doesn't matter much in a part
that isn't load-bearing the way an aircraft bracket is. 6063-T5 cuts fast,
holds a tight tolerance, anodizes evenly, and lets us keep cycle times low
enough to hit forty boards a week on one mill.

## The billet

Every case starts as a 1.4-kilogram bar of 6063-T5, extruded and pre-aged
to its final temper before it reaches the shop — T5 means it's been
artificially aged straight from the extrusion process rather than solution
heat-treated afterward, which keeps the material stable and consistent bar
to bar. Bars arrive in six-meter lengths and get cut to rough blanks on a
band saw before anything touches the mill.

| Property | Value |
| --- | --- |
| Alloy | 6063 |
| Temper | T5 |
| Tensile strength | ~215 MPa |
| Starting blank | 1.4kg |
| Finished case | ~450g |

## Machining

A blank is faced, drilled, and fixtured, then the Anvil — our three-axis
mill, older than the company and rebuilt twice — runs a roughing pass
followed by a finishing pass, about fifty-five minutes total per case. The
plate-mounting holes, the switch cutouts, and the USB-C port opening are
all cut in the same setup, which is what keeps them registered to each
other within ±0.02mm; a second setup would mean a second reference point
and a wider tolerance stack.

| Feature | Tolerance |
| --- | --- |
| Plate mounting holes | ±0.02mm |
| Switch plate cutouts | ±0.05mm |
| Overall case dimensions | ±0.1mm |
| Screw boss depth | ±0.03mm |

## Finishing

After machining, cases go through a bead-blast cabinet that gives the
aluminum its matte, fingerprint-resistant surface, then into a Type II
anodizing tank. Anodizing grows a layer of aluminum oxide directly out of
the surface rather than coating over it, so the finish can't chip or peel
the way paint would — it can scratch through to bare metal under enough
abrasion, but it won't flake.

{{ alert(type="tip", body="Clean a case with a barely damp microfiber cloth and, if needed, a drop of isopropyl alcohol for fingerprints. Skip ammonia-based glass cleaners — they can dull an anodized finish over repeated use — and never submerge a board; the switches and PCB underneath are not sealed.") }}

## Weight and waste

A finished [TQ-75](/keyboards/) case weighs 780g, down from a 1.4kg blank —
better than two-thirds of the material is removed as swarf over the course
of machining. That swarf is bagged by alloy and returned to the same
supplier who sold us the billet, where it's re-melted into new extrusion
stock rather than sold off as scrap to a generic recycler. It isn't a
closed loop, but it's a shorter one than most.
