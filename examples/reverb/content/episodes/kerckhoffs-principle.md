+++
title = "Kerckhoffs and the Open Algorithm"
date = "2025-05-22"
description = "A design philosophy older than most working ciphers: assume your adversary already has the algorithm and hide only the key. We trace why every scheme that ignored this eventually broke in public."
tags = ["theory", "principles", "history"]

[extra]
block = "0x03"
duration = "41 min"
guest = "Priya Anand, security researcher"
cipher = "Kerckhoffs's principle (design doctrine, not a cipher)"
preview = "Auguste Kerckhoffs said hide the key, not the method. We argue why every cipher that ignored him eventually failed in public."
preview_rot13 = "Nhthfgr Xrepxubssf fnvq uvqr gur xrl, abg gur zrgubq. Jr nethr jul rirel pvcure gung vtaberq uvz riraghnyyl snvyrq va choyvp."
+++

Not every block on this show is a cipher — some are the rule that decides whether a cipher deserves to exist. Auguste Kerckhoffs, a Dutch linguist working in Paris, published six design principles for military ciphers in 1883. The second one outlived everything else he wrote: a cryptosystem should remain secure even if everything about it, except the key, is public knowledge.

<!-- more -->

## The argument against secret algorithms

Kerckhoffs's reasoning was practical, not idealistic. Algorithms leak — through captured field manuals, through defecting officers, through reverse engineering. A design that depends on the enemy never learning *how* it works has exactly one line of defense, and that line fails silently: you often don't find out the algorithm leaked until you notice your adversary reading your mail. A design that only depends on a key staying secret has a much smaller, much more manageable thing to protect, and you can rotate it the moment you suspect compromise.

Claude Shannon restated this in 1949 as "the enemy knows the system," and it's now taught as Shannon's maxim alongside Kerckhoffs's original six points. Modern block ciphers like AES are published in complete, reviewable detail — the security rests entirely on key length and the mathematical structure standing up to public scrutiny, not on the design staying secret.

## Where it gets ignored anyway

We spend the back half of the episode on counterexamples: proprietary GSM encryption algorithms kept secret through the 1990s and broken within weeks once leaked; DVD's Content Scramble System, reverse-engineered from a Norwegian teenager's DVD player software in 1999; and the recurring temptation, even now, to ship "obfuscated" crypto in embedded devices because publishing the design feels like giving up an advantage. It never is one.

## Cited in this episode

- Auguste Kerckhoffs, *La Cryptographie Militaire* (1883)
- Claude Shannon, *Communication Theory of Secrecy Systems* (1949)
- The CSS (Content Scramble System) reverse-engineering timeline, 1999

[Block 0x04](../../episodes/enigma-wiring/) is the loudest counterexample of them all: a machine whose designers believed obscurity was the whole point.
