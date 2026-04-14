+++
title = "1. Model Design"
description = "Architecture of the SIR-ABM agent-based model, module decomposition, and design rationale for separating population, network, transmission, intervention, and output concerns."
weight = 1
template = "post"
tags = ["paper", "computational", "simulation"]
categories = ["sections"]
[extra]
section_number = "1"
+++

## 1.1 Design rationale

Agent-based models of epidemic dynamics face a tension between realism and tractability. Equation-based compartmental models (e.g. classical SIR ODEs) are fast and analytically tractable but assume homogeneous mixing. Fully individual-based microsimulations can capture heterogeneity but become computationally expensive and difficult to calibrate.

SIR-ABM addresses this tension through a modular architecture that separates five concerns: agent generation, network construction, disease transmission, intervention policy, and output aggregation. Each module exposes a typed interface, enabling independent testing and replacement.

## 1.2 Population generator

The population generator creates N agents with the following attributes:

- **Age** -- drawn from a user-specified age distribution (default: 2020 UN World Population Prospects, medium variant)
- **Household ID** -- agents are grouped into households of size 2 to 6 following national census distributions
- **Comorbidity flag** -- binary indicator drawn with age-dependent probability from epidemiological survey data

## 1.3 Contact network constructor

The three-layer multiplex network is constructed as follows:

<div class="pseudocode-block">
  <span class="algo-name">Algorithm 1: Network Construction</span>
  <span class="keyword">function</span> BuildNetwork(agents, config):<br>
  <span class="indent-1"><span class="comment">// Layer 1: Household (complete subgraphs)</span></span><br>
  <span class="indent-1"><span class="keyword">for each</span> household h <span class="keyword">in</span> agents:</span><br>
  <span class="indent-2">AddCompleteSubgraph(G_household, h.members)</span><br>
  <span class="indent-1"><span class="comment">// Layer 2: Workplace (Barabasi-Albert)</span></span><br>
  <span class="indent-1">G_work &larr; BarabasiAlbert(N, m = config.k_w / 2)</span><br>
  <span class="indent-1"><span class="comment">// Layer 3: Community (Erdos-Renyi)</span></span><br>
  <span class="indent-1">G_comm &larr; ErdosRenyi(N, p = config.k_c / (N - 1))</span><br>
  <span class="indent-1"><span class="keyword">return</span> MultiplexNetwork(G_household, G_work, G_comm)</span>
</div>

## 1.4 Transmission engine

At each discrete time step (1 day), the transmission engine iterates over all infected agents. For each infected agent, each contact in all three network layers is evaluated independently:

- Contact occurs with layer-specific weight w_l
- Transmission occurs with probability beta x w_l x s_age x s_cm
- Recovery occurs with probability gamma per day

The engine maintains a state vector of length N with values S (susceptible), I (infectious), or R (recovered).

## 1.5 Intervention policy module

The intervention module monitors the prevalence (proportion of agents in state I) at each time step. When prevalence exceeds the threshold theta, the module removes a fraction rho of edges from the workplace and community layers, simulating social distancing or workplace closures. Household contacts are never removed, reflecting the assumption that household mixing continues during interventions.

## 1.6 Output aggregator

The output aggregator records the epidemic curve (S, I, R counts per time step), the effective reproduction number R_eff per time step, and summary statistics including final attack rate, peak prevalence, peak timing, and total person-days of infection.
