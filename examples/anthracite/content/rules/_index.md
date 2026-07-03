+++
title = "Rules"
description = "Every diagnostic Anthracite can raise, in the order it evaluates them: quoting first, then expansions, then portability."
sort_by = "weight"
template = "section"
+++

Six rules ship in the 0.9 line. Each one names the exact token pattern it
matches, shows the finding Anthracite would print, and gives the smallest
fix that clears it. Rules are grouped by family and numbered so the family
is legible from the code alone: `AN1xx` is quoting, `AN2xx` is expansions,
`AN3xx` is portability. Later rule families are planned but unnumbered
until they ship.
