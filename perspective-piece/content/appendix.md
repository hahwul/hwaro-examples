+++
title = "Appendix"
description = "Supplementary data, methodology notes, and extended references for the perspective on algorithmic monoculture."
tags = ["opinion", "appendix", "methodology"]
+++

<header class="paper-section-header">
  <p class="paper-section-eyebrow">APPENDIX</p>
  <h1 class="paper-section-title">Supplementary Materials</h1>
</header>

## A. Bibliometric methodology

Our bibliometric analysis covered 14,200 papers accepted at six venues (NeurIPS, ICML, ICLR, AAAI, ACL, CVPR) across the years 2018 to 2025. Papers were classified by primary architecture type using a combination of automated keyword extraction and manual verification by two independent annotators. Inter-annotator agreement (Cohen's kappa) was 0.89.

<table class="paper-table">
  <caption><span class="tab-num">Table A1.</span> Architecture prevalence by venue and year (percentage of accepted papers).</caption>
  <thead>
    <tr>
      <th>Venue</th>
      <th>2018</th>
      <th>2020</th>
      <th>2022</th>
      <th>2024</th>
      <th>2025</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NeurIPS</td>
      <td class="num">14</td>
      <td class="num">38</td>
      <td class="num">62</td>
      <td class="num">81</td>
      <td class="num">86</td>
    </tr>
    <tr>
      <td>ICML</td>
      <td class="num">11</td>
      <td class="num">35</td>
      <td class="num">58</td>
      <td class="num">78</td>
      <td class="num">84</td>
    </tr>
    <tr>
      <td>ICLR</td>
      <td class="num">18</td>
      <td class="num">45</td>
      <td class="num">71</td>
      <td class="num">88</td>
      <td class="num">92</td>
    </tr>
    <tr>
      <td>ACL</td>
      <td class="num">22</td>
      <td class="num">55</td>
      <td class="num">78</td>
      <td class="num">91</td>
      <td class="num">94</td>
    </tr>
    <tr>
      <td>CVPR</td>
      <td class="num">6</td>
      <td class="num">22</td>
      <td class="num">48</td>
      <td class="num">72</td>
      <td class="num">82</td>
    </tr>
    <tr>
      <td>AAAI</td>
      <td class="num">8</td>
      <td class="num">28</td>
      <td class="num">52</td>
      <td class="num">74</td>
      <td class="num">80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="6">Percentage indicates Transformer-based or Transformer-variant architectures among all accepted papers. Classification based on primary architecture; hybrid models counted as Transformer if attention was the primary mechanism.</td>
    </tr>
  </tfoot>
</table>

## B. Confidence assessment methodology

The confidence scores reported in Figures 2 and 3 were determined through a three-round modified Delphi process:

1. **Round 1 (independent):** Each of the five authors independently scored each claim on a 0.0-1.0 scale based on the strength of available evidence.
2. **Round 2 (deliberation):** Authors discussed their scores in a structured 90-minute session, identifying points of agreement and disagreement.
3. **Round 3 (revision):** Authors independently revised their scores in light of the discussion. The reported score is the median of the five revised scores.

Inter-rater reliability (ICC, two-way mixed, absolute agreement) was 0.78, indicating good agreement. The largest disagreements concerned Premises P8 (compute barrier, range 0.45-0.80) and the feasibility of Recommendation 2 (peer review reform, range 0.50-0.85).

## C. Disclosure and competing interests

EO and SFV have previously published work proposing alternative architectures and therefore have a professional interest in the promotion of methodological diversity. We have attempted to address this conflict transparently by (a) assigning confidence scores through a structured process that includes authors without such interests, and (b) presenting the strongest counterarguments to our thesis in the Counterpoint section.

No author received funding specifically for the preparation of this perspective. The bibliometric analysis was conducted using publicly available data and tools.

## D. Extended references

The argument draws on work across multiple disciplines. Key references by area:

**Philosophy of science:** Kuhn (1962), Feyerabend (1975), Lakatos (1978), Longino (1990), Kitcher (1993), Hull (1988), Campbell (1960).

**Monoculture and systemic risk:** Scott (1998), Haldane and May (2011), Li (2000), MacKenzie (2006), Taleb (2007).

**Machine learning methodology:** Vaswani et al. (2017), Hooker (2021), Lipton and Steinhardt (2019), Sculley et al. (2015), Birhane et al. (2022).

**Bibliometrics and scientometrics:** Clauset et al. (2017), Way et al. (2019), Sugimoto and Lariviere (2018).
