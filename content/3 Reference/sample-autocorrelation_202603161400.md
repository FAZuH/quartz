---
publish: true
aliases:
  - Sample Autocorrelation
  - ACF
created: 2026-03-29T17:33:47.075+07:00
modified: 2026-03-29T17:33:47.075+07:00
published: 2026-03-29T17:33:47.075+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

For a realization $z\_1, z\_2, \dots, z\_n$, the sample autocorrelation at lag $k$ is estimated as:
$$r\_k = \frac{\sum\_{t=k+1}^n (z\_t - \bar{z})(z\_{t-k} - \bar{z})}{\sum\_{t=1}^n (z\_t - \bar{z})^2}$$
where $\bar{z}$ is the sample mean.
