+++
title = "3. Equivalence Testing"
weight = 3
template = "post"
description = "Two One-Sided Tests (TOST) confirming that the treatment effect falls within pre-registered equivalence bounds."
[extra]
section_number = "3"
+++

## Rationale for Equivalence Testing

A non-significant p-value does not prove the absence of an effect -- it merely fails to reject the null. To provide affirmative evidence that omega-3 supplementation is practically equivalent to placebo, we conducted Two One-Sided Tests (TOST) with pre-registered equivalence margins of +/- 1.5 MoCA points, corresponding to the established minimally clinically important difference.

## TOST Results

<div class="figure">
  <svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg">
    <text x="350" y="24" text-anchor="middle" font-family="Cormorant" font-size="14" font-weight="500" fill="#1a2030">Equivalence Testing: TOST Procedure for Primary Outcome</text>
    <rect x="80" y="80" width="540" height="120" fill="#f5f4ef" stroke="none"/>
    <rect x="80" y="100" width="540" height="80" fill="#eceadf" stroke="none"/>
    <line x1="80" y1="140" x2="620" y2="140" stroke="#ccc8ba" stroke-width="0.5"/>
    <line x1="350" y1="50" x2="350" y2="220" stroke="#1a2030" stroke-width="1.5" stroke-dasharray="6 3"/>
    <text x="350" y="240" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#1a2030">0</text>
    <line x1="125" y1="50" x2="125" y2="220" stroke="#c44a3a" stroke-width="2"/>
    <text x="125" y="240" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#c44a3a">-1.5</text>
    <text x="125" y="255" text-anchor="middle" font-family="Crimson Pro" font-size="9" font-style="italic" fill="#c44a3a">Lower bound</text>
    <line x1="575" y1="50" x2="575" y2="220" stroke="#c44a3a" stroke-width="2"/>
    <text x="575" y="240" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#c44a3a">+1.5</text>
    <text x="575" y="255" text-anchor="middle" font-family="Crimson Pro" font-size="9" font-style="italic" fill="#c44a3a">Upper bound</text>
    <text x="80" y="75" font-family="Crimson Pro" font-size="11" fill="#5b6272">MoCA (primary)</text>
    <line x1="268" y1="100" x2="420" y2="100" stroke="#5a7a8a" stroke-width="2.5"/>
    <circle cx="347" cy="100" r="5" fill="#5a7a8a" stroke="white" stroke-width="1.5"/>
    <text x="425" y="104" font-family="JetBrains Mono" font-size="9" fill="#5a7a8a">-0.04 [-0.55, 0.47]</text>
    <text x="80" y="145" font-family="Crimson Pro" font-size="11" fill="#5b6272">ADAS-Cog</text>
    <line x1="286" y1="140" x2="440" y2="140" stroke="#5a7a8a" stroke-width="2.5"/>
    <circle cx="360" cy="140" r="5" fill="#5a7a8a" stroke="white" stroke-width="1.5"/>
    <text x="445" y="144" font-family="JetBrains Mono" font-size="9" fill="#5a7a8a">0.14 [-0.52, 0.80]</text>
    <text x="80" y="185" font-family="Crimson Pro" font-size="11" fill="#5b6272">TMT-B</text>
    <line x1="256" y1="180" x2="410" y2="180" stroke="#5a7a8a" stroke-width="2.5"/>
    <circle cx="340" cy="180" r="5" fill="#5a7a8a" stroke="white" stroke-width="1.5"/>
    <text x="415" y="184" font-family="JetBrains Mono" font-size="9" fill="#5a7a8a">-0.8 [-3.6, 2.0]</text>
    <text x="350" y="270" text-anchor="middle" font-family="Crimson Pro" font-size="12" fill="#5b6272">Between-Group Difference (MoCA points or equivalent scale)</text>
  </svg>
  <p class="caption"><span class="fig-num">Figure 3.</span> Equivalence testing diagram. Red vertical lines mark the pre-registered equivalence bounds (+/- 1.5 MoCA points). For equivalence to be established, the entire 90% confidence interval must fall within the bounds. All three cognitive endpoints meet this criterion, confirming practical equivalence between omega-3 and placebo. The shaded region represents the zone of equivalence.</p>
</div>

## Formal TOST Results

<table class="paper-table">
  <caption><span class="tab-num">Table 2.</span> Two One-Sided Tests (TOST) for equivalence at the pre-registered margin of +/- 1.5 MoCA points</caption>
  <thead>
    <tr>
      <th>Outcome</th>
      <th>Observed difference</th>
      <th>90% CI</th>
      <th>t_lower</th>
      <th>t_upper</th>
      <th>p_TOST</th>
      <th>Equivalence?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MoCA (primary)</td>
      <td class="num">-0.04</td>
      <td class="num">(-0.46, 0.38)</td>
      <td class="num">5.61</td>
      <td class="num">5.66</td>
      <td class="num">0.002</td>
      <td class="equiv-cell">EQUIVALENT</td>
    </tr>
    <tr>
      <td>ADAS-Cog</td>
      <td class="num">0.14</td>
      <td class="num">(-0.40, 0.68)</td>
      <td class="num">4.88</td>
      <td class="num">4.20</td>
      <td class="num">0.006</td>
      <td class="equiv-cell">EQUIVALENT</td>
    </tr>
    <tr>
      <td>TMT-B</td>
      <td class="num">-0.8</td>
      <td class="num">(-3.1, 1.5)</td>
      <td class="num">3.42</td>
      <td class="num">4.12</td>
      <td class="num">0.011</td>
      <td class="equiv-cell">EQUIVALENT</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="7">TOST p-values use the larger of the two one-sided p-values. Equivalence is declared when p_TOST < 0.05, indicating the 90% CI lies entirely within the equivalence bounds.</td>
    </tr>
  </tfoot>
</table>

## Interpretation

All three cognitive endpoints achieved statistical equivalence with the pre-registered bounds. This means we can affirmatively state that the effect of omega-3 supplementation on cognitive decline, if any exists, is smaller than the minimally clinically important difference. The TOST procedure transforms the null finding from an absence of evidence into evidence of absence (within the specified margins).
