---
publish: true
aliases:
  - ARMA(1,1) Process Model
created: 2026-03-29T17:33:47.073+07:00
modified: 2026-04-02T11:54:50.088+07:00
published: 2026-04-02T11:54:50.088+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---


## Definition

Let $\{ a_{t} \}$ be [[3 Reference/white-noise_202603161400\|white noise]] with variance $\sigma^{2}_{a}$. ARMA(1,1) is defined as:

$$Z_t = \phi Z_{t-1} + a_t - \theta a_{t-1}$$

## Stationarity

[[3 Reference/weakly-stationary_202603161400\|Stationary]] if $|\phi| < 1$ 

[[3 Reference/invertible-ma(q)-process_202603311948 1\|Invertible]] if $|\theta| < 1$.

## Properties

| Property        | Expression                                                                                                                                                                                    |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Autocovariance  | <br>$$\begin{cases}  \dfrac{ \textcolor{cyan}{1-2\theta \phi+\theta^{2}}}{1-\phi^{2}}\sigma^{2}_{e}, & k=0  \\ \phi \gamma_{0} - \theta \sigma^{2}_{e}, & k=1 \\ \phi \gamma_{k-1}, & k\geq 2 \end{cases} $$<br> |
| Autocorrelation | $$\frac{(1 - \phi \theta)(\phi - \theta)}{\textcolor{cyan}{1 - 2 \theta \phi + \theta^2}} \phi^{k-1}, \quad k \geq 1$$                                                                                          |

The ACF decays exponentially like an [[3 Reference/arp-process-model_202603161400\|AR(1)]] but starting from $\rho_1$ instead of $\rho_0$ like [[3 Reference/ma1-process-model_202603161400\|MA(1)]].

## General Linear Process Representation

ARMA(1,1) process can be represented as [[3 Reference/general-linear-process_202603161400\|general linear process]] with $\psi_{j} = (\phi-\theta)\phi^{j-1}$ :

$$
Z_{t} =  a_{t} + (\phi-\theta)\sum_{j=1}^{\infty}\phi^{j-1}a_{t-j}
$$