---
publish: true
aliases:
  - Common Distribution Equations
created: 2026-03-25T15:22:40.597+07:00
modified: 2026-03-25T15:22:40.597+07:00
published: 2026-03-25T15:22:40.597+07:00
creation-time: 2025-07-22 17:12
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Notations

- $N(\mu, \sigma^2)$ : [[Continuous Distributions#Normal distribution|Normal distribution]] with [[Def-mean|mean]] $\mu$ and [[Def-variance|variance]] $\sigma^2$
- $\chi^2(k)$ : [[Continuous Distributions#Chi-square distribution|Chi-square distribution]] with $k$ degrees of freedom
- $t(r)$ : [[Continuous Distributions#t-distribution|t-distribution]] with $r$ degrees of freedom
- $F(r\_1, r\_2)$ : [[Continuous Distributions#F-distribution|F-distribution]] with $r\_1$ and $r\_2$ degrees of freedom
- $\bar{X}$ : Sample mean
- $S^2$ : Sample variance
- $\xrightarrow{D}$ : [[Def-convergence-in-distribution|Convergence in distribution]]

## Sample Mean and Variance Distributions

If $X\_1, X\_2, \ldots, X\_n \sim N(\mu, \sigma^2)$ independently, then:

$$
\begin{align}
\bar{X} & = \frac{1}{n}\sum\_{i=1}^n X\_i && \sim N\left(\mu, \frac{\sigma^2}{n}\right) \\

S^2 & = \frac{1}{n-1}\sum\_{i=1}^n (X\_i - \bar{X})^2 && \sim N\left( \sigma^2, \frac{2\sigma^4}{n-1} \right) \\
\end{align}
$$

## Normal Distribution Relationships

If $X\_1, X\_2, \ldots, X\_n \sim N(\mu, \sigma^2)$ independently, then:

$$
\frac{(n-1)S^2}{\sigma^2} \sim \chi^2(n-1)
$$

If $Z\_1, Z\_2, \ldots, Z\_k \sim N(0,1)$ independently, then:

$$
\sum\_{i=1}^k Z\_i^2 \sim \chi^2(k)
$$

If $U \sim N(0,1)$ and $V \sim \chi^2(r)$ independently, then:

$$
T = \frac{U}{\sqrt{V/r}} \sim t(r)
$$

If $U \sim \chi^2(r\_1)$ and $V \sim \chi^2(r\_2)$ independently, then:

$$
F = \frac{U/r\_1}{V/r\_2} \sim F(r\_1, r\_2)
$$

If $X\_1, X\_2, \ldots, X\_n \sim N(\mu, \sigma^2)$ independently, then:

$$
T = \frac{\bar{X} - \mu}{S/\sqrt{n}} \sim t(n-1)
$$

For $X\_1, \ldots, X\_{n\_1} \sim N(\mu\_1, \sigma^2)$ and $Y\_1, \ldots, Y\_{n\_2} \sim N(\mu\_2, \sigma^2)$ independently:

$$
T = \frac{(\bar{X} - \bar{Y}) - (\mu\_1 - \mu\_2)}{S\_p\sqrt{\frac{1}{n\_1} + \frac{1}{n\_2}}} \sim t(n\_1 + n\_2 - 2)
$$
where $S\_p^2 = \frac{(n\_1-1)S\_X^2 + (n\_2-1)S\_Y^2}{n\_1 + n\_2 - 2}$

For independent samples from $N(\mu\_1, \sigma\_1^2)$ and $N(\mu\_2, \sigma\_2^2)$

$$
F = \frac{S\_1^2/\sigma\_1^2}{S\_2^2/\sigma\_2^2} \sim F(n\_1-1, n\_2-1)
$$

If $X\_{1},X\_{2},\dots,X\_{n}\sim b(1,p)$ independently, then:

$$
\sum\_{i=1}^n X\_{i}\sim b(n,p)
$$

If $X\_{1},X\_{2},\dots,X\_{n}\sim \text{Poisson}(\lambda)$ independently, then:
$$
\sum\_{i=1}^n X\_{i} \sim \text{Poisson}(n\lambda)
$$

If $X\_{1},X\_{2},\dots,X\_{n}\sim \text{Gamma}(\alpha,\beta)$ independently, then:
$$
\sum\_{i=1}^n X\_{i} \sim \text{Gamma}(n\alpha,\beta)
$$

## Central Limit Theorem Results

If $X\_1, X\_2, \ldots, X\_n$ are i.i.d. with $E\[X\_i] = \mu$ and $\text{Var}(X\_i) = \sigma^2$, then:
$$
\begin{align}
\frac{\bar{X} - \mu}{\sigma/\sqrt{n}} & \xrightarrow{D} N(0,1) \\
\iff \sqrt{ n }(\bar{X}-\mu) & \xrightarrow{D} N(0,\sigma^2)
\end{align}
$$

> [!note]
> Usually $n>30$ is sufficient. More skewed distributions may require larger $n$

## Gamma Distribution Relationships

$$\chi^2(k) = \text{Gamma}\left(\frac{k}{2}, \frac{1}{2}\right)$$

If $X\_1, \ldots, X\_n \sim \text{Exp}(\lambda)$ independently, then: $$\sum\_{i=1}^n X\_i \sim \text{Gamma}(n, \lambda)$$

## Order Statistics

For $X\_1, \ldots, X\_n \sim \text{Uniform}(0,1)$:

- $X\_{(n)} \sim \text{Beta}(n, 1)$
- $X\_{(1)} \sim \text{Beta}(1, n)$
- $X\_{(k)} \sim \text{Beta}(k, n-k+1)$

## Transformations

**Log-Normal Distribution**

If $X \sim N(\mu, \sigma^2)$, then: $$Y = e^X \sim \text{LogNormal}(\mu, \sigma^2)$$

**Box-Muller Transformation**

If $U\_1, U\_2 \sim \text{Uniform}(0,1)$ independently, then: $$Z\_1 = \sqrt{-2\ln U\_1}\cos(2\pi U\_2) \sim N(0,1)$$ $$Z\_2 = \sqrt{-2\ln U\_1}\sin(2\pi U\_2) \sim N(0,1)$$
