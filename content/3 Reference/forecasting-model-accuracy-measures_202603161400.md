---
publish: true
aliases:
  - Forecasting Model Accuracy Measures
  - MAD
  - MSD
  - MAPE
  - RMSE
created: 2026-04-09T23:07:39.395+07:00
modified: 2026-04-09T23:07:39.396+07:00
published: 2026-04-09T23:07:39.396+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Formula

Let

- $n$: number of observations
- $t$: time index
- $X_t$: actual value at time $t$
- $\hat{X}_t$: forecasted value at time $t$
- $X_t - \hat{X}_t$: forecast error at time $t$

| Measure                                                   | Formula                                                                                        | Comment                                          |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| **MAD**/**MAE**<br>(Mean <u>Absolute</u> Deviation/Error) | $\frac{1}{n} \sum_{t=1}^n \lvert X_t - \hat{X}_t \rvert$                                     | Mean absolute deviation of forecast errors       |
| **MSD**/**MSE**<br>(Mean <u>Squared</u> Deviation/Error)  | $\frac{1}{n} \sum_{t=1}^n (X_t - \hat{X}_t)^2$                                               | Penalizes large errors more                      |
| **RMSE**<br>(<u>Root</u> Mean <u>Squared</u> Error)       | $\sqrt{\frac{1}{n} \sum_{t=1}^n (X_t - \hat{X}_t)^2}$                                        | Same units as $X_t$<br>interpretable form of MSE |
| **MAPE**<br>(Mean <u>Absolute Percentage</u> Error)       | $\frac{1}{n} \sum_{t=1}^n \left\lvert \frac{X_t - \hat{X}_t}{X_t} \right\rvert \times 100\%$ | Scale-independent                                |
| **MPE**<br>(Mean <u>Percentage</u> Error)                 | $\frac{1}{n} \sum_{t=1}^n \left( \frac{X_t - \hat{X}_t}{X_t} \right) \times 100\%$           | Measures forecast bias                           |
