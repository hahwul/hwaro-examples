+++
title = "The Query Ledger"
date = "2026-03-02"
description = "A submission-tracking spreadsheet reviewed across an actual querying round — sixty-one agents, four offers, and one very useful conditional-formatting rule."
[extra]
draft_number = "03"
word_count = "2,290"
tool_kind = "Submission tracker, spreadsheet"
verdict = "Keep, and back it up somewhere that isn't the spreadsheet"
+++

The Query Ledger is not software in any interesting sense — it is a spreadsheet template, eleven columns and a handful of formulas, passed between writers the way a good revision method gets passed between writers, which is exactly why it earns a review. I tracked a full querying round with it: sixty-one literary agents over five months, four offers, one agreement. The spreadsheet did not get me the offers. It kept me from the specific misery of losing track of who had my manuscript and for how long, which turns out to be most of what a tracker needs to do.

<!-- more -->

## The columns that matter

Eleven columns sounds like a lot until you see which ones you actually check daily. In practice, four did the real work:

| Column | What it holds |
|---|---|
| Agent | Name and agency |
| Sent | Date the query went out |
| Status | Pending, requested, passed, offer |
| Days out | `=TODAY()-[Sent]`, auto-calculating |

The "days out" formula is the entire reason the sheet is worth using over a plain list. A conditional-formatting rule turns the row amber past forty-five days and red past ninety, which converts an anxious mental tally — "has it really been that long since I heard from the agent at the March conference" — into a glance at the sheet. That single rule did more for my querying-round anxiety than anything else in this issue's testing period, tool or otherwise.

## Where the formulas help

Beyond the days-out flag, the sheet's response-rate summary — a small table at the top counting pending against passed against requested, updating live as the status column changes — gave me something concrete to look at on the weeks when nothing was happening, which in querying is most weeks. Watching a percentage tick from "3 of 61 responded" to "19 of 61 responded" over five months was not encouraging exactly, but it was legible, and legible turned out to matter more than encouraging when the alternative was refreshing an inbox with no sense of where things stood.

The sheet also has a personalization-notes column I underused and then wished I had not: a free-text field for what you mentioned in each individualized paragraph of the query, so a full request eight weeks later does not require rereading your own sent email to remember what you told that specific agent about the manuscript's comp titles.

## Where a spreadsheet is the wrong tool

A spreadsheet cannot tell you a query letter is weak. I queried the same forty agents with two different opening paragraphs across the first and second batches of my round, purely because I revised the letter mid-round, and the tracker recorded a real difference in request rate between the two batches — twelve percent against thirty-one — without ever telling me why, because "why" lives in the letters, not the log. The Query Ledger is excellent at telling you what happened and useless at telling you what to change, which is a fair division of labor as long as you remember the sheet cannot do the second half for you.

The other real risk is one nobody mentions in the version of this template that gets passed around: it lives in one file, on one drive, with no version history worth trusting. I lost eleven days of updates to a sync conflict in month three — two devices editing the same cell within an hour of each other, one silently overwriting the other — and rebuilt the missing rows from sent-mail search, which is exactly the manual bookkeeping the spreadsheet exists to prevent.

## Verdict

Genuinely worth using, and worth combining with a straightforward backup habit — a weekly exported copy, kept somewhere the live sheet cannot silently overwrite. The days-out conditional formatting alone justifies the ten minutes it takes to set the sheet up. Do not expect it to diagnose a query letter; that part is still on you, and on however many trusted readers you can get to look at it before agent number one.
