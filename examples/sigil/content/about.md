+++
title = "About"
description = "How Dara Voss thinks about reliability, replay, and building payment systems nobody has to babysit."
+++

## What "sigil" means here

A sigil is a mark that stands for something larger than itself — a seal, a signature, a shorthand everyone in a room agrees to trust. That is roughly the job description of a ledger entry: a small, permanent mark that has to mean the same specific thing to every system that ever reads it again. I like that a payments ledger is basically medieval bookkeeping with a consensus protocol bolted on.

## How I think about reliability

I don't believe in heroic on-call. If a system needs someone brilliant awake at 3am to stay correct, the system is the bug, not the engineer. Most of what I've built in the last few years has been in service of one boring goal: make the ledger recoverable by someone who has never seen the codebase, using nothing but the runbook and the event log. Event sourcing helps here more than any amount of cleverness — replay is a debugging superpower once you actually trust it, and trusting it is mostly a matter of taking idempotency seriously from the first line of code.

## How I work with a team

I read the incident history before I read the architecture diagram. A system's postmortems tell you more about its real failure modes than any design doc, and they usually point straight at the one invariant nobody wrote down. My first two weeks on any team are spent finding that invariant and writing it down, in code, as a test.

## Outside the ledger

I maintain a small open-source library for exactly-once Kafka consumer patterns in Go, mentor two engineers moving into backend roles from support and QA, and spend an unreasonable amount of free time restoring a 1978 mechanical adding machine that, appropriately, cannot make an arithmetic error without a physical part breaking first.

Reach me at [dara@sigil.dev](mailto:dara@sigil.dev). I'm not actively job hunting, but I take calls about staff-level backend roles in payments and financial infrastructure.
