+++
title = "Mach"
description = "A self-hosted CI runner that bills by the build-second, not the seat"
template = "home"
+++

{{ sh(text="Build-seconds, not seats", time="0.12s") }}

Every CI vendor with a seat-based plan is charging you for the same thing twice: once for the humans who trigger builds, and again for the machines that run them. Mach drops the first charge entirely. You install one static binary on hardware you already own — a spare rack unit, a cloud box, a beefy desktop under someone's desk — and it meters exactly what it uses: wall-clock seconds spent actually executing your pipeline, rounded to the nearest second, billed at a fraction of a cent apiece.

There is no per-developer fee, no "included minutes" that reset on the first of the month and vanish, and no surprise invoice when a new hire joins the team. Add fifty engineers tomorrow and your bill does not move until they start pushing commits that need builds — and even then it moves by seconds, not by headcount. The runner itself is boring on purpose: a single Go binary, a YAML file, and a scheduler that gets out of the way.
