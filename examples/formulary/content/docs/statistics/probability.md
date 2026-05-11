+++
title = "Probability Theory"
description = "Fundamental probability axioms, events, and Bayes' theorem"
date = "2026-03-10"
tags = ["statistics", "probability", "bayes"]
+++

# Probability Theory

Probability theory is the mathematical framework for quantifying uncertainty and randomness. It forms the rigorous foundation upon which all of statistics is built.

## Axioms of Probability

Probability is defined by Kolmogorov's three axioms. For a sample space $\Omega$ and an event $E$:

1. **Non-negativity:** $P(E) \ge 0$
2. **Normalization:** $P(\Omega) = 1$
3. **Additivity:** For any sequence of mutually exclusive events $E_1, E_2, \ldots$:
   $$P\left(\bigcup_{i=1}^\infty E_i\right) = \sum_{i=1}^\infty P(E_i)$$

## Conditional Probability

Conditional probability measures the probability of an event $A$ occurring, given that another event $B$ has already occurred. It is defined as:

$$P(A|B) = \frac{P(A \cap B)}{P(B)}$$

provided that $P(B) > 0$.

## Independence

Two events $A$ and $B$ are considered statistically independent if the occurrence of one does not affect the probability of the other:

$$P(A \cap B) = P(A)P(B)$$

This directly implies that $P(A|B) = P(A)$.

## Bayes' Theorem

<div class="theorem" data-title="Bayes' Theorem">
<p>Bayes' Theorem relates current probability to prior probability. For events $A$ and $B$:</p>
<p>$$P(A|B) = \frac{P(B|A)P(A)}{P(B)}$$</p>
</div>

This theorem is essential for updating beliefs or probability estimates as new evidence or information becomes available, serving as the basis for Bayesian statistics.
