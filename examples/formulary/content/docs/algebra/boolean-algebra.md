+++
title = "Boolean Algebra"
description = "Fundamentals of logic, truth values, and boolean operations"
date = "2025-10-14"
tags = ["algebra", "logic", "boolean"]
+++

# Boolean Algebra

Boolean algebra is the branch of algebra in which the values of the variables are the truth values true and false, usually denoted 1 and 0, respectively. Instead of elementary algebra, where the values of the variables are numbers and the prime operations are addition and multiplication, the main operations of Boolean algebra are the conjunction (AND), the disjunction (OR), and the negation (NOT).

## Core Operations

| Operation | Symbol | Meaning | True Condition |
|-----------|--------|---------|----------------|
| Conjunction | $\land$ (AND) | $A \land B$ | True if both $A$ and $B$ are true |
| Disjunction | $\lor$ (OR) | $A \lor B$ | True if at least one of $A$ or $B$ is true |
| Negation | $\lnot$ (NOT) | $\lnot A$ | True if $A$ is false |

## Truth Tables

Truth tables provide a systematic method to evaluate the outcome of boolean expressions for all possible inputs.

| $A$ | $B$ | $A \land B$ | $A \lor B$ | $\lnot A$ |
|-----|-----|-------------|------------|-----------|
| 0 | 0 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 |

## De Morgan's Laws

<div class="theorem" data-title="De Morgan's Laws">
<p>De Morgan's laws describe how mathematical statements and concepts are related through their opposites.</p>
<p>1. The negation of a disjunction is the conjunction of the negations:</p>
<p>$$\lnot(A \lor B) = \lnot A \land \lnot B$$</p>
<p>2. The negation of a conjunction is the disjunction of the negations:</p>
<p>$$\lnot(A \land B) = \lnot A \lor \lnot B$$</p>
</div>

These properties are foundational to digital circuit design and logical operations in computer science.
