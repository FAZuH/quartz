---
publish: true
aliases:
  - Greenwood's Formula
created: 2026-03-30T13:58:25.260+07:00
modified: 2026-04-07T10:18:31.400+07:00
published: 2026-04-07T10:18:31.400+07:00
cssclasses: ""
creation-time: 2026-03-28 16:00
status: in progress
parent:
  - "[[survival-model]]"
---


## Definition

**Greenwood's Formula** estimates the [[3 Reference/Def-variance\|variance]] of the [[3 Reference/def-kaplan-meier-estimator_202603281500\|Kaplan-Meier estimator]]:

$$\widehat{\operatorname{Var}}[\hat{S}(t)] = [\hat{S}(t)]^2 \sum_{t_i \leq t} \frac{d_i}{Y_i(Y_i - d_i)}$$

The standard error is:

$$\widehat{\operatorname{SE}}[\hat{S}(t)] = \sqrt{\widehat{\operatorname{Var}}[\hat{S}(t)]}$$

where:
- $\hat{S}(t)$ =[[3 Reference/def-kaplan-meier-estimator_202603281500\|Kaplan-Meier estimate]] at time $t$
- $d_i$ = number of events at time $t_i$
- $Y_i$ = number at risk just before $t_i$

## About

><u>This is NOT the normal formula for sample proportion variance.</u>

Greenwood's formula accounts for the fact that $\hat{S}(t)$ is a **product** of conditional probabilities, not a simple average. The variance accumulates multiplicatively through the product-limit estimation.

> [!NOTE]
> Terms where $d_i = Y_i$ (everyone at risk fails) are excluded to avoid division by zero.

## Related

- [[3 Reference/def-kaplan-meier-estimator_202603281500\|Kaplan-Meier Estimator]]
- [[3 Reference/def-survival-function_202603281500\|Survival Function]]