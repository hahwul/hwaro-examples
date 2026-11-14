+++
title = "IRQ 7 belongs to nobody"
date = "2025-12-07"
description = "A sound card that crackled only while printing, and the jumper block that explained it."
tags = ["hardware", "dos"]
[extra]
file = "IRQ7.TXT"
bytes = "4,390"
+++

The sound card worked. The printer worked. Playing a sound while the printer was busy produced a noise like a zip being undone slowly.

<!-- more -->

An interrupt line is a wire a card pulls when it wants the processor's attention. This bus has a small fixed number of them and no referee. If two cards pull the same wire, the processor cannot tell who called, runs whichever handler was installed last, and the other card waits for an answer that never comes.

Interrupt 7 is the first parallel port's by convention. Sound cards of this period also default to 7, on the theory that most printer drivers never use it. This theory holds until one does.

## The jumper block

No setup program was involved. The card's settings are a row of pins and four plastic shunts:

```text
JP4   IRQ    2   5   7   10
             .   .  [x]   .      as found
             .  [x]  .    .      as left
```

Interrupt 5 belongs to a second parallel port, which this machine does not have.

## The other half

Moving the shunt is half the repair. The software still has to be told, in the startup file:

```text
SET SOUND=A220 I5 D1 T3
```

Every program that makes sound reads that line and trusts it completely. Leave it at I7 and the card is silent, with no error, because the program is still listening on the old wire.

The settings are on a label inside the case lid, below the drive geometry.
