+++
title = "Differential Calculus"
description = "Differentiation rules, derivatives, and applications"
tags = ["calculus", "differentiation", "derivatives"]
+++

# Differential Calculus

Rules and formulas for computing derivatives, along with key theorems and applications.

## Basic Differentiation Rules

| Rule | Formula |
|------|---------|
| Constant | $\frac{d}{dx}[c] = 0$ |
| Power | $\frac{d}{dx}[x^n] = nx^{n-1}$ |
| Sum | $\frac{d}{dx}[f + g] = f' + g'$ |
| Product | $\frac{d}{dx}[fg] = f'g + fg'$ |
| Quotient | $\frac{d}{dx}\left[\frac{f}{g}\right] = \frac{f'g - fg'}{g^2}$ |
| Chain | $\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$ |

## Standard Derivatives

| Function $f(x)$ | Derivative $f'(x)$ |
|------------------|---------------------|
| $x^n$ | $nx^{n-1}$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $\frac{1}{x}$ |
| $a^x$ | $a^x \ln a$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\arcsin x$ | $\frac{1}{\sqrt{1-x^2}}$ |
| $\arctan x$ | $\frac{1}{1+x^2}$ |

## Mean Value Theorem

<div class="theorem" data-title="Mean Value Theorem">
<p>If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists $c \in (a, b)$ such that:</p>
<p>$$f'(c) = \frac{f(b) - f(a)}{b - a}$$</p>
</div>

## Taylor Series

The Taylor series of $f(x)$ centered at $a$ is:

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x - a)^n$$

Common Taylor series centered at $a = 0$ (Maclaurin series):

| Function | Series | Radius |
|----------|--------|--------|
| $e^x$ | $\sum_{n=0}^{\infty} \frac{x^n}{n!}$ | $\infty$ |
| $\sin x$ | $\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}$ | $\infty$ |
| $\cos x$ | $\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}$ | $\infty$ |
| $\frac{1}{1-x}$ | $\sum_{n=0}^{\infty} x^n$ | $1$ |
| $\ln(1+x)$ | $\sum_{n=1}^{\infty} \frac{(-1)^{n+1} x^n}{n}$ | $1$ |

## L'Hopital's Rule

<div class="theorem" data-title="L'Hopital's Rule">
<p>If $\lim_{x \to a} f(x) = \lim_{x \to a} g(x) = 0$ (or both $\pm\infty$), and $g'(x) \neq 0$ near $a$, then:</p>
<p>$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$</p>
<p>provided the right-hand limit exists.</p>
</div>

## Multivariable Derivatives

For $f: \mathbb{R}^n \to \mathbb{R}$, the gradient is:

$$\nabla f = \left(\frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2}, \ldots, \frac{\partial f}{\partial x_n}\right)$$

The Hessian matrix of second partial derivatives:

$$H_{ij} = \frac{\partial^2 f}{\partial x_i \, \partial x_j}$$
