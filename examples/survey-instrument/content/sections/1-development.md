+++
title = "1. Instrument Development"
description = "Item generation through literature review and a three-round expert Delphi panel, followed by cognitive pretesting with a purposive sample of 24 respondents."
weight = 1
template = "post"
tags = ["paper", "survey", "instrument"]
categories = ["sections"]
[extra]
section_number = "1"
+++

## 1.1 Conceptual framework

The BASIS-25 is anchored in a five-domain conceptual framework adapted from the Institute for Health-Services Research patient-reported experience literature [1, 2]. The five domains are Access, Communication, Comprehension, Autonomy, and Environment. Domain selection was finalized by the authors before any item writing began, following a targeted literature review of 47 prior instruments.

## 1.2 Item generation

An initial pool of 84 candidate items (17 Access, 19 Communication, 15 Comprehension, 16 Autonomy, 17 Environment) was generated through parallel drafting by two authors working independently. Items were written to conform to a five-point Likert scale with anchored labels ("Never" to "Always"), a 7-day recall window, and a sixth-grade target reading level verified using the Flesch-Kincaid readability index.

## 1.3 Expert Delphi

A three-round Delphi panel (n = 14 experts: 8 academic researchers, 4 clinical program directors, 2 survey methodologists) evaluated candidate items on content validity, clarity, and domain fit. Consensus was operationalized as &geq; 80 pct agreement that an item was "essential" (content validity ratio &gt; 0.42). After three rounds the pool was reduced to 43 items.

## 1.4 Cognitive pretesting

The 43-item pool was administered to 24 cognitive interview participants purposively recruited to represent a range of age (18 &ndash; 74), primary language (English, Spanish, Vietnamese), and educational attainment (did not complete secondary through postgraduate). Think-aloud and retrospective probing techniques identified 11 items with comprehension difficulty, response mapping issues, or ambiguous reference.

Following revision and second-round pretesting (n = 12), the instrument was reduced to 30 items and sent to field administration. Five items dropped out during analysis due to low item-total correlations, yielding the final 25-item instrument.

## 1.5 Item flow

The instrument is administered as a single block with a common stem and a single question-response grid. No skip logic is used in the primary administration pattern. For contexts where skip logic is needed (e.g. respondents without recent care episodes), an optional routing diagram is provided in Section 4 of the appendix.

<figure class="figure">
  <svg viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Question flow and skip logic diagram">
    <defs>
      <marker id="arr2" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0,0 L10,5 L0,10 z" fill="#2a6dc4"/>
      </marker>
    </defs>
    <!-- Start -->
    <g font-family="IBM Plex Sans" font-size="11" fill="#181f2d" font-weight="700">
      <rect x="30" y="120" width="100" height="40" rx="20" fill="#fafaf7" stroke="#181f2d" stroke-width="1.5"/>
      <text x="80" y="145" text-anchor="middle">START</text>
    </g>
    <!-- Screener question -->
    <g font-family="IBM Plex Sans" font-size="11" fill="#181f2d">
      <polygon points="200,140 260,100 320,140 260,180" fill="#fafaf7" stroke="#181f2d" stroke-width="1.5"/>
      <text x="260" y="138" text-anchor="middle" font-weight="700">Q0</text>
      <text x="260" y="152" text-anchor="middle" font-size="9">visit in 7 days?</text>
    </g>
    <!-- Main block -->
    <g font-family="IBM Plex Sans" font-size="11" fill="#181f2d">
      <rect x="380" y="40" width="200" height="60" fill="#fafaf7" stroke="#2a6dc4" stroke-width="1.5"/>
      <text x="480" y="68" text-anchor="middle" font-weight="700">MAIN BLOCK</text>
      <text x="480" y="84" text-anchor="middle" font-size="10">Q01 - Q25 Likert</text>
    </g>
    <!-- Short block -->
    <g font-family="IBM Plex Sans" font-size="11" fill="#181f2d">
      <rect x="380" y="180" width="200" height="60" fill="#fafaf7" stroke="#c4882a" stroke-width="1.5"/>
      <text x="480" y="208" text-anchor="middle" font-weight="700">SHORT BLOCK</text>
      <text x="480" y="224" text-anchor="middle" font-size="10">Q21 - Q25 only</text>
    </g>
    <!-- Demographics -->
    <g font-family="IBM Plex Sans" font-size="11" fill="#181f2d">
      <rect x="630" y="120" width="110" height="40" fill="#fafaf7" stroke="#181f2d" stroke-width="1.5"/>
      <text x="685" y="145" text-anchor="middle" font-weight="700">DEMO + END</text>
    </g>
    <!-- arrows -->
    <g fill="none" stroke="#2a6dc4" stroke-width="1.4">
      <path d="M130,140 L200,140" marker-end="url(#arr2)"/>
      <path d="M320,130 L380,80" marker-end="url(#arr2)"/>
      <path d="M320,150 L380,205" marker-end="url(#arr2)"/>
      <path d="M580,70 L630,130" marker-end="url(#arr2)"/>
      <path d="M580,210 L630,150" marker-end="url(#arr2)"/>
    </g>
    <!-- branch labels -->
    <text x="340" y="108" font-family="JetBrains Mono" font-size="9" fill="#2a6dc4" font-weight="700">YES</text>
    <text x="340" y="190" font-family="JetBrains Mono" font-size="9" fill="#c4882a" font-weight="700">NO</text>
  </svg>
  <figcaption class="caption"><span class="fig-num">Figure 1.</span> Question flow diagram showing optional skip logic. A single screener question (Q0) routes respondents to either the full 25-item main block or a 5-item short block covering Environment only (Q21 &ndash; Q25), after which all respondents converge on the demographics and end blocks.</figcaption>
</figure>
