+++
title = "Amanuensis"
date = "2025-11-14"
description = "Dictation-to-draft software tested on daily walking drafts for five weeks — where speaking a novel actually works, and where it falls apart."
[extra]
draft_number = "05"
word_count = "1,975"
tool_kind = "Dictation software"
verdict = "Keep for description, not for dialogue"
+++

Amanuensis is a dictation app built specifically for long-form fiction rather than for transcribing meetings, which shows in the details: it recognizes when you say "new paragraph" versus "new scene," it lets you speak a scene function as a tag before starting ("action, Marguerite's point of view"), and it does not try to autocorrect character names into dictionary words after you have trained it once. I used it for five weeks of walking drafts — thirty to forty minutes a day, phone in pocket, no screen — on the manuscript I have been dictating around a knee injury that made desk-sitting for long stretches genuinely painful.

<!-- more -->

## Where speaking a draft works

Description. Genuinely, surprisingly well. Walking while describing a room, a face, a stretch of coastline produces sentences with a different rhythm than typed description — longer, more clause-heavy, closer to how you would actually describe something to a person standing next to you, which is often the register description is supposed to hit and rarely does when you are staring at a cursor. Amanuensis's transcription accuracy on description-heavy passages ran close to ninety-eight percent in my five weeks, with most errors being homophone substitutions I caught in the same read-through I would have done anyway.

Punctuation-by-voice took under a week to become automatic. I configured custom commands early, which mattered more than the defaults:

```toml
# amanuensis.voice-commands.toml
[punctuation]
"new paragraph" = "\n\n"
"dash" = "—"
"open quote" = "\""
"close quote" = "\""

[scene-tags]
"tag action" = "[scene: action]"
"tag reflection" = "[scene: reflection]"
"tag dialogue-heavy" = "[scene: dialogue]"
```

Speaking "dash" mid-sentence for an em dash felt absurd for exactly four days and then stopped feeling like anything at all — it became as automatic as reaching for the hyphen key, just with your mouth instead of your hand.

## Where it falls apart

Dialogue. Two characters talking, especially three or more, defeated the app and defeated me almost as thoroughly. Spoken dialogue wants overlapping rhythm, interruption, the kind of back-and-forth your mouth can approximate but your transcript cannot capture without you manually inserting every speaker tag and paragraph break after the fact — which erases most of the time saved by speaking it in the first place. I dictated one dialogue-heavy chapter as an experiment and spent longer cleaning up the transcript than I would have spent typing the chapter directly.

Accuracy also dropped hard on invented names and constructed-language terms, understandably — you can train the app on your protagonist's name, but every new place name in a secondary-world fantasy is a fresh guess for the recognizer, and my walking drafts are full of parenthetical corrections I had to speak aloud and then delete by hand later: "Kaldrenoth — K, A, L, D — Kaldrenoth."

## The unexpected cost

Walking drafts are physically freeing and mentally strange in a way I did not anticipate: you cannot see what you already wrote, so you cannot check whether you already used a phrase two paragraphs ago, or whether a description you are building on actually said what you remember it saying. I caught myself repeating the same simile for a character's eyes three times across one walk because I had no page to glance back at. A read-through the same evening caught it, but that is an extra step description-only dictation does not eliminate so much as postpone.

## Verdict

A genuinely useful tool for description and interiority, particularly for anyone who cannot or should not sit at a desk for long stretches. Do not attempt dialogue-heavy chapters with it — type those, and save the walking drafts for the sections that want a voice instead of a keyboard.
