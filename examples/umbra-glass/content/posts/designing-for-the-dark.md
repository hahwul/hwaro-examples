+++
title = "Dark Mode Is Not Inverted Light Mode"
description = "Flipping a palette upside down produces a dark theme that fights the eye. Real dark design starts from black."
date = "2026-05-22"
template = "page"
tags = ["dark-mode", "design", "contrast"]
+++

The quickest way to ship a broken dark mode is to take your light theme and invert it. White becomes black, black becomes white, and every shadow, accent, and border comes along for the ride — now pointing the wrong way.

It looks like dark mode. It feels wrong, and most people can't say why.

## Light and dark aren't symmetric

On a light page, you build hierarchy by *adding* darkness: darker text, darker borders, drop shadows that push elements down. In the dark, you can't add more dark — the background is already there. You build hierarchy by *adding light*: surfaces get lighter as they come forward, not darker.

That single inversion of logic breaks every borrowed value. A shadow that grounded a card on white does nothing on near-black. You need an elevation system based on subtle lightening instead.

> In light mode, closer means darker. In dark mode, closer means lighter. Everything else follows from that.

## Start from the background, not the foreground

Pick your darkest surface first — and don't make it pure black. Pure `#000` against bright content creates a halo effect called haloing or smearing on OLED panels, and it makes text edges shimmer. A very dark desaturated charcoal, somewhere around `#0d0f15`, is calmer and lets you layer lighter surfaces above it.

From there, every panel is the background plus a few percent of white. Stack them and you get depth without a single shadow. The screen stops looking inverted and starts looking designed for the dark.
