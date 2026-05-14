---
publish: true
aliases:
  - Stochastic Logistic Growth Process
created: 2026-05-08T06:23:06.545+07:00
modified: 2026-05-08T06:23:06.546+07:00
published: 2026-05-08T06:23:06.546+07:00
cssclasses: ""
creation-time: 2026-05-08 06:19
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Definition

The **Stochastic Logistic Growth Process** is a [[3 Reference/birth-and-death-process_202605080517\|birth and death process]] where birth and death rates are quadratic functions of the population size:

$$\lambda_i = b_1 i + b_2 i^2 > 0, \quad \mu_i = d_1 i + d_2 i^2 > 0$$

where the coefficients satisfy:

$$r = b_1 - d_1 > 0 \quad \text{(intrinsic growth rate)}$$
$$K = \frac{b_1 - d_1}{d_2 - b_2} > 0 \quad \text{(carrying capacity)}$$

> [!TIP] Interpretation
> This is the stochastic analog of the deterministic logistic equation $\frac{dn}{dt} = rn(1 - n/K)$. There are infinitely many choices of coefficients $(b_1, b_2, d_1, d_2)$ that yield the same $r$ and $K$, so there are infinitely many stochastic logistic models that correspond to the same deterministic model.

## Properties

**Extinction:** Extinction occurs with probability 1 ($\lim_{t \to \infty} p_0(t) = 1$) and the expected time to extinction is finite. This follows from the ratio test applied to the extinction condition, since $d_2 > b_2 \geq 0$ implies death rates dominate at large population sizes.

**Mean vs. Deterministic:** The mean $m(t)$ of the stochastic process satisfies:

$$\frac{dm}{dt} = rm(t) - \frac{r}{K}\mathbb{E}[X^2(t)] < rm(t)\left[1 - \frac{m(t)}{K}\right]$$

Thus $m(t) \leq n(t)$ where $n(t)$ is the deterministic solution — the stochastic mean is always less than the deterministic prediction.

**Density Dependence:**
- If $b_2 < 0$: birth rate decreases with population size (crowding effect on births)
- If $d_2 > 0$: death rate increases with population size (crowding effect on deaths)

## Finite vs Infinite State Space

For finite state space $\{0, 1, \ldots, N\}$: $\lambda_i = 0$ for $i \geq N$, extinction is certain.

For infinite state space: The condition $d_2 > b_2$ ensures the ratio test confirms certain extinction.

## Related

- [[3 Reference/birth-and-death-process_202605080517\|Birth and Death Process]]
- [[3 Reference/probability-of-population-extinction_202605080618\|Probability of Population Extinction]]
- [[3 Reference/expected-time-to-extinction_202605080619\|Expected Time to Extinction]]
- [[3 Reference/quasistationary-probability-distribution_202605080619\|Quasistationary Probability Distribution]]