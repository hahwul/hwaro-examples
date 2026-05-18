+++
title = "Week 17 — Mobile beta paused for App Review"
date = "2026-04-24"
description = "App Review flagged a permission prompt. We are addressing it, then resuming wave 2. No impact on the desktop experience."
tags = ["mobile", "release"]
squads = ["mobile"]
+++

Apple's App Review flagged the wave 2 build for an in-app prompt that asks for contact access without a clear in-flow reason. The flag is fair. We are addressing it by removing the prompt from the onboarding sequence entirely and moving it to the *invite teammates* screen, where the reason is obvious.

## Schedule

- Patched build submitted **Mon, Apr 28**.
- Expected re-review by **Wed, Apr 30**.
- Wave 2 resumed by **Mon, May 5** if re-review is clean.

## Why this is on the board

We want the **Mobile** chip on the Console to stay yellow ("on hold") for as long as App Review has the build. The chip turns green only when the build is in the hands of beta users again.
