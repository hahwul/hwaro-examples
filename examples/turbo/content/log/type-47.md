+++
title = "Type 47 and the lost geometry"
date = "2025-06-22"
description = "The drive was fine. The numbers that described it had been forgotten with the battery."
tags = ["bios", "hardware"]
[extra]
file = "TYPE47.TXT"
bytes = "3,967"
+++

With the battery replaced, the machine forgot nothing new. Unfortunately it had already forgotten the hard disk.

<!-- more -->

A drive of this age does not introduce itself. The setup screen wants a type number, and each type is a row in a table burned into the BIOS: so many cylinders, so many heads, so many sectors per track. This BIOS offers forty-six fixed rows and a forty-seventh that you fill in by hand. The drive in the cage, a 120 megabyte unit, matches none of the fixed rows.

Get the numbers wrong and the disk still spins, still seeks, and then reads the wrong sector with total confidence. The partition table appears to be garbage. Nothing is damaged, yet. Writing to it in that state is how damage happens.

## Finding the numbers

The label on the drive had been covered by a mounting rail. Under the rail:

```text
CYL   HEADS   SEC/TRK   WPCOMP   LZONE
762       8        39     NONE     762
```

Entered as type 47, the directory came back on the first boot, intact, last modified in 1996.

## What was done afterwards

The geometry is now written in three places: this file, a paper label inside the case lid, and a strip of masking tape on the drive itself. A battery will fail again one day. The tape will not need one.
