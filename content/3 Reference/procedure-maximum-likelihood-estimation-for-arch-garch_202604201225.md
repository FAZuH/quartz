---
publish: true
aliases:
  - Maximum Likelihood Estimation for ARCH/GARCH
created: 2026-04-20T12:25:23.607+07:00
modified: 2026-04-20T12:49:25.870+07:00
published: 2026-04-20T12:49:25.870+07:00
creation-time: 2026-04-20 12:25
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Procedure

Estimating [[definition-arch(m)-model_202604201223|ARCH]]/[[definition-garch(m,s)-model_202604201224|GARCH]] [[parameter-estimation-by-method-of-moments_202604052127|parameters]] using conditional [[maximum-likelihood-method_202604052129|maximum likelihood]] under normality assumptions.

## Setup

Consider an [[definition-arch(m)-model_202604201223|ARCH(m)]] model:

$$
a_t = \sigma_t \epsilon_t, \quad \sigma_t^2 = \alpha_0 + \sum_{i=1}^{m} \alpha_i a_{t-i}^2
$$

Assume $\epsilon_t \sim \text{i.i.d. } N(0, 1)$.

## Conditional Distribution

Given the information set $F_{t-1}$:

$$
a_t | F_{t-1} \sim N(0, \sigma_t^2)
$$

The conditional PDF is:

$$
f(a_t | F_{t-1}) = \frac{1}{\sqrt{2\pi\sigma_t^2}} \exp\left(-\frac{a_t^2}{2\sigma_t^2}\right)
$$

## Conditional Likelihood Function

For observations $a_1, ..., a_T$, dropping the complicated joint density of initial values:

$$
L(\boldsymbol{\alpha} | a_1, ..., a_T) = \prod_{t=m+1}^{T} \frac{1}{\sqrt{2\pi\sigma_t^2}} \exp\left(-\frac{a_t^2}{2\sigma_t^2}\right)
$$

where $\boldsymbol{\alpha} = (\alpha_0, \alpha_1, ..., \alpha_m)'$.

## Log-Likelihood Function

Taking the logarithm:

$$
\ell(\boldsymbol{\alpha}) = \sum_{t=m+1}^{T} \left[ -\frac{1}{2}\ln(2\pi) - \frac{1}{2}\ln(\sigma_t^2) - \frac{1}{2}\frac{a_t^2}{\sigma_t^2} \right]
$$

Simplified form (dropping constants):

$$
\boxed{\ell(\boldsymbol{\alpha}) = -\frac{1}{2} \sum_{t=m+1}^{T} \left[ \ln(\sigma_t^2) + \frac{a_t^2}{\sigma_t^2} \right]}
$$

## For GARCH Models

The log-likelihood has the same form, but $\sigma_t^2$ follows the GARCH specification:

$$
\sigma_t^2 = \alpha_0 + \sum_{i=1}^{m} \alpha_i a_{t-i}^2 + \sum_{j=1}^{s} \beta_j \sigma_{t-j}^2
$$

Parameters: $\boldsymbol{\theta} = (\alpha_0, \alpha_1, ..., \alpha_m, \beta_1, ..., \beta_s)'$

## Estimation

**Objective:**

$$
\hat{\boldsymbol{\theta}} = \arg\max_{\boldsymbol{\theta}} \ell(\boldsymbol{\theta})
$$

**Subject to constraints:**

- $\alpha_0 > 0$
- $\alpha_i \geq 0$, $\beta_j \geq 0$
- Stationarity condition: $\sum(\alpha_i + \beta_i) < 1$

**Methods:**

- Numerical optimization (Newton-Raphson, BFGS)
- Most statistical software uses quasi-Newton methods

## Alternative Distributional Assumptions

| Distribution | Purpose | Heavy Tails |
|-------------|---------|-------------|
| Normal (default) | Standard case | No |
| Student-t | Capture heavy tails | Yes |
| Skew-Student-t | Capture skewness & heavy tails | Yes |
| Generalized Error Distribution (GED) | Flexible | Adjustable |

## Related

- [[definition-arch(m)-model_202604201223|ARCH(m) Model]]
- [[definition-garch(m,s)-model_202604201224|GARCH(m,s) Model]]
- [[procedure-building-a-volatility-model_202604201224|Building a Volatility Model]]
