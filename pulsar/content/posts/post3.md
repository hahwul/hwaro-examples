+++
title = "Building a Radio Telescope Drum Machine"
date = "2026-03-14"
description = "Using periodic signals from three pulsars to create polyrhythmic percussion sequences"
tags = ["drum-machine", "polyrhythm", "radio-telescope"]
+++

What happens when you treat three pulsars as oscillators in a rhythm section? You get polyrhythms that no human drummer would conceive -- patterns that phase in and out of alignment over timescales ranging from seconds to centuries.

## Choosing the Ensemble

We selected three pulsars with rotation periods that produce musically interesting ratios:

- **PSR B0531+21** (Crab Pulsar) -- 33.7 ms period, mapped to a hi-hat pattern
- **PSR B0833-45** (Vela Pulsar) -- 89.3 ms period, mapped to a snare voice
- **PSR J0437-4715** -- 5.76 ms period, mapped to a rapid ghost-note texture

The ratio between the Crab and Vela periods is roughly 3:8, which in musical terms creates a polyrhythmic feel reminiscent of West African percussion traditions. The millisecond pulsar adds a shimmering, almost granular layer on top.

## The Sequencer

We built a custom Max/MSP patch that ingests real-time pulsar timing data from the ATNF Pulsar Catalogue and converts each detected pulse into a MIDI trigger. Each trigger fires a sample from our library of processed radio telescope recordings.

The sequencer runs continuously. Because pulsar periods are extraordinarily stable -- more precise than atomic clocks -- the pattern never drifts. It simply evolves as the three periods phase against each other, creating moments of convergence and divergence.

## Listening Sessions

We ran the drum machine for 72 hours during a residency at the Jodrell Bank Observatory. The results were mesmerizing. Every few minutes, two of the three voices would briefly lock into a recognizable groove before sliding apart again. These moments of alignment felt like catching a signal from an intelligence that communicates in rhythm.

The recordings from that session are available in our archive. Put on headphones, close your eyes, and let three dead stars play drums for you.
