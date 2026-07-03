+++
title = "Plotmill"
date = "2025-02-11"
description = "A beat-sheet outliner that treats structure like carpentry, not magic — tested across four drafts of an actual manuscript."
[extra]
draft_number = "04"
word_count = "2,140"
tool_kind = "Outlining software"
verdict = "Keep, with the tension graph turned off"
+++

Plotmill is an outlining application built around a single idea: a novel's structure is a set of joints, and a joint either holds weight or it doesn't. You lay scenes onto a corkboard-style grid, tag each with a point-of-view character and a story function, and Plotmill draws a line underneath the whole thing showing where the joints are thin. It is, its makers will tell you, "structural engineering for narrative." I found that description mostly accurate, and occasionally a problem.

<!-- more -->

## What it gets right

The scene grid is the best version of the corkboard metaphor I have used. Cards are small, draggable, and honest about what they contain — a one-line function tag, a point-of-view initial, a word-count estimate that updates as you draft. Reordering forty scenes to fix a sagging middle act took an afternoon instead of the week it took with paper cards, mostly because Plotmill keeps continuity notes attached to each card as you move it, so a scene that references "the letter from chapter six" flags itself the moment chapter six moves to chapter nine.

The export format is plain text, which mattered more than I expected. When I switched from outlining to drafting, I did not want to keep opening the app just to check what came next. Plotmill exports a scene manifest as a flat YAML file I could keep open in a second window:

```yaml
# manuscript.beats.yaml — exported from Plotmill, draft 4
- scene: 14
  pov: Marguerite
  function: reversal
  target_words: 1800
  actual_words: 2210
  notes: "Letter from ch.6 now needs to arrive by scene 14, not 9."
- scene: 15
  pov: Desmond
  function: rising_action
  target_words: 1400
  actual_words: 0
```

That file is more useful than the app it came from, which is either a compliment or an argument for buying a cheaper tool. I am still deciding.

## What it gets wrong

The tension graph — a line chart plotting "narrative tension" against your scene list, generated from the function tags you assign — is the feature Plotmill leads with in every screenshot, and the feature I turned off by draft two. It is seductive in the way any chart is seductive: it turns a felt, argued-over quality of a manuscript into a single ascending line, and once you can see the line, you start writing toward it instead of toward the story. My third draft had a technically excellent tension graph and a flat, over-plotted middle that three readers flagged independently. I redid the middle by ignoring the graph and rereading the actual scenes, which is, it turns out, still the only way to know if a middle works.

The subscription is thirteen dollars a month with no lifetime option, which is a real cost for a tool you might use hard for four months and then not touch again until the next book.

## Verdict

Keep the scene grid and the plain-text export. Turn off the tension graph on day one — you will save yourself a draft's worth of writing toward a chart instead of a story.
