+++
title = "Hematite — image pipeline reference"
description = "An on-the-fly image pipeline documented transform by transform"
template = "home"
+++

Most image pipelines document their parameters and stop there — a table of query strings with one-line descriptions, and you are left guessing what `fit=cover` actually does to a 4:3 source next to a 1:1 crop. We decided that wasn't good enough for the eleventh service we'd shipped that resized things for a living.

So every transform in this reference gets a plate, not a paragraph. You see the source. You see the filter chain, printed exactly as it appears in the URL. You see the result. Nothing about smart cropping is obvious until you watch it choose a focal point over a mesa instead of the empty sky above it — and nothing about format negotiation matters until you see the same scene ship forty times smaller with no visible loss.

This is also, unglamorously, how we test the pipeline ourselves. The plates on each transform page are generated from the same fixture image our regression suite runs against on every release. If a plate looks wrong here, something is wrong in production — there is no separate marketing render to keep in sync.

Six transforms, six pipelines stages, one filter-chain syntax. Start wherever the problem is: a crop that keeps cutting off the subject, a format war between Safari and everyone else, or a gradient that bands the moment it hits a screenshot.
