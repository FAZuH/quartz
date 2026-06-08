---
publish: true
aliases:
  - GARCH(m,s) Model
created: 2026-04-20T12:24:17.558+07:00
modified: 2026-05-17T17:36:33.948+07:00
published: 2026-05-17T17:36:33.948+07:00
creation-time: 2026-04-20 12:24
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

A **Generalized Autoregressive Conditionally Heteroscedastic** model extends [[definition-arch(m)-model_202604201223|ARCH]] by including lagged conditional variances, providing a more parsimonious representation of volatility dynamics.

## Definition

Let $\{a_t\}$ be shocks from a mean equation. A **[[definition-garch(m,s)-model_202604201224|GARCH(m,s)]]** model is:

$$
a_t = \sigma_t \epsilon_t, \quad \sigma_t^2 = \alpha_0 + \sum_{i=1}^{m} \alpha_i a_{t-i}^2 + \sum_{j=1}^{s} \beta_j \sigma_{t-j}^2
$$

where:

- $\epsilon_t \sim \text{i.i.d.}(0, 1)$
- $\alpha_0 > 0$, $\alpha_i \geq 0$ (at least one $\alpha_i > 0$), $\beta_j \geq 0$
- $\sum_{i=1}^{\max(m,s)} (\alpha_i + \beta_i) < 1$ ([[weakly-stationary_202603161400|Weakly Stationary]])

## GARCH(1,1) as Special Case

The most widely used specification:

$$
\sigma_t^2 = \alpha_0 + \alpha_1 a_{t-1}^2 + \beta_1 \sigma_{t-1}^2
$$

This simple 3-parameter model often outperforms high-order ARCH models.

## Relationship to ARCH

When $\beta_j = 0$ for all $j$:

$$
\text{GARCH}(m,s) \Rightarrow \text{ARCH}(m)
$$

## Unconditional Variance

For a stationary GARCH(m,s) process:

$$
E(a_t^2) = \frac{\alpha_0}{1 - \sum_{i=1}^{\max(m,s)} (\alpha_i + \beta_i)}
$$

For GARCH(1,1):

$$
E(a_t^2) = \frac{\alpha_0}{1 - \alpha_1 - \beta_1}, \quad \alpha_1 + \beta_1 < 1
$$

## ARMA Representation

A GARCH(m,s) can be written as [[armapq-process-model_202603161400|ARMA]] for $a_t^2$:

$$
a_t^2 = \alpha_0 + \sum_{i=1}^{\max(m,s)} (\alpha_i + \beta_i) a_{t-i}^2 + \eta_t - \sum_{j=1}^{s} \beta_j \eta_{t-j}
$$

where $\eta_t = a_t^2 - \sigma_t^2$ is a martingale difference.

## Kurtosis (Heavy Tails)

For GARCH(1,1) with Gaussian innovations (when $1 - (\alpha_1 + \beta_1)^2 - 2\alpha_1^2 > 0$):

$$
\text{Kurtosis} = \frac{3[1 - (\alpha_1 + \beta_1)^2]}{1 - (\alpha_1 + \beta_1)^2 - 2\alpha_1^2} > 3
$$

## Volatility Persistence

The parameters have distinct roles:

| Parameter | Role | Interpretation |
|-----------|------|----------------|
| $\alpha_1$ | Response to news | Larger $\alpha_1$ = bigger response to new information ($a_t \to \sigma_{t+1}^2$) |
| $\beta_1$ | Persistence | Larger $\beta_1$ = more persistence in conditional variance ($\sigma_t^2 \to \sigma_{t+1}^2$) |

## Related

- [[definition-arch(m)-model_202604201223|ARCH(m) Model]]
- [[about-principle-of-parsimony-in-econometric-modeling_202604201222|Principle of Parsimony]]
- [[about-arma-vs-arch-garch-relationship_202604201222|ARMA vs ARCH/GARCH Relationship]]
