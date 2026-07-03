+++
title = "Bitsy and Twine: tiny worlds, big feelings"
date = "2026-05-19"
description = "Two no-code-ish tools for making small narrative games that punch far above their file size."
[extra]
engine = "Bitsy · Twine"
+++

Not every jam game needs a physics engine. Some of the most-loved Gibbous entries have been walking-and-talking pieces made in Bitsy, or branching stories built in Twine. This session is for people who want to make something felt rather than fought, and who would rather write than debug.

<!-- more -->

## Two tools, two shapes

**Bitsy** makes tiny tile worlds you explore with the arrow keys, drawn in an eight-by-eight grid straight in the browser. It is deliberately limited, and the limits are the point: a whole game is a few rooms, a few sprites, and the words that appear when you bump into things.

**Twine** makes hypertext: passages of prose linked by choices. No grid, no sprites, just structure and voice. We use the Harlowe story format and add a sprinkle of state:

```harlowe
(set: $lantern to true)
The path forks under the gibbous moon.
[[Follow the light->clearing]]
(if: $lantern is true)[[[Blow it out->dark]]]
```

That `(if:)` is the entire trick behind most branching drama: remember one thing, then change what the reader can do because of it.

## What we build

In Bitsy, a two-room vignette with one character who says something different after you have found the key. In Twine, a three-choice scene that ends two different ways. Both are exportable to a single HTML file you can drop straight into your submission.

## Bring

Just a browser. Both tools run online with nothing to install. If you like, bring a sentence you want a player to feel by the end. We will build the smallest possible thing that earns it, and talk about why restraint reads as polish when the clock is against you.
