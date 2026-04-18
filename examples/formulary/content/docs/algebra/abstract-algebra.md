+++
title = "Abstract Algebra"
description = "Groups, rings, fields, and algebraic structures"
tags = ["algebra", "abstract-algebra", "groups"]
+++

# Abstract Algebra

Fundamental algebraic structures including groups, rings, and fields, along with their key properties and theorems.

## Groups

<div class="definition" data-title="Group">
<p>A <strong>group</strong> $(G, \cdot)$ is a set $G$ together with a binary operation $\cdot$ satisfying:</p>
<ol>
<li><strong>Closure:</strong> For all $a, b \in G$, $a \cdot b \in G$</li>
<li><strong>Associativity:</strong> $(a \cdot b) \cdot c = a \cdot (b \cdot c)$</li>
<li><strong>Identity:</strong> There exists $e \in G$ such that $e \cdot a = a \cdot e = a$</li>
<li><strong>Inverse:</strong> For each $a \in G$, there exists $a^{-1}$ such that $a \cdot a^{-1} = a^{-1} \cdot a = e$</li>
</ol>
</div>

If additionally $a \cdot b = b \cdot a$ for all $a, b \in G$, the group is called **abelian**.

## Lagrange's Theorem

<div class="theorem" data-title="Lagrange">
<p>If $H$ is a subgroup of a finite group $G$, then the order of $H$ divides the order of $G$:</p>
<p>$$|H| \mid |G|$$</p>
<p>Moreover, $|G| = |H| \cdot [G : H]$, where $[G : H]$ is the index of $H$ in $G$.</p>
</div>

<div class="proof">
<p>The left cosets of $H$ in $G$ partition $G$ into disjoint subsets, each of size $|H|$. The number of distinct cosets is $[G : H]$, so $|G| = |H| \cdot [G : H]$.</p>
</div>

## Homomorphisms

<div class="definition" data-title="Group Homomorphism">
<p>A map $\phi: G \to H$ between groups is a <strong>homomorphism</strong> if:</p>
<p>$$\phi(a \cdot b) = \phi(a) \cdot \phi(b) \quad \text{for all } a, b \in G$$</p>
</div>

Key properties of a homomorphism $\phi: G \to H$:

- $\phi(e_G) = e_H$
- $\phi(a^{-1}) = \phi(a)^{-1}$
- $\ker(\phi) = \{g \in G : \phi(g) = e_H\}$ is a normal subgroup of $G$

<div class="theorem" data-title="First Isomorphism Theorem">
<p>If $\phi: G \to H$ is a group homomorphism, then:</p>
<p>$$G / \ker(\phi) \cong \text{im}(\phi)$$</p>
</div>

## Rings and Fields

<div class="definition" data-title="Ring">
<p>A <strong>ring</strong> $(R, +, \cdot)$ is a set with two operations satisfying:</p>
<ol>
<li>$(R, +)$ is an abelian group</li>
<li>Multiplication is associative</li>
<li>Distributive laws: $a(b+c) = ab + ac$ and $(a+b)c = ac + bc$</li>
</ol>
</div>

<div class="definition" data-title="Field">
<p>A <strong>field</strong> is a commutative ring with unity in which every nonzero element has a multiplicative inverse. Examples include $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$, and finite fields $\mathbb{F}_p$ for prime $p$.</p>
</div>

## Common Finite Groups

| Group | Order | Description |
|-------|-------|-------------|
| $\mathbb{Z}_n$ | $n$ | Cyclic group of integers mod $n$ |
| $S_n$ | $n!$ | Symmetric group on $n$ elements |
| $A_n$ | $n!/2$ | Alternating group (even permutations) |
| $D_n$ | $2n$ | Dihedral group of the $n$-gon |
| $(\mathbb{Z}/p\mathbb{Z})^*$ | $p-1$ | Multiplicative group mod prime $p$ |
