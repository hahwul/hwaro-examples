+++
title = "3. Method"
weight = 3
template = "post"
description = "Detailed description of the Sparse Gated Attention mechanism, gate network architecture, and training procedure."
[extra]
section_number = "3"
+++

## Overview

We describe the Sparse Gated Attention (SGA) mechanism in three parts: (1) the gate network architecture that produces binary masks, (2) the integration with standard multi-head attention, and (3) the training procedure using Gumbel-sigmoid relaxation.

## 3.1 Gate Network Architecture

For each attention head h in layer l, we introduce a gate network G_h^l that maps query representations to binary masks. The gate network is parameterized as a low-rank bilinear form:

mu_ij = (q_i^T * W_down) * (k_j^T * W_up)^T / sqrt(r)

where W_down is a d_head x r projection matrix, W_up is a d_head x r projection matrix, r << d_head is the gate rank, and q_i, k_j are the query and key vectors at positions i and j respectively.

The low-rank parameterization is critical for efficiency. With r = 16 (our default) and d_head = 64, the gate network adds only 2 * 64 * 16 = 2,048 parameters per head, or roughly 0.3% overhead for a 12-head, 12-layer transformer.

<div class="svg-figure">
<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" class="architecture-diagram" aria-label="Gate network detail diagram">
  <rect x="0" y="0" width="600" height="260" fill="#fafaf8" rx="4"/>

  <!-- Query input -->
  <rect x="40" y="20" width="100" height="28" rx="3" fill="none" stroke="#2a5a8a" stroke-width="1.5"/>
  <text x="90" y="39" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#2a5a8a">q_i (d_head)</text>

  <!-- Key input -->
  <rect x="460" y="20" width="100" height="28" rx="3" fill="none" stroke="#2a5a8a" stroke-width="1.5"/>
  <text x="510" y="39" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#2a5a8a">k_j (d_head)</text>

  <!-- W_down projection -->
  <rect x="50" y="72" width="80" height="28" rx="3" fill="#fff7f0" stroke="#c45a1a" stroke-width="1.5"/>
  <text x="90" y="91" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#c45a1a">W_down</text>
  <text x="90" y="114" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#999">d_head -> r</text>
  <line x1="90" y1="48" x2="90" y2="72" stroke="#666" stroke-width="1" marker-end="url(#arr)"/>

  <!-- W_up projection -->
  <rect x="470" y="72" width="80" height="28" rx="3" fill="#fff7f0" stroke="#c45a1a" stroke-width="1.5"/>
  <text x="510" y="91" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#c45a1a">W_up</text>
  <text x="510" y="114" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#999">d_head -> r</text>
  <line x1="510" y1="48" x2="510" y2="72" stroke="#666" stroke-width="1" marker-end="url(#arr)"/>

  <!-- Bilinear product -->
  <rect x="210" y="128" width="180" height="32" rx="3" fill="#fff7f0" stroke="#c45a1a" stroke-width="2"/>
  <text x="300" y="149" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#c45a1a">mu_ij = q'_i * k'_j^T / sqrt(r)</text>
  <line x1="90" y1="100" x2="210" y2="138" stroke="#c45a1a" stroke-width="1.5"/>
  <line x1="510" y1="100" x2="390" y2="138" stroke="#c45a1a" stroke-width="1.5"/>

  <!-- Gumbel noise -->
  <rect x="50" y="176" width="120" height="28" rx="3" fill="none" stroke="#888" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="110" y="195" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#888">+ Gumbel noise g</text>

  <!-- Sigmoid -->
  <rect x="230" y="182" width="140" height="28" rx="3" fill="none" stroke="#c45a1a" stroke-width="1.5"/>
  <text x="300" y="201" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#c45a1a">sigma((mu + g) / tau)</text>
  <line x1="300" y1="160" x2="300" y2="182" stroke="#666" stroke-width="1" marker-end="url(#arr)"/>
  <line x1="170" y1="190" x2="230" y2="196" stroke="#888" stroke-width="1"/>

  <!-- Hard threshold -->
  <rect x="240" y="228" width="120" height="28" rx="3" fill="none" stroke="#333" stroke-width="1.5"/>
  <text x="300" y="247" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#333">G_ij in {0, 1}</text>
  <line x1="300" y1="210" x2="300" y2="228" stroke="#666" stroke-width="1" marker-end="url(#arr)"/>

  <!-- Training/Inference labels -->
  <text x="430" y="198" font-family="Inter, sans-serif" font-size="9" fill="#2a5a8a" font-weight="600">Training: soft</text>
  <text x="430" y="244" font-family="Inter, sans-serif" font-size="9" fill="#333" font-weight="600">Inference: hard</text>

  <defs>
    <marker id="arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6" fill="none" stroke="#666" stroke-width="1"/>
    </marker>
  </defs>
</svg>
<p class="figure-caption">Figure 2. Gate network detail for a single attention head. The low-rank bilinear form computes logits mu_ij, which are passed through a Gumbel-sigmoid with temperature tau to produce differentiable (training) or hard binary (inference) gate masks.</p>
</div>

## 3.2 Integration with Multi-Head Attention

Standard multi-head attention computes:

head_h = softmax(Q_h * K_h^T / sqrt(d_head)) * V_h

SGA modifies this to:

head_h = [softmax(Q_h * K_h^T / sqrt(d_head)) * G_h] * V_h

where * denotes element-wise multiplication and G_h is the binary gate mask for head h. The masking is applied *after* the softmax, which means that the remaining attention weights are not renormalized. We found empirically that post-softmax masking without renormalization outperforms both pre-softmax masking (replacing pruned logits with -infinity before softmax) and post-softmax masking with renormalization.

The intuition is that post-softmax masking acts as a form of "attention dropout" that the model learns to anticipate during training. The gate network and the attention weights co-adapt: the attention weights learn to concentrate probability on positions that the gate will retain, while the gate learns to retain positions where the attention weights are large.

## 3.3 Training Procedure

During training, we use the Gumbel-sigmoid relaxation with straight-through gradient estimation:

**Forward pass:** G_ij = 1[sigma((mu_ij + g_1 - g_2) / tau) > 0.5] where g_1, g_2 are independent Gumbel(0,1) samples.

**Backward pass:** Gradients are computed as if G_ij = sigma((mu_ij + g_1 - g_2) / tau), i.e., the continuous relaxation is used for gradient computation.

The temperature tau is annealed from 1.0 to 0.1 over the course of training using an exponential schedule. High temperature in the early stages allows exploration of different gate patterns, while low temperature at the end encourages discrete (near-binary) gates.

**Sparsity regularization.** We add a regularization term to the training loss:

L_total = L_task + lambda * (1/n^2) * sum_ij G_ij

where lambda controls the sparsity-accuracy trade-off. In our experiments, lambda = 0.01 provides a good balance. Increasing lambda produces sparser gates at the cost of some accuracy; see the ablation in Appendix D.

## 3.4 Inference Optimization

During inference, the gates produce hard binary masks (tau effectively equals 0). This enables two key optimizations:

1. **Sparse matrix multiplication.** Only the non-zero entries of the masked attention matrix A_sparse = A * G are computed. We implement this as a block-sparse operation using custom CUDA kernels.

2. **Early key-value pruning.** For autoregressive generation, once a key-value pair is gated out by all heads in all subsequent positions, it can be evicted from the KV cache. In practice, this reduces KV cache size by approximately 40% for sequences of length 8192.
