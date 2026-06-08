---
publish: true
aliases:
  - Weakly Stationary
created: 2026-04-09T23:07:39.773+07:00
modified: 2026-04-09T23:07:39.774+07:00
published: 2026-04-09T23:07:39.774+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

Let $\gamma$ : Function of the [[lag-definition_202603161400|lag]] $k$ and is independent of $t$.

A [[stochastic-process_202603161400|stochastic process]] $\{Y_t\}$ is **weakly stationary**

If it satisfies two conditions:

1. $E[Y_t] = \mu$   (constant [[Def-mean|mean]])
2. $\operatorname{Cov}(Y_t, Y_{t-k}) = \gamma_k$    ([[2.5-the-correlation-coefficient_202603291924|covariance]] independent of $t$)

## Weakly Stationary Process has Constant Variance

$\{ Y_{t} \}$ is **weakly stationary**, then $\gamma_{0} = \text{Cov}(Y_{t},Y_{t-0}) = \text{Var}(Y_{t})$ is constant, independent of $t$.

## Relationship with Strict Stationarity

![[strictly-stationary_202603161400#Relationship with Weak Stationarity]]

## Illustration

![[assets/weakly-stationary_202603161400-1774817087203.png]]
