+++
title = "Stellar Hierarchy"
description = "Borrowing from astronomy charts to set up reading order in dark interfaces."
date = 2024-03-08
tags = ["design", "hierarchy"]
+++

Astronomy charts have a problem most pages do not: they need to display thousands of points without losing the ability to read any one of them. The solution they reach for is hierarchy by *magnitude*, not by color or weight.

## Magnitude as a Metaphor

On a star chart, the brightest stars are drawn largest. Faint stars are smaller dots. Your eye sweeps to the bright ones first, but the faint ones are still there if you look. The chart never hides information — it ranks it.

Apply the same idea to a dense interface:

- Primary content gets full weight and a larger size.
- Secondary content drops to 0.85em and stays close to the primary.
- Tertiary cues (timestamps, byline crumbs) drop to 0.75em and fade to 60% opacity.

Three magnitudes is usually enough. Four starts to feel fussy. The point is not to whisper the secondary content — it is to make sure the eye reaches the primary first.
