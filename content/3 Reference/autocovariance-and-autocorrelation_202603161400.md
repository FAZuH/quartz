---
publish: true
aliases:
  - Autocovariance
  - Autocorrelation
  - ACF
created: 2026-03-29T17:33:47.073+07:00
modified: 2026-03-30T07:48:36.266+07:00
published: 2026-03-30T07:48:36.266+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---


## Definition

Let $\{ Y_{t} \}$ set of [[3 Reference/Def-random-variable\|random variable]] with [[3 Reference/Def-mean\|mean]] $\mu_{s}$

$$
\begin{aligned}
\mu_t &= E[Y_t] \\
\gamma_{t,s} &= \operatorname{Cov}(Y_t, Y_s) = E[(Y_t - \mu_t)(Y_s - \mu_s)] \\
\rho_{t,s} &= \operatorname{Corr}(Y_t, Y_s) = \frac{\gamma_{t,s}}{\sqrt{\gamma_{t,t} \gamma_{s,s}}}
\end{aligned}
$$

> [!tip]
> autocov and autocorr is, respectively, cov and corr of 2 random variables from same sequence at two time points
> 
> Just memorize cov and corr formulas.

> [!recall]
> - $E[X]$ : [[3 Reference/Def-expectation\|Expectation]] of random variable $X$
> - $\text{Cov}(X,Y)$ : [[3 Reference/2.5-the-correlation-coefficient_202603291924#Definition Covariance\|Covariance]]
> - $\text{Corr}(X,Y)$ : [[3 Reference/2.5-the-correlation-coefficient_202603291924#Definition Correlation Coefficient\|Correlation]]

## Properties

$$
\begin{array}{ll}
\gamma_{t,t} = \operatorname{Var}(Y_t)  &  &  \rho_{t,t} = 1  \\
\gamma_{t,s} = \gamma_{s,t}  &  &  \rho_{t,s} = \rho_{s,t} \\
|\gamma_{t,s}| \leq \sqrt{\gamma_{t,t},\gamma_{s,s}}  &  &  |\rho_{t,s}| \leq 1 \end{array} 
$$

## Exmaple: Autocovariance of an AR(1) model

Let $Y_{t} = 0.7Y_{t-1} + e_{t}$, where $e_{t}\sim WN(0, \sigma^{2}_{e})$

Notice that $0.7 < 1$. By [[3 Reference/ar1-process-model_202603161400#Stationarity Condition\|Stationarity Condition]], $Y_{t}$ is [[3 Reference/weakly-stationary_202603161400\|weakly stationary]]. This means:
1. $E[Y_{t}] = \mu$ is constant for all $t$
2. $\gamma_{k}$ only depends on lag $k$. It is independent of $t$

As a result of point 2, the variance is constant: $\gamma_{0}=\text{Var}(Y_{t}) = \sigma^{2}$

Because $\{ e_{t} \}$ is independent of its past values, $Y_{t}$ is also independent of its past values, since $Y_{t}$ is made up of values of $\{ e_{t} \}$.

Notice that
$$
\begin{align}
\text{Var}(Y_{t}) & = E[Y_{t}^{2}] - E[Y_{t}]^{2} \\
 \iff E[Y_{t}^{2}] & = \text{Var}(Y_{t}) + \mu^{2} = \sigma^{2}+ \mu^{2}
\end{align}
$$

Its autocovariance at lag $1$ is
$$
\begin{align}
\gamma_{1} & = E[Y_{t}Y_{t-1}] - E[Y_{t}]\,E[Y_{t-1}] \\
 & = E[(0.7 Y_{t-1} + e_{t})Y_{t-1}] - \mu^{2} \\
  & = E[0.7Y_{t-1}^{2} + e_{t}Y_{t-1}] - \mu^{2} \\
   & = 0.7E[Y_{t-1}^{2}] + E[e_{t}Y_{t-1}] - \mu^{2} \\
    & = 0.7 (\sigma^{2}+ \mu^{2}) + 0 - \mu^{2} \\
	 & = 0.7\sigma^{2}
\end{align}
$$

Solving for $\sigma^{2}$:
$$
\begin{align}
\text{Var}(Y_{t}) & = \text{Var}(0.7  Y_{t-1} + e_{t}) \\
 & = 0.49 \text{Var}(Y_{t-1}) + \text{Var}(e_{t}) + 2\text{Cov}(Y_{t-1},e_{t}) \\
 \sigma^{2} & = 0.49 \sigma^{2} + \sigma^{2}_{e} \\
 0.51\sigma^{2} & = \sigma^{2}_{e} \\
 \iff \sigma^{2} & = \frac{\sigma^{2}_{e}}{0.51}
\end{align}
$$

Continuing for autocovariance:
$$
\begin{align}
\gamma_{1}  & = 0.7\left( \frac{\sigma_{e}^{2}}{0.51} \right) \\
 & = 1.372\, \sigma^{2}_{e}
\end{align}
$$
