---
publish: true
aliases:
  - Weakly Stationary
created: 2026-03-16T11:04:48.722+07:00
modified: 2026-03-16T13:34:17.402+07:00
published: 2026-03-16T13:34:17.402+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: baby
parent: "[[forecasting methods]]"
---


## Definition

Let $\gamma$ : Function of the lag $k$ and is independent of $t$.

A [[3 Reference/stochastic-process_202603161400\|stochastic process]] $\{Y_t\}$ is **weakly stationary** 

If it satisfies three conditions:
1.  $E[Y_t] = \mu$   (constant mean)
2.  $\operatorname{Var}(Y_t) < \infty,\quad\forall t$   (finite variance)
3.  $\operatorname{Cov}(Y_t, Y_{t-k}) = \gamma_k$    (cov independent of $t$)

## Relationship with Strict Stationarity

If a [[3 Reference/stochastic-process_202603161400\|stochastic process]] $\{ Y_{t} \}$ is [[3 Reference/strictly-stationary_202603161400\|strictly stationary]] and $\operatorname{Var}(Y_{t})$ is finite for all $t$, then $\{ Y_{t} \}$ is also weakly stationary.
