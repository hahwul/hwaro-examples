+++
title = "Integral Calculus"
description = "Integration formulas, techniques, and fundamental theorems"
tags = ["calculus", "integration", "integrals"]
+++

# Integral Calculus

Standard integration formulas, techniques of integration, and the fundamental theorems of calculus.

## Fundamental Theorems

<div class="theorem" data-title="First Fundamental Theorem of Calculus">
<p>If $f$ is continuous on $[a, b]$ and $F(x) = \int_a^x f(t)\,dt$, then $F$ is differentiable on $(a, b)$ and:</p>
<p>$$F'(x) = f(x)$$</p>
</div>

<div class="theorem" data-title="Second Fundamental Theorem of Calculus">
<p>If $f$ is continuous on $[a, b]$ and $F$ is any antiderivative of $f$, then:</p>
<p>$$\int_a^b f(x)\,dx = F(b) - F(a)$$</p>
</div>

## Standard Integrals

| Integral | Result |
|----------|--------|
| $\int x^n\,dx$ | $\frac{x^{n+1}}{n+1} + C \quad (n \neq -1)$ |
| $\int \frac{1}{x}\,dx$ | $\ln\lvert x\rvert + C$ |
| $\int e^x\,dx$ | $e^x + C$ |
| $\int a^x\,dx$ | $\frac{a^x}{\ln a} + C$ |
| $\int \sin x\,dx$ | $-\cos x + C$ |
| $\int \cos x\,dx$ | $\sin x + C$ |
| $\int \sec^2 x\,dx$ | $\tan x + C$ |
| $\int \frac{1}{1+x^2}\,dx$ | $\arctan x + C$ |
| $\int \frac{1}{\sqrt{1-x^2}}\,dx$ | $\arcsin x + C$ |

## Integration Techniques

### Integration by Parts

$$\int u\,dv = uv - \int v\,du$$

### Substitution

If $u = g(x)$, then:

$$\int f(g(x))\,g'(x)\,dx = \int f(u)\,du$$

### Partial Fractions

For rational functions $\frac{P(x)}{Q(x)}$ where $\deg P < \deg Q$, decompose into simpler fractions:

$$\frac{1}{(x-a)(x-b)} = \frac{1}{a-b}\left(\frac{1}{x-a} - \frac{1}{x-b}\right)$$

## Important Definite Integrals

| Integral | Value |
|----------|-------|
| $\int_{-\infty}^{\infty} e^{-x^2}\,dx$ | $\sqrt{\pi}$ |
| $\int_0^{\infty} e^{-x}\,dx$ | $1$ |
| $\int_0^{\pi} \sin^2 x\,dx$ | $\frac{\pi}{2}$ |
| $\int_0^1 x^n\,dx$ | $\frac{1}{n+1}$ |
| $\int_0^{\infty} x^{n-1} e^{-x}\,dx$ | $\Gamma(n) = (n-1)!$ |

## Multiple Integrals

For a region $D$ in $\mathbb{R}^2$:

$$\iint_D f(x, y)\,dA = \int_a^b \int_{g_1(x)}^{g_2(x)} f(x, y)\,dy\,dx$$

Change of variables with Jacobian $J$:

$$\iint_D f(x, y)\,dx\,dy = \iint_{D'} f(x(u,v), y(u,v))\,|J|\,du\,dv$$

where $J = \frac{\partial(x,y)}{\partial(u,v)} = \begin{vmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{vmatrix}$

## Polar Coordinates

$$\iint_D f(x,y)\,dA = \int_{\alpha}^{\beta} \int_{r_1(\theta)}^{r_2(\theta)} f(r\cos\theta, r\sin\theta)\,r\,dr\,d\theta$$
