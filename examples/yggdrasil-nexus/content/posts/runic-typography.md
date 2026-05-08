+++
title = "Runic Typography"
date = "2024-05-20"
description = "Selecting glyphs for cosmological notation."
[taxonomies]
tags = ["typography", "design"]
+++

The Elder Futhark provides twenty-four base glyphs, each with a distinct silhouette and angular construction. We sampled the runeset against the existing serif body face to determine which combinations remained legible at body sizes between fourteen and eighteen pixels.

Three runes survived the screening: Ansuz, Raido, and Berkano. The remaining twenty-one collapsed into ambiguous silhouettes when subpixel rendering smoothed their thin diagonals. We treat the surviving three as accent glyphs only, never as body type, and reserve them for section dividers and category markers.

Pairing the angular runes with a humanist serif required careful spacing adjustments. The default tracking on the serif left the runes feeling isolated, suspended between body lines without clear association. We tightened the surrounding kerning by twelve units and introduced a small left-side bearing to anchor each rune to the glyph that follows.

For the display face, we chose a contemporary geometric sans rather than a fantasy revival. The contrast between modern geometry and historical runeforms creates a productive tension. Readers register the runes as deliberate accents rather than decorative noise.

Color selection followed the same restraint. Runes appear in the deep verdant black of body text, never in accent colors. This treats them as part of the typographic system rather than as illustrations, preventing them from competing with diagrams or photography.

The runic ligatures we considered, including the bind-runes traditionally used for monograms, were rejected. Their visual density disrupts paragraph rhythm and offers no semantic benefit in screen reading contexts. They remain available in the font file but are disabled by default in our CSS feature settings.
