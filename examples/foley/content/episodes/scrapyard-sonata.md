+++
title = "Scrapyard Sonata: the physics desync that only happened at 62 frames per second"
date = "2025-03-11"
description = "Devon Okafor of Rattle & Hum on porting a junk-instrument physics puzzler to Switch, and the console certification bug that cost six weeks."
tags = ["physics-puzzle", "porting", "certification", "audio"]
[extra]
episode_no = "003"
duration = "52 min"
game = "Scrapyard Sonata"
studio = "Rattle & Hum"
guest = "Devon Okafor"
+++

Scrapyard Sonata is a physics puzzle game where every solution is built from junkyard parts that also function as instruments — a stack of oil drums that resonates when a marble rolls through it, a suspension spring that twangs on impact. Devon Okafor built it over two years, shipped it on PC first, and spent six of the following eight weeks fighting a bug that only Nintendo's certification hardware could reliably reproduce.

<!-- more -->

## The pitch

The hook came from a single prototype: a physics rig where collision impacts triggered procedural audio based on object material, tuned so that a "correct" puzzle solution sounded, deliberately, like a finished piece of music. Devon is a former sound designer, and the entire puzzle-design process for the game's forty levels ran backward from "what should this level sound like when solved" rather than forward from a mechanic.

## The number

PC sales were healthy but unremarkable. The number that actually mattered was the Switch pre-order-to-wishlist ratio in the two weeks after the port was announced: 22 percent, nearly triple what the PC storefront had shown, which told Devon the console audience — evidently more receptive to a tactile, sound-toy premise — was the one worth chasing, and justified the porting cost before a single unit had sold.

## What broke

The physics engine used fixed timestep simulation locked to 60Hz, but Switch's certification test suite runs a subset of checks at a forced 62fps to catch frame-pacing bugs, and at that rate the audio-trigger system — which sampled collision velocity once per physics tick — started missing roughly one impact in forty due to a rounding error in the tick accumulator.

```csharp
// Original accumulator (drops events near tick boundaries)
accumulator += deltaTime;
while (accumulator >= FIXED_STEP) {
    Simulate(FIXED_STEP);
    accumulator -= FIXED_STEP;
}
// Fix: snapshot collision events *inside* the simulate loop,
// not after it, so a tick boundary can never eat one.
```

The fix was an eleven-line change once it was found, but finding it took six weeks because the bug was inaudible on Devon's own dev kit, which happened to run its display pipeline at a slightly different effective rate than certification hardware. Nintendo's cert team flagged it as a "may cause player-facing inconsistency" failure without specifying which of the game's forty levels triggered it, and Devon had to build a diagnostic overlay that logged every tick's accumulator value just to reproduce it locally.

## What they'd keep

Building the diagnostic overlay at all, rather than trying to fix the bug blind against cert notes alone. It added three days to an already-late schedule, but every subsequent audio bug across the rest of the porting process — including two more on the PlayStation port that shipped four months later — was caught in minutes instead of weeks because the tooling already existed. Devon now builds an accumulator-logging overlay as the first thing on any new physics-audio project, before the first puzzle is even designed.
