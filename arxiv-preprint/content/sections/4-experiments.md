+++
title = "4. Experiments"
weight = 4
template = "post"
description = "Evaluation of Sparse Gated Attention on Long Range Arena, PG-19 language modeling, and SCROLLS benchmarks with ablation studies."
[extra]
section_number = "4"
+++

## Experimental Setup

We evaluate SGA on three benchmark suites: the Long Range Arena (LRA) for classification with long sequences, PG-19 for autoregressive language modeling, and SCROLLS for real-world long-document understanding. All models are implemented in JAX/Flax and trained on 8x NVIDIA A100 GPUs. Full training details are provided in Appendix E.

## 4.1 Long Range Arena

The LRA benchmark (Tay et al., 2021) consists of five tasks designed to stress-test long-range dependency modeling: ListOps (mathematical reasoning, length 2048), Text (sentiment classification, length 4096), Retrieval (document similarity, length 4096), Image (sequential CIFAR-10, length 1024), and Pathfinder (spatial reasoning, length 1024).

<table class="results-table">
  <thead>
    <tr>
      <th>Model</th>
      <th>ListOps</th>
      <th>Text</th>
      <th>Retrieval</th>
      <th>Image</th>
      <th>Pathfinder</th>
      <th>Avg</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Vanilla Transformer</td>
      <td>37.1</td>
      <td>65.2</td>
      <td>79.4</td>
      <td>42.4</td>
      <td>71.4</td>
      <td>59.1</td>
    </tr>
    <tr>
      <td>Longformer</td>
      <td>35.6</td>
      <td>62.9</td>
      <td>78.1</td>
      <td>41.8</td>
      <td>69.2</td>
      <td>57.5</td>
    </tr>
    <tr>
      <td>BigBird</td>
      <td>36.2</td>
      <td>64.0</td>
      <td>79.0</td>
      <td>42.0</td>
      <td>70.8</td>
      <td>58.4</td>
    </tr>
    <tr>
      <td>Linear Attention</td>
      <td>16.1</td>
      <td>65.9</td>
      <td>53.1</td>
      <td>42.3</td>
      <td>71.0</td>
      <td>49.7</td>
    </tr>
    <tr>
      <td>Performer</td>
      <td>18.0</td>
      <td>65.4</td>
      <td>53.8</td>
      <td>42.8</td>
      <td>69.5</td>
      <td>49.9</td>
    </tr>
    <tr>
      <td>FNet</td>
      <td>35.3</td>
      <td>65.1</td>
      <td>59.6</td>
      <td>38.7</td>
      <td>67.3</td>
      <td>53.2</td>
    </tr>
    <tr>
      <td>S4</td>
      <td>59.6</td>
      <td>86.1</td>
      <td>87.1</td>
      <td>88.6</td>
      <td>94.2</td>
      <td>83.1</td>
    </tr>
    <tr>
      <td>Mamba</td>
      <td>58.8</td>
      <td>87.3</td>
      <td>85.6</td>
      <td>87.9</td>
      <td>93.8</td>
      <td>82.7</td>
    </tr>
    <tr class="highlight-row">
      <td><strong>SGA (Ours)</strong></td>
      <td><strong>60.2</strong></td>
      <td><strong>88.1</strong></td>
      <td><strong>88.4</strong></td>
      <td><strong>89.1</strong></td>
      <td><strong>95.0</strong></td>
      <td><strong>84.2</strong></td>
    </tr>
  </tbody>
</table>

SGA achieves the highest average accuracy across all five LRA tasks. The largest gains are on ListOps (+1.4% over S4) and Pathfinder (+0.8% over S4), both of which require precise long-range structural reasoning. On Text and Retrieval, SGA slightly outperforms Mamba and S4, suggesting that content-based attention routing provides value even for tasks where sequential models perform well.

## 4.2 Language Modeling (PG-19)

We evaluate SGA on PG-19, a corpus of full-length Project Gutenberg books, using sequence lengths of 2048, 4096, and 8192 tokens. The model is a 350M parameter transformer with 24 layers and 16 heads.

<table class="results-table">
  <thead>
    <tr>
      <th>Model</th>
      <th>PPL (2048)</th>
      <th>PPL (4096)</th>
      <th>PPL (8192)</th>
      <th>Speedup (8192)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Vanilla Transformer</td>
      <td>18.9</td>
      <td>17.8</td>
      <td>17.6</td>
      <td>1.0x</td>
    </tr>
    <tr>
      <td>Longformer</td>
      <td>19.5</td>
      <td>18.6</td>
      <td>18.3</td>
      <td>1.7x</td>
    </tr>
    <tr>
      <td>Flash Attention v2</td>
      <td>18.9</td>
      <td>17.8</td>
      <td>17.6</td>
      <td>2.4x</td>
    </tr>
    <tr class="highlight-row">
      <td><strong>SGA (Ours)</strong></td>
      <td><strong>19.1</strong></td>
      <td><strong>17.9</strong></td>
      <td><strong>17.8</strong></td>
      <td><strong>3.1x</strong></td>
    </tr>
    <tr>
      <td>SGA + Flash Attn v2</td>
      <td>19.1</td>
      <td>17.9</td>
      <td>17.8</td>
      <td>3.8x</td>
    </tr>
  </tbody>
</table>

SGA achieves near-parity with vanilla attention in perplexity (17.8 vs. 17.6 at length 8192) while providing a 3.1x wall-clock speedup. The small perplexity gap (0.2 points) is the cost of pruning approximately 62% of attention connections. Notably, SGA composes with Flash Attention v2, yielding a combined 3.8x speedup -- the sparse masks reduce the number of attention entries to compute, and Flash Attention processes those entries with optimal memory access patterns.

## 4.3 Ablation Studies

### Gate Rank

We vary the gate network rank r from 4 to 64 while keeping all other hyperparameters fixed. Results are shown in Appendix D, Table D.1. The rank-16 default provides the best accuracy-efficiency trade-off: increasing rank beyond 16 provides negligible accuracy gains while increasing parameter count and gate computation overhead.

### Sparsity Regularization

The regularization coefficient lambda controls the trade-off between sparsity and accuracy:

<table class="results-table">
  <thead>
    <tr>
      <th>lambda</th>
      <th>Sparsity (%)</th>
      <th>LRA Avg (%)</th>
      <th>PG-19 PPL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0.0 (no reg.)</td>
      <td>38.2</td>
      <td>84.8</td>
      <td>17.7</td>
    </tr>
    <tr>
      <td>0.005</td>
      <td>52.1</td>
      <td>84.4</td>
      <td>17.7</td>
    </tr>
    <tr class="highlight-row">
      <td><strong>0.01 (default)</strong></td>
      <td><strong>62.0</strong></td>
      <td><strong>84.2</strong></td>
      <td><strong>17.8</strong></td>
    </tr>
    <tr>
      <td>0.05</td>
      <td>78.4</td>
      <td>82.1</td>
      <td>18.4</td>
    </tr>
    <tr>
      <td>0.1</td>
      <td>88.6</td>
      <td>78.9</td>
      <td>19.2</td>
    </tr>
  </tbody>
</table>

Without sparsity regularization (lambda=0), the gates still learn moderate sparsity (38.2%) from the task signal alone, but the resulting masks are less structured and harder to optimize for sparse matrix operations. The default lambda=0.01 achieves 62% sparsity with only a small accuracy reduction. Aggressive regularization (lambda >= 0.05) significantly degrades accuracy, indicating that some attention connections are genuinely important and should not be pruned.

### Post-Softmax vs. Pre-Softmax Masking

We compared three masking strategies on LRA:

- **Pre-softmax:** Replace pruned logits with -infinity before softmax. LRA Avg: 82.8%
- **Post-softmax (renormalized):** Mask after softmax and renormalize remaining weights to sum to 1. LRA Avg: 83.4%
- **Post-softmax (no renorm.):** Mask after softmax without renormalization. LRA Avg: **84.2%**

Post-softmax masking without renormalization performs best. The key reason is that renormalization amplifies the remaining attention weights, which can destabilize training when the gate sparsity changes between epochs. Without renormalization, the model learns to place higher raw attention weight on retained connections, achieving a more stable equilibrium between the attention and gate networks.

## 4.4 SCROLLS Benchmark (New in v3)

To evaluate SGA on realistic long-document tasks, we fine-tuned the 350M PG-19 model on four SCROLLS tasks:

<table class="results-table">
  <thead>
    <tr>
      <th>Model</th>
      <th>QMSum (R-L)</th>
      <th>QASPER (F1)</th>
      <th>NarrQA (F1)</th>
      <th>ContractNLI (EM)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Vanilla Transformer</td>
      <td>19.8</td>
      <td>31.2</td>
      <td>24.6</td>
      <td>78.4</td>
    </tr>
    <tr>
      <td>Longformer</td>
      <td>18.9</td>
      <td>29.8</td>
      <td>23.1</td>
      <td>76.2</td>
    </tr>
    <tr class="highlight-row">
      <td><strong>SGA (Ours)</strong></td>
      <td><strong>20.1</strong></td>
      <td><strong>31.8</strong></td>
      <td><strong>25.2</strong></td>
      <td><strong>79.1</strong></td>
    </tr>
  </tbody>
</table>

SGA slightly outperforms vanilla attention on all four SCROLLS tasks while being 2.8x faster at inference. The gains are most pronounced on QASPER and NarrativeQA, both of which require locating specific evidence in long documents -- exactly the scenario where learned attention routing should provide the most benefit.
