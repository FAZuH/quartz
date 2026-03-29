---
publish: true
aliases:
  - Log Transformation
created: 2026-03-29T17:33:47.075+07:00
modified: 2026-03-29T17:33:47.075+07:00
published: 2026-03-29T17:33:47.075+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Procedure

Used when the variance of a time series increases with the level of the series.

1. Apply the natural logarithm to the data: $Y\_t = \ln(Z\_t)$.
2. This stabilizes the variance (making it constant) if the standard deviation is proportional to the mean.
3. Model the transformed series $Y\_t$ (often followed by [[differencing-to-achieve-stationarity_202603161400|differencing]]).
