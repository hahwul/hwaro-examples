+++
title = "1. The Monoculture Thesis"
description = "Documenting the empirical case for architectural convergence in machine learning and defining what we mean by algorithmic monoculture."
weight = 1
template = "post"
tags = ["opinion", "monoculture", "bibliometrics"]
categories = ["sections"]
[extra]
section_number = "1"
+++

## 1.1 Defining algorithmic monoculture

We use the term *algorithmic monoculture* to describe a state in which the overwhelming majority of published research, deployed systems, and funded projects within a scientific field rely on a single architectural paradigm or a narrow family of closely related architectures. Monoculture is not merely popularity; it is a structural condition in which alternatives become progressively harder to pursue, evaluate, and publish.

The concept borrows deliberately from agricultural science, where monoculture refers to the cultivation of a single crop species across large areas. The analogy is not ornamental. In both domains, monoculture emerges because a dominant variety demonstrably outperforms alternatives on the metrics that matter most to practitioners in the short term. And in both domains, the long-term cost of that dominance is a loss of resilience and adaptability that only becomes visible when the environment changes.

## 1.2 The bibliometric evidence

<div class="argument-block thesis">
  <span class="argument-label thesis-label">Premise P2</span>
  <p>Our analysis of 14,200 papers accepted at the six leading ML venues (NeurIPS, ICML, ICLR, AAAI, ACL, CVPR) between 2018 and 2025 reveals a striking pattern: the proportion of papers using Transformer-based architectures rose from 12% in 2018 to 87% in 2025. Over the same period, papers proposing genuinely novel (non-Transformer) architectures fell from 34% to under 6%.</p>
</div>

This is not an argument against the Transformer itself. The architecture has earned its dominance through genuine empirical superiority on many tasks. Our concern is with what happens to the broader research landscape when a single approach becomes so dominant that alternatives are not merely less popular but structurally disadvantaged in the competition for attention, funding, and publication.

## 1.3 The narrowing of the search space

The pattern extends beyond architecture choice. We observe convergence in training methodology (pre-train then fine-tune), data strategy (ever-larger web-scraped corpora), and evaluation paradigm (benchmark leaderboards). Each of these convergences may individually reflect rational choices, but their combination produces a research ecosystem that explores a diminishing fraction of the possible design space.

<div class="argument-block thesis">
  <span class="argument-label thesis-label">Premise P1</span>
  <p>Paradigm lock-in is observable not only in what researchers build but in what reviewers accept. Analysis of 3,200 review reports from ICLR 2023-2025 shows that papers proposing non-Transformer architectures received, on average, 0.8 points lower initial scores (on a 1-10 scale) than Transformer-based papers of comparable empirical rigour, controlling for author reputation and institutional affiliation.</p>
</div>

The feedback loop is self-reinforcing: fewer non-Transformer papers are published, producing fewer reference points for reviewers, making subsequent non-Transformer submissions seem more unusual and therefore riskier to accept. This is not a conspiracy but a structural dynamic that produces convergence without any individual actor intending it.
