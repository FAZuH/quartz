---
publish: true
aliases:
  - Autocovariance
  - Autocorrelation
created: 2026-03-29T17:33:47.073+07:00
modified: 2026-03-30T01:10:48.841+07:00
published: 2026-03-30T01:10:48.841+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

Let ${ Y\_{t} }$ set of [[Def-random-variable|random variable]] with [[Def-mean|mean]] $\mu\_{s}$

$$
\begin{aligned}
\mu\_t &= E\[Y\_t] \\
\gamma\_{t,s} &= \operatorname{Cov}(Y\_t, Y\_s) = E\[(Y\_t - \mu\_t)(Y\_s - \mu\_s)] \\
\rho\_{t,s} &= \operatorname{Corr}(Y\_t, Y\_s) = \frac{\gamma\_{t,s}}{\sqrt{\gamma\_{t,t} \gamma\_{s,s}}}
\end{aligned}
$$

> [!tip]
> autocov and autocorr is, respectively, cov and corr of 2 random variables from same sequence at two time points
>
> Just memorize cov and corr formulas.

> [!recall]
>
> - $E\[X]$ : [[Def-expectation|Expectation]] of random variable $X$
> - $\text{Cov}(X,Y)$ : [[2.5-the-correlation-coefficient_202603291924#Definition Covariance|Covariance]]
> - $\text{Corr}(X,Y)$ : [[2.5-the-correlation-coefficient_202603291924#Definition Correlation Coefficient|Correlation]]

## Properties

$$
\begin{array}{ll}
\gamma\_{t,t} = \operatorname{Var}(Y\_t)  &  &  \rho\_{t,t} = 1  \\
\gamma\_{t,s} = \gamma\_{s,t}  &  &  \rho\_{t,s} = \rho\_{s,t} \\
|\gamma\_{t,s}| \leq \sqrt{\gamma\_{t,t},\gamma\_{s,s}}  &  &  |\rho\_{t,s}| \leq 1 \end{array}
$$
