---
publish: true
aliases:
  - Autocovariance
  - Autocorrelation
  - ACF
created: 2026-03-29T17:33:47.073+07:00
modified: 2026-03-30T07:48:36.266+07:00
published: 2026-03-30T07:48:36.266+07:00
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

## Exmaple: Autocovariance of an AR(1) model

Let $Y\_{t} = 0.7Y\_{t-1} + e\_{t}$, where $e\_{t}\sim WN(0, \sigma^{2}\_{e})$

Notice that $0.7 < 1$. By [[ar1-process-model_202603161400#Stationarity Condition|Stationarity Condition]], $Y\_{t}$ is [[weakly-stationary_202603161400|weakly stationary]]. This means:

1. $E\[Y\_{t}] = \mu$ is constant for all $t$
2. $\gamma\_{k}$ only depends on lag $k$. It is independent of $t$

As a result of point 2, the variance is constant: $\gamma\_{0}=\text{Var}(Y\_{t}) = \sigma^{2}$

Because ${ e\_{t} }$ is independent of its past values, $Y\_{t}$ is also independent of its past values, since $Y\_{t}$ is made up of values of ${ e\_{t} }$.

Notice that
$$
\begin{align}
\text{Var}(Y\_{t}) & = E\[Y\_{t}^{2}] - E\[Y\_{t}]^{2} \\
\iff E\[Y\_{t}^{2}] & = \text{Var}(Y\_{t}) + \mu^{2} = \sigma^{2}+ \mu^{2}
\end{align}
$$

Its autocovariance at lag $1$ is
$$
\begin{align}
\gamma\_{1} & = E\[Y\_{t}Y\_{t-1}] - E\[Y\_{t}],E\[Y\_{t-1}] \\
& = E\[(0.7 Y\_{t-1} + e\_{t})Y\_{t-1}] - \mu^{2} \\
& = E\[0.7Y\_{t-1}^{2} + e\_{t}Y\_{t-1}] - \mu^{2} \\
& = 0.7E\[Y\_{t-1}^{2}] + E\[e\_{t}Y\_{t-1}] - \mu^{2} \\
& = 0.7 (\sigma^{2}+ \mu^{2}) + 0 - \mu^{2} \\
& = 0.7\sigma^{2}
\end{align}
$$

Solving for $\sigma^{2}$:
$$
\begin{align}
\text{Var}(Y\_{t}) & = \text{Var}(0.7  Y\_{t-1} + e\_{t}) \\
& = 0.49 \text{Var}(Y\_{t-1}) + \text{Var}(e\_{t}) + 2\text{Cov}(Y\_{t-1},e\_{t}) \\
\sigma^{2} & = 0.49 \sigma^{2} + \sigma^{2}_{e} \\
0.51\sigma^{2} & = \sigma^{2}_{e} \\
\iff \sigma^{2} & = \frac{\sigma^{2}\_{e}}{0.51}
\end{align}
$$

Continuing for autocovariance:
$$
\begin{align}
\gamma\_{1}  & = 0.7\left( \frac{\sigma\_{e}^{2}}{0.51} \right) \\
& = 1.372, \sigma^{2}\_{e}
\end{align}
$$
