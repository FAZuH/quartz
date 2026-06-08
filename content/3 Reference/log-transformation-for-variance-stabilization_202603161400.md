---
publish: true
aliases:
  - Log Transformation
created: 2026-04-09T23:07:39.451+07:00
modified: 2026-04-09T23:07:39.452+07:00
published: 2026-04-09T23:07:39.452+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Procedure

Used when the [[autocovariance-and-autocorrelation_202603161400|variance]] of a time series increases with the level of the series.

1. Apply the natural logarithm to the data: $Y_t = \ln(Z_t)$.
2. This stabilizes the variance (making it constant) if the standard deviation is proportional to the mean.
3. Model the transformed series $Y_t$ (often followed by [[differencing-to-achieve-stationarity_202603161400|differencing]]).
