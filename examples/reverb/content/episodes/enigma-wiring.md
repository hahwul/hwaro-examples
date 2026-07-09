+++
title = "Enigma's Wiring Diagram"
date = "2025-08-09"
description = "A plugboard, three rotors, and a design flaw nobody noticed for a decade: no letter could ever encrypt to itself. We walk through how Bletchley Park turned that one weakness into a war-shortening break."
tags = ["machines", "wwii", "cryptanalysis"]

[extra]
block = "0x04"
duration = "52 min"
guest = "Marcus Thale, mechanical cipher restorer"
cipher = "Enigma, rotor-based polyalphabetic substitution"
preview = "A plugboard, three rotors, and a stubborn assumption that no letter could encrypt to itself. That assumption is why Poland cracked it first."
preview_rot13 = "N cyhtobneq, guerr ebgbef, naq n fghoobea nffhzcgvba gung ab yrggre pbhyq rapelcg gb vgfrys. Gung nffhzcgvba vf jul Cbynaq penpxrq vg svefg."
+++

Enigma is Vigenère's descendant with gears. Instead of a repeating keyword, a set of wired rotors steps forward with every keystroke, so pressing the same letter twice in a row almost never produces the same ciphertext letter twice. On paper, with a keyspace in the hundreds of trillions once you count rotor selection, ring settings, and the plugboard, it looked unbreakable to the officers who used it daily.

<!-- more -->

## The flaw was in the wiring, not the math

Every Enigma model shared a mechanical constraint: current had to pass through the plugboard, through three rotors, bounce off a reflector, and pass back through the rotors and plugboard again — and the reflector guaranteed a letter could never be wired back to itself. That single property, self-reciprocity, is what Polish mathematician Marian Rejewski exploited in the early 1930s to reconstruct the machine's internal wiring using pure group theory, years before a single Enigma unit fell into Polish hands.

## From Poznań to Bletchley

By 1939, with German rotor stepping procedures growing more complex, Rejewski's team handed their reconstruction and their electromechanical "bomba" design to British and French intelligence weeks before the invasion of Poland. At Bletchley Park, Alan Turing and Gordon Welchman extended the approach into the bombe — a machine that searched rotor settings by exploiting *cribs*, guessable plaintext fragments like standard weather-report headers or a commander's habit of signing off the same way daily:

```text
KNOWN CRIB:    W E T T E R V O R H E R S A G E
CIPHERTEXT:    S U J N K R X R W X F P R B T H D
RULE:          Enigma never maps a letter to itself.
                Any alignment where crib[i] == cipher[i] is impossible —
                discard it and slide the crib one position over.
```

That single "never itself" constraint, mechanically forced by the reflector, is what let the bombe discard millions of rotor-setting candidates in seconds instead of testing each one by hand.

## Cited in this episode

- Marian Rejewski's 1932 reconstruction of the Enigma wiring via group theory
- Gordon Welchman, *The Hut Six Story* (1982)
- The captured weather-ship cipher material that shortened the 1941 naval break

[Block 0x05](../../episodes/rsa-factoring-wall/) leaves mechanical ciphers behind entirely for the first genuinely modern idea on the show: a key you can hand to a stranger in public.
