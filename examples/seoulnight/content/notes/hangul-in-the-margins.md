+++
title = "Hangul in the margins"
date = "2025-10-12"
description = "Korean glyphs are visually denser than Latin ones. What that means for line height, UI labels, and the specimen on the landing page."
tags = ["typography"]
+++

Seoulnight ships with Korean labels next to its color names, and the site you are reading sets its masthead in Hangul. That decision came with typographic homework. Hangul glyphs are built from stacked jamo inside a square frame, which makes them visually denser than Latin lowercase at the same point size. Set both scripts on the same line with Latin-tuned metrics and the Korean reads cramped while the Latin reads loose.

<!-- more -->

Two adjustments carried most of the weight. Line height on mixed lines runs slightly taller than the Latin-only default, giving the stacked blocks room to breathe without opening visible gaps in pure-Latin paragraphs. And the display face had to be chosen for its Hangul first: Gothic A1 keeps its stroke contrast at heavy weights in both scripts, so the masthead can set 서울밤 at poster size without the counters filling in.

The subtler lesson was about hierarchy. In a Latin-only layout, size and weight do the ranking. Add a second script and the script itself becomes a signal: the Hangul name reads as the identity, the romanization underneath as the annotation. The landing page leans on that deliberately. The big glyphs carry the mood, and the small mono line under them carries the spelling you would type into a package manager.

None of this needed custom features or variable-font tricks. It needed measuring the two scripts honestly instead of assuming the Latin defaults would stretch to cover both.
