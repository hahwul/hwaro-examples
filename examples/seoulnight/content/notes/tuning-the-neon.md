+++
title = "Tuning the neon"
date = "2025-07-22"
description = "The keyword magenta was sampled from a real sign tube and arrived far too loud. Desaturating it without losing the night."
tags = ["color", "keywords"]
+++

The keyword color was sampled from a photograph of a sign tube in Euljiro, and the raw sample was unusable. Real neon pushes past what a code editor can politely display: on screen it measured close to full saturation, and a page of `if`, `return`, and `import` flickered like a shop front. Keywords are roughly a fifth of the tokens in a typical file. Whatever color they wear becomes the color of the whole buffer.

<!-- more -->

The tuning process was mechanical. Drop saturation a step, read a familiar file for ten minutes, measure contrast, repeat. The stopping rule: the moment a keyword stopped registering as a light source and started registering as ink, back up one step and take that value. The final magenta keeps the hue of the sign but roughly two thirds of its saturation, and it clears the background at 5.4 to 1.

The same pass is recorded in the scheme definition, which doubles as a sample of the scheme reading its own source:

```toml
[colors.neon]
hex = "#d957c4"
role = "keywords"
sampled = "sign tube, euljiro 3-ga"
contrast = 5.4
```

One rejected idea deserves a line. A late draft gave keywords a subtle bold weight on top of the color. It read beautifully for five minutes and then the page felt shouted. Weight is a second channel of emphasis, and spending two channels on one token class is how schemes turn into carnival. Color alone, correctly desaturated, was enough.
