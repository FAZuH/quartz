---
publish: true
aliases:
  - Strictly Stationary
created: 2026-03-25T15:22:40.597+07:00
modified: 2026-03-25T15:22:40.597+07:00
published: 2026-03-25T15:22:40.597+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

A [[stochastic-process_202603161400|stochastic process]] ${ Y\_{t} }$ is **strictly stationary**

If for any $n\in \mathbb{Z}^+$, any set of time points ${ t\_{1},t\_{2},\dots,t\_{n} }$, lag $k$ the joint cumulative distribution function of $(Y\_{t\_1}, Y\_{t\_2}, \dots, Y\_{t\_n})$ is identical to that of $(Y\_{t\_1+k}, Y\_{t\_2+k}, \dots, Y\_{t\_n+k})$

## Relationship with Weak Stationarity

If a [[stochastic-process_202603161400|stochastic process]] ${ Y\_{t} }$ is strictly stationary and $\operatorname{Var}(Y\_{t})$ is finite for all $t$, then ${ Y\_{t} }$ is also [[weakly-stationary_202603161400|weakly stationary]].
