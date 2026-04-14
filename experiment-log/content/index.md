+++
title = "Abstract"
description = "Sequential optimisation of Pd-Cu bimetallic catalysts for selective hydrogenation through a three-trial iterative approach (EXP-01, EXP-02, EXP-03)."
tags = ["paper", "dark", "experimental", "sequential", "iterative"]
+++

<header class="paper-header">
  <p class="paper-eyebrow">Original Research &middot; Open Access &middot; Sequential Trial</p>
  <h1 class="paper-title">Sequential Optimisation of Pd-Cu Bimetallic Catalysts for Selective Hydrogenation: A Three-Trial Iterative Approach</h1>
  <p class="paper-authors">
    <span class="author-corresponding">Lena Bergstrom</span><sup>1</sup>,
    Hassan Farouk<sup>2</sup>,
    Takeshi Yamamoto<sup>1,3</sup>,
    Priya Chandrasekaran<sup>2</sup>,
    Olga Novak<sup>4</sup>
  </p>
  <p class="paper-affiliations">
    <sup>1</sup>Catalysis Research Centre, Lund University &middot;
    <sup>2</sup>Chemical Engineering Dept, Cairo University &middot;
    <sup>3</sup>Materials Science Institute, Kyoto University &middot;
    <sup>4</sup>Dept of Chemistry, Charles University Prague
  </p>
  <p class="paper-doi"><strong>DOI:</strong> <a href="#">10.50234/jce.2026.61.11.1842</a> &middot; <strong>Received:</strong> 14 Apr 2026 &middot; <strong>Accepted:</strong> 28 Sep 2026</p>
</header>

<section class="abstract-box">
  <h2>Abstract</h2>
  <dl>
    <dt>Objective</dt>
    <dd>To sequentially optimise Pd-Cu bimetallic catalyst composition and reaction temperature for the selective hydrogenation of 1,3-butadiene to 1-butene, using a structured three-trial iterative approach with explicit decision rationale at each step.</dd>
    <dt>Methods</dt>
    <dd>Three sequential experiments (EXP-01, EXP-02, EXP-03) were conducted on Pd-Cu/Al2O3 catalysts prepared by co-impregnation. Each trial modified a single parameter informed by the preceding result. Catalysts were characterised by XRD, TEM, and XPS. Selectivity and yield were measured by on-line GC-FID at steady state after 4 h time-on-stream.</dd>
    <dt>Results</dt>
    <dd>The iterative chain improved selectivity from 72.4 pct (EXP-01, Pd:Cu 3:1, 120 C) to 91.2 pct (EXP-03, Pd:Cu 2:1, 95 C) while raising yield from 58.1 pct to 71.4 pct. Decision nodes between trials identified Cu loading and temperature as the two critical levers. The optimised catalyst (EXP-03) maintained 91 pct selectivity over a 48 h stability test.</dd>
    <dt>Conclusion</dt>
    <dd>A structured sequential approach with documented decision rationale at each transition enables rapid convergence on optimal catalyst conditions. The three-trial chain demonstrates that systematic single-variable changes outperform factorial screening when prior mechanistic knowledge constrains the search space.</dd>
    <dt>Keywords</dt>
    <dd><em>bimetallic catalyst; selective hydrogenation; Pd-Cu; sequential optimisation; iterative trial; butadiene</em></dd>
  </dl>
</section>

## Experiment Chain Overview

<figure class="figure">
  <svg viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow diagram showing experiment chain EXP-01 to EXP-02 to EXP-03 with decision nodes and parameter annotations">
    <!-- Arrow marker definitions -->
    <defs>
      <marker id="arrowAmber" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#c9a84b"/>
      </marker>
      <marker id="arrowBlue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#6a8a9c"/>
      </marker>
      <marker id="arrowGreen" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#5cba7d"/>
      </marker>
    </defs>

    <!-- EXP-01 node -->
    <circle cx="80" cy="90" r="36" fill="none" stroke="#c9a84b" stroke-width="2"/>
    <text x="80" y="85" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="11" fill="#c9a84b" letter-spacing="0.5">EXP</text>
    <text x="80" y="100" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="14" fill="#c9a84b">01</text>
    <text x="80" y="145" text-anchor="middle" font-family="IBM Plex Mono" font-size="9" fill="#8b95a5">Pd:Cu 3:1</text>
    <text x="80" y="158" text-anchor="middle" font-family="IBM Plex Mono" font-size="9" fill="#8b95a5">120 C</text>
    <text x="80" y="175" text-anchor="middle" font-family="IBM Plex Mono" font-size="9" fill="#c9a84b">S = 72.4 pct</text>

    <!-- Arrow EXP-01 to Decision 1 -->
    <line x1="116" y1="90" x2="195" y2="90" stroke="#6a8a9c" stroke-width="1.5" marker-end="url(#arrowBlue)"/>

    <!-- Decision 1 diamond -->
    <polygon points="230,90 260,60 290,90 260,120" fill="none" stroke="#6a8a9c" stroke-width="2"/>
    <text x="260" y="88" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="8" fill="#6a8a9c">D1</text>
    <text x="260" y="98" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="#6a8a9c">DECIDE</text>

    <!-- Decision 1 annotation -->
    <line x1="260" y1="120" x2="260" y2="200" stroke="#6a8a9c" stroke-width="1" stroke-dasharray="4 3"/>
    <rect x="185" y="200" width="150" height="46" fill="none" stroke="#6a8a9c" stroke-width="1" stroke-dasharray="4 3"/>
    <text x="260" y="218" text-anchor="middle" font-family="IBM Plex Mono" font-size="8" fill="#6a8a9c">ACTION: Increase Cu</text>
    <text x="260" y="232" text-anchor="middle" font-family="IBM Plex Mono" font-size="8" fill="#6a8a9c">Pd:Cu 3:1 --&gt; 2:1</text>
    <text x="260" y="244" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="#8b95a5">Temp held at 120 C</text>

    <!-- Arrow Decision 1 to EXP-02 -->
    <line x1="290" y1="90" x2="344" y2="90" stroke="#c9a84b" stroke-width="1.5" marker-end="url(#arrowAmber)"/>

    <!-- EXP-02 node -->
    <circle cx="380" cy="90" r="36" fill="none" stroke="#c9a84b" stroke-width="2"/>
    <text x="380" y="85" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="11" fill="#c9a84b" letter-spacing="0.5">EXP</text>
    <text x="380" y="100" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="14" fill="#c9a84b">02</text>
    <text x="380" y="145" text-anchor="middle" font-family="IBM Plex Mono" font-size="9" fill="#8b95a5">Pd:Cu 2:1</text>
    <text x="380" y="158" text-anchor="middle" font-family="IBM Plex Mono" font-size="9" fill="#8b95a5">120 C</text>
    <text x="380" y="175" text-anchor="middle" font-family="IBM Plex Mono" font-size="9" fill="#c9a84b">S = 84.6 pct</text>

    <!-- Arrow EXP-02 to Decision 2 -->
    <line x1="416" y1="90" x2="495" y2="90" stroke="#6a8a9c" stroke-width="1.5" marker-end="url(#arrowBlue)"/>

    <!-- Decision 2 diamond -->
    <polygon points="530,90 560,60 590,90 560,120" fill="none" stroke="#6a8a9c" stroke-width="2"/>
    <text x="560" y="88" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="8" fill="#6a8a9c">D2</text>
    <text x="560" y="98" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="#6a8a9c">DECIDE</text>

    <!-- Decision 2 annotation -->
    <line x1="560" y1="120" x2="560" y2="200" stroke="#6a8a9c" stroke-width="1" stroke-dasharray="4 3"/>
    <rect x="485" y="200" width="150" height="46" fill="none" stroke="#6a8a9c" stroke-width="1" stroke-dasharray="4 3"/>
    <text x="560" y="218" text-anchor="middle" font-family="IBM Plex Mono" font-size="8" fill="#6a8a9c">ACTION: Reduce temp</text>
    <text x="560" y="232" text-anchor="middle" font-family="IBM Plex Mono" font-size="8" fill="#6a8a9c">120 C --&gt; 95 C</text>
    <text x="560" y="244" text-anchor="middle" font-family="IBM Plex Mono" font-size="7" fill="#8b95a5">Pd:Cu held at 2:1</text>

    <!-- Arrow Decision 2 to EXP-03 -->
    <line x1="590" y1="90" x2="644" y2="90" stroke="#5cba7d" stroke-width="1.5" marker-end="url(#arrowGreen)"/>

    <!-- EXP-03 node (green for success) -->
    <circle cx="680" cy="90" r="36" fill="none" stroke="#5cba7d" stroke-width="2.5"/>
    <text x="680" y="85" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="11" fill="#5cba7d" letter-spacing="0.5">EXP</text>
    <text x="680" y="100" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="14" fill="#5cba7d">03</text>
    <text x="680" y="145" text-anchor="middle" font-family="IBM Plex Mono" font-size="9" fill="#8b95a5">Pd:Cu 2:1</text>
    <text x="680" y="158" text-anchor="middle" font-family="IBM Plex Mono" font-size="9" fill="#8b95a5">95 C</text>
    <text x="680" y="175" text-anchor="middle" font-family="IBM Plex Mono" font-size="9" fill="#5cba7d">S = 91.2 pct</text>

    <!-- Optimum label -->
    <rect x="645" y="25" width="70" height="20" fill="none" stroke="#5cba7d" stroke-width="1.5"/>
    <text x="680" y="39" text-anchor="middle" font-family="IBM Plex Mono" font-weight="700" font-size="8" fill="#5cba7d" letter-spacing="1">OPTIMUM</text>
    <line x1="680" y1="45" x2="680" y2="54" stroke="#5cba7d" stroke-width="1"/>
  </svg>
  <figcaption class="caption"><span class="fig-num">Figure 1.</span> Experiment chain flow diagram. Amber circles denote iterative trials (EXP-01, EXP-02), the green circle marks the optimised final condition (EXP-03). Diamond nodes represent decision points where a single parameter was changed based on the preceding result. Dashed annotation boxes document the specific parameter change at each transition.</figcaption>
</figure>

## Summary of Results

<table class="paper-table">
  <caption><span class="tab-num">Table 1.</span> Summary results across the three sequential experiments.</caption>
  <thead>
    <tr>
      <th>EXP-ID</th>
      <th>Pd:Cu Ratio</th>
      <th>Temp (C)</th>
      <th>Selectivity (pct)</th>
      <th>Yield (pct)</th>
      <th>Decision</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="exp-id">EXP-01</span></td>
      <td class="num">3:1</td>
      <td class="num">120</td>
      <td class="num">72.4</td>
      <td class="num">58.1</td>
      <td>Increase Cu loading</td>
    </tr>
    <tr>
      <td><span class="exp-id">EXP-02</span></td>
      <td class="num">2:1</td>
      <td class="num">120</td>
      <td class="num">84.6</td>
      <td class="num">63.8</td>
      <td>Reduce temperature</td>
    </tr>
    <tr>
      <td><span class="exp-id exp-success">EXP-03</span></td>
      <td class="num">2:1</td>
      <td class="num">95</td>
      <td class="num">91.2</td>
      <td class="num">71.4</td>
      <td>Optimum found</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="6">Selectivity toward 1-butene; yield based on total butadiene conversion. All values at 4 h time-on-stream steady state. WHSV = 3.6 h-1 throughout.</td></tr>
  </tfoot>
</table>

## Structure of the Paper

Navigate the paper through the section index. The full manuscript contains the following numbered sections.

1. **Section 1. EXP-01: Baseline Trial** -- initial catalyst composition, baseline conditions, and results
2. **Section 2. EXP-02: Cu Loading Adjustment** -- parameter change from EXP-01, results, and decision rationale
3. **Section 3. EXP-03: Temperature Reduction** -- final optimised conditions and stability results
4. **Section 4. Catalyst Characterisation** -- XRD, TEM, and XPS analysis across all three catalysts
5. **Section 5. Discussion** -- interpretation, comparison to literature, limitations, and references
