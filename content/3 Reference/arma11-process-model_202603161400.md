---
publish: true
aliases:
  - ARMA(1,1) Process Model
created: 2026-04-09T23:07:38.998+07:00
modified: 2026-04-09T23:07:38.999+07:00
published: 2026-04-09T23:07:38.999+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

Let $\{ a_{t} \}$ be [[white-noise_202603161400|white noise]] with variance $\sigma^{2}_{a}$. ARMA(1,1) is defined as:

$Z_t = \phi Z_{t-1} + a_t - \theta a_{t-1}$

## Stationarity

[[weakly-stationary_202603161400|Stationary]] if $|\phi| < 1$

[[invertible-ma(q)-process_202603311948 1|Invertible]] if $|\theta| < 1$.

## Properties

Assuming the model is stationary,

| Property        | Expression                                                                                                                                                                                    |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Autocovariance  | <br>$\begin{cases}  \dfrac{ \textcolor{cyan}{1-2\theta \phi+\theta^{2}}}{1-\phi^{2}}\sigma^{2}_{e}, & k=0  \\ \phi \gamma_{0} - \theta \sigma^{2}_{e}, & k=1 \\ \phi \gamma_{k-1}, & k\geq 2 \end{cases} $<br> |
| Autocorrelation | $\frac{(1 - \phi \theta)(\phi - \theta)}{\textcolor{cyan}{1 - 2 \theta \phi + \theta^2}} \phi^{k-1}, \quad k \geq 1$                                                                                          |

The ACF decays exponentially like an [[arp-process-model_202603161400|AR(1)]] but starting from $\rho_1$ instead of $\rho_0$ like [[ma1-process-model_202603161400|MA(1)]].

## General Linear Process Representation

ARMA(1,1) process can be represented as [[general-linear-process_202603161400|general linear process]] with $\psi_{j} = (\phi-\theta)\phi^{j-1}$ :

$$
Z_{t} =  a_{t} + (\phi-\theta)\sum_{j=1}^{\infty}\phi^{j-1}a_{t-j}
$$
