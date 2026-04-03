---
publish: true
aliases:
  - Partial Autocorrelation
  - PACF
created: 2026-03-30T02:23:37.097+07:00
modified: 2026-03-30T02:30:22.377+07:00
published: 2026-03-30T02:30:22.377+07:00
cssclasses: ""
creation-time: 2026-03-30 02:23
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---


## Definition

The **partial autocorrelation** $\phi_{kk}$ measures the correlation between $Y_t$ and $Y_{t-k}$ after removing the linear effects of the intermediate variables $Y_{t-1}, Y_{t-2}, \dots, Y_{t-k+1}$.

$$\phi_{kk} = \operatorname{Corr}(Y_t - \hat{Y}_t, Y_{t-k} - \hat{Y}_{t-k})$$

where $\hat{Y}_t$ and $\hat{Y}_{t-k}$ are linear predictors based on intermediate values.

### Convention

$$\phi_{11} = \rho_1 \quad \text{(first lag PACF equals ACF)}$$

### Formula for Lag 2

$$\phi_{22} = \frac{\rho_2 - \rho_1^2}{1 - \rho_1^2}$$

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

- [[3 Reference/sample-autocorrelation_202603161400\|Sample Autocorrelation (ACF)]]
- [[3 Reference/autocovariance-and-autocorrelation_202603161400\|Autocovariance and Autocorrelation]]
- [[3 Reference/arp-process-model_202603161400\|AR(p) Process Model]]
- [[3 Reference/ma1-process-model_202603161400\|MA(1) Process Model]]