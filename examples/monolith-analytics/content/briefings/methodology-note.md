+++
title = "Methodology note · how the desk reads ARR"
date = "2026-04-20"
description = "A standing note on how we measure ARR, what we exclude, and why we file the briefing on Mondays."
tags = ["methodology"]
desks = ["editorial"]
+++

This briefing is filed every Monday on the same set of definitions. New readers asked for a single page they could read once and consult later. Here it is.

## The numbers

- **ARR** is the annualized contract value of every active paid subscription at the close of business on the previous Friday, expressed in USD at the WSJ closing rate of the same day.
- **Net new ARR** is the period's new-business plus expansion, less contraction and churn. Reactivations within 90 days net against the prior period's churn.
- **Gross churn** is the dollar value of cancellations divided by the starting ARR for the rolling 30-day window.
- **Pipeline coverage** is the unweighted open pipe divided by the period's quota.

## The exclusions

- **Trials, paused, and zero-valued plans** are not counted in ARR.
- **One-time services and professional services revenue** are not counted in ARR.
- **Reseller-booked ARR** is counted at the *net* value to the company, not the gross customer-paid value.

## The cadence

- The warehouse refreshes at 06:00 New York every weekday.
- The desk reads the Monday 06:00 refresh and files at 09:00 New York / 14:00 London.
- The page is not refreshed mid-week. Mid-week reads live in `#rev-desk-tape`.
- Addenda are filed at the top of the next briefing, not mid-week.

## Why Mondays

The desk used to file Fridays. We moved to Mondays in Q1 because the Friday briefing kept missing the actual Friday close — the warehouse Friday read isn't available until Saturday morning. Filing Monday means we read the *actual* close of business Friday, not a 4 p.m. snapshot.

*— editorial standing note*
