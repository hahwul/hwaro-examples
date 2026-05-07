+++
title = "Holding the Line"
date = "2024-04-30"
description = "Why a vanguard interface picks one accent and refuses to negotiate."
tags = ["design", "color"]
+++

The vanguard idea is simple: a single point of bright authority, with everything else in support. Translated to an interface, it means picking one accent color and using it only where the page wants the user to act.

## What Holding the Line Means

- The accent is reserved for the primary action on each screen. There is exactly one primary action.
- Hover states change opacity, never hue. Switching to a secondary color on hover signals that two accents are in play, which dilutes the original.
- Disabled and inactive states drop to a desaturated neutral. They never use a faded version of the accent.

## When the Discipline Fails

The most common failure is using the accent for "important warnings" alongside primary actions. Once two surfaces compete for the user's eye in the same hue, the accent stops working as a directional cue. Pull warnings into a separate, clearly different palette — usually a warm orange or red — and the primary accent regains its authority.
