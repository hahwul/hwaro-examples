+++
title = "Ledger of Ash: pricing a roguelike deck by hand for eleven months"
date = "2025-01-14"
description = "Mireille Kohn on why Cinder Loop rewrote its card-pricing formula four times, and the wishlist curve that finally told her the game was ready."
tags = ["roguelike", "solo-dev", "economy", "wishlists"]
[extra]
episode_no = "001"
duration = "46 min"
game = "Ledger of Ash"
studio = "Cinder Loop"
guest = "Mireille Kohn"
+++

Mireille Kohn built Ledger of Ash alone, over three years, in the evenings after a day job she didn't quit until the last four months. It's a roguelike deckbuilder where every card costs actual in-run currency instead of the usual energy points, which sounds like a small change and turned out to be the entire design problem.

<!-- more -->

## The pitch

The original pitch, from a 2021 game jam build, was "Slay the Spire, but you're a pawnbroker." Cards were priced in a currency you also spent on healing and shop rerolls, so every combat decision was also a budgeting decision. The jam build got noticed on a curated roguelike Discord, and that was enough encouragement to spend three years building it properly.

## The number

Wishlists, obviously, but the specific number that mattered was the wishlist-to-day-one-purchase conversion rate during the two-week Steam Next Fest demo in September 2024: 8.1 percent, against a genre average Mireille had heard quoted as roughly 4 to 6 percent. That number is what let her turn down a publisher offer that would have delayed launch by five months for a marketing push she suspected she didn't need.

```text
Next Fest demo, Sept 2024
Wishlists added:        14,220
Demo completions:        6,940  (48.8%)
Day-one wishlist conv.:   8.1%
Refund rate (14-day):     3.4%
```

## What broke

The card-pricing formula got rewritten four separate times. Version one priced every card by its raw stat output, which meant strong cards were unaffordable and weak cards were free, and nobody ever engaged with the pawnbroker mechanic at all — they just bought whatever they could afford. Version three tried to price cards dynamically based on the player's current deck composition, which was elegant on a whiteboard and unreadable in an actual run; playtesters couldn't predict what anything would cost, so they stopped trying to plan. Version four, the shipped version, went back to fixed prices but added a single modifier: prices drop 10 percent for every card you've already sold that run, which rewards the specific tension of choosing what to keep versus what to liquidate without requiring the player to do algebra mid-combat.

## What they'd keep

The decision to keep the game entirely solo past the point where Mireille could have afforded a contractor artist. The pixel art is rougher than a hired artist would have delivered, but it's consistent in a way that comes from one person making every asset with the same eleven years of practice, and several reviews specifically call out the art's coherence as a strength. She's not convinced a contractor would have produced a worse game — she's convinced the game would have taken longer and cost more without a clearly better outcome, and eleven months of runway is not a resource you get to spend twice.
