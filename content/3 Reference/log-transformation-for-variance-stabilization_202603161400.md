---
publish: true
aliases:
  - Log Transformation
created: 2026-03-16T11:25:54.882+07:00
modified: 2026-03-16T11:25:54.882+07:00
published: 2026-03-16T11:25:54.882+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: baby
parent: "[[forecasting methods]]"
---


## Procedure

Used when the variance of a time series increases with the level of the series.
1.  Apply the natural logarithm to the data: $Y_t = \ln(Z_t)$.
2.  This stabilizes the variance (making it constant) if the standard deviation is proportional to the mean.
3.  Model the transformed series $Y_t$ (often followed by [[3 Reference/differencing-to-achieve-stationarity_202603161400\|differencing]]).
