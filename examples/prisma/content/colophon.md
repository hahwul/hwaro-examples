+++
title = "Colophon"
description = "How the plates are measured, drawn, and kept — the method behind the Prisma optics bench."
template = "page"
+++

Runa Solheim opened the bench in a walk-up room above a glazier's shop on Kolding Street in the winter of 2024, with one rule fixed to the wall above the lamp: draw every dispersion pattern precisely enough that another optician could rebuild the plate from the numbers alone, without ever seeing the picture. Five plates from that logbook are reproduced here, chosen for how cleanly each one demonstrates a distinct behaviour of light in glass — a flat surface, a caustic net, a wedge, a faceted bounce, and a pair of lenses undoing what the first three do.

## Method

Each specimen is set under a fixed lamp at 5600K, unfiltered, and read through a hand-held spectroscope before its geometry is logged: entry point, exit point, incidence angle, and the measured position of each visible band. Nothing in a plate is a photograph. Every ray, curve, and bounce on this site is an SVG `linearGradient` pinned to the exact coordinates in the logbook, fading from full saturation at the glass to nothing at the edge of the plate — which means the drawing and the dataset are the same file. Move a plate to another lab, another notebook, another site, and the numbers travel with it.

## The house spectrum

Eight reference hues stand in for the visible band across every plate on this site, chosen to stay legible at hairline stroke widths against pale ground rather than to match a spectrometer trace exactly:

| Band | Hex | Approx. wavelength |
|---|---|---|
| Violet | `#6d28c9` | 410 nm |
| Indigo | `#4438c2` | 440 nm |
| Blue | `#2f6fd6` | 470 nm |
| Cyan | `#1f9ec2` | 495 nm |
| Green | `#2f8f5b` | 530 nm |
| Yellow | `#d4af22` | 580 nm |
| Orange | `#d1791f` | 605 nm |
| Red | `#e0475c` | 650 nm |

The bench's single house accent, a deep violet, is not a decoration borrowed from the spectrum — it is the shortest wavelength on the chart, the one that bends furthest in every plate on this site, which is why it also marks every link and control on the page around the plates.

## Credits

Cutting and photography: Runa Solheim. Plate redrawing and the SVG method: the bench's evening apprentice, Teodor Aas, who insisted every gradient be computed from the logbook rather than eyeballed. Errors in angle or wavelength are Runa's; errors in the drawing code are Teodor's.
