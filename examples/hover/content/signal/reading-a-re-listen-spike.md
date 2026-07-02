+++
title = "Reading a re-listen spike"
date = "2026-03-24"
description = "A sudden jump in relisten-rate at one timestamp usually means one of three things. Here is how to tell them apart from the analytics board."
+++

Every so often a host writes in about a strange shape on their episode chart: a spike in relisten rate at one specific timestamp, well after the episode has been out long enough that the initial listening wave has passed. It looks alarming on first glance, like a glitch in the player. It almost never is. In three years of reading these, we have only ever seen three real causes, and the shape of the spike tells you which one you are looking at.

<!-- more -->

**A narrow, tall spike at one exact second** is nearly always a clip going around. Someone posted a fifteen-second cut from that timestamp somewhere with a big audience, and listeners are jumping straight to it to hear the moment in context. This is good news dressed as an anomaly -- check your mentions before you check your logs.

**A wide, shorter bump spanning ten to twenty seconds** usually means the segment is genuinely confusing or information-dense and people are backing up to catch something they missed -- a phone number read aloud, a plot detail, an instruction in a how-to episode. Worth a look at whether the segment needs a written show-note instead of relying on the audio alone.

**A slow climb that never comes back down** is the rarest and most interesting: a segment that is aging into relevance, most often on interview shows where a guest said something that later became newsworthy. We watched this happen in real time on a technology interview last year -- a fifty-second answer about a product roadmap sat flat for two months, then climbed steadily for a week after the company's public announcement.

You can pull the raw relisten series for any episode from the analytics API if you want to plot it yourself:

```bash
curl "https://api.hover.fm/v1/episodes/s04e12/relisten" \
  -H "Authorization: Bearer $HOVER_TOKEN" \
  -G --data-urlencode "bucket=5s"
```

The response is a flat array of `{ "t": seconds, "relisten_rate": float }` objects, bucketed at whatever resolution you pass. Most hosts only ever need the chart on the dashboard, but a few run their own alerts on top of this endpoint for exactly the spike-shaped surprises this dispatch is about.
