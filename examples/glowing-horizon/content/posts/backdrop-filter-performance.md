+++
title = "Backdrop Filter Performance Notes"
date = "2024-08-03"
description = "Measuring the cost of backdrop-filter blur on common rendering paths."
tags = ["css", "performance"]
categories = ["technology"]
+++

The CSS `backdrop-filter` property is the central effect behind glassmorphic panels. It samples the pixels behind an element, applies a filter such as `blur()` or `saturate()`, and composites the result back into place. The implementation cost varies sharply by browser engine and GPU.

On Chromium, backdrop-filter is implemented as a render layer with a dedicated filter pass. Each frame, the compositor re-samples the area beneath the element at the device pixel ratio, applies the blur kernel, and uploads the result as a texture. The cost scales with the area of the element and the kernel radius. A blur of 12 pixels on a 400-by-200 panel costs roughly 0.4 milliseconds on a mid-range integrated GPU. The same blur on a full-viewport panel can exceed 6 milliseconds, which alone consumes more than a third of the 16.6-millisecond budget for 60 fps.

WebKit takes a similar approach but caches the filtered result more aggressively when the source pixels do not change. A static backdrop with a moving foreground element triggers full re-blur on Chromium and partial cache reuse on WebKit. Firefox shipped backdrop-filter later than the others and still falls back to a non-accelerated path on some platforms.

Three rules cover most cases:

- Limit the area covered by `backdrop-filter` to the smallest element that needs the effect. A blurred header is cheaper than a blurred full-screen overlay.
- Avoid animating the source content underneath a backdrop-filtered element. Each frame of source motion forces a re-blur even if the foreground element is stationary.
- Set `will-change: backdrop-filter` only when the filter parameters themselves animate. Setting it on a static panel allocates a layer that the compositor must continually validate.

The effect remains expensive enough that mobile browsers throttle it under heavy load. A panel that renders cleanly on a desktop preview can drop frames on a three-year-old phone.
