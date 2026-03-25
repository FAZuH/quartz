---
publish: true
aliases:
  - Weakly Stationary
created: 2026-03-25T15:22:40.626+07:00
modified: 2026-03-25T15:22:40.626+07:00
published: 2026-03-25T15:22:40.626+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

Let $\gamma$ : Function of the lag $k$ and is independent of $t$.

A [[stochastic-process_202603161400|stochastic process]] ${Y\_t}$ is **weakly stationary**

If it satisfies two conditions:

1. $E\[Y\_t] = \mu$   (constant mean)
2. $\operatorname{Cov}(Y\_t, Y\_{t-k}) = \gamma\_k$    (cov independent of $t$)

## Relationship with Strict Stationarity

If a [[stochastic-process_202603161400|stochastic process]] ${ Y\_{t} }$ is [[strictly-stationary_202603161400|strictly stationary]] and $\operatorname{Var}(Y\_{t})$ is finite for all $t$, then ${ Y\_{t} }$ is also weakly stationary.
