+++
title = "Foehn65: First Solder, First Regret"
date = "2025-02-14"
description = "A hotswap 65% turned into a soldered build because I could not leave well enough alone. Oil Kings, an FR4 plate, and the joint I had to redo three times."
tags = ["65-percent", "linear", "gasket-mount"]

[extra]
no = "LOG 01"
board = "Foehn65 (gasket, hotswap)"
switches = "Gateron Oil King, hand-lubed"
plate = "FR4"
+++

The Foehn65 shipped with hotswap sockets, which means the whole point was that I never needed a soldering iron. I bought a soldering iron anyway. Two of the sockets arrived with a lazy spring — keys registered only if I pressed dead center — and rather than RMA a fifteen-dollar PCB I decided to bridge the sockets and solder the switches directly. This is the story of how a beginner turns a thirty-minute build into a Saturday.

<!-- more -->

## The plate decision

I went with FR4 over the aluminum option on purpose. On a gasket-mounted board the plate is half the feel, and FR4 has a little give that takes the edge off a hard bottom-out. Aluminum would have been louder and stiffer than I wanted for a first build I planned to type on for hours.

## Lubing the Oil Kings

Gateron Oil Kings come smooth from the factory, so this was gilding, but I wanted the practice. Thin coat of 205g0 on the rails, a dot of dielectric grease on the springs, nothing on the stem legs. Forty-eight switches, roughly forty minutes, one podcast episode.

## The joint I redid three times

Here is where the regret earned its place in the title. My first pass at the two dead sockets was a cold joint — dull, blobby, and it tested open. I reflowed it; bridged an adjacent pad; wicked the bridge; reflowed again. The rule I now tape to the bench:

> Heat the pad and the pin together, feed the solder to the joint, not the iron. If it looks like a raisin, it is a raisin.

Flashing was the easy part. The Foehn65 runs QMK, so once the hardware behaved I built and flashed from the terminal:

```bash
qmk setup
qmk compile -kb foehn65 -km wren
qmk flash -kb foehn65 -km wren
# hold ESC on plug-in to enter the bootloader if flash can't find the device
```

My keymap only strays from default in one place — a home-row layer toggle so the arrow cluster lives under the right hand:

```c
[_BASE] = LAYOUT_65_ansi(
    KC_ESC,  KC_1, KC_2, KC_3, KC_4, KC_5, KC_6, KC_7, KC_8, KC_9, KC_0, KC_MINS, KC_EQL, KC_BSPC, KC_DEL,
    KC_TAB,  KC_Q, KC_W, KC_E, KC_R, KC_T, KC_Y, KC_U, KC_I, KC_O, KC_P, KC_LBRC, KC_RBRC, KC_BSLS, KC_HOME,
    MO(_NAV),KC_A, KC_S, KC_D, KC_F, KC_G, KC_H, KC_J, KC_K, KC_L, KC_SCLN, KC_QUOT, KC_ENT, KC_PGUP,
    KC_LSFT, KC_Z, KC_X, KC_C, KC_V, KC_B, KC_N, KC_M, KC_COMM, KC_DOT, KC_SLSH, KC_RSFT, KC_UP, KC_PGDN,
    KC_LCTL, KC_LGUI, KC_LALT, KC_SPC, KC_RALT, MO(_NAV), KC_LEFT, KC_DOWN, KC_RGHT
),
```

## Would I build it this way again

No, and that is the honest answer. If a hotswap board fights you, RMA it. But the reflow practice was worth more than the PCB, and the finished Foehn65 has typed clean for three months without a single missed keystroke. First regret, no lasting damage.
