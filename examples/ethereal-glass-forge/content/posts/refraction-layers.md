+++
title = "Refraction Layers"
description = "Stacking translucent panes to control light decay across the interface."
date = "2024-05-12"
tags = ["glass", "refraction", "layering"]
+++

The forge holds three panes at once. Each one accepts incoming light, bends it slightly, and passes it forward to the next surface. The order of the panes determines the final character of the composition.

The top pane is the thinnest. It carries a backdrop blur of eight pixels and an alpha of fourteen percent. Its purpose is to soften the source without hiding it. Type set above this layer remains crisp, because the pane sits behind the text rather than in front of it.

The middle pane is the structural one. It runs at twenty-two percent opacity and a blur of twenty pixels. This is where the cyan and orange channels separate. We tune the saturation upward by twelve percent so the colors do not collapse into grey when the blur radius widens.

The bottom pane is the anchor. It uses a near-opaque white at eighty-five percent and applies no blur. Without this anchor, the upper panes would drift visually and the layout would lose its frame. With it, the entire stack reads as a single object even though each pane behaves independently.

Stacking order matters more than individual values. A correctly tuned pane in the wrong position produces flat results. We document the order in the design tokens file and treat any reordering as a structural change, not a cosmetic one.

The forge does not aim for realism. It aims for legibility under varying backgrounds. When the wallpaper shifts, the panes adapt without manual intervention because the alpha and blur values are calibrated against a tested range of luminance inputs.
