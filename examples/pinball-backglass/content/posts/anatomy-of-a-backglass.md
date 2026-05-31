+++
title = "Anatomy of a Backglass"
date = "2024-05-18"
description = "The art, the lamps behind it, and the score reels — how a sheet of silkscreened glass became the loudest object in the arcade."
tags = ["arcade", "illustration", "design"]
authors = ["the-operator"]
+++

Walk into any arcade of the era and your eye goes straight up. Not to the playfield, where the real game happens, but to the vertical sheet of glass standing at the back of the cabinet. The **backglass** is the machine's billboard, its face, its promise. It is the part you can see from across the room, and it is doing more work than it looks.

A backglass is three things stacked together: a piece of illustration, a lighting rig, and a scoreboard. Understanding it means taking those three apart.

## The Art

The image itself was almost never a photograph. It was **silkscreened** — printed one flat color at a time, each color forced through a fine mesh stencil, layer over layer, in tight registration. That production method is the whole reason backglass art looks the way it does.

Silkscreen rewards flat color and punishes subtlety. You cannot fake a soft gradient through a stencil, so artists did not try. Instead they built images out of bold color blocks, separated by **heavy black keylines** that hid any small misregistration between passes. A thin white pinstripe between two colors made both of them snap. The result is a style that reads instantly at a distance and never gets muddy:

- Flat fills, no shading
- Black outlines doing the structural work
- White keylines as the highlight that makes color pop
- A limited palette, because every extra color was another screen, another pass, another cost

The constraints were industrial. The aesthetic that fell out of them is timeless.

## The Lamps Behind It

Here is the part most people never see. The backglass is not lit from the front. It is lit from *behind*, by a panel of small incandescent bulbs — usually #44 or #47 lamps — sitting an inch or two back from the glass.

Some of those lamps are always on, washing the whole image with warm light. But many of them are **controlled**. The artist and the engineer worked together so that specific painted regions were left translucent, with the rest of the image printed opaque. When a lamp behind a translucent zone switches on, that region of the painting *lights up* on its own.

> The backglass is the only painting I know of that is wired. Half of it is pigment. The other half is a circuit.

This is why a backglass feels alive in a way a poster never does. Score a bonus and a painted rocket ignites. Light a target and the hero's eyes flash. The illustration is a display surface, and the game is reaching through it to talk to you.

## The Score Reels

In an electromechanical machine, the numbers on the glass were not numbers at all — they were windows. Behind each digit position sat a **score reel**: a printed drum, zero through nine, turned by a stepper motor and a ratchet.

Add a thousand points and a relay pulses, a coil pulls, and the thousands reel clacks forward one position. When a reel rolls past nine back to zero, a small finger trips the next reel up — mechanical carry, base ten, built out of motors and pawls. The sound of a good game is the sound of reels chasing each other through a carry.

You can model the logic in a few lines, even if the real thing was all metal:

```text
function addScore(points):
    units += points
    while units >= 10:
        units -= 10
        tens += 1          # carry, one reel to the next
    # ...repeat up the chain: hundreds, thousands, ten-thousands
    if score >= REPLAY_THRESHOLD:
        award_free_game()
```

Solid-state machines replaced the reels with seven-segment displays and later with dot matrix, but the *grammar* stayed: a row of digit cells, counting upward, fast and loud, with a big number that means **you are doing well**. That row of cells is the single most legible thing on the machine, and a good designer treats it like the headline it is.

## Putting It Together

So the backglass is a layered object. The silkscreen gives it a face that reads across the room. The lamps give that face a pulse tied to play. The reels give it a voice that counts your progress out loud. None of the three would carry the machine alone. Together they make the most theatrical scoreboard ever built — a poster that lights up, keeps score, and dares you to put in another coin.

When I restore one, I work in that same order. Clean the glass and touch up the keylines first. Then test every lamp socket behind it, because a dark zone is a dead joke. Then, last, the reels: level them, lubricate the pawls, and watch the carry ripple all the way up. When it does, the whole glass comes back to life at once.
