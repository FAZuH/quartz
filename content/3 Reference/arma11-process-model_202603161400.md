---
publish: true
aliases:
  - ARMA(1,1) Process Model
created: 2026-03-29T17:33:47.073+07:00
modified: 2026-04-02T11:54:50.088+07:00
published: 2026-04-02T11:54:50.088+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

Let ${ a\_{t} }$ be [[white-noise_202603161400|white noise]] with variance $\sigma^{2}\_{a}$. ARMA(1,1) is defined as:

$$Z\_t = \phi Z\_{t-1} + a\_t - \theta a\_{t-1}$$

## Stationarity

[[weakly-stationary_202603161400|Stationary]] if $|\phi| < 1$

[[invertible-ma(q)-process_202603311948 1|Invertible]] if $|\theta| < 1$.

## Properties

| Property        | Expression                                                                                                                                                                                    |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Autocovariance  | <br>$$\begin{cases}  \dfrac{ \textcolor{cyan}{1-2\theta \phi+\theta^{2}}}{1-\phi^{2}}\sigma^{2}_{e}, & k=0  \ \phi \gamma_{0} - \theta \sigma^{2}_{e}, & k=1 \ \phi \gamma_{k-1}, & k\geq 2 \end{cases} $$<br> |
| Autocorrelation | $$\frac{(1 - \phi \theta)(\phi - \theta)}{\textcolor{cyan}{1 - 2 \theta \phi + \theta^2}} \phi^{k-1}, \quad k \geq 1$$                                                                                          |

The ACF decays exponentially like an [[arp-process-model_202603161400|AR(1)]] but starting from $\rho\_1$ instead of $\rho\_0$ like [[ma1-process-model_202603161400|MA(1)]].

## General Linear Process Representation

ARMA(1,1) process can be represented as [[general-linear-process_202603161400|general linear process]] with $\psi\_{j} = (\phi-\theta)\phi^{j-1}$ :

$$
Z\_{t} =  a\_{t} + (\phi-\theta)\sum\_{j=1}^{\infty}\phi^{j-1}a\_{t-j}
$$
