+++
title = "Eight notes on long decisions"
date = "2026-05-10"
description = "Architectural choices age. The good ones age into invariants. The bad ones age into excuses. A short essay on telling the difference before it is too late."
tags = ["essays"]
[extra]
author = "M. Aurelius"
+++

There is a quiet category of decision that produces no fireworks the day it is made. No demo. No launch. No celebratory thread. Months later, it is impossible to imagine the system without it. We call these *long decisions*, and we keep notes.

## The first sign is the absence of a meeting

Long decisions tend to surface in passing, often during code review, often by accident. A reviewer asks why we are not just doing the obvious thing, and someone replies with three sentences that turn out to be load bearing.

> If you are sure you can write it in three sentences, you are probably sure for the wrong reasons.

## They will be invisible later

A good long decision compresses cleanly. Eventually new engineers will read the result and assume that of course it was always this way, because the alternatives have been carefully removed. This is the highest form of compliment.

## Field markers

- Cheap to reverse on day one. Expensive to reverse on day ninety.
- Anchored to a constraint that will not change for at least one year.
- Survives at least two near misses without rework.
- Quietly makes other decisions easier.

The best ones become invariants. The worst ones become excuses. The difference, almost always, is whether anyone wrote the three sentences down at the time.
