+++
title = "About"
description = "What Semaphore is, how the GPU renderer works, and why split panes are the organizing idea."
[extra]
cmd = "man semaphore"
+++

## name

**semaphore** — a GPU-accelerated terminal emulator built around split-pane workflows, with real ligature shaping and a damage-tracked renderer.

## rendering

Semaphore draws the grid on the GPU, end to end. Glyphs are rasterized once into an atlas texture, and every visible cell becomes two triangles that sample from it. On Linux and Windows the pipeline runs on Vulkan; on macOS it runs on Metal. There is no compositor round-trip in the middle: the swapchain presents directly, and a full 4K window of scrolling text costs a few hundred microseconds per frame.

Since v2.3.0 the renderer is damage-tracked. The grid keeps a dirty bitmap per cell, and only rows that actually changed are re-uploaded and re-composed. A blinking cursor no longer costs a full-frame redraw, which is why a laptop running Semaphore idles at 0% GPU instead of 4%.

## ligatures

Most terminals fake ligatures or skip them. Semaphore runs a real shaper over each visual cluster, caches the result by font and cluster, and splits ligated glyphs back into cells under the cursor and selection. You get single-glyph arrows and pipeline operators without losing column arithmetic. Every OpenType rule — `calt`, `dlig`, the stylistic sets — can be toggled per font in `semaphore.toml`.

## panes

The unit of work in Semaphore is the pane, not the tab. Panes split horizontally or vertically, resize from the keyboard, zoom to full window and back, and restore exactly — working directory, scrollback tail, and layout — when a session reopens. Broadcast mode mirrors one keyboard into every pane in the active tab, which turns "run this on four hosts" from a chore into a keystroke.

## philosophy

A terminal should be invisible in the best sense: instant to open, indifferent to how much you throw at it, and honest about what a character grid is. Semaphore does not ship a plugin runtime, a built-in AI, or a settings GUI. It ships a fast grid, a good shaper, and a config file that fits on one screen.

## colophon

Semaphore is developed in the open by a small team — Iris Kwon, Dmitri Halvorsen, and Peregrine Osei — and released under the MIT license. These [release notes](/releases/) are the project's changelog of record; every entry is written by the person who shipped the change.
