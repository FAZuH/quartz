---
publish: true
aliases:
  - Greenwood's Formula
created: 2026-03-30T13:58:25.260+07:00
modified: 2026-03-30T13:58:25.260+07:00
published: 2026-03-30T13:58:25.260+07:00
creation-time: 2026-03-28 16:00
status: in progress
parent:
  - "[[survival-model]]"
---

## Definition

**Greenwood's Formula** estimates the variance of the Kaplan-Meier estimator:

$$\widehat{\operatorname{Var}}\[\hat{S}(t)] = \[\hat{S}(t)]^2 \sum\_{t\_i \leq t} \frac{d\_i}{Y\_i(Y\_i - d\_i)}$$

The standard error is:

$$\widehat{\operatorname{SE}}\[\hat{S}(t)] = \sqrt{\widehat{\operatorname{Var}}\[\hat{S}(t)]}$$

where:

- $\hat{S}(t)$ =[[def-kaplan-meier-estimator_202603281500|Kaplan-Meier estimate]] at time $t$
- $d\_i$ = number of events at time $t\_i$
- $Y\_i$ = number at risk just before $t\_i$

## About

> <u>This is NOT the normal formula for sample proportion variance.</u>

Greenwood's formula accounts for the fact that $\hat{S}(t)$ is a **product** of conditional probabilities, not a simple average. The variance accumulates multiplicatively through the product-limit estimation.

> [!NOTE]
> Terms where $d\_i = Y\_i$ (everyone at risk fails) are excluded to avoid division by zero.

## Related

- [[def-kaplan-meier-estimator_202603281500|Kaplan-Meier Estimator]]
- [[def-survival-function_202603281500|Survival Function]]
