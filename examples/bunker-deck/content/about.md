+++
title = "Dossier"
description = "The brief on Bunker Deck — what we believe production looks like, and how we run it."
+++

## What this platform is

Bunker Deck is a hardened control plane for teams who run production at scale. Where most tools optimize for the happy path, the deck is built for the worst hour of the year — the 3 a.m. incident that gets escalated three times and ends in a postmortem.

## Posture, not features

We do not ship a feature list; we ship a posture.

- **Sealed deploys.** Nothing reaches production without a signed artifact and a second human signature.
- **Short-lived access.** No persistent root, no permanent kubeconfig. Operator sessions expire in minutes, not days.
- **Recorded rooms.** Incident command happens in a sealed war room. The recording is the postmortem's first draft.
- **Cold archive.** Every signal is replicated to two regions and one offline vault.

## Who runs it

> The team is small, the brief is loud. We have been on call long enough to be honest about what hurts.

We are platform engineers, security operators, and one industrial designer who insists the console look like a panel you would trust at 03:00.

## How to engage

The line is `ops@bunker.deck`. We answer signed requests first, unsigned requests second, and never the demo bots. Office hours every Thursday at 17:00 KST in the war room.
