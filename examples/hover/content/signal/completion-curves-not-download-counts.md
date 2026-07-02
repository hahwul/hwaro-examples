+++
title = "Completion curves, not download counts"
date = "2025-02-11"
description = "Why the Hover dashboard leads with a play-through curve instead of a download total, and what that curve actually measures."
+++

A download count answers one question: did a file move through a feed. It cannot tell you whether anyone listened past the pre-roll, whether your cold open is losing a third of the room, or whether the guest segment at minute eighteen is the reason people come back. We built Hover's dashboard around a different first number: the completion curve.

<!-- more -->

The curve is built from buffered playback events, not download events. Every podcast app that supports range requests -- which is nearly all of them now -- streams an episode in chunks as it plays, and each chunk request is a timestamp we can plot. String enough of those timestamps together across a few thousand listens and you get a curve: what percentage of the audience was still present at second thirty, at minute five, at the credits.

Three things surprised us once we started showing this to hosts instead of just ourselves.

First, the shape of the curve is far more consistent within a show than across shows. A true-crime narrative and a two-host comedy chat have wildly different curves, but a given show's curve barely moves episode to episode -- until something changes in the format, and then it moves a lot, immediately, and stays moved. Hosts use this to catch format drift long before a review section would tell them.

Second, ad reads are visible on the curve as a small, real dip, and it recovers. Shows spent years assuming a sponsor break was costing them the audience. Mostly it costs them ninety seconds, and the room comes back.

Third, and the one that changed our own roadmap: the steepest drop on almost every curve we have ever plotted happens in the first sixty seconds, before the cold open resolves into the actual episode. That observation is the reason cold-open scoring exists on the board today -- more on that in a later dispatch.

We still show a download total, because ad sales still ask for one. But it is the second number on the page now, not the first.
