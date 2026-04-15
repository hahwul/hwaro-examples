+++
title = "Appendix"
description = "Supplementary materials for Sparse Gated Attention"
template = "page"
tags = ["paper", "light", "preprint", "self-published", "raw"]
+++

<div class="appendix-page">

# Appendix

## A. Proof of Sparsity Bound

**Theorem A.1.** *For a gate network with temperature parameter tau > 0 and threshold t = 0.5, the expected fraction of non-zero entries in the gate mask G satisfies:*

E[||G||_0 / n^2] <= sigma((mu_max - t) / tau)

*where mu_max = max_ij mu_ij is the maximum pre-sigmoid logit and sigma is the sigmoid function.*

**Proof sketch.** Each gate entry G_ij = 1[sigma((mu_ij + g) / tau) > t] where g is a standard Gumbel noise sample. The probability that any single entry is active is P(G_ij = 1) = sigma((mu_ij - t) / tau). Summing over all n^2 entries and applying linearity of expectation yields the bound. The tightness of the bound depends on the concentration of the logit distribution around mu_max. In practice, we observe that learned logits are bimodal (strongly positive or strongly negative), making the bound reasonably tight after training convergence. A full proof with finite-sample concentration bounds is available in the extended version.

## B. Gumbel-Sigmoid Convergence

**Proposition B.1.** *The Gumbel-sigmoid estimator with straight-through gradient provides a consistent estimator of the true gradient direction as tau approaches 0, in the sense that:*

lim (tau -> 0) cos(nabla_theta L_STE, nabla_theta L_true) = 1

*where L_STE is the straight-through loss and L_true is the true discrete loss.*

This follows from the standard Gumbel-softmax convergence results (Jang et al., 2017; Maddison et al., 2017) adapted to the binary (sigmoid) case. The key insight is that as tau decreases, the soft samples concentrate on {0, 1} and the bias of the straight-through estimator vanishes.

In our experiments, we use an annealing schedule for tau:

tau(t) = max(tau_min, tau_0 * exp(-r * t))

where tau_0 = 1.0, tau_min = 0.1, r = 0.001, and t is the training step. We find that this schedule provides stable training while achieving near-binary gates by the end of training.

## C. Gate Pattern Visualizations

The learned gate masks reveal interpretable attention patterns across different heads and layers. We categorize the emergent patterns into three types:

### C.1 Local Attention Heads

Approximately 40% of heads in the final model learn near-diagonal gate patterns, effectively implementing local attention windows of varying widths. These heads tend to appear in earlier layers (layers 1-4 of 12) and correlate with syntactic processing -- dependency parsing probes show high accuracy when restricted to these heads.

### C.2 Strided Attention Heads

About 25% of heads develop periodic gate patterns with strides ranging from 4 to 64 tokens. These heads appear predominantly in middle layers (layers 5-8) and seem to serve a "summary" function, aggregating information at regular intervals for downstream processing.

### C.3 Global Bridge Heads

The remaining 35% of heads learn sparse, long-range connections that we term "bridge" patterns. These heads are concentrated in later layers (layers 9-12) and primarily connect:

- Document-level markers (section headings, paragraph boundaries)
- Coreferent entity mentions across long distances
- Discourse connectives with their antecedent clauses

The sparsity of bridge heads varies from 5% to 15% density (i.e., 85-95% of attention connections are pruned), yet these heads carry the majority of the long-range information flow as measured by attention rollout analysis.

## D. Hyperparameter Sensitivity

<table class="results-table">
  <thead>
    <tr>
      <th>Gate Rank</th>
      <th>Params Overhead</th>
      <th>LRA Avg (%)</th>
      <th>Sparsity (%)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4</td>
      <td>+0.08%</td>
      <td>85.9</td>
      <td>71.2</td>
    </tr>
    <tr>
      <td>8</td>
      <td>+0.15%</td>
      <td>86.8</td>
      <td>65.4</td>
    </tr>
    <tr class="highlight-row">
      <td><strong>16 (default)</strong></td>
      <td><strong>+0.30%</strong></td>
      <td><strong>87.2</strong></td>
      <td><strong>62.0</strong></td>
    </tr>
    <tr>
      <td>32</td>
      <td>+0.59%</td>
      <td>87.3</td>
      <td>60.8</td>
    </tr>
    <tr>
      <td>64</td>
      <td>+1.18%</td>
      <td>87.2</td>
      <td>59.1</td>
    </tr>
  </tbody>
</table>

The gate network rank of 16 provides the best trade-off between expressiveness and parameter overhead. Ranks above 16 provide diminishing returns on LRA accuracy while increasing the parameter count. Ranks below 8 show measurable accuracy degradation, particularly on the Pathfinder task which requires fine-grained spatial reasoning.

## E. Training Details

All models were trained on 8x NVIDIA A100 80GB GPUs using the following configuration:

- **Optimizer:** AdamW (beta_1=0.9, beta_2=0.98, epsilon=1e-8)
- **Learning rate:** 3e-4 with cosine annealing and 2000-step linear warmup
- **Weight decay:** 0.01 (applied to all parameters except biases and layer norms)
- **Batch size:** 256 (effective, using gradient accumulation where needed)
- **Training steps:** 100,000 for LRA; 200,000 for PG-19
- **Gate temperature schedule:** tau_0=1.0, tau_min=0.1, exponential decay r=0.001
- **Gradient clipping:** max norm 1.0
- **Mixed precision:** BF16 for forward/backward, FP32 for optimizer states
- **Framework:** JAX/Flax with custom CUDA kernels for sparse attention masking

Training wall-clock time for the base model (125M parameters) on LRA was approximately 4 hours. The PG-19 model (350M parameters) trained for approximately 36 hours.

## F. Broader Impact

Efficient attention mechanisms like SGA can reduce the computational cost of deploying large language models, potentially democratizing access to long-context processing. However, the same efficiency gains could also lower the barrier to generating long-form synthetic text at scale. We encourage responsible deployment and recommend that practitioners consider the downstream applications when integrating SGA into production systems.

</div>
