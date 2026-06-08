---
publish: true
aliases:
  - ARCH(m) Model
created: 2026-04-20T12:23:57.481+07:00
modified: 2026-05-17T17:37:20.414+07:00
published: 2026-05-17T17:37:20.414+07:00
creation-time: 2026-04-20 12:23
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

An **Autoregressive Conditionally Heteroscedastic** model of order $m$ captures time-varying volatility by making the conditional [[definition-conditional-variance_202604201223|variance]] a function of past squared shocks.

## Definition

Let $\{a_t\}$ be a series of shocks ([[univariate-vs-multivariate-models_202603161400|residuals]]) from a mean equation. An **ARCH(m)** model is:

$$
a_t = \sigma_t \epsilon_t, \quad \sigma_t^2 = \alpha_0 + \sum_{i=1}^{m} \alpha_i a_{t-i}^2
$$

where:

- $\epsilon_t \sim \text{i.i.d.}(0, 1)$ ([[white-noise_202603161400|white noise]] with unit variance)
- $\alpha_0 > 0$ and $\alpha_i \geq 0$ for $i = 1, ..., m$ (ensures positive variance)

## ARCH(1) as Special Case

When $m = 1$:

$$
\sigma_t^2 = \alpha_0 + \alpha_1 a_{t-1}^2
$$

A large value of $a_{t-1}^2$ leads to a large conditional variance at time $t$, creating **volatility clustering**.

## Unconditional Mean

$$
E(a_t) = E(\sigma_t \epsilon_t) = E(\sigma_t)E(\epsilon_t) = 0
$$

The unconditional mean of an ARCH process is **zero**.

## Unconditional Variance

Assuming [[weakly-stationary_202603161400|stationarity]] ($\sum_{i=1}^m \alpha_i < 1$):

$$
\text{Var}(a_t) = E(a_t^2) = \frac{\alpha_0}{1 - \sum_{i=1}^m \alpha_i}
$$

For ARCH(1) specifically:

$$
\text{Var}(a_t) = \frac{\alpha_0}{1 - \alpha_1}, \quad 0 \leq \alpha_1 < 1
$$

## Kurtosis (Heavy Tails)

For ARCH(1) with Gaussian innovations, the kurtosis is:

$$
\text{Kurtosis} = \frac{E(a_t^4)}{[E(a_t^2)]^2} = \frac{3(1 - \alpha_1^2)}{1 - 3\alpha_1^2} > 3
$$

This requires $0 \leq \alpha_1^2 < \frac{1}{3}$ for the fourth moment to exist.

> [!TIP] Interpretation
> The **excess kurtosis** is positive, meaning the tail distribution of $a_t$ is **heavier than normal**—a key fact of financial returns.

## Serial Correlation Properties

- $a_t$ is **serially uncorrelated**: $\text{Cov}(a_t, a_{t-k}) = 0$ for $k \neq 0$
- But $a_t$ is **dependent**: $a_t^2$ follows an AR(m) process

## Related

- [[definition-garch(m,s)-model_202604201224|GARCH(m,s) Model]]
- [[about-arma-vs-arch-garch-relationship_202604201222|ARMA vs ARCH/GARCH Relationship]]
- [[definition-conditional-variance_202604201223|Conditional Variance]]
