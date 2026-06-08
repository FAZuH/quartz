---
publish: true
aliases:
  - Sample Autocorrelation
  - Sample ACF
created: 2026-04-09T23:07:39.575+07:00
modified: 2026-04-09T23:07:39.576+07:00
published: 2026-04-09T23:07:39.576+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

Let

- $z_{1},z_{2},\dots,z_{n}$ : [[Def-random-sample|Random sample]]
- $\bar{z} = \frac{1}{n} \sum^n z_{i}$ : Sample mean of $z_{1},\dots,z_{n}$

The **sample autocorrelation** at [[lag-definition_202603161400|lag]] $k$ is defined as

$$
r_k = \frac{\sum_{t=k+1}^n (z_t - \bar{z})(z_{t-k} - \bar{z})}{\sum_{t=1}^n (z_t - \bar{z})^2}
$$
