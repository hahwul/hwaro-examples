+++
title = "What the Turbo button actually does"
date = "2026-02-15"
description = "It makes the computer slower, and the number on the front panel is set with jumpers."
tags = ["lore", "hardware"]
[extra]
file = "TURBOSW.TXT"
bytes = "3,758"
+++

Someone had taped the Turbo button down. Peeling the tape off made the machine slower, which is exactly what the button is for.

<!-- more -->

The name is marketing. The machine's full speed is its normal speed. The button exists because early software timed itself by counting loops, and a game written for a processor eight times slower runs eight times too fast on this one. Press the button and the board drops into a compatibility mode: on this one it disables the external cache and stretches the bus timing, which lands somewhere near the pace of a fast 286.

So Turbo on is normal, and Turbo off is the special case. Every case manufacturer wired the light to match the label rather than the logic.

## The display that lies

The two-digit display on the front reads 33 with the button in and 16 with it out. It measures nothing. It is not connected to the clock, the processor, or anything else that knows how fast the machine is running.

Behind the bezel is a small board with a grid of jumpers, one group per segment, per digit, per button state. You set what each digit shows by hand. The previous owner could have made it read 99. A case on another bench reads HI and LO.

## What was done

The tape is gone and the button works. The display stays at 33 and 16, because those happen to be nearly true.
