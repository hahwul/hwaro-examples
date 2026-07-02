+++
title = "Dynamic ad markers, shipped"
date = "2025-09-18"
description = "You can now swap, move, or retire a sponsor read after an episode has already published, without touching the master file."
+++

The most common support request we get is some version of "the sponsor changed their read at the last minute and the episode already published." Until today, fixing that meant re-exporting the master, re-uploading the file, and hoping every podcast app's cache expired before a listener noticed the file had changed underneath them. Dynamic ad markers replace all of that with a timestamp.

<!-- more -->

When you upload an episode, mark the start and end of any sponsor segment from the editor. Hover stores that segment as a named slot rather than baking it permanently into the master audio. The slot config for an episode looks like this:

```json
{
  "episode": "s04e12-the-long-way-home",
  "slots": [
    {
      "id": "sponsor-primary",
      "start": 42.0,
      "end": 118.5,
      "asset": "assets/read-2025-09-week3.mp3",
      "fallback": "assets/house-promo.mp3"
    }
  ]
}
```

Swap the `asset` field at any point after publish, and the next time a listener's app fetches that episode, they get the new read, stitched in on the fly. Retire a sponsor entirely by pointing the slot at `fallback`, which defaults to a house promo you set once per show. Nothing about the episode's duration, chapter marks, or RSS entry changes -- to the listener's app it is the same file it has always been.

This shipped alongside a small but genuinely useful side effect: because slots are named, you can now see per-sponsor completion data on the analytics board, broken out from the rest of the episode. Three shows in our early access group used that data to renegotiate a sponsor rate within the first month.

Existing episodes are not retroactively slotted -- ad markers apply going forward from today. If you want to convert an older episode, the option is in the episode editor under Ad Markers, and it takes about a minute per read.

Dynamic ad markers ship on [Broadcast and Syndicate](/pricing/), and are covered in more depth on the [feature board](/features/).
