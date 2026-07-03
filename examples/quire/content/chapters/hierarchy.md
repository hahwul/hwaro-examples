+++
title = "Hierarchy"
description = "Scale contrast, not color, is what tells a reader which words matter more."
date = "2025-03-18"
weight = 30
toc = true
+++

Hierarchy answers one question, over and over, for every reader who lands on
a page they've never seen before: what do I read first? A page with no
hierarchy answers "I don't know" — every line looks as important as every
other line, which in practice means nothing looks important at all.

<!-- more -->

The cheapest way to build hierarchy is scale contrast: make the things that
matter more noticeably bigger than the things that matter less, and make the
jump big enough that it registers before the reader starts actually reading.
A headline that's 14% larger than body text isn't a headline — it's body text
with a grudge. A headline that's two and a half times the size announces
itself from across the room, which is exactly the job a headline has.

This book uses six heading levels, each one a deliberate step, and — like
every well-built document — exactly one `h1` per page, with no level skipped
on the way down to `h4`. Skipping a level to "make it smaller" is a hierarchy
bug wearing a font-size fix; the honest solution is almost always to change
the **design** of the level you're on, not to borrow the next one down.

{{ specimen(sample="A heading that barely raises its voice above the text below it fails at its only job.", family="display", weight="600", style="normal", size=19, leading=26, picas=23, label="Spectral 600 — too quiet to register as a heading") }}

{{ specimen(sample="Say it like you mean it.", family="display", weight="600", style="normal", size=42, leading=46, picas=23, label="Spectral 600 — a jump the reader can feel") }}

Both boxes above are set in the same weight, the same face, on the same
measure. The only variable is size — and it's the only variable hierarchy
actually needs. Color and decoration can reinforce a hierarchy that scale has
already built; they can't build one on their own. For the cases where scale
alone isn't the right tool — a single emphasized word inside a sentence,
say — see [Weight](/chapters/weight/).
