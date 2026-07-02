+++
title = "Learn"
description = "The Rhyolite manual: five chapters from bezier control cages to compute-shader passes, in the order a frame actually moves through the renderer."
sort_by = "weight"
template = "section"
generate_feeds = false
+++

Five chapters, ordered the way a frame actually travels: you build a path, the path joins a retained scene graph, the tessellator turns it into GPU geometry, the pipeline batches that geometry into draw calls, and a compute pass resolves antialiasing and clipping before the frame lands on screen. Read it top to bottom for a full pass, or jump straight to the chapter you need from the tree on the left.

Every code sample compiles against the 0.9 API. Chapters marked `beta` cover surfaces that may still change shape before the 1.0 release.
