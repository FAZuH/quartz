---
publish: true
aliases:
  - Autocovariance
  - Autocorrelation
created: 2026-03-16T11:04:48.719+07:00
modified: 2026-03-16T11:08:12.223+07:00
published: 2026-03-16T11:08:12.223+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: baby
parent: "[[forecasting methods]]"
---


## Definition

$$
\begin{aligned}
\mu_t &= E[Y_t] \\
\gamma_{t,s} &= \operatorname{Cov}(Y_t, Y_s) = E[(Y_t - \mu_t)(Y_s - \mu_s)] \\
\rho_{t,s} &= \operatorname{Corr}(Y_t, Y_s) = \frac{\gamma_{t,s}}{\sqrt{\gamma_{t,t} \gamma_{s,s}}}
\end{aligned}
$$

> [!tip]
> Respectively, cov and corr of 2 random variables from same sequence at two time points

## Properties

- $\gamma_{t,t} = \operatorname{Var}(Y_t)$
- $\rho_{t,t} = 1$
- $\rho_{t,s} = \rho_{s,t}$
- $\gamma_{t,s} = \gamma_{s,t}$
- $|\gamma_{t,s}| \leq \sqrt{\gamma_{t,t} \gamma_{s,s}}$
- $|\rho_{t,s}| \leq 1$
