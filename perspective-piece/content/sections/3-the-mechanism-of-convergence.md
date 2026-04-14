+++
title = "3. The Mechanism of Convergence"
description = "Analysing the institutional, economic, and social forces that drive methodological convergence in machine learning research."
weight = 3
template = "post"
tags = ["opinion", "incentives", "peer-review"]
categories = ["sections"]
[extra]
section_number = "3"
+++

## 3.1 The benchmark trap

<div class="argument-block thesis">
  <span class="argument-label thesis-label">Premise P6</span>
  <p>Benchmark culture creates a self-fulfilling prophecy of convergence. When ImageNet accuracy, GLUE scores, and perplexity on standard corpora become the primary evaluation criteria, architectures optimised for these specific benchmarks will dominate -- and since Transformers have been heavily optimised for exactly these benchmarks, the game is structurally tilted before a single experiment is run.</p>
</div>

This is not an argument that benchmarks are useless. Standardised evaluation is essential for scientific comparison. The problem arises when benchmark performance becomes the exclusive signal for publication, funding, and career advancement. Under those conditions, rational researchers will allocate their effort to improving Transformer performance on existing benchmarks rather than developing alternative architectures that might excel on tasks for which no benchmark yet exists.

## 3.2 Peer review as a conserving force

<div class="argument-block thesis">
  <span class="argument-label thesis-label">Premise P7</span>
  <p>The peer review system, as currently constituted at major ML venues, acts as a conserving force that penalises novelty. Reviewers are drawn from the existing research community and therefore carry the community's assumptions about what constitutes a reasonable approach. Papers that challenge these assumptions face a higher evidential bar -- they must not merely match but significantly exceed the performance of dominant approaches to be considered publishable.</p>
</div>

The asymmetry is revealing: a paper that achieves a 0.3% improvement on ImageNet using a Transformer variant is publishable at a top venue; a paper that achieves the same performance using a fundamentally different architecture faces scepticism about whether the approach is "worth pursuing." The implicit assumption is that marginal improvements to the dominant paradigm are inherently more valuable than demonstrating the viability of alternatives.

## 3.3 Compute as a barrier to diversity

<div class="argument-block thesis">
  <span class="argument-label thesis-label">Premise P8</span>
  <p>The compute requirements of modern ML research create an economic barrier to diversity. Training a competitive large language model costs millions of dollars. This concentration of compute in the hands of a few wealthy organisations means that the architectural choices of those organisations -- which overwhelmingly favour Transformers -- set the agenda for the entire field.</p>
</div>

Academic researchers who cannot afford to train models at the frontier scale are left with two options: work on fine-tuning existing (Transformer-based) models, or pursue alternative architectures without the resources to demonstrate them at competitive scale. The first option reinforces monoculture; the second produces work that is dismissed as "not at scale" and therefore unpublishable at top venues.

## 3.4 The social dynamics of paradigm adherence

Kuhn's (1962) analysis of scientific revolutions describes how normal science functions within an accepted paradigm, with anomalies accumulating until a crisis triggers a paradigm shift. But Kuhn also observed that scientists have strong social incentives to work within the dominant paradigm: their careers, reputations, and professional networks are built within it. The cost of abandoning the paradigm is not merely intellectual but personal and professional.

<div class="argument-block antithesis">
  <span class="argument-label antithesis-label">Counterpoint</span>
  <p>Perhaps convergence is efficient. If the Transformer architecture is genuinely superior to alternatives for the vast majority of tasks, then directing the field's collective effort toward improving it -- rather than scattering effort across inferior alternatives -- may be the most productive use of limited research capacity.</p>
</div>

<div class="argument-block synthesis">
  <span class="argument-label synthesis-label">Response</span>
  <p>The efficiency argument is valid in a world of perfect information, where we know with certainty that Transformers are globally optimal. In a world of radical uncertainty about the future of computing, efficiency in exploiting the current paradigm must be balanced against the option value of exploring alternatives that might prove essential when the paradigm's limitations become binding.</p>
</div>
