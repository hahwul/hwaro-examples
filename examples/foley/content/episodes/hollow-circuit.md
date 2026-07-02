+++
title = "Hollow Circuit: when the modding community fixed the boss you couldn't"
date = "2025-04-15"
description = "Yuki Tanabe of Ferrous Owl on the difficulty backlash that nearly sank a metroidvania, and letting players patch the final boss themselves."
tags = ["metroidvania", "difficulty", "community", "modding"]
[extra]
episode_no = "004"
duration = "63 min"
game = "Hollow Circuit"
studio = "Ferrous Owl"
guest = "Yuki Tanabe"
+++

Hollow Circuit is a metroidvania about a maintenance drone exploring a dead orbital station, and it shipped with a final boss that Yuki Tanabe now admits she never actually beat during development without invulnerability turned on. The story of how that got fixed involves almost no code written by Yuki at all.

<!-- more -->

## The pitch

Ferrous Owl is a four-person studio, and Hollow Circuit was pitched internally as "Hollow Knight's movement with Returnal's failure-forward economy" — dying doesn't reset your progress, but it does convert a percentage of collected currency into permanent upgrades for the drone that finds your wreckage on the next run. It's a mechanic meant to make death productive rather than punishing.

## The number

Refund rate in the first two weeks: 11.4 percent, against a personal target of under 6 percent based on comparable metroidvania launches Yuki had researched. Steam's refund policy allows returns within two hours of playtime, and exit-survey data (collected via an optional in-game prompt) showed the refunds clustered almost entirely around one specific point: the final boss, "the Cartographer," which most players were reaching at roughly the ninety-minute mark.

## What broke

The Cartographer boss fight was balanced by Yuki and one other designer, both of whom had played the full game hundreds of times and had reflexes calibrated to match. Neither of them noticed that the fight's third phase required a parry timing window of roughly 4 frames — technically consistent with the rest of the game's combat, but arriving after ninety minutes of accumulated fatigue and without the earlier bosses ever training the player on that specific input pattern. Internal playtesting had skipped straight to the final boss often enough, via debug tools, that nobody caught how it felt reached honestly, from a tired, under-practiced state.

## What they'd keep

Shipping with mod support enabled from day one, even though nobody on the team expected it to matter for balance. A player named "orrery_ghost" published a rebalance mod eight days after launch that widened the parry window and added one additional telegraph animation, and within a month it had more active users than the studio's own difficulty-options menu. Yuki's team studied the mod's exact numeric changes, folded a close variant into an official patch six weeks later, and credited the modder by name in the patch notes. Ferrous Owl now treats early mod support as a form of unpaid, highly motivated playtesting — with the explicit caveat that it only works because the community was already invested enough to bother fixing something instead of just leaving.
