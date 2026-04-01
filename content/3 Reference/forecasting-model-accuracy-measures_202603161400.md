---
publish: true
aliases:
  - Forecasting Model Accuracy Measures
  - MAD
  - MSD
  - MAPE
  - RMSE
created: 2026-03-29T17:33:47.075+07:00
modified: 2026-03-31T16:09:20.642+07:00
published: 2026-03-31T16:09:20.642+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Formula

Let

- $n$: number of observations
- $t$: time index
- $X\_t$: actual value at time $t$
- $\hat{X}\_t$: forecasted value at time $t$
- $X\_t - \hat{X}\_t$: forecast error at time $t$

| Measure                                                   | Formula                                                                                        | Comment                                          |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| **MAD**/**MAE**<br>(Mean <u>Absolute</u> Deviation/Error) | $$\frac{1}{n} \sum\_{t=1}^n \lvert X\_t - \hat{X}_t \rvert$$                                     | Mean absolute deviation of forecast errors       |
| **MSD**/**MSE**<br>(Mean <u>Squared</u> Deviation/Error)  | $$\frac{1}{n} \sum_{t=1}^n (X\_t - \hat{X}_t)^2$$                                               | Penalizes large errors more                      |
| **RMSE**<br>(<u>Root</u> Mean <u>Squared</u> Error)       | $$\sqrt{\frac{1}{n} \sum_{t=1}^n (X\_t - \hat{X}_t)^2}$$                                        | Same units as $X\_t$<br>interpretable form of MSE |
| **MAPE**<br>(Mean <u>Absolute Percentage</u> Error)       | $$\frac{1}{n} \sum_{t=1}^n \left\lvert \frac{X\_t - \hat{X}_t}{X\_t} \right\rvert \times 100%$$ | Scale-independent                                |
| **MPE**<br>(Mean <u>Percentage</u> Error)                 | $$\frac{1}{n} \sum_{t=1}^n \left( \frac{X\_t - \hat{X}\_t}{X\_t} \right) \times 100%$$           | Measures forecast bias                           |
