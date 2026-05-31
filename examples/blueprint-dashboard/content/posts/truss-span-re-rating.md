+++
title = "Re-rating the Primary Truss Span"
date = "2026-05-31"
draft = false
description = "Why the A-TRUSS span was re-rated to 12.4 m and how the dimension call-outs were updated across the sheet."
tags = ["structural", "tolerances", "assemblies"]
categories = ["diagnostics"]
reading_time = 2
+++

Revision C moves the rated span of the primary truss from 11.8 m to 12.4 m. The change is small on paper but it ripples through every dimension line that references the A-TRUSS datum, so the whole sheet had to be re-checked before the rev could be signed off.

{% alert(type="note") %}A dimension line is only as trustworthy as the geometry it points at. Re-rate the member first, then redraw the annotation.{% end %}

## what triggered the change

The deflection log showed headroom against the allowable limit, and the deck loading came in lighter than the tender assumption. Re-rating the span recovers usable length without adding steel.

- **Old span:** 11.8 m at 58 kN
- **New span:** 12.4 m at 62 kN
- **Allowable:** 0.04 mm mean tolerance, unchanged

## checks performed

1. Recompute load path through the C-CORE node.
2. Verify clearance against the D-RAIL setting-out line.
3. Update the FIG. 01 dimension call-out and the title block rev.

```text
SPAN  = 12.4 m
LOAD  = 62 kN
CHECK = PASS (within band)
```

The node connection at C-CORE remains open as an RFI; everything else is cleared for issue.
