+++
title = "Orbital Mechanics for Designers"
date = "2024-04-15"
description = "How to think about scroll, parallax, and z-depth as orbits around a fixed point of attention."
tags = ["design", "scroll"]
+++

A page that uses parallax or scroll-driven motion is, in effect, simulating multiple bodies in orbit around a viewport. The user is the observer; each layer is a body with its own orbital period.

## What Orbital Period Means Here

Every parallax layer has a *speed* relative to the scroll input. A foreground element that moves at 1× scroll has the shortest orbit — it stays close to the user. A background element that moves at 0.3× scroll has a longer period; it appears to lag behind, creating depth.

Three orbits is usually enough:

- **Foreground** — 1× scroll, full sharpness.
- **Mid** — 0.7×–0.8× scroll, slight blur acceptable.
- **Background** — 0.3×–0.4× scroll, heavily blurred.

## Where It Goes Wrong

Adding a fourth orbit (text floating at 0.55×, illustrations at 0.6×, etc.) does not produce more depth — it produces visual noise. The user's eye loses the orbital model and just sees layers shimmering.

The simplest test: cover the screen, then uncover it. If you can immediately read the depth order in one glance, the orbital structure is working. If you have to wait for the motion to resolve it, you have too many layers.
