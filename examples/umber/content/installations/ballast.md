+++
title = "Ballast"
date = "2025-10-08"
description = "A permanent installation in a maritime hall, played through the salvaged hull plates it hangs beside."
[extra]
venue = "Cutwater Maritime Hall, Port Arden Museum"
format = "Permanent installation"
duration = "14 min loop"
topology = "6 structure-borne hull transducers + threshold pair"
speakers = 2
contacts = 6
wave = [38, 26, 19, 10, 5, 6, 10, 9, 37, 21, 16, 9, 4, 2, 3, 10, 30, 22, 16, 6, 5, 7, 8, 33, 25, 10, 11, 9, 6, 2, 5, 19, 21, 15, 9, 5, 10, 6, 29, 21, 13, 8, 8, 5, 2, 4, 22, 9]
+++

Ballast plays through the wreckage it is about. Six salvaged hull plates hang on the wall of Port Arden's maritime hall, and each one carries a structure-borne transducer bolted directly to the steel, using the plate itself as the loudspeaker diaphragm.

<!-- more -->

## Speaker topology

A stereo near-field pair sits at the room's threshold, carrying only a thin surface layer — water, gulls, dock creak — meant to feel external, like weather outside a door. Everything else plays through the six plate transducers, staggered on a Latin-square firing pattern so no two plates ever strike in sync; an early version fired all six together and reviewers called it a surround gimmick within the first week.

```
ENTRY   near.stereo[l,r]       -10.0 dB  HPF 200Hz
PLATE1  hull.contact.fwd-port  -2.0 dB   BP 60-900Hz
PLATE2  hull.contact.fwd-stbd  -2.0 dB   BP 60-900Hz
PLATE3  hull.contact.mid-port  -3.5 dB   BP 60-900Hz
PLATE4  hull.contact.mid-stbd  -3.5 dB   BP 60-900Hz
PLATE5  hull.contact.aft-port  -2.0 dB   BP 60-900Hz
PLATE6  hull.contact.aft-stbd  -2.0 dB   BP 60-900Hz
```

## Mix notes

Source material is entirely field recording: ballast chain dropped into an empty hold, hull plates struck with a mallet at the salvage yard, rivets working loose under load during the tow. Nothing is synthesized.

The Latin-square schedule runs six independent offsets across a 14-minute loop, so the piece never quite repeats within a single museum visit — the transient landing under your palm on the fwd-port plate today falls on a different beat than it did an hour ago.
