+++
title = "Quiet Channels"
description = "Reducing visual noise on secondary panels."
date = 2024-06-04
+++

Secondary panels were competing with primary content. They used the same blur radius, the same border alpha, and the same inner highlight as the hero panels. The result was a flat hierarchy in which the eye had no clear entry point.

We rebalanced the panel system into three tiers. The primary tier remains untouched: twenty-pixel blur, twenty-eight percent border alpha, eight percent inner highlight. The secondary tier drops to twelve-pixel blur, eighteen percent border alpha, and four percent inner highlight. The tertiary tier removes the highlight entirely and reduces the border alpha to ten percent.

Each tier maps to a content role. Primary panels carry titles, hero copy, and main calls to action. Secondary panels carry metadata, supporting text, and inline references. Tertiary panels carry footers, legal copy, and disclosure regions. The mapping is documented in the panel component definition and enforced by a lint rule.

Type sizes were rebalanced in parallel. Primary panels carry the eighteen-pixel body. Secondary panels reduce to sixteen. Tertiary panels reduce to fourteen and use a slightly cooler grey to reinforce their role. The spacing tokens scale alongside the type, so vertical rhythm remains consistent across tiers.

We tested the change against the analytics from the previous release. Time spent on the primary content area increased by eleven percent. Scroll depth past the secondary content increased by four percent. The tertiary panels saw less attention, which is the intended outcome. The hierarchy now reads correctly without requiring color or motion cues.
