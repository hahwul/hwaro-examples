+++
title = "3. Intervention and Control"
description = "Spaced testing protocol specifications, re-study control design, materials, and intervention fidelity monitoring."
weight = 3
template = "post"
tags = ["paper", "light", "protocol", "pre-registration", "rigorous"]
categories = ["sections"]

[extra]
section_number = "3"
+++

## Intervention Description

### Arm A: Weekly spaced testing

Participants receive a 20-minute retrieval practice session once per week during weeks 2 through 13 (12 sessions total). Each session consists of 15 short-answer questions drawn from material covered in the preceding 1-3 weeks, with a built-in spacing schedule that progressively increases the lag between initial exposure and retrieval attempt.

### Arm B: Biweekly spaced testing

Participants receive a 40-minute retrieval practice session once every two weeks during weeks 2 through 13 (6 sessions total). Each session consists of 30 short-answer questions. Total question exposure and time-on-task are matched to Arm A (180 questions, 240 total minutes across the semester).

### Arm C: Re-study control

Participants receive study sessions matched to their assigned comparison arm in duration and scheduling. Re-study sessions present the same content as review passages (without retrieval demands) and include highlighting and note-taking prompts. Total time-on-task is matched to Arm A.

## Analysis Plan Decision Tree

<figure class="figure">
  <svg viewBox="0 0 720 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pre-specified analysis plan decision tree showing primary, sensitivity, and exploratory analysis paths">
    <rect x="0" y="0" width="720" height="420" fill="#fafaf7"/>
    <!-- Title -->
    <text x="360" y="28" text-anchor="middle" font-family="Inter, sans-serif" font-weight="700" font-size="13" fill="#1a2030" letter-spacing="0.5">Pre-specified Analysis Decision Tree</text>
    <!-- Level 0: Data lock -->
    <rect x="260" y="44" width="200" height="36" fill="#e8f5ee" stroke="#1a6b50" stroke-width="1.5"/>
    <text x="360" y="67" text-anchor="middle" font-family="Inter, sans-serif" font-weight="700" font-size="11" fill="#1a6b50">DATA LOCK (Week 16)</text>
    <line x1="360" y1="80" x2="360" y2="100" stroke="#1a2030" stroke-width="1"/>
    <!-- Level 1: Check assumptions -->
    <rect x="240" y="100" width="240" height="36" fill="#faf3e6" stroke="#7a5a2a" stroke-width="1.5"/>
    <text x="360" y="123" text-anchor="middle" font-family="Inter, sans-serif" font-weight="600" font-size="10" fill="#7a5a2a">CHECK MODEL ASSUMPTIONS</text>
    <!-- Branch: Assumptions met vs not -->
    <line x1="300" y1="136" x2="180" y2="170" stroke="#1a6b50" stroke-width="1"/>
    <line x1="420" y1="136" x2="540" y2="170" stroke="#c44a2b" stroke-width="1"/>
    <text x="220" y="158" font-family="Inter, sans-serif" font-weight="600" font-size="9" fill="#1a6b50">MET</text>
    <text x="490" y="158" font-family="Inter, sans-serif" font-weight="600" font-size="9" fill="#c44a2b">VIOLATED</text>
    <!-- Left branch: Primary analysis -->
    <rect x="60" y="170" width="240" height="36" fill="#e8f5ee" stroke="#1a6b50" stroke-width="1.5"/>
    <text x="180" y="193" text-anchor="middle" font-family="Inter, sans-serif" font-weight="700" font-size="10" fill="#1a6b50">PRIMARY: Mixed-effects LM</text>
    <!-- Right branch: Robust alternative -->
    <rect x="420" y="170" width="240" height="36" fill="#f0efe8" stroke="#8a8e9a" stroke-width="1.5"/>
    <text x="540" y="193" text-anchor="middle" font-family="Inter, sans-serif" font-weight="700" font-size="10" fill="#5b6272">ROBUST: Permutation test</text>
    <!-- Both converge to sensitivity -->
    <line x1="180" y1="206" x2="300" y2="240" stroke="#1a2030" stroke-width="1"/>
    <line x1="540" y1="206" x2="420" y2="240" stroke="#1a2030" stroke-width="1"/>
    <rect x="240" y="240" width="240" height="36" fill="#eaf0f7" stroke="#2a5a8a" stroke-width="1.5"/>
    <text x="360" y="263" text-anchor="middle" font-family="Inter, sans-serif" font-weight="700" font-size="10" fill="#2a5a8a">SENSITIVITY ANALYSES</text>
    <!-- Sensitivity branches -->
    <line x1="300" y1="276" x2="140" y2="310" stroke="#1a2030" stroke-width="1"/>
    <line x1="360" y1="276" x2="360" y2="310" stroke="#1a2030" stroke-width="1"/>
    <line x1="420" y1="276" x2="580" y2="310" stroke="#1a2030" stroke-width="1"/>
    <rect x="40" y="310" width="200" height="30" fill="#f0efe8" stroke="#ccc8ba" stroke-width="1"/>
    <text x="140" y="330" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#5b6272">Per-protocol analysis</text>
    <rect x="260" y="310" width="200" height="30" fill="#f0efe8" stroke="#ccc8ba" stroke-width="1"/>
    <text x="360" y="330" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#5b6272">Multiple imputation (MICE)</text>
    <rect x="480" y="310" width="200" height="30" fill="#f0efe8" stroke="#ccc8ba" stroke-width="1"/>
    <text x="580" y="330" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#5b6272">Tipping point analysis</text>
    <!-- Final: Exploratory -->
    <line x1="360" y1="340" x2="360" y2="370" stroke="#1a2030" stroke-width="1"/>
    <rect x="220" y="370" width="280" height="36" fill="#faf3e6" stroke="#7a5a2a" stroke-width="1.5"/>
    <text x="360" y="393" text-anchor="middle" font-family="Inter, sans-serif" font-weight="600" font-size="10" fill="#7a5a2a">EXPLORATORY: Subgroup &amp; moderation</text>
  </svg>
  <div class="caption"><span class="fig-num">Figure 3.</span> Pre-specified analysis decision tree. The primary analysis (mixed-effects linear model) is conducted first. If distributional assumptions are violated (Shapiro-Wilk p &lt; 0.01 on residuals), a permutation test serves as the primary inference. Sensitivity analyses are conducted regardless of primary result.</div>
</figure>

## Materials

All testing and re-study materials are drawn from the same item bank of 540 questions developed by the investigative team and reviewed by three subject-matter experts. Items are classified by:

- **Bloom's taxonomy level:** Remember (30 pct), Understand (40 pct), Apply (20 pct), Analyze (10 pct)
- **Topic module:** 12 modules aligned with the standardized introductory biology syllabus
- **Difficulty:** Calibrated using pilot data (N = 120) via a 2-parameter IRT model

Each testing session draws items according to a pre-specified spacing schedule. The schedule ensures that each item is encountered at increasing intervals: 1 week, 2 weeks, then 4 weeks after initial exposure.

## Fidelity Monitoring

Intervention fidelity will be assessed through:

1. **Session completion logs** -- REDCap automatically records login/logout timestamps and question completion rates
2. **Random audio recording** -- 20 pct of sessions at each site will be audio-recorded and checked against a standardized fidelity checklist (8 items, inter-rater kappa target > 0.80)
3. **Contamination monitoring** -- End-of-semester questionnaire asking participants whether they shared materials across arms
4. **Dose tracking** -- Number of sessions attended, questions attempted, and time spent per session

A fidelity threshold of 80 pct session attendance and 90 pct question completion is required for per-protocol inclusion.
