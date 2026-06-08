---
publish: true
aliases:
  - Partial Autocorrelation
  - PACF
created: 2026-04-09T23:07:39.545+07:00
modified: 2026-06-02T10:48:34.437+07:00
published: 2026-06-02T10:48:34.437+07:00
creation-time: 2026-03-30 02:23
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

## Definition

The **partial autocorrelation** $\phi_{kk}$ measures the correlation between $Y_t$ and $Y_{t-k}$ after removing the linear effects of the intermediate variables $Y_{t-1}, Y_{t-2}, \dots, Y_{t-k+1}$.

$\phi_{kk} = \operatorname{Corr}(Y_t - \hat{Y}_t, Y_{t-k} - \hat{Y}_{t-k})$

where $\hat{Y}_t$ and $\hat{Y}_{t-k}$ are linear predictors based on intermediate values.

### Convention

$\phi_{11} = \rho_1 \quad \text{(first lag PACF equals ACF)}$

### Formula for Lag 2

$\phi_{22} = \frac{\rho_2 - \rho_1^2}{1 - \rho_1^2}$

## Computing PACF via Yule-Walker Equations

For lag $k$, the last coefficient $\phi_{kk}$ from the Yule-Walker system gives the PACF:

$$
\begin{align}
\begin{bmatrix}
1 & \rho_1 & \cdots & \rho_{k-1} \\
\rho_1 & 1 & \cdots & \rho_{k-2} \\
\vdots & \vdots & \ddots & \vdots \\
\rho_{k-1} & \rho_{k-2} & \cdots & 1
\end{bmatrix}
\begin{bmatrix}
\phi_{k1} \\ \phi_{k2} \\ \vdots \\ \phi_{kk}
\end{bmatrix}
 & =
\begin{bmatrix}
\rho_1 \\ \rho_2 \\ \vdots \\ \rho_k
\end{bmatrix} \\
\mathbf{P} \boldsymbol{\phi} & = \boldsymbol{\rho}
\end{align}
$$

> [!note]
> Can be used to estimate $\boldsymbol{\phi}$ with [[method-of-moments_202604052126|Method of Moments]] :
>
> $$
> \hat{\boldsymbol{\phi}} = \hat{\mathbf{P}}^{-1}\hat{\boldsymbol{\rho}}
> $$

> PACF at lag $k$ = $\phi_{kk}$ (the last coefficient), obtained by solving the $k$-equation Yule-Walker system.

$$
\rho_{k} = \rho_{k-1}\phi_{k1} + \rho_{k-2}\phi_{k2} + \dots + \phi_{kk}
$$

### Step-by-Step: Finding $\phi_{22}$

Given $\rho_1, \rho_2$, set up the $k=2$ system:

$$$\begin{aligned}
\rho_1 &= \phi_{21} \cdot 1 + \phi_{22} \cdot \rho_1 \\
\rho_2 &= \phi_{21} \cdot \rho_1 + \phi_{22} \cdot 1
\end{aligned}$$

Solve: $\phi_{22} = \frac{\rho_2 - \rho_1^2}{1 - \rho_1^2}$.

### Recursive Method (Durbin-Levinson)

For each lag $k$ from 1 upward:

$$\phi_{kk} = \frac{\rho_\textcolor{yellow}{k} - \sum_{j=1}^{k-1} \phi_{k-1,j}\,\rho_{\textcolor{yellow}{k-}j}}{1 - \sum_{j=1}^{k-1} \phi_{k-1,j}\,\rho_j}$$

Then update: $\phi_{k,j} = \phi_{k-1,j} - \phi_{kk}\,\phi_{k-1,k-j}$ for $j = 1,\dots,k-1$.

**Base case:** $\phi_{11} = \rho_1$.

> [!TIP] Key Distinction
> - **ACF** measures total correlation (direct + indirect)
> - **PACF** measures only direct correlation between $Y_t$ and $Y_{t-k}$

## Properties by Model

### AR(1)

$$\phi_{11} = \phi, \quad \phi_{kk} = 0 \text{ for } k > 1$$

**PACF cuts off after lag 1.**

### MA(1)

$$\phi_{22} = \frac{-\theta^2}{1 + \theta^2 + \theta^4}$$

**PACF never exactly zero but decays exponentially.**

## Model Identification

| Model | ACF Behavior | PACF Behavior |
|-------|--------------|---------------|
| AR(p) | Decays exponentially | **Cuts off after lag p** |
| MA(q) | **Cuts off after lag q** | Decays exponentially |
| ARMA(p,q) | Decays exponentially | Decays exponentially |

## Related

- [[sample-autocorrelation_202603161400|Sample Autocorrelation (ACF)]]
- [[autocovariance-and-autocorrelation_202603161400|Autocovariance and Autocorrelation]]
- [[arp-process-model_202603161400|AR(p) Process Model]]
- [[ma1-process-model_202603161400|MA(1) Process Model]]
$$$
