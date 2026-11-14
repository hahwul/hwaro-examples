+++
title = "The battery that ate the keyboard controller"
date = "2025-03-09"
description = "A leaking barrel battery, three dissolved traces, and a keyboard error that was never about the keyboard."
tags = ["hardware", "repair"]
[extra]
file = "CMOSBATT.TXT"
bytes = "4,812"
+++

The machine arrived reporting a keyboard error with three different keyboards attached, which is a good sign that the keyboard is innocent.

<!-- more -->

The culprit was the clock battery: a 3.6 volt nickel-cadmium barrel soldered to the board an inch from the keyboard controller. It had been leaking for perhaps a decade. Battery electrolyte is alkaline, it creeps along copper under the solder mask, and it does not stop at the edge of the part that leaked it. The damage here ran in a blue-green fan toward the DIN connector.

## What was done

1. Cut the battery off the board. Do this before anything else, including photographs.
2. Neutralised the area with white vinegar on cotton buds until it stopped fizzing, then rinsed with isopropyl alcohol.
3. Scraped back the mask along every discoloured trace until bright copper showed on both sides of the damage.
4. Found three open traces with a meter: keyboard clock, keyboard data, and one address line that passed underneath.
5. Bridged each with 30 gauge wire and sealed the repairs with lacquer.

The replacement is a coin cell in a holder on fly leads, taped inside the drive cage, with a diode in series so the board's charging circuit cannot reach it.

## Result

The keyboard error is gone. The clock holds. The setup screen kept its values through a week unplugged, which it had probably not done since the nineties.
