+++
title = "Empirical Evidence of Harm"
description = "Systematic review of 47 documented cases demonstrating that algorithmic opacity produces disproportionate harm to marginalized populations."
weight = 3
template = "post"
[extra]
section_number = "3"
+++

## Systematic Case Review

We conducted a systematic review of documented cases in which opaque algorithmic systems deployed by public-sector agencies produced measurable harm. The review identified 47 cases meeting our inclusion criteria (see Appendix B for methodology), spanning welfare, criminal justice, education, child services, and public health domains.

<div class="cwe-callout">
  <p class="cwe-label claim">Claim 3.1</p>
  <p class="cwe-text">Algorithmic opacity in public-sector systems correlates with disproportionate adverse outcomes for low-income and minority populations.</p>
  <p class="cwe-detail">In 38 of 47 cases (81 pct), the primary affected population was disproportionately low-income, non-white, or both. In 29 cases (62 pct), the harm was not discovered until external investigators -- journalists, academics, or auditors -- obtained access to system documentation.</p>
</div>

### Case Distribution by Domain

<table class="paper-table">
  <caption><span class="tab-num">Table 2.</span> Distribution of 47 documented opacity-harm cases by policy domain and harm type.</caption>
  <thead>
    <tr>
      <th>Domain</th>
      <th>Cases</th>
      <th>Disparate impact</th>
      <th>Error rate</th>
      <th>Discovery method</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Welfare / benefits</td>
      <td class="num">14</td>
      <td class="num">12 (86 pct)</td>
      <td class="num">18-42 pct</td>
      <td>External audit</td>
    </tr>
    <tr>
      <td>Criminal justice</td>
      <td class="num">11</td>
      <td class="num">9 (82 pct)</td>
      <td class="num">23-35 pct</td>
      <td>Investigative journalism</td>
    </tr>
    <tr>
      <td>Child services</td>
      <td class="num">8</td>
      <td class="num">7 (88 pct)</td>
      <td class="num">15-30 pct</td>
      <td>Litigation discovery</td>
    </tr>
    <tr>
      <td>Education</td>
      <td class="num">7</td>
      <td class="num">5 (71 pct)</td>
      <td class="num">12-25 pct</td>
      <td>Academic research</td>
    </tr>
    <tr>
      <td>Public health</td>
      <td class="num">7</td>
      <td class="num">5 (71 pct)</td>
      <td class="num">8-20 pct</td>
      <td>Government audit</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="5">Disparate impact = documented disproportionate effect on protected classes. Error rate ranges reflect minimum-maximum across cases within domain.</td></tr>
  </tfoot>
</table>

### Illustrative Cases

**Welfare benefit automation (Indiana, 2008-2012).** The state contracted with a private vendor to automate eligibility determinations for Medicaid, food stamps, and cash assistance. The system denied benefits at a rate more than three times the pre-automation baseline. Over one million benefit applications were affected. The algorithm's decision logic was protected as a trade secret, and neither caseworkers nor applicants could identify the source of errors. A subsequent state audit found that the system had been incorrectly weighing documentation requirements, but this was not discoverable until the contract was terminated and internal records were released.

**Recidivism risk scoring (multiple states).** The COMPAS risk assessment tool, used in pretrial and sentencing decisions, was found by ProPublica's 2016 analysis to produce significantly higher false-positive rates for Black defendants compared to white defendants. The tool's proprietary scoring methodology was not disclosed to defendants or their attorneys, preventing meaningful challenge at sentencing. Subsequent academic analyses confirmed the disparity pattern across multiple jurisdictions.

<div class="cwe-callout">
  <p class="cwe-label evidence">Evidence 3.1</p>
  <p class="cwe-text">In 62 pct of the 47 cases, the harm was discovered only when external parties gained access to system documentation through litigation, journalism, or audit.</p>
  <p class="cwe-detail">Internal agency review processes failed to identify the harm in these cases. This finding supports the argument that mandatory external transparency mechanisms -- not voluntary internal review -- are necessary to detect and correct algorithmic harm.</p>
</div>

### The Opacity-Harm Mechanism

The causal pathway from opacity to harm operates through three mechanisms: (1) error concealment -- opaque systems hide systematic errors that would be caught by human review; (2) accountability diffusion -- when no person can explain a decision, no person is responsible for correcting it; (3) power asymmetry -- affected individuals lack the information needed to identify and challenge erroneous determinations.
