+++
title = "2. Related Work"
weight = 2
template = "post"
description = "Survey of efficient attention mechanisms, sparse transformers, and learned sparsity in neural networks."
[extra]
section_number = "2"
+++

## Efficient Attention Mechanisms

The quest for efficient attention has produced a rich literature. We organize prior work along three axes: fixed sparse patterns, low-rank and kernel approximations, and hardware-aware implementations.

### Fixed Sparse Patterns

**Longformer** (Beltagy et al., 2020) combines sliding-window local attention with task-specific global attention tokens. The local window captures nearby dependencies while global tokens (e.g., the [CLS] token) aggregate information across the full sequence. The attention complexity is O(n * w) where w is the window size, but the fixed pattern cannot adapt to input-dependent long-range dependencies.

**BigBird** (Zaheer et al., 2020) augments local and global attention with random attention edges, providing theoretical guarantees that the resulting graph approximates a universal Turing machine. In practice, the random edges add coverage but are not optimized for the actual information flow in the data.

**Sparse Transformer** (Child et al., 2019) introduced strided attention patterns for autoregressive generation, combining local and strided heads to achieve O(n * sqrt(n)) complexity. The pattern is effective for structured data (images, music) but requires manual selection of stride parameters.

### Low-Rank and Kernel Approximations

**Linear Attention** (Katharopoulos et al., 2020) replaces the softmax kernel with a feature map phi, decomposing attention as phi(Q) * (phi(K)^T * V), achieving O(n * d) complexity. While efficient, the removal of the softmax non-linearity generally degrades performance on tasks requiring sharp attention distributions.

**Performer** (Choromanski et al., 2021) uses random feature maps to approximate the softmax kernel, achieving linear complexity with stronger approximation guarantees. However, the approximation quality degrades for long sequences where the effective rank of the attention matrix is high.

**Linformer** (Wang et al., 2020) projects keys and values to a lower dimension k << n, reducing attention to O(n * k). The projection matrices are fixed per layer, limiting adaptivity to the input.

### Hardware-Aware Implementations

**Flash Attention** (Dao et al., 2022; Dao, 2023) does not change the mathematical operation but reorders the computation to minimize memory reads/writes, achieving significant wall-clock speedups on modern GPUs. Flash Attention is **orthogonal** to SGA: our method reduces the number of operations, while Flash Attention makes each operation faster. In principle, the two can be combined, applying Flash Attention's memory-efficient algorithm to the sparse subsets selected by SGA's gates.

### State-Space Models

**Mamba** (Gu and Dao, 2023) and its predecessors (S4, H3) replace attention entirely with structured state-space layers that process sequences in O(n) time. While effective for language modeling, SSMs struggle on tasks requiring content-based retrieval over long contexts (e.g., the Retrieval task in LRA), where attention-based models retain an advantage. SGA can be seen as a middle ground: it preserves the content-based routing of attention while approaching the efficiency of linear-time models.

## Learned Sparsity in Neural Networks

The idea of learning which computations to skip is not unique to attention. **Mixture of Experts** (Shazeer et al., 2017) routes tokens to a subset of expert networks using a learned gating function. **Conditional computation** (Bengio et al., 2013) frames the problem more generally as learning binary decisions about which modules to execute. **Structured pruning** (Li et al., 2017) learns to remove entire neurons or channels from trained networks.

SGA applies the principle of learned conditional computation specifically to the attention matrix. The gate network can be viewed as a lightweight "router" that decides, for each query, which keys are worth attending to. Unlike MoE routing, which operates at the token-module level, SGA gates operate at the fine-grained token-token level within the attention matrix.

## Differentiable Discrete Optimization

Training binary gates requires propagating gradients through discrete decisions. The **Gumbel-softmax** trick (Jang et al., 2017; Maddison et al., 2017) provides a continuous relaxation of categorical distributions using Gumbel noise and a temperature parameter. The **straight-through estimator** (Bengio et al., 2013) uses the hard discrete sample in the forward pass but passes gradients through the continuous relaxation in the backward pass. SGA combines both techniques in the Gumbel-sigmoid variant (binary case of Gumbel-softmax), which we find provides more stable training than either approach alone.
