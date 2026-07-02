+++
title = "Process"
description = "How a text moves through the bureau, from first reading to final proof, with a second linguist on every stage."
[extra]
kicker = "How we work"
echo = "Vorgehen"
echo_lang = "de"
+++

Good translation is unglamorous. It is mostly reading — the source, then the draft, then the source again — and the discipline of not stopping too early. Here is the path every project follows, whether it is a forty-page contract or a four-hundred-page novel.

## 1. Reading and estimate

Before quoting, we read the whole text, or a representative sample of a long one. We are looking for register, density, and traps: puns, legal terms of art, unstable source formatting. You receive a fixed estimate, a delivery date, and the name of the lead linguist. No project starts on a guess.

## 2. Terminology pass

For technical work we build or update the glossary first, so the draft is consistent from its first sentence. For literary work this stage is lighter — a page of notes on names, tone, and any recurring device the author leans on.

## 3. Drafting

The lead translates in full. We draft in passes rather than word by word: sense first, then rhythm, then a read against the source to catch anything dropped. For developer documentation we build the site locally and translate in context, because a string that fits the design in English can overflow it in German.

```bash
# We proof docs in situ, not in a spreadsheet.
glide pull docs/de --memory acme.tmx
glide build --lang de --preview
glide check --terms acme.csv --report drift.txt
```

## 4. Revision — the four eyes

A second linguist reads the draft against the source, independently. They check meaning, register, terminology, and consistency, and they query anything unclear rather than silently "fixing" it. Their edits return to the lead, who accepts, rejects, or discusses. This is the stage clients most often skip elsewhere; we never do.

## 5. Proof and delivery

A final monolingual read of the target text alone — the way your reader will meet it — to catch anything that still reads like a translation. We deliver in your format, with the updated memory and glossary, and a short note on any decisions worth knowing.

> We would rather deliver a day late than deliver something we have only read once.

Turnaround and fees for each stage are set out on the [rates](/rates/) page.
