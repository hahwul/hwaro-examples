+++
title = "Sheet Moss"
date = "2026-01-18"
description = "Hypnum curvifolium on the coping stones: slurry, patience, and a misting schedule that finally worked"
tags = ["pleurocarp", "slurry", "stone"]
template = "moss"
[extra]
latin = "Hypnum curvifolium"
form = "carpet"
shade = 4
moisture = "high"
substrate = "limestone coping, thin soil film"
patch = "the coping stones along the north wall"
+++

The one everyone means when they say moss. Feathery, flat, obliging — and the only species here that agreed to grow on dressed stone, provided the stone stayed wet enough to disappoint a lizard.

<!-- more -->

## Dressing the stone

The coping stones came with the house: limestone, saw-cut, blindingly pale against everything this garden is trying to be. Bare stone in deep shade does not green up on its own schedule — the first winter produced exactly one coin-sized colony, self-sown, in a saw mark.

So I helped. In October I painted the north faces with slurry — the same method as the [silver moss](@/mosses/silver-moss.md) jars, but blended from a handful of Hypnum lifted off a rotting fence rail two streets over, with the owner's blessing. The trick that mattered was not the recipe. It was the film of sieved soil, barely a millimetre, pressed onto the stone first with a wet sponge. Hypnum is a pleurocarp; it creeps and pins itself down as it goes, but it needs something to pin *into*.

## The misting schedule

The second trick was steady water in small doses. A soaked stone that dries by noon grows algae, not moss. Little and often wins, so the irrigation timer now runs this:

```
# mist the coping stones, October through March
*/20 6-9 * * *   mister --zone coping --seconds 40
0 13 * * 1,4     mister --zone coping --seconds 90
```

Forty seconds every twenty minutes through the cool of the morning, a longer drink twice a week. By March the saw marks had gone velvet. By May the velvet had opinions, curling over the arris and starting down the wall face, which was always the real plan.

Do not walk on it in frost. That is the whole of the winter care.
