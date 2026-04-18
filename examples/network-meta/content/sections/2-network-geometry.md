+++
title = "Network Geometry"
description = "Description of the evidence network, search results, study characteristics, and the structure of direct and indirect comparisons."
weight = 2
template = "post"
tags = ["paper", "dark", "network", "meta-analysis", "comparative"]
[extra]
section_number = "2"
+++

## Search Results

The systematic search identified 3,842 records after deduplication. After title and abstract screening (performed independently by two reviewers with 94% inter-rater agreement), 187 full-text articles were assessed for eligibility. Of these, 42 RCTs met all inclusion criteria and were included in the network meta-analysis. The 42 trials randomized a total of 15,843 patients across the six treatment nodes.

<table class="paper-table">
  <caption><span class="tab-num">Table 5.</span> Summary of included studies by treatment comparison.</caption>
  <thead>
    <tr>
      <th>Comparison</th>
      <th>No. of trials</th>
      <th>Total patients</th>
      <th>Median duration (wk)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Adalimumab vs Placebo</td>
      <td class="num">8</td>
      <td class="num">3,648</td>
      <td class="num">24</td>
    </tr>
    <tr>
      <td>Etanercept vs Placebo</td>
      <td class="num">7</td>
      <td class="num">2,912</td>
      <td class="num">24</td>
    </tr>
    <tr>
      <td>Infliximab vs Placebo</td>
      <td class="num">6</td>
      <td class="num">2,286</td>
      <td class="num">30</td>
    </tr>
    <tr>
      <td>Tocilizumab vs Placebo</td>
      <td class="num">7</td>
      <td class="num">3,104</td>
      <td class="num">24</td>
    </tr>
    <tr>
      <td>Tofacitinib vs Placebo</td>
      <td class="num">5</td>
      <td class="num">1,762</td>
      <td class="num">24</td>
    </tr>
    <tr>
      <td>Adalimumab vs Etanercept</td>
      <td class="num">2</td>
      <td class="num">684</td>
      <td class="num">26</td>
    </tr>
    <tr>
      <td>Adalimumab vs Infliximab</td>
      <td class="num">1</td>
      <td class="num">312</td>
      <td class="num">24</td>
    </tr>
    <tr>
      <td>Etanercept vs Tocilizumab</td>
      <td class="num">2</td>
      <td class="num">628</td>
      <td class="num">24</td>
    </tr>
    <tr>
      <td>Adalimumab vs Tofacitinib</td>
      <td class="num">1</td>
      <td class="num">286</td>
      <td class="num">24</td>
    </tr>
    <tr>
      <td>Tocilizumab vs Tofacitinib</td>
      <td class="num">1</td>
      <td class="num">221</td>
      <td class="num">24</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="4">Two multi-arm trials contribute to more than one comparison. Patient counts sum to more than 15,843 because multi-arm trials share control arms across comparisons.</td></tr>
  </tfoot>
</table>

## Network Structure

The evidence network is fully connected, meaning that every treatment node can be reached from every other node through at least one path of direct comparisons. Placebo serves as the central hub, with direct evidence connecting it to all five active treatments. Five additional edges connect pairs of active treatments (adalimumab-etanercept, adalimumab-infliximab, etanercept-tocilizumab, adalimumab-tofacitinib, and tocilizumab-tofacitinib).

### Node Characteristics

<table class="paper-table">
  <caption><span class="tab-num">Table 6.</span> Node characteristics: total patients randomized and number of trial arms per treatment.</caption>
  <thead>
    <tr>
      <th>Treatment</th>
      <th>Total patients</th>
      <th>No. of arms</th>
      <th>Median sample per arm</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Placebo</td>
      <td class="num">4,210</td>
      <td class="num">33</td>
      <td class="num">124</td>
    </tr>
    <tr>
      <td>Adalimumab</td>
      <td class="num">3,180</td>
      <td class="num">12</td>
      <td class="num">248</td>
    </tr>
    <tr>
      <td>Etanercept</td>
      <td class="num">2,640</td>
      <td class="num">11</td>
      <td class="num">228</td>
    </tr>
    <tr>
      <td>Tocilizumab</td>
      <td class="num">2,480</td>
      <td class="num">10</td>
      <td class="num">236</td>
    </tr>
    <tr>
      <td>Infliximab</td>
      <td class="num">2,120</td>
      <td class="num">7</td>
      <td class="num">290</td>
    </tr>
    <tr>
      <td>Tofacitinib</td>
      <td class="num">1,213</td>
      <td class="num">7</td>
      <td class="num">168</td>
    </tr>
  </tbody>
</table>

### Edge Characteristics

The majority of evidence flows through the placebo-controlled comparisons, which collectively account for 33 of the 42 included trials (79%). The five active-vs-active edges are supported by a total of 7 trials, with the adalimumab-etanercept and etanercept-tocilizumab comparisons each informed by 2 trials, and the remaining three active-vs-active comparisons each supported by a single trial.

This distribution of evidence is typical for network meta-analyses in rheumatology, where regulatory requirements mandate placebo-controlled pivotal trials but head-to-head trials are conducted less frequently. The implication is that the majority of active-vs-active comparisons rely substantially on indirect evidence through the placebo node.

## Risk of Bias Assessment

Risk of bias was assessed using the Cochrane Risk of Bias 2.0 tool. Of the 42 included trials, 28 (67%) were rated as low risk of bias, 7 (17%) as having some concerns, and 7 (17%) as high risk of bias. The most common source of concern was deviation from intended interventions due to differential dropout rates between active treatment and placebo arms, which is a recognized challenge in RA trials where patients may withdraw due to lack of efficacy.

## Transitivity Assessment

The transitivity assumption -- that indirect comparisons are valid because trials share similar characteristics apart from the treatments compared -- was assessed by examining the distribution of potential effect modifiers across comparisons. The following variables were examined: mean age, proportion female, mean disease duration, mean baseline DAS28, proportion receiving concomitant methotrexate, and geographic region of enrollment. No systematic differences in these modifiers were observed across the network edges, supporting the transitivity assumption.
