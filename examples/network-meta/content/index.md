+++
title = "Abstract"
description = "Comparative efficacy of biologic therapies for moderate-to-severe rheumatoid arthritis: a Bayesian network meta-analysis of randomized controlled trials."
tags = ["paper", "dark", "network", "meta-analysis", "comparative"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Network Meta-Analysis &middot; Open Access</p>
  <h1 class="paper-title">Comparative Efficacy of Biologic Therapies for Moderate-to-Severe Rheumatoid Arthritis: A Bayesian Network Meta-Analysis</h1>
  <p class="paper-authors">
    <span class="author-corresponding">Jisoo Park</span><sup>1,*</sup>,
    Folake Adeyemi<sup>2</sup>,
    Marek Kowalski<sup>3</sup>,
    Wei Chen<sup>1,4</sup>
  </p>
  <p class="paper-affiliations">
    <sup>1</sup>Department of Biostatistics, Langford School of Public Health &middot;
    <sup>2</sup>Centre for Rheumatology Research, University of Lagos Teaching Hospital &middot;
    <sup>3</sup>Division of Evidence Synthesis, Jagiellonian University Medical College &middot;
    <sup>4</sup>Collaborative Centre for Health Technology Assessment, Singapore
  </p>
  <p class="paper-doi"><strong>DOI:</strong> <a href="#">10.52104/esm.2026.11.01.022</a> &middot; <strong>Received:</strong> 14 Oct 2025 &middot; <strong>Accepted:</strong> 22 Feb 2026</p>
</header>

<section class="abstract-box">
  <h2>Abstract</h2>
  <dl>
    <dt>Background</dt>
    <dd>Multiple biologic disease-modifying antirheumatic drugs (bDMARDs) and targeted synthetic DMARDs (tsDMARDs) are approved for moderate-to-severe rheumatoid arthritis, yet head-to-head trials comparing all available agents remain scarce. Network meta-analysis enables indirect comparisons across a connected evidence network.</dd>
    <dt>Methods</dt>
    <dd>We searched MEDLINE, Embase, CENTRAL, and clinical trial registries through September 2025 for randomized controlled trials of at least 24 weeks duration comparing adalimumab, etanercept, infliximab, tocilizumab, or tofacitinib against placebo or each other in adults with moderate-to-severe RA despite conventional DMARD therapy. The primary outcome was ACR50 response at 24 weeks. A Bayesian random-effects network meta-analysis was fitted using a binomial likelihood with a logit link. Ranking probabilities were estimated via the surface under the cumulative ranking curve (SUCRA).</dd>
    <dt>Results</dt>
    <dd>Forty-two RCTs (n = 15,843 patients) formed a connected network of six treatments and ten direct comparisons. All five active treatments were superior to placebo for ACR50 response. Tocilizumab ranked first (SUCRA 87.2%), followed by tofacitinib (78.4%), etanercept (65.1%), adalimumab (58.3%), and infliximab (49.8%). The league table showed that tocilizumab was statistically superior to infliximab (OR 1.42, 95% CrI 1.04 to 1.94) but not to the other active agents. No significant inconsistency was detected (global Wald test p = 0.38).</dd>
    <dt>Conclusion</dt>
    <dd>All five biologic and targeted synthetic DMARDs demonstrated clinically meaningful efficacy over placebo. Tocilizumab showed the highest probability of being the most efficacious treatment for ACR50 response, though differences among the active agents were generally modest. These findings support individualized treatment selection based on patient-specific factors alongside relative efficacy data.</dd>
    <dt>Keywords</dt>
    <dd><em>network meta-analysis; rheumatoid arthritis; biologic therapy; adalimumab; etanercept; infliximab; tocilizumab; tofacitinib; SUCRA; league table</em></dd>
  </dl>
</section>

## Network Geometry

<figure class="figure">
  <svg viewBox="0 0 720 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Network geometry diagram showing six treatment nodes and their connecting edges weighted by number of trials">
    <!-- background -->
    <rect x="0" y="0" width="720" height="480" fill="#0c0f16"/>
    <!-- edges (drawn first, behind nodes) -->
    <!-- Placebo--Adalimumab: 8 trials -->
    <line x1="360" y1="80" x2="160" y2="200" stroke="#4a5568" stroke-width="6" opacity="0.7"/>
    <!-- Placebo--Etanercept: 7 trials -->
    <line x1="360" y1="80" x2="560" y2="200" stroke="#4a5568" stroke-width="5.5" opacity="0.7"/>
    <!-- Placebo--Infliximab: 6 trials -->
    <line x1="360" y1="80" x2="160" y2="380" stroke="#4a5568" stroke-width="5" opacity="0.7"/>
    <!-- Placebo--Tocilizumab: 7 trials -->
    <line x1="360" y1="80" x2="560" y2="380" stroke="#4a5568" stroke-width="5.5" opacity="0.7"/>
    <!-- Placebo--Tofacitinib: 5 trials -->
    <line x1="360" y1="80" x2="360" y2="420" stroke="#4a5568" stroke-width="4" opacity="0.7"/>
    <!-- Adalimumab--Etanercept: 2 trials -->
    <line x1="160" y1="200" x2="560" y2="200" stroke="#4a5568" stroke-width="2" opacity="0.7"/>
    <!-- Adalimumab--Infliximab: 1 trial -->
    <line x1="160" y1="200" x2="160" y2="380" stroke="#4a5568" stroke-width="1.2" opacity="0.7"/>
    <!-- Etanercept--Tocilizumab: 2 trials -->
    <line x1="560" y1="200" x2="560" y2="380" stroke="#4a5568" stroke-width="2" opacity="0.7"/>
    <!-- Adalimumab--Tofacitinib: 1 trial -->
    <line x1="160" y1="200" x2="360" y2="420" stroke="#4a5568" stroke-width="1.2" opacity="0.7"/>
    <!-- Tocilizumab--Tofacitinib: 1 trial -->
    <line x1="560" y1="380" x2="360" y2="420" stroke="#4a5568" stroke-width="1.2" opacity="0.7"/>
    <!-- nodes -->
    <!-- Placebo (n=4210) - largest sample -->
    <circle cx="360" cy="80" r="28" fill="none" stroke="#8e8a7e" stroke-width="2.5"/>
    <text x="360" y="75" text-anchor="middle" font-family="IBM Plex Sans" font-weight="700" font-size="11" fill="#8e8a7e">Placebo</text>
    <text x="360" y="90" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#5e5b52">n=4210</text>
    <!-- Adalimumab (n=3180) -->
    <circle cx="160" cy="200" r="24" fill="none" stroke="#5a8fba" stroke-width="2.5"/>
    <text x="160" y="195" text-anchor="middle" font-family="IBM Plex Sans" font-weight="700" font-size="11" fill="#5a8fba">Adalimumab</text>
    <text x="160" y="210" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#5e5b52">n=3180</text>
    <!-- Etanercept (n=2640) -->
    <circle cx="560" cy="200" r="22" fill="none" stroke="#6bbf6b" stroke-width="2.5"/>
    <text x="560" y="195" text-anchor="middle" font-family="IBM Plex Sans" font-weight="700" font-size="11" fill="#6bbf6b">Etanercept</text>
    <text x="560" y="210" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#5e5b52">n=2640</text>
    <!-- Infliximab (n=2120) -->
    <circle cx="160" cy="380" r="20" fill="none" stroke="#d4a03c" stroke-width="2.5"/>
    <text x="160" y="375" text-anchor="middle" font-family="IBM Plex Sans" font-weight="700" font-size="11" fill="#d4a03c">Infliximab</text>
    <text x="160" y="390" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#5e5b52">n=2120</text>
    <!-- Tocilizumab (n=2480) -->
    <circle cx="560" cy="380" r="21" fill="none" stroke="#c45a7c" stroke-width="2.5"/>
    <text x="560" y="375" text-anchor="middle" font-family="IBM Plex Sans" font-weight="700" font-size="11" fill="#c45a7c">Tocilizumab</text>
    <text x="560" y="390" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#5e5b52">n=2480</text>
    <!-- Tofacitinib (n=1213) -->
    <circle cx="360" cy="420" r="16" fill="none" stroke="#9b6fd4" stroke-width="2.5"/>
    <text x="360" y="415" text-anchor="middle" font-family="IBM Plex Sans" font-weight="700" font-size="11" fill="#9b6fd4">Tofacitinib</text>
    <text x="360" y="430" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#5e5b52">n=1213</text>
    <!-- edge trial count labels -->
    <text x="248" y="132" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#7e7a6e">8</text>
    <text x="472" y="132" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#7e7a6e">7</text>
    <text x="244" y="238" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#7e7a6e">6</text>
    <text x="472" y="238" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#7e7a6e">7</text>
    <text x="368" y="256" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#7e7a6e">5</text>
    <text x="360" y="193" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#7e7a6e">2</text>
    <text x="145" y="290" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#7e7a6e">1</text>
    <text x="575" y="290" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#7e7a6e">2</text>
    <text x="248" y="320" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#7e7a6e">1</text>
    <text x="472" y="410" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#7e7a6e">1</text>
    <!-- legend -->
    <text x="30" y="465" font-family="IBM Plex Sans" font-weight="600" font-size="9" fill="#7e7a6e" letter-spacing="1">NODE SIZE = SAMPLE SIZE</text>
    <text x="360" y="465" font-family="IBM Plex Sans" font-weight="600" font-size="9" fill="#7e7a6e" letter-spacing="1">EDGE WIDTH = NUMBER OF TRIALS</text>
  </svg>
  <div class="caption"><span class="fig-num">Figure 1.</span> Network geometry for ACR50 response at 24 weeks. Node diameter is proportional to total sample size randomized to each treatment. Edge thickness is proportional to the number of direct comparison trials. Numbers on edges indicate trial counts. The network is fully connected with 6 nodes and 10 edges across 42 RCTs (n = 15,843).</div>
</figure>

## League Table (Summary)

<div class="table-wrap">
<table class="league-table">
  <caption><span class="tab-num">Table 1.</span> League table of pairwise odds ratios (95% CrI) for ACR50 response. Read across rows: OR &gt; 1 favors the row treatment over the column treatment.</caption>
  <thead>
    <tr>
      <th></th>
      <th>PBO</th>
      <th>ADA</th>
      <th>ETN</th>
      <th>IFX</th>
      <th>TCZ</th>
      <th>TOF</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="diagonal">Placebo</td>
      <td class="diagonal">&mdash;</td>
      <td class="num">0.31 (0.24, 0.40)</td>
      <td class="num">0.29 (0.22, 0.38)</td>
      <td class="num">0.34 (0.25, 0.46)</td>
      <td class="num">0.24 (0.18, 0.33)</td>
      <td class="num">0.27 (0.19, 0.38)</td>
    </tr>
    <tr>
      <td class="diagonal">Adalimumab</td>
      <td class="num favor-treatment">3.22 (2.51, 4.13)</td>
      <td class="diagonal">&mdash;</td>
      <td class="num">0.93 (0.68, 1.28)</td>
      <td class="num">1.10 (0.78, 1.56)</td>
      <td class="num">0.78 (0.55, 1.10)</td>
      <td class="num">0.87 (0.58, 1.29)</td>
    </tr>
    <tr>
      <td class="diagonal">Etanercept</td>
      <td class="num favor-treatment">3.46 (2.65, 4.52)</td>
      <td class="num">1.07 (0.78, 1.47)</td>
      <td class="diagonal">&mdash;</td>
      <td class="num">1.18 (0.83, 1.69)</td>
      <td class="num">0.84 (0.59, 1.19)</td>
      <td class="num">0.93 (0.62, 1.40)</td>
    </tr>
    <tr>
      <td class="diagonal">Infliximab</td>
      <td class="num favor-treatment">2.94 (2.19, 3.94)</td>
      <td class="num">0.91 (0.64, 1.29)</td>
      <td class="num">0.85 (0.59, 1.21)</td>
      <td class="diagonal">&mdash;</td>
      <td class="num">0.71 (0.49, 1.02)</td>
      <td class="num">0.79 (0.52, 1.21)</td>
    </tr>
    <tr>
      <td class="diagonal">Tocilizumab</td>
      <td class="num favor-treatment">4.14 (3.07, 5.59)</td>
      <td class="num">1.29 (0.91, 1.82)</td>
      <td class="num">1.20 (0.84, 1.71)</td>
      <td class="num favor-treatment">1.42 (1.04, 1.94)</td>
      <td class="diagonal">&mdash;</td>
      <td class="num">1.12 (0.74, 1.69)</td>
    </tr>
    <tr>
      <td class="diagonal">Tofacitinib</td>
      <td class="num favor-treatment">3.68 (2.62, 5.18)</td>
      <td class="num">1.14 (0.77, 1.71)</td>
      <td class="num">1.07 (0.71, 1.60)</td>
      <td class="num">1.26 (0.83, 1.92)</td>
      <td class="num">0.89 (0.59, 1.35)</td>
      <td class="diagonal">&mdash;</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="7">PBO = placebo; ADA = adalimumab; ETN = etanercept; IFX = infliximab; TCZ = tocilizumab; TOF = tofacitinib. Statistically significant results (95% CrI excludes 1) shown in color. OR &gt; 1 favors row treatment.</td></tr>
  </tfoot>
</table>
</div>

## Structure of the Paper

Navigate the full manuscript through the section index. The paper contains the following numbered sections:

<ol class="section-list">
  <li><a href="{{ base_url }}/sections/1-introduction/">Introduction</a> -- clinical background, review rationale, and objectives</li>
  <li><a href="{{ base_url }}/sections/2-network-geometry/">Network Geometry</a> -- search strategy, evidence network, and node/edge characteristics</li>
  <li><a href="{{ base_url }}/sections/3-pairwise-results/">Pairwise Results</a> -- odds ratios, credible intervals, and the full league table</li>
  <li><a href="{{ base_url }}/sections/4-ranking-analysis/">Ranking Analysis</a> -- SUCRA values, rankograms, and cumulative ranking curves</li>
  <li><a href="{{ base_url }}/sections/5-discussion/">Discussion</a> -- interpretation, strengths, limitations, and clinical implications</li>
</ol>
