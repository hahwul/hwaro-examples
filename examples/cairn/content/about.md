+++
title = "About Cairn"
description = "What Cairn is, why layer scripting exists, and how the project is run."
+++

Cairn is firmware for split ergonomic keyboards — the two-half, columnar-stagger
kind with a thumb cluster on each side. It targets ARM Cortex-M0+ and M4 boards,
RP2040, and a growing list of nRF52 wireless controllers. If your board has a
matrix and a bootloader, Cairn probably runs on it.

## Why layer scripting

Most firmware describes a keymap as a fixed grid of constants. That works until
you want a key that behaves differently on the third tap, or a combo that only
fires while another layer is held. At that point the grid fills up with opaque
macros and hand-rolled state machines.

Cairn takes a different path: your keymap is a set of small scripts, evaluated by
a sandboxed runtime on the board itself. A layer is a function; a key is a
binding; behaviors like tap-hold and combos are ordinary calls. The scripts
compile ahead of time into bytecode, so there is no interpreter overhead during
a scan — the runtime only walks a flat table of resolved events.

```lua
-- base.layer
layer("base", function(k)
  k.home_row_mods({ a = mod.GUI, s = mod.ALT, d = mod.CTRL, f = mod.SHIFT })
  k.bind("esc", tap_hold(key.ESC, layer.hold("nav")))
  k.combo({ key.J, key.K }, key.ESC)
end)
```

## How the project is run

Cairn is developed in the open. Releases follow semantic versioning, ship with a
reproducible build hash, and are cut roughly every quarter. Every entry in the
[release cairn](/releases/) lists what was added, changed, fixed, and — when it
matters — what will break if you upgrade without reading first.

Hardware support, the scripting reference, and the flashing guide live in the
handbook. Bug reports and switch-profile contributions are welcome; firmware
this close to the metal only stays honest when many people run it on strange
boards.
