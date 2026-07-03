+++
title = "Cutting a 40-metre end-fed half-wave"
date = "2025-04-08"
description = "Winding a 49:1 unun and trimming a wire until the analyser finally goes flat — with the first contact it made."
tags = ["antenna", "40m", "efhw", "build"]
[extra]
serial = "0431"
utc = "1152Z"
freq = "7.023"
mode = "CW"
call = "VK6QP"
+++

The end-fed half-wave is the lazy operator's dream: one wire, fed at the end,
resonant on its fundamental and the even harmonics, no radials to trip over. The
catch is the feedpoint impedance — a half-wave presents something like 2,400 ohms
at the end, so you need a 49:1 transformer to drag it down near 50.

<!-- more -->

I wound the unun on a single FT140-43 core: two turns for the primary, fourteen
for the secondary, tapped off the same wire so the primary shares the first two
turns. A 100 pF silver-mica across the input tames the high end. That is the
whole matching network.

The wire length is the other half. For a half-wave in feet, the rule of thumb is:

```
length_ft = 468 / freq_mhz
```

For a 7.100 MHz centre that is about 65.9 feet, but velocity factor and the end
effect mean you always cut long and trim. I started at 67 feet and swept it with
a little analyser, snipping in six-inch bites:

| cut | length | resonance | SWR at 7.100 |
|-----|--------|-----------|--------------|
| 0   | 67'0"  | 6.94 MHz  | 1.9          |
| 1   | 66'0"  | 7.02 MHz  | 1.5          |
| 2   | 65'6"  | 7.09 MHz  | 1.2          |

Good enough to stop cutting. I hung it as a sloper off the tall fir, threw a
hundred watts of CW at it, and the first thing to come back was VK6QP in Perth at
1152Z — 14,500 kilometres on a wire I had finished soldering that morning. The
even harmonics land it on 20 and 15 too, which is the whole point. This same
sloper later carried a [grey-line run to New Zealand](/logbook/grayline-ft8-autolog/)
at dawn on 40.
