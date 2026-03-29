+++
title = "Linear Algebra"
description = "Matrix operations, eigenvalues, and vector spaces"
tags = ["algebra", "linear-algebra", "matrices"]
+++

# Linear Algebra

Essential formulas and results from linear algebra, covering matrix operations, determinants, eigenvalues, and vector space properties.

## Matrix Operations

For matrices $\mathbf{A}$ and $\mathbf{B}$ of compatible dimensions and scalar $c$:

| Operation | Formula |
|-----------|---------|
| Addition | $(\mathbf{A} + \mathbf{B})_{ij} = a_{ij} + b_{ij}$ |
| Scalar multiplication | $(c\mathbf{A})_{ij} = c \cdot a_{ij}$ |
| Matrix product | $(\mathbf{AB})_{ij} = \sum_{k} a_{ik} b_{kj}$ |
| Transpose | $(\mathbf{A}^T)_{ij} = a_{ji}$ |
| Transpose of product | $(\mathbf{AB})^T = \mathbf{B}^T \mathbf{A}^T$ |

## Determinants

For a $2 \times 2$ matrix:

$$\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$$

For a $3 \times 3$ matrix, expansion along the first row:

$$\det(\mathbf{A}) = a_{11}(a_{22}a_{33} - a_{23}a_{32}) - a_{12}(a_{21}a_{33} - a_{23}a_{31}) + a_{13}(a_{21}a_{32} - a_{22}a_{31})$$

Key determinant properties:

- $\det(\mathbf{AB}) = \det(\mathbf{A})\det(\mathbf{B})$
- $\det(\mathbf{A}^T) = \det(\mathbf{A})$
- $\det(c\mathbf{A}) = c^n \det(\mathbf{A})$ for $n \times n$ matrix $\mathbf{A}$
- $\det(\mathbf{A}^{-1}) = \frac{1}{\det(\mathbf{A})}$

## Eigenvalues and Eigenvectors

<div class="definition" data-title="Eigenvalue">
<p>A scalar $\lambda$ is an <strong>eigenvalue</strong> of $\mathbf{A}$ if there exists a nonzero vector $\mathbf{v}$ such that:</p>
<p>$$\mathbf{A}\mathbf{v} = \lambda\mathbf{v}$$</p>
<p>The vector $\mathbf{v}$ is the corresponding <strong>eigenvector</strong>.</p>
</div>

The eigenvalues are found by solving the **characteristic equation**:

$$\det(\mathbf{A} - \lambda\mathbf{I}) = 0$$

<div class="theorem" data-title="Spectral Properties">
<p>For an $n \times n$ matrix $\mathbf{A}$ with eigenvalues $\lambda_1, \ldots, \lambda_n$:</p>
<p>$$\text{tr}(\mathbf{A}) = \sum_{i=1}^{n} \lambda_i \qquad \det(\mathbf{A}) = \prod_{i=1}^{n} \lambda_i$$</p>
</div>

## Matrix Inverse

For an invertible matrix $\mathbf{A}$, the $2 \times 2$ inverse formula is:

$$\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

General properties of the matrix inverse:

- $(\mathbf{A}^{-1})^{-1} = \mathbf{A}$
- $(\mathbf{AB})^{-1} = \mathbf{B}^{-1}\mathbf{A}^{-1}$
- $(\mathbf{A}^T)^{-1} = (\mathbf{A}^{-1})^T$

## Vector Spaces

<div class="definition" data-title="Linear Independence">
<p>Vectors $\mathbf{v}_1, \ldots, \mathbf{v}_k$ are <strong>linearly independent</strong> if:</p>
<p>$$c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots + c_k\mathbf{v}_k = \mathbf{0} \implies c_1 = c_2 = \cdots = c_k = 0$$</p>
</div>

<div class="theorem" data-title="Rank-Nullity">
<p>For a linear map $T: V \to W$ between finite-dimensional vector spaces:</p>
<p>$$\dim(\ker T) + \dim(\text{im}\, T) = \dim(V)$$</p>
</div>

## Inner Products

For vectors $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$:

| Formula | Name |
|---------|------|
| $\mathbf{u} \cdot \mathbf{v} = \sum_{i=1}^n u_i v_i$ | Dot product |
| $\lVert\mathbf{v}\rVert = \sqrt{\mathbf{v} \cdot \mathbf{v}}$ | Euclidean norm |
| $\cos\theta = \frac{\mathbf{u} \cdot \mathbf{v}}{\lVert\mathbf{u}\rVert\,\lVert\mathbf{v}\rVert}$ | Angle between vectors |
| $\text{proj}_{\mathbf{u}}\mathbf{v} = \frac{\mathbf{u} \cdot \mathbf{v}}{\mathbf{u} \cdot \mathbf{u}}\mathbf{u}$ | Projection |
