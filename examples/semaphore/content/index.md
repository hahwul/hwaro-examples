+++
title = "Semaphore"
description = "Release notes for a GPU-accelerated terminal emulator built for split-pane workflows"
template = "home"
+++

Semaphore is a terminal emulator that treats the GPU as a first-class citizen. Every frame is composed on the graphics card — Vulkan on Linux and Windows, Metal on macOS — so a maximized window full of panes scrolls at the same cost as an empty one. The renderer tracks damage per cell: if only the prompt line changed, only the prompt line is redrawn.

Ligatures are shaped once and cached, not re-shaped on every keystroke. Arrows, pipelines, and comparison operators render as single glyphs in any font that carries the rules, and the cursor still lands on the character you expect, because Semaphore splits ligatures at the glyph level under selection.

Split panes are the whole point. Panes open in milliseconds, resize with the keyboard, zoom to full screen and back, and can broadcast one keyboard to all of them when you need to run the same command on four hosts at once.
