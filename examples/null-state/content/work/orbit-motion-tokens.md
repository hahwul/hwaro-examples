+++
title = "Orbit Motion Tokens"
date = "2025-09-08"
description = "Motion design primitive language for a productivity app. 12 named curves, 4 durations."
tags = ["motion", "systems"]
+++

## Project

A productivity SaaS with 4 million users had a motion problem. Every team was writing its own transitions, every transition felt different, and the cumulative effect made the product feel uncoordinated — like a series of unrelated apps stitched together.

We were asked to design a motion system, document it, and make it adoptable across teams.

## What we shipped

- **12 named easing curves**, derived from a study of which transitions felt "native" to the existing app and which felt borrowed.
- **4 standard durations**, with rules for when each applies.
- A **single CSS custom property file** that exposes the tokens to every team.
- **A motion gallery** demonstrating every curve and duration in isolation, with a written rationale for when to use each.
- **A linter** that flags non-token motion in their main repository.

## Outcome

Adoption was 89% within two quarters. The motion gallery is used in internal design reviews. The product feels coherent for the first time in two years, according to the company's internal NPS.

## Tools

CSS · JavaScript (for the gallery) · ESLint plugin for the linter
