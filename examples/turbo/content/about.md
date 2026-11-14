+++
title = "About this machine"
description = "The hardware on the bench, the rules of the log, and why none of it runs in an emulator."
[extra]
file = "README.TXT"
+++

The machine is a Halvorsen HV-386/33: a full-size AT board from the spring of 1991 with a 386DX at thirty-three megahertz, a socketed 387 beside it, sixty-four kilobytes of cache in DIP chips, and four megabytes of memory in thirty-pin modules. It came out of a surveyor's office in a beige tower case with a key lock, a two-digit speed display, and a Turbo button that had been taped down.

It lives on bench four. Nothing else does.

## Rules of the log

- **Real hardware only.** If a fault cannot be reproduced on the board, it does not get an entry.
- **One fault per file.** Each entry names the symptom first, then what was measured, then what fixed it.
- **Part numbers are written down.** Capacitor values, jumper positions, drive geometry. The next person at this bench may be me in ten years.
- **Failures stay in.** An entry that ends with the wrong repair still tells you what not to order.

## Why not an emulator

An emulator boots every time. This machine boots when its battery, its power supply, its drive, and four hundred solder joints all agree to. The interesting part of a thirty-five-year-old computer is the disagreement, and that part does not emulate.

## Reading the listing

File names are eight characters and an extension because the disk they are kept on allows nothing else. Sizes are bytes. Dates are month, day, year. The newest file is at the top, under the bar.
