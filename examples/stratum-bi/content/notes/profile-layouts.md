+++
title = "Three layouts, one terminal"
date = "2026-04-30"
description = "The terminal ships with desk, sales, and executive layouts. A short note on why we built three rather than letting people drag panels around."
tags = ["product", "ux"]
desks = ["editorial"]
+++

We get asked once a quarter why the terminal doesn't let people rearrange panels. The reason is the same reason a trading firm doesn't let everyone rearrange their own keyboard — when something goes wrong, the team needs to be able to walk to any seat and read the screen instantly.

## The three layouts

- **Desk** — the working layout. Everything on the home page. Optimized for the people who *fill in* the numbers.
- **Sales** — the customer-facing layout. Leads with pipe stage and concentration. Optimized for forecast calls.
- **Executive** — the read-only layout. Drops the feed and replaces D2 with the goal-progress board. Optimized for the read, not the work.

A user has one profile attached to their session. They can switch with `F4` but the switch is loud — the layout animates, the colour palette nudges, and the C3 feed publishes a "profile changed" entry. We do not hide the profile.

## Why we are not adding "custom"

We have shipped two custom-layout previews to the desk. Both times, individual layouts diverged within a quarter, the team stopped being able to read each other's screens, and the standing layouts won the next round. The lesson is in the bones of the product now.
