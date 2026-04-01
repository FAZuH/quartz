---
publish: true
aliases:
  - Sample Autocorrelation
  - Sample ACF
created: 2026-03-29T17:33:47.075+07:00
modified: 2026-03-31T16:03:07.861+07:00
published: 2026-03-31T16:03:07.861+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

Let

- $z\_{1},z\_{2},\dots,z\_{n}$ : [[Def-random-sample|Random sample]]
- $\bar{z} = \frac{1}{n} \sum^n z\_{i}$ : Sample mean of $z\_{1},\dots,z\_{n}$

The **sample autocorrelation** at [[lag-definition_202603161400|lag]] $k$ is defined as
$$
r\_k = \frac{\sum\_{t=k+1}^n (z\_t - \bar{z})(z\_{t-k} - \bar{z})}{\sum\_{t=1}^n (z\_t - \bar{z})^2}
$$
