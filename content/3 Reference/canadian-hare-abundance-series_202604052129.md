---
publish: true
aliases:
  - Canadian Hare Abundance Series
created: 2026-04-05T21:29:45.805+07:00
modified: 2026-04-05T21:29:45.805+07:00
published: 2026-04-05T21:29:45.805+07:00
cssclasses: ""
creation-time: 2026-04-05 21:29
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---


## Example

Canadian Hare Abundance Series illustrates parameter estimation methods for a real time series dataset.

## Dataset Description

The Canadian hare abundance series records annual hare population counts in Canada over multiple decades. This series typically exhibits:
- Non-stationarity
- Possible cyclical patterns
- Need for transformation (often log)

## Model Identification

1. **Visual inspection**: Plot series, check for trend/seasonality
2. **Stationarity test**: Apply differencing if needed
3. **ACF/PACF analysis**: Identify candidate ARIMA(p,d,q) models

## Parameter Estimation Example

After identifying a candidate model (e.g., AR(1) or ARIMA(1,1,0)):

### Method of Moments
- Compute sample autocorrelation $r_1$
- For AR(1): $\hat{\phi}_1 = r_1$

### Conditional Least Squares
- Minimize $S_c(\phi) = \sum_{t=2}^n (Y_t - \hat{\mu} - \phi(Y_{t-1} - \hat{\mu}))^2$
- Solve numerically or use closed form

### Maximum Likelihood
- Specify likelihood assuming normal errors
- Estimate $\hat{\phi}$ by maximizing $\log L$
- Estimate $\hat{\sigma}_e^2 = S(\hat{\phi})/n$

## Model Comparison

Compare fitted models using:
- AIC/BIC criteria
- Residual diagnostics (Ljung-Box test)
- Forecast accuracy

## Key Lessons

- Real data often requires preprocessing (transformation, differencing)
- Multiple estimation methods provide similar results for large samples
- Model diagnostics are essential for validating estimates

## Related

- [[3 Reference/aic-criterion_202603300224\|AIC Criterion]]
- [[3 Reference/ljung-box-test_202603300222\|Ljung-Box Test]]
- [[3 Reference/maximum-likelihood-method_202604052129\|Maximum Likelihood Method]]