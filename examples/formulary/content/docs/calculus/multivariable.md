+++
title = "Multivariable Calculus"
description = "Calculus extended to functions of multiple variables"
date = "2025-11-22"
tags = ["calculus", "multivariable", "gradients"]
+++

# Multivariable Calculus

Multivariable calculus extends the concepts of differentiation and integration to functions of more than one variable. It is heavily utilized in physics, engineering, and machine learning.

## Partial Derivatives

For a function $f(x_1, x_2, \ldots, x_n)$, the partial derivative with respect to $x_i$ is denoted by:

$$\frac{\partial f}{\partial x_i}$$

It measures the rate of change of $f$ along the $x_i$ direction while holding all other variables constant.

## The Gradient

The gradient is a vector that points in the direction of the steepest ascent of the function. For a scalar function $f(x, y, z)$, the gradient $\nabla f$ is defined as:

$$\nabla f = \left( \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right)$$

<div class="definition" data-title="Directional Derivative">
<p>The directional derivative of $f$ in the direction of a unit vector $\mathbf{u}$ is given by the dot product:</p>
<p>$$D_{\mathbf{u}}f = \nabla f \cdot \mathbf{u}$$</p>
</div>

## Multiple Integrals

A multiple integral evaluates a function of more than one variable over a multi-dimensional domain. For a function $f(x,y)$ integrated over a 2D region $R$:

$$\iint_R f(x, y) \, dA = \int_a^b \int_{g_1(x)}^{g_2(x)} f(x, y) \, dy \, dx$$

Where $dA$ represents an infinitesimal element of area in the domain.

## Fundamental Theorems

Key theorems in multivariable calculus generalize the Fundamental Theorem of Calculus:

1. **Green's Theorem:** Relates a line integral around a simple closed curve to a double integral over the plane region it encloses.
2. **Stokes' Theorem:** Relates a surface integral over a surface to a line integral around its boundary curve.
3. **Divergence Theorem:** Relates a volume integral to the flux of a vector field across a closed surface.
