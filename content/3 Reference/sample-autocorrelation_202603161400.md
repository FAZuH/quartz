---
publish: true
aliases:
  - Sample Autocorrelation
  - ACF
created: 2026-03-16T11:09:31.667+07:00
modified: 2026-03-16T11:09:31.667+07:00
published: 2026-03-16T11:09:31.667+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: baby
parent: "[[forecasting methods]]"
---


## Definition

For a realization $z_1, z_2, \dots, z_n$, the sample autocorrelation at lag $k$ is estimated as:
$$r_k = \frac{\sum_{t=k+1}^n (z_t - \bar{z})(z_{t-k} - \bar{z})}{\sum_{t=1}^n (z_t - \bar{z})^2}$$
where $\bar{z}$ is the sample mean.
