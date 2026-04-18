+++
title = "Probability Distributions"
description = "Common discrete and continuous probability distributions"
tags = ["statistics", "probability", "distributions"]
+++

# Probability Distributions

Reference table of common probability distributions with their parameters, probability functions, and key moments.

## Discrete Distributions

| Distribution | PMF / Formula | Mean | Variance |
|-------------|---------------|------|----------|
| Bernoulli($p$) | $P(X=k) = p^k(1-p)^{1-k}$ | $p$ | $p(1-p)$ |
| Binomial($n, p$) | $P(X=k) = \binom{n}{k}p^k(1-p)^{n-k}$ | $np$ | $np(1-p)$ |
| Poisson($\lambda$) | $P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}$ | $\lambda$ | $\lambda$ |
| Geometric($p$) | $P(X=k) = (1-p)^{k-1}p$ | $\frac{1}{p}$ | $\frac{1-p}{p^2}$ |

## Continuous Distributions

| Distribution | PDF | Mean | Variance |
|-------------|-----|------|----------|
| Uniform($a, b$) | $f(x) = \frac{1}{b-a}$ | $\frac{a+b}{2}$ | $\frac{(b-a)^2}{12}$ |
| Normal($\mu, \sigma^2$) | $f(x) = \frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$ | $\mu$ | $\sigma^2$ |
| Exponential($\lambda$) | $f(x) = \lambda e^{-\lambda x}$ | $\frac{1}{\lambda}$ | $\frac{1}{\lambda^2}$ |
| Gamma($\alpha, \beta$) | $f(x) = \frac{\beta^\alpha x^{\alpha-1}e^{-\beta x}}{\Gamma(\alpha)}$ | $\frac{\alpha}{\beta}$ | $\frac{\alpha}{\beta^2}$ |

## The Normal Distribution

The standard normal distribution has $\mu = 0$ and $\sigma = 1$. Its PDF is:

$$\phi(z) = \frac{1}{\sqrt{2\pi}} e^{-z^2/2}$$

The cumulative distribution function (CDF):

$$\Phi(z) = \int_{-\infty}^{z} \phi(t)\,dt$$

<div class="theorem" data-title="Central Limit Theorem">
<p>Let $X_1, X_2, \ldots, X_n$ be i.i.d. random variables with mean $\mu$ and variance $\sigma^2$. Then as $n \to \infty$:</p>
<p>$$\frac{\bar{X}_n - \mu}{\sigma / \sqrt{n}} \xrightarrow{d} N(0, 1)$$</p>
</div>

## Moment Generating Functions

The moment generating function (MGF) of a random variable $X$ is:

$$M_X(t) = E[e^{tX}]$$

| Distribution | MGF |
|-------------|-----|
| Bernoulli($p$) | $(1-p) + pe^t$ |
| Binomial($n,p$) | $((1-p) + pe^t)^n$ |
| Poisson($\lambda$) | $e^{\lambda(e^t - 1)}$ |
| Normal($\mu, \sigma^2$) | $e^{\mu t + \sigma^2 t^2 / 2}$ |
| Exponential($\lambda$) | $\frac{\lambda}{\lambda - t}$ for $t < \lambda$ |

## Bayes' Theorem

<div class="theorem" data-title="Bayes' Theorem">
<p>For events $A$ and $B$ with $P(B) > 0$:</p>
<p>$$P(A \mid B) = \frac{P(B \mid A)\,P(A)}{P(B)}$$</p>
<p>In the continuous case with prior $\pi(\theta)$ and likelihood $L(\theta \mid x)$:</p>
<p>$$\pi(\theta \mid x) = \frac{L(\theta \mid x)\,\pi(\theta)}{\int L(\theta \mid x)\,\pi(\theta)\,d\theta}$$</p>
</div>

## Law of Total Probability

For a partition $\{B_1, B_2, \ldots, B_n\}$ of the sample space:

$$P(A) = \sum_{i=1}^{n} P(A \mid B_i)\,P(B_i)$$
