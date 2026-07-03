+++
title = "Transforms"
description = "All six Hematite transforms, in pipeline order — geometry first, then color and texture, then delivery"
sort_by = "weight"
template = "section"
+++

Every transform below takes the same shape: a filter chain appended to the source URL, a before plate, and an after plate. Chain order is not cosmetic — geometry transforms (crop, orientation) run before resampling, texture and color transforms (sharpen, palette, grain) run after, and format negotiation always runs last, once the pixels are final and there's nothing left to decide except how to encode them.
