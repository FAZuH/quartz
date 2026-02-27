---
publish: true
aliases:
  - Overdispersion
created: 2026-02-22T19:24:22.184+07:00
modified: 2026-02-22T19:24:22.189+07:00
published: 2026-02-22T19:24:22.189+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-09-15 08:35
status: baby
parent:
  - "[[categorical-data-analysis]]"
---


**Overdispersion** occurs when $\text{Var}(Y) > \mathbb{E}[Y|X]$ for the assumed distribution family.

## Consequences
 - Larger estimated [[3 Reference/def-confidence-interval_202507220823\|confidence interval]]

## Poisson Overdispersion

**Standard Poisson:** $$\mathbb{E}[Y|X] = \text{Var}(Y|X) = \mu = \exp(X\beta)$$

**Overdispersed:** $$\text{Var}(Y|X) = \phi\mu \quad \text{where } \phi > 1$$

**Detection:** $$\hat{\phi} = \frac{X^2}{n-p} \quad \text{or} \quad \hat{\phi} = \frac{D}{n-p}$$

where $X^2$ is Pearson chi-square, $D$ is deviance, $n$ = sample size, $p$ = parameters.

If we force to model our data even with overdispersion, the standard error will be underestimated. In this situation, we should use a zero-inflated Poisson model instead


## Binomial Overdispersion

**Standard binomial:**

$$\mathbb{E}[Y|X] = n\pi, \quad \text{Var}(Y|X) = n\pi(1-\pi)$$

Notice that $(1-\mu)\leq1$. Thus, $\operatorname{Var}(Y|X)\leq E[Y|X]$

**Overdispersed:** $$\text{Var}(Y|X) = \phi n\pi(1-\pi) \quad \text{where } \phi > 1$$

## Mathematical Models

### Quasi-likelihood Approach

Modifies variance function: $$\text{Var}(Y|X) = \phi V(\mu)$$ where $V(\mu)$ is the variance function.

### Negative Binomial for Counts

$$Y \sim \text{NB}(\mu, k) \quad \text{with} \quad \text{Var}(Y) = \mu + \frac{\mu^2}{k}$$

As $k \to \infty$, reduces to Poisson.

### Beta-binomial for Proportions

$$Y \sim \text{BetaBin}(n, \alpha, \beta)$$

with excess variance: $$\text{Var}(Y) = n\pi(1-\pi)[1 + (n-1)\rho]$$

where $\rho = \frac{1}{1+\alpha+\beta}$ is intracluster correlation.

## Likelihood Adjustments

**Standard likelihood:** $$\ell(\beta) = \sum_{i=1}^n \log f(y_i|x_i, \beta)$$

**Quasi-likelihood:** $$Q(\beta, \phi) = \sum_{i=1}^n \frac{y_i\theta_i - b(\theta_i)}{\phi}$$

where $\theta_i$ is the canonical parameter.

## Statistical Tests

### Score Test

$$T = \frac{X^2 - \text{df}}{\sqrt{2\text{df}}} \sim N(0,1) \quad \text{under } H_0: \phi = 1$$

### Likelihood Ratio Test

For nested models: $$-2(\ell_0 - \ell_1) \sim \chi^2$$

## Common Solutions

- **Quasi-Poisson:** $\text{Var}(Y) = \phi\mu$
- **Negative Binomial:** $f(y|\mu, k) = \binom{y+k-1}{y}\left(\frac{k}{k+\mu}\right)^k\left(\frac{\mu}{k+\mu}\right)^y$
- **Random Effects:** $\log(\mu_{ij}) = X_{ij}\beta + u_i$ where $u_i \sim N(0, \sigma_u^2)$
