+++
title = "Traditional Cider Fermentation"
date = "2026-06-18"
weight = 6
description = "Blending juice, managing yeast strains, and monitoring fermentation chemistry"
+++

Cider fermentation is the final transformation of the orchard's bounty. Making traditional cider requires a deep understanding of juice chemistry, particularly the balance between sugars, acids, and tannins.
<!-- more -->

First, the apples are milled into a pulp called pomace, which is then pressed to extract the juice. A balanced blend consists of roughly 50% sweets and sharps for sugar and fresh fruit flavor, and 50% bittersweets and bittersharps for body and character. Traditional cider makers often rely on wild yeasts present on the apple skins (like Saccharomyces uvarum) for fermentation. This slow, natural process yields complex, earthy esters. However, commercial operations often use cultured wine or champagne yeast strains (like EC-1118) to ensure clean, consistent fermentation profiles.

During fermentation, we monitor the attenuation of sugars using specific gravity measurements. Here is a small Ruby script used to calculate alcohol by volume (ABV) based on starting and ending gravity:

```ruby
def calculate_abv(original_gravity, final_gravity)
  # Standard formula for calculating alcohol by volume
  abv = (original_gravity - final_gravity) * 131.25
  sprintf("%.2f%%", abv)
end

puts calculate_abv(1.055, 1.002)
```

The cider is left to ferment slowly in a cool space, ideally between 50°F and 60°F. Once primary fermentation is complete, the cider is racked off the yeast lees into clean carboys or oak barrels for maturation. Racking prevents the development of off-flavors caused by yeast autolysis. The cider should be allowed to age for at least six months to let the tannins soften and the complex fruit aromas integrate. For definitions of specialized term profiles (such as *tannins* or *pome*), check the [glossary](/glossary/).
