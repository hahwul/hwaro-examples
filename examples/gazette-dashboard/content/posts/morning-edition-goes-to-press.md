+++
title = "Morning Edition Goes to Press in Under Ten Milliseconds"
date = "2026-05-28"
draft = false
description = "The composing room files its nightly build report: clean rules, right-aligned figures, and a press run that held steady through the late edition."
tags = ["press-run", "build", "systems"]
categories = ["diagnostics"]
reading_time = 3
+++

The composing room closed the morning edition at nine-point-six milliseconds, a figure the systems desk filed as steady rather than newsworthy. Every column locked on the first pass, no plate was reset, and the syndication wire carried the edition out without a single dropped reading.

Editors note that a static broadsheet earns its speed by refusing to do work at the moment of reading. The pages are composed once, pressed once, and served as flat sheets thereafter.

## What the Press Report Found

The nightly diagnostic walked every desk and tallied the figures before the edition went out:

- **Press run**: 9.6ms median across 312 composed pages
- **Plates reset**: zero, on the first pass
- **Wire faults**: none reported by syndication

## A Note From the Composing Room

The foreman filed a short comment with the build log, set here as the desk received it:

> A clean run is a quiet run. We do not chase records; we chase the same edition, twice, with no surprises between them.

For readers who keep their own presses, the build can be reproduced from the plant:

```sh
hwaro build
# Build complete!
```

The figure that matters is not the fastest run but the most repeatable one. Tomorrow's edition will move the dateline and refresh the listings, and the press report expects the same quiet number to come back.
