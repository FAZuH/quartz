---
publish: true
aliases:
  - Common Distribution Equations
created: 2025-10-14T04:15:27.038+07:00
modified: 2025-12-19T14:21:33.444+07:00
published: 2025-12-19T14:21:33.444+07:00
cssclasses: ""
creation-time: 2025-07-22 17:12
status: baby
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Notations

- $N(\mu, \sigma^2)$ : [[3 Reference/Continuous Distributions#Normal distribution\|Normal distribution]] with [[3 Reference/Def-mean\|mean]] $\mu$ and [[3 Reference/Def-variance\|variance]] $\sigma^2$
- $\chi^2(k)$ : [[3 Reference/Continuous Distributions#Chi-square distribution\|Chi-square distribution]] with $k$ degrees of freedom
- $t(r)$ : [[3 Reference/Continuous Distributions#t-distribution\|t-distribution]] with $r$ degrees of freedom
- $F(r_1, r_2)$ : [[3 Reference/Continuous Distributions#F-distribution\|F-distribution]] with $r_1$ and $r_2$ degrees of freedom
- $\bar{X}$ : Sample mean
- $S^2$ : Sample variance
- $\xrightarrow{D}$ : [[3 Reference/Def-convergence-in-distribution\|Convergence in distribution]]

## Sample Mean and Variance Distributions

If $X_1, X_2, \ldots, X_n \sim N(\mu, \sigma^2)$ independently, then:

$$
\begin{align}
\bar{X} & = \frac{1}{n}\sum_{i=1}^n X_i && \sim N\left(\mu, \frac{\sigma^2}{n}\right) \\

S^2 & = \frac{1}{n-1}\sum_{i=1}^n (X_i - \bar{X})^2 && \sim N\left( \sigma^2, \frac{2\sigma^4}{n-1} \right) \\
\end{align} 
$$

## Normal Distribution Relationships

If $X_1, X_2, \ldots, X_n \sim N(\mu, \sigma^2)$ independently, then:

$$
\frac{(n-1)S^2}{\sigma^2} \sim \chi^2(n-1)
$$


If $Z_1, Z_2, \ldots, Z_k \sim N(0,1)$ independently, then:

$$
\sum_{i=1}^k Z_i^2 \sim \chi^2(k)
$$


If $U \sim N(0,1)$ and $V \sim \chi^2(r)$ independently, then:

$$
T = \frac{U}{\sqrt{V/r}} \sim t(r)
$$


If $U \sim \chi^2(r_1)$ and $V \sim \chi^2(r_2)$ independently, then:

$$
F = \frac{U/r_1}{V/r_2} \sim F(r_1, r_2)
$$

If $X_1, X_2, \ldots, X_n \sim N(\mu, \sigma^2)$ independently, then:

$$
T = \frac{\bar{X} - \mu}{S/\sqrt{n}} \sim t(n-1)
$$


For $X_1, \ldots, X_{n_1} \sim N(\mu_1, \sigma^2)$ and $Y_1, \ldots, Y_{n_2} \sim N(\mu_2, \sigma^2)$ independently:

$$
T = \frac{(\bar{X} - \bar{Y}) - (\mu_1 - \mu_2)}{S_p\sqrt{\frac{1}{n_1} + \frac{1}{n_2}}} \sim t(n_1 + n_2 - 2)
$$
where $S_p^2 = \frac{(n_1-1)S_X^2 + (n_2-1)S_Y^2}{n_1 + n_2 - 2}$


For independent samples from $N(\mu_1, \sigma_1^2)$ and $N(\mu_2, \sigma_2^2)$

$$
F = \frac{S_1^2/\sigma_1^2}{S_2^2/\sigma_2^2} \sim F(n_1-1, n_2-1)
$$

If $X_{1},X_{2},\dots,X_{n}\sim b(1,p)$ independently, then:

$$
\sum_{i=1}^n X_{i}\sim b(n,p)
$$

If $X_{1},X_{2},\dots,X_{n}\sim \text{Poisson}(\lambda)$ independently, then:
$$
\sum_{i=1}^n X_{i} \sim \text{Poisson}(n\lambda)
$$

If $X_{1},X_{2},\dots,X_{n}\sim \text{Gamma}(\alpha,\beta)$ independently, then:
$$
\sum_{i=1}^n X_{i} \sim \text{Gamma}(n\alpha,\beta)
$$

## Central Limit Theorem Results

If $X_1, X_2, \ldots, X_n$ are i.i.d. with $E[X_i] = \mu$ and $\text{Var}(X_i) = \sigma^2$, then: 
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

If $X_1, \ldots, X_n \sim \text{Exp}(\lambda)$ independently, then: $$\sum_{i=1}^n X_i \sim \text{Gamma}(n, \lambda)$$

## Order Statistics


For $X_1, \ldots, X_n \sim \text{Uniform}(0,1)$:

- $X_{(n)} \sim \text{Beta}(n, 1)$
- $X_{(1)} \sim \text{Beta}(1, n)$
- $X_{(k)} \sim \text{Beta}(k, n-k+1)$

## Transformations

**Log-Normal Distribution**

If $X \sim N(\mu, \sigma^2)$, then: $$Y = e^X \sim \text{LogNormal}(\mu, \sigma^2)$$

**Box-Muller Transformation**

If $U_1, U_2 \sim \text{Uniform}(0,1)$ independently, then: $$Z_1 = \sqrt{-2\ln U_1}\cos(2\pi U_2) \sim N(0,1)$$ $$Z_2 = \sqrt{-2\ln U_1}\sin(2\pi U_2) \sim N(0,1)$$

