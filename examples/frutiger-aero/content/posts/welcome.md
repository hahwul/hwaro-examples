+++
title = "Welcome to Frutiger Aero"
date = "2006-11-30"
description = "A classic UI era of glossy buttons and natural motifs."
tags = ["design", "ui", "retro"]
categories = ["design"]
+++

Frutiger Aero was a broad design language in user interfaces, spanning roughly from 2004 to 2013. It is characterized by skeuomorphism, glossy textures, cloudy skies, auroras, and water droplets.

This theme attempts to recreate that feeling using modern CSS, but completely avoiding gradients as per strict requirements!

<!-- more -->

### The Aesthetics of Aero

The term "Frutiger Aero" is a portmanteau of the Frutiger font and Windows Aero (Authentic, Energetic, Reflective, and Open).

Key visual elements include:

*   **Glossy Surfaces:** Buttons and panels look like they are made of glass or plastic, with distinct highlights.
*   **Nature Motifs:** Lots of water, grass, and bright blue skies.
*   **Skeuomorphism:** Digital objects mimicking their real-world counterparts.
*   **Bright Colors:** High saturation cyan, green, and white.

### Recreating without Gradients

Since gradients are strictly prohibited, we use solid colors, semi-transparent overlays, and multiple hard `box-shadow` layers to simulate depth and shine. We can use a pseudo-element (`::before`) with a flat semi-transparent white background covering the top half of an element to create a hard, sharp reflection, giving it that classic glossy plastic look.