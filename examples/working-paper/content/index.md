+++
title = "Abstract"
tags = ["paper", "light", "working", "in-progress", "honest"]
+++

<div class="draft-banner">
  <strong>DRAFT v0.3</strong> &mdash; Last updated 2026-04-10 &mdash; Not for citation
</div>

<article class="paper-article">
  <div class="paper-wrap">

<header class="paper-header">
  <div class="paper-eyebrow">Working Paper</div>
  <h1 class="paper-title">Algorithmic Fairness in Automated Hiring: A Framework for Auditing Disparate Impact Across Protected Classes</h1>
  <div class="paper-authors">
    Amira Hassan<sup>1</sup>, David Kim<sup>2</sup>, Beatrice Okonkwo<sup>1,3</sup>, Sven Mueller<sup>4</sup>, Lucia Fernandez<sup>2</sup>
  </div>
  <div class="paper-affiliations">
    <sup>1</sup> AI Ethics Lab, Amsterdam University &nbsp;&middot;&nbsp;
    <sup>2</sup> School of Computer Science, Toronto University<br>
    <sup>3</sup> Centre for Labour Policy, University of Lagos &nbsp;&middot;&nbsp;
    <sup>4</sup> Dept of Statistics, ETH Zurich
  </div>
  <div class="paper-doi">DOI: not yet assigned</div>
</header>

<div class="abstract-box">
<dl>
  <dt>Background</dt>
  <dd>
    Automated hiring systems are increasingly deployed across industries to screen, rank, and shortlist candidates. While these systems promise efficiency and consistency, growing evidence suggests that algorithmic decision-making can reproduce and amplify existing patterns of discrimination across protected classes including race, gender, age, and disability status. Despite regulatory attention, few systematic audit frameworks exist that can be applied across platforms and jurisdictions.
  </dd>

  <dt>Methods</dt>
  <dd>
    We develop a three-stage audit framework comprising (i) input analysis of training data representativeness, (ii) process auditing via algorithmic inspection and counterfactual testing, and (iii) outcome measurement through disparate impact ratio calculations across protected classes. The framework is applied to three commercial hiring platforms (Platform A, Platform B, and Platform C) using a synthetic applicant pool of 12,000 profiles with controlled demographic variation. <span class="todo-marker">[TODO]</span> Complete description of audit protocol for Platform C.
  </dd>

  <dt>Results</dt>
  <dd>
    Audits of Platform A reveal statistically significant disparate impact against candidates over 45 years of age (DIR = 0.71, p < 0.001) and female candidates for technical roles (DIR = 0.78, p < 0.01). Platform B shows more uniform outcomes across demographic groups, though racial disparities emerge in the interview-recommendation stage (DIR = 0.82 for Black candidates, p < 0.05). <span class="todo-marker">[TODO]</span> Add results for Platform C audit.
  </dd>

  <dt>Conclusion</dt>
  <dd>
    Our framework provides a reproducible, platform-agnostic methodology for identifying disparate impact in automated hiring. Preliminary results indicate that algorithmic bias is neither universal nor uniform: it varies by platform architecture, job category, and the specific stage of the hiring pipeline. <span class="todo-marker">[TODO]</span> Revise after Platform C results are available.
  </dd>

  <dt>Keywords</dt>
  <dd>algorithmic fairness, automated hiring, disparate impact, audit framework, protected classes, employment discrimination</dd>
</dl>
</div>

## Paper Structure and Completion Status

<div class="figure">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 240" width="680" height="240">
  <!-- Background -->
  <rect x="0" y="0" width="680" height="240" fill="#fafaf7" rx="4"/>
  <!-- Title -->
  <text x="340" y="24" text-anchor="middle" font-family="Inter, sans-serif" font-weight="700" font-size="12" fill="#1a2030" letter-spacing="0.08em">PAPER STRUCTURE</text>
  <line x1="40" y1="34" x2="640" y2="34" stroke="#d4cfc2" stroke-width="1"/>

  <!-- Section 1 - Complete -->
  <rect x="40" y="50" width="600" height="28" fill="#ffffff" stroke="#d4cfc2" stroke-width="1" rx="2"/>
  <rect x="41" y="51" width="598" height="26" fill="#eaf5ef" rx="1"/>
  <text x="56" y="68" font-family="Inter, sans-serif" font-weight="700" font-size="11" fill="#3a7d5c">1. Introduction</text>
  <text x="590" y="68" text-anchor="end" font-family="IBM Plex Mono, monospace" font-weight="700" font-size="10" fill="#3a7d5c">COMPLETE</text>
  <rect x="460" y="57" width="80" height="8" fill="#d4cfc2" rx="2"/>
  <rect x="460" y="57" width="80" height="8" fill="#4a9e72" rx="2"/>

  <!-- Section 2 - Complete -->
  <rect x="40" y="86" width="600" height="28" fill="#ffffff" stroke="#d4cfc2" stroke-width="1" rx="2"/>
  <rect x="41" y="87" width="598" height="26" fill="#eaf5ef" rx="1"/>
  <text x="56" y="104" font-family="Inter, sans-serif" font-weight="700" font-size="11" fill="#3a7d5c">2. Audit Framework</text>
  <text x="590" y="104" text-anchor="end" font-family="IBM Plex Mono, monospace" font-weight="700" font-size="10" fill="#3a7d5c">COMPLETE</text>
  <rect x="460" y="93" width="80" height="8" fill="#d4cfc2" rx="2"/>
  <rect x="460" y="93" width="80" height="8" fill="#4a9e72" rx="2"/>

  <!-- Section 3 - Complete -->
  <rect x="40" y="122" width="600" height="28" fill="#ffffff" stroke="#d4cfc2" stroke-width="1" rx="2"/>
  <rect x="41" y="123" width="598" height="26" fill="#eaf5ef" rx="1"/>
  <text x="56" y="140" font-family="Inter, sans-serif" font-weight="700" font-size="11" fill="#3a7d5c">3. Results: Platform A and B</text>
  <text x="590" y="140" text-anchor="end" font-family="IBM Plex Mono, monospace" font-weight="700" font-size="10" fill="#3a7d5c">COMPLETE</text>
  <rect x="460" y="129" width="80" height="8" fill="#d4cfc2" rx="2"/>
  <rect x="460" y="129" width="80" height="8" fill="#4a9e72" rx="2"/>

  <!-- Section 4 - Partial -->
  <rect x="40" y="158" width="600" height="28" fill="#ffffff" stroke="#d4782a" stroke-width="1.5" rx="2"/>
  <rect x="41" y="159" width="598" height="26" fill="#fdf3e8" rx="1"/>
  <text x="56" y="176" font-family="Inter, sans-serif" font-weight="700" font-size="11" fill="#b85c1a">4. Results: Platform C</text>
  <text x="590" y="176" text-anchor="end" font-family="IBM Plex Mono, monospace" font-weight="700" font-size="10" fill="#b85c1a">~20%</text>
  <rect x="460" y="165" width="80" height="8" fill="#d4cfc2" rx="2"/>
  <rect x="460" y="165" width="16" height="8" fill="#d4782a" rx="2"/>

  <!-- Section 5 - Partial -->
  <rect x="40" y="194" width="600" height="28" fill="#ffffff" stroke="#d4782a" stroke-width="1" rx="2"/>
  <rect x="41" y="195" width="598" height="26" fill="#fef7f0" rx="1"/>
  <text x="56" y="212" font-family="Inter, sans-serif" font-weight="700" font-size="11" fill="#b85c1a">5. Discussion</text>
  <text x="590" y="212" text-anchor="end" font-family="IBM Plex Mono, monospace" font-weight="700" font-size="10" fill="#b85c1a">~50%</text>
  <rect x="460" y="201" width="80" height="8" fill="#d4cfc2" rx="2"/>
  <rect x="460" y="201" width="40" height="8" fill="#d4782a" rx="2"/>
</svg>
<div class="caption"><span class="fig-num">Figure 1.</span> Paper structure overview with per-section completion status. Green sections are complete; orange sections are in progress with outstanding [TODO] items.</div>
</div>

## Overall Completion

<div class="figure">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 80" width="680" height="80">
  <rect x="0" y="0" width="680" height="80" fill="#fafaf7"/>
  <text x="40" y="22" font-family="Inter, sans-serif" font-weight="700" font-size="12" fill="#1a2030" letter-spacing="0.04em">OVERALL PROGRESS</text>
  <text x="640" y="22" text-anchor="end" font-family="IBM Plex Mono, monospace" font-weight="700" font-size="12" fill="#b85c1a">65%</text>
  <!-- Track -->
  <rect x="40" y="34" width="600" height="18" fill="#e6e2d8" rx="3"/>
  <!-- Fill -->
  <rect x="40" y="34" width="390" height="18" fill="#4a9e72" rx="3"/>
  <!-- Separator line at boundary -->
  <line x1="430" y1="34" x2="430" y2="52" stroke="#b85c1a" stroke-width="1.5" stroke-dasharray="3,2"/>
  <!-- Labels -->
  <text x="230" y="47" text-anchor="middle" font-family="Inter, sans-serif" font-weight="700" font-size="10" fill="#ffffff">DRAFTED</text>
  <text x="530" y="47" text-anchor="middle" font-family="Inter, sans-serif" font-weight="600" font-size="10" fill="#8a8d96">REMAINING</text>
  <!-- Note -->
  <text x="340" y="70" text-anchor="middle" font-family="Inter, sans-serif" font-weight="400" font-size="10" fill="#8a8d96">Estimated based on section word counts and completeness. Platform C results pending data access.</text>
</svg>
</div>

## Revision History

<div class="figure">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 160" width="680" height="160">
  <rect x="0" y="0" width="680" height="160" fill="#fafaf7"/>
  <text x="340" y="22" text-anchor="middle" font-family="Inter, sans-serif" font-weight="700" font-size="12" fill="#1a2030" letter-spacing="0.08em">REVISION TIMELINE</text>

  <!-- Timeline axis -->
  <line x1="80" y1="70" x2="600" y2="70" stroke="#d4cfc2" stroke-width="2"/>

  <!-- v0.1 -->
  <circle cx="140" cy="70" r="8" fill="#4a9e72" stroke="#ffffff" stroke-width="2"/>
  <text x="140" y="56" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-weight="700" font-size="11" fill="#3a7d5c">v0.1</text>
  <text x="140" y="94" text-anchor="middle" font-family="Inter, sans-serif" font-weight="600" font-size="9" fill="#5c6170">2026-01-15</text>
  <text x="140" y="108" text-anchor="middle" font-family="Inter, sans-serif" font-weight="400" font-size="9" fill="#8a8d96">Initial framework</text>
  <text x="140" y="120" text-anchor="middle" font-family="Inter, sans-serif" font-weight="400" font-size="9" fill="#8a8d96">and literature review</text>

  <!-- v0.2 -->
  <circle cx="370" cy="70" r="8" fill="#4a9e72" stroke="#ffffff" stroke-width="2"/>
  <text x="370" y="56" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-weight="700" font-size="11" fill="#3a7d5c">v0.2</text>
  <text x="370" y="94" text-anchor="middle" font-family="Inter, sans-serif" font-weight="600" font-size="9" fill="#5c6170">2026-03-02</text>
  <text x="370" y="108" text-anchor="middle" font-family="Inter, sans-serif" font-weight="400" font-size="9" fill="#8a8d96">Added Platform A</text>
  <text x="370" y="120" text-anchor="middle" font-family="Inter, sans-serif" font-weight="400" font-size="9" fill="#8a8d96">and B audit results</text>

  <!-- v0.3 (current) -->
  <circle cx="540" cy="70" r="10" fill="#d4782a" stroke="#ffffff" stroke-width="2"/>
  <text x="540" y="54" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-weight="700" font-size="11" fill="#b85c1a">v0.3</text>
  <text x="540" y="94" text-anchor="middle" font-family="Inter, sans-serif" font-weight="600" font-size="9" fill="#5c6170">2026-04-10</text>
  <text x="540" y="108" text-anchor="middle" font-family="Inter, sans-serif" font-weight="400" font-size="9" fill="#8a8d96">Revised methods,</text>
  <text x="540" y="120" text-anchor="middle" font-family="Inter, sans-serif" font-weight="400" font-size="9" fill="#8a8d96">added characterisation</text>
  <!-- Current marker -->
  <text x="540" y="145" text-anchor="middle" font-family="Inter, sans-serif" font-weight="700" font-size="9" fill="#b85c1a" letter-spacing="0.06em">CURRENT</text>
</svg>
</div>

## Sections

- [1. Introduction](/sections/1-introduction/)
- [2. Audit Framework](/sections/2-framework/)
- [3. Results: Platform A and B](/sections/3-results-ab/)
- [4. Results: Platform C](/sections/4-results-c/)
- [5. Discussion](/sections/5-discussion/)

---

- [Revision History](/revisions/)
- [Consolidated TODO List](/todos/)
- [Appendix](/appendix/)

  </div>
</article>
