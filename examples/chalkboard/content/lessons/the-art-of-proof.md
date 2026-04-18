+++
title = "The Art of Mathematical Proof"
date = 2026-03-12
description = "Exploring the structure and elegance of mathematical proofs -- from direct arguments to contradiction."
tags = ["mathematics", "logic"]
+++

A mathematical proof is a deductive argument for a mathematical statement, showing that the stated assumptions logically guarantee the conclusion. Proofs are the backbone of mathematics.

## Types of Proof

### Direct Proof

A direct proof establishes the truth of a statement by a straightforward combination of established facts, usually axioms, existing lemmas, or previously proven theorems.

**Example**: Prove that the sum of two even integers is even.

*Proof*: Let `m` and `n` be even integers. Then `m = 2a` and `n = 2b` for some integers `a` and `b`. Therefore, `m + n = 2a + 2b = 2(a + b)`, which is even.

### Proof by Contradiction

Assume the negation of what you want to prove, then derive a contradiction.

**Example**: Prove that the square root of 2 is irrational.

*Proof*: Assume the square root of 2 is rational. Then it can be expressed as `p/q` where `p` and `q` are integers with no common factors. Squaring both sides gives `2 = p^2 / q^2`, so `p^2 = 2q^2`. This means `p^2` is even, so `p` is even. Write `p = 2k`. Then `4k^2 = 2q^2`, giving `q^2 = 2k^2`, so `q` is also even. But this contradicts our assumption that `p` and `q` share no common factors.

### Proof by Induction

Used to prove statements about natural numbers. Show the base case holds, then show that if the statement holds for `n`, it holds for `n + 1`.

## Writing Good Proofs

1. State what you are proving clearly
2. Declare your variables and assumptions
3. Proceed logically, step by step
4. Conclude explicitly

*Remember: a proof is a conversation with the reader, not a puzzle for them to solve.*
