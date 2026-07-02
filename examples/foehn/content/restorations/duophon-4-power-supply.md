+++
title = "Duophon 4: rebuilding the power supply before anything else"
date = "2025-02-11"
description = "A 1977 Vektor Duophon 4 arrives dead. Job one is always the same: pull the supply, replace every electrolytic, and bring it up slowly on the variac."
tags = ["power", "recap"]
[extra]
maker = "Vektor"
model = "Duophon 4"
year = "1977"
serial = "No. 0412"
+++

The Duophon 4 arrived in a blanket, which is how the serious ones always
arrive. Serial 0412, walnut end cheeks, and a hum audible from across the
room the moment the previous owner had last dared to switch it on — which,
by his own account, was 2009.

<!-- more -->

Rule one of the bench: nothing downstream gets diagnosed until the supply is
trustworthy. A forty-eight-year-old linear supply with original electrolytics
is not a power supply, it is a countdown. So panel one of this restoration
is the power panel, and everything else waits.

## What the supply should do

The service manual — twelve stapled pages, in German, with a coffee ring on
the schematic — specifies three rails:

```text
Rail      Spec        Measured (arrival)   Ripple (arrival)
+15 V     ±0.15 V     +13.2 V              1.9 V p-p
-15 V     ±0.15 V     -14.8 V              0.4 V p-p
+10 V     ±0.05 V     +9.1 V               0.8 V p-p
```

That +15 rail sagging to 13.2 with nearly two volts of ripple explains the
hum, and probably explains why the owner heard "seasick strings" before he
gave up. The +10 rail feeds the keyboard voltage divider, so 0.9 volts low
means every key was flat by more than a semitone. Nothing was broken. It was
all just starving.

## The rebuild

All eleven electrolytics came out, including the two big 4,700 uF cans, which
tested at under half their rated capacitance. I fitted 105-degree parts with
a third again the original voltage rating, re-flowed the rectifier joints —
two were cracked clean through, visible under the loupe as hairline rings —
and replaced the original thermistor with a proper inrush limiter.

Then the variac ritual: twenty percent mains for an hour, forty for an hour,
watching current draw the whole time. Boring on purpose. At full mains the
rails read +15.02, -14.98, +10.01, and ripple on the worst rail is 4 mV.

The oscillators will still be wrong — they are always wrong — but now they
will be wrong for interesting reasons.
[Calibration got its own entry](/restorations/duophon-4-vco-calibration/),
two months and one burn-in later.
