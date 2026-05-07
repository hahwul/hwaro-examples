+++
title = "Anchors Module"
description = "Fixed reference points that preserve structural orientation across viewports."
date = "2024-02-15"
weight = 3
template = "page"
+++

## Role

Anchors are immovable reference points. The page's eye is steered by their position, not by motion or animation.

## Required Anchors

1. **Title anchor** — top-left, never centered. Holds the page identity.
2. **Navigation anchor** — top-right, fixed during scroll. The user always knows where to leave.
3. **Action anchor** — bottom-right, optional, used only when a primary action exists on the page.

Three anchors maximum. A fourth always destabilizes the layout.

## Anchor Discipline

Anchors do not move. They do not animate on scroll. They do not pulse for attention. The structure works because the anchors are reliable; introduce movement and the lattice loses its meaning.
