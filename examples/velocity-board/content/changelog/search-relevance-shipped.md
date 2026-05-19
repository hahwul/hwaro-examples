+++
title = "Search relevance: shipped, no measurable lift"
date = "2026-05-12"
description = "We rebuilt the search ranker. Customer-visible relevance stayed flat. We are keeping the new ranker because it is half the cost."
tags = ["search", "ranker", "shipped"]
surfaces = ["web", "api"]
+++

The new search ranker shipped last week and the verdict is: customer-visible relevance is statistically indistinguishable from the previous one. We are keeping it anyway because it is half the inference cost and a third the latency.

The mistake we made was scoping the project as a relevance win when it was actually a cost win. We sold it internally as the former for a year and the team spent a month worrying when the relevance numbers came back flat.

> A relevance-flat, cost-half ship is a good ship. We just shipped it for the wrong stated reason.

We have updated the project doc and the retrospective is on the calendar for Monday. The retro will mostly be about how we describe projects, not about the ranker.
