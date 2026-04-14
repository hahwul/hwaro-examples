+++
title = "Architecture Summary"
description = "Summary of the SIR-ABM module architecture, interface contracts, and computational requirements."
tags = ["paper", "computational", "simulation"]
categories = ["pages"]
+++

## Module Overview

The SIR-ABM architecture comprises five independent modules connected by standardised data contracts. Each module can be tested, replaced, or extended without modifying adjacent components.

### Module Specifications

<table class="paper-table">
  <caption><span class="tab-num">Table A1.</span> Module specifications and computational cost per simulation run (N = 100,000 agents).</caption>
  <thead>
    <tr>
      <th>Module</th>
      <th>Input</th>
      <th>Output</th>
      <th>Wall time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>PopulationGenerator</code></td>
      <td>N, age distribution, comorbidity rates</td>
      <td>Agent array with attributes</td>
      <td class="num">0.3 s</td>
    </tr>
    <tr>
      <td><code>NetworkConstructor</code></td>
      <td>Agent array, degree distribution, layer config</td>
      <td>Adjacency list (3 layers)</td>
      <td class="num">1.8 s</td>
    </tr>
    <tr>
      <td><code>TransmissionEngine</code></td>
      <td>Network, SIR parameters, time steps</td>
      <td>State matrix (N x T)</td>
      <td class="num">4.2 s</td>
    </tr>
    <tr>
      <td><code>InterventionPolicy</code></td>
      <td>State matrix, policy rules, thresholds</td>
      <td>Modified adjacency list per step</td>
      <td class="num">0.6 s</td>
    </tr>
    <tr>
      <td><code>OutputAggregator</code></td>
      <td>State matrix, network snapshots</td>
      <td>Epidemic curve, R_eff series, summary stats</td>
      <td class="num">0.4 s</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="4">Total wall time per run: approximately 7.3 seconds on a 16-core workstation (AMD EPYC 7763). Parallelisation across runs achieves near-linear speedup up to 64 cores.</td></tr>
  </tfoot>
</table>

### Interface Contract

Each module exposes a single entry-point function with typed input and output structs. The pseudocode below illustrates the top-level simulation loop.

<div class="pseudocode-block">
  <span class="algo-name">Algorithm A1: SIR-ABM Main Loop</span>
  <span class="keyword">function</span> RunSimulation(config):<br>
  <span class="indent-1">agents &larr; PopulationGenerator.generate(config.N, config.age_dist)</span><br>
  <span class="indent-1">network &larr; NetworkConstructor.build(agents, config.degree_dist)</span><br>
  <span class="indent-1">state &larr; InitialState(agents, config.seed_count)</span><br>
  <span class="indent-1"><span class="keyword">for</span> t &larr; 1 <span class="keyword">to</span> config.T_max:</span><br>
  <span class="indent-2">state &larr; TransmissionEngine.step(state, network, config.beta, config.gamma)</span><br>
  <span class="indent-2"><span class="keyword">if</span> InterventionPolicy.triggered(state, config.thresholds):</span><br>
  <span class="indent-3">network &larr; InterventionPolicy.apply(network, config.policy_rules)</span><br>
  <span class="indent-2">OutputAggregator.record(t, state, network)</span><br>
  <span class="indent-1"><span class="keyword">return</span> OutputAggregator.finalise()</span>
</div>

### Contact Network Layers

The model uses a three-layer multiplex network:

1. **Household layer** -- complete subgraphs of size 2 to 6, drawn from census household-size distributions
2. **Workplace / school layer** -- Barabasi-Albert preferential attachment with mean degree k = 12
3. **Community layer** -- Erdos-Renyi random graph with mean degree k = 4

Each layer has an independent weight parameter controlling the per-contact transmission probability, calibrated separately during the ABC-SMC procedure.
