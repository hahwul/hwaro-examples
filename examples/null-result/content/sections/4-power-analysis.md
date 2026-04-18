+++
title = "4. Power Analysis"
weight = 4
template = "post"
description = "Demonstration that the study had adequate statistical power to detect meaningful effects."
[extra]
section_number = "4"
+++

## Why Power Matters for Null Results

A null finding is only informative if the study had sufficient power to detect effects of clinically relevant magnitude. An underpowered study that fails to reject the null tells us little -- the absence of significance may reflect insufficient sample size rather than a true null effect. We therefore present both our a priori power calculation and post-hoc power assessment.

## A Priori Power Calculation

The sample size was determined before the trial began and documented in the pre-registration:

- **Target effect:** 1.5 MoCA points (MCID from established literature)
- **Assumed SD:** 4.2 MoCA points (from pooled prior studies)
- **Alpha:** 0.05 (two-sided)
- **Target power:** 0.90
- **Attrition allowance:** 15%
- **Required N per group:** 520 (analyzable) / 603 (enrolled with attrition buffer)
- **Total N:** 1,206

<div class="figure">
  <svg viewBox="0 0 700 340" xmlns="http://www.w3.org/2000/svg">
    <text x="350" y="24" text-anchor="middle" font-family="Cormorant" font-size="14" font-weight="500" fill="#1a2030">Minimum Detectable Effect by Power Level</text>
    <line x1="100" y1="40" x2="100" y2="280" stroke="#ccc8ba" stroke-width="1"/>
    <line x1="100" y1="280" x2="640" y2="280" stroke="#ccc8ba" stroke-width="1"/>
    <text x="45" y="165" text-anchor="middle" font-family="Crimson Pro" font-size="12" fill="#5b6272" transform="rotate(-90,45,165)">Minimum Detectable Effect (MoCA pts)</text>
    <text x="370" y="315" text-anchor="middle" font-family="Crimson Pro" font-size="12" fill="#5b6272">Statistical Power (1 - beta)</text>
    <text x="95" y="55" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#8a8e9a">3.0</text>
    <text x="95" y="95" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#8a8e9a">2.5</text>
    <text x="95" y="135" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#8a8e9a">2.0</text>
    <text x="95" y="175" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#8a8e9a">1.5</text>
    <text x="95" y="215" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#8a8e9a">1.0</text>
    <text x="95" y="255" text-anchor="end" font-family="JetBrains Mono" font-size="9" fill="#8a8e9a">0.5</text>
    <line x1="100" y1="175" x2="640" y2="175" stroke="#c44a3a" stroke-width="1" stroke-dasharray="4 2" opacity="0.6"/>
    <text x="645" y="179" font-family="JetBrains Mono" font-size="8" fill="#c44a3a">MCID</text>
    <text x="152" y="295" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#8a8e9a">0.60</text>
    <text x="235" y="295" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#8a8e9a">0.70</text>
    <text x="316" y="295" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#8a8e9a">0.80</text>
    <text x="397" y="295" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#8a8e9a">0.85</text>
    <text x="478" y="295" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#8a8e9a">0.90</text>
    <text x="559" y="295" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#8a8e9a">0.95</text>
    <text x="640" y="295" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#8a8e9a">0.99</text>
    <polyline points="152,215 235,195 316,182 397,178 478,172 559,164 640,150" fill="none" stroke="#8a8e9a" stroke-width="2"/>
    <circle cx="152" cy="215" r="3.5" fill="#8a8e9a"/>
    <circle cx="235" cy="195" r="3.5" fill="#8a8e9a"/>
    <circle cx="316" cy="182" r="3.5" fill="#8a8e9a"/>
    <circle cx="397" cy="178" r="3.5" fill="#8a8e9a"/>
    <circle cx="478" cy="172" r="5" fill="#1a2030" stroke="white" stroke-width="1.5"/>
    <circle cx="559" cy="164" r="3.5" fill="#8a8e9a"/>
    <circle cx="640" cy="150" r="3.5" fill="#8a8e9a"/>
    <text x="488" y="166" font-family="JetBrains Mono" font-size="9" fill="#1a2030">Target: 0.90</text>
  </svg>
  <p class="caption"><span class="fig-num">Figure 4.</span> Minimum detectable effect (MDE) at N = 1,206 (603 per arm) across different power levels. At the target power of 0.90, the MDE is 1.3 MoCA points, which is below the pre-registered MCID of 1.5 points (red dashed line), confirming the study was adequately powered.</p>
</div>

## Post-Hoc Power Assessment

The observed pooled standard deviation (3.9 MoCA points) was slightly smaller than assumed (4.2), and final attrition (11.2%) was lower than budgeted (15%). Together, these yield:

- **Post-hoc power at MCID of 1.5 points:** 0.92 (exceeds target of 0.90)
- **Smallest detectable effect at 80% power:** 0.89 MoCA points
- **Smallest detectable effect at 90% power:** 1.06 MoCA points

This means the study could reliably detect effects as small as approximately 1 MoCA point -- well below the threshold considered clinically meaningful.

## Ruling Out Meaningful Effects

The combination of (1) a near-zero point estimate, (2) narrow confidence intervals excluding the MCID, (3) confirmed equivalence via TOST, and (4) power exceeding 90% at the MCID provides strong, convergent evidence that omega-3 supplementation does not meaningfully slow cognitive decline. This is not a failure to detect an effect -- it is successful detection of its absence.
