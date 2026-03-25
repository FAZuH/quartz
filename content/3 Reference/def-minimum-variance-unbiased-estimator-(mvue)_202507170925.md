---
publish: true
aliases:
  - Minimum Variance Unbiased Estimator (MVUE)
  - Minimum Variance Unbiased Estimator (MVUE)
  - MVUE
  - UMVE
created: 2026-03-25T15:22:40.618+07:00
modified: 2026-03-25T15:22:40.618+07:00
published: 2026-03-25T15:22:40.618+07:00
creation-time: 2025-07-17 09:25
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let

- $X\_{1},\dots,X\_{n}$ : [[mathstat4.1#Definition 4.1.1 Random sample|Random sample]]
- $Y = u(X\_{1},\dots,X\_{n})$ : [[mathstat4.1#Definition 4.1.2 Statistic|Statistic]]
- $\theta$ : Parameter

If

- $Y$ : [[mathstat4.1#Definition 4.1.3 Unbiased estimator|Unbiased estimator]] of $\theta$
- $\operatorname{Var}(Y)$ is lower than every other unbiased estimator of $\theta$

Then $Y$ is the **mininum variance unbiased estimator** (MVUE) of $\theta$

## Remark

We usually use [[unique-mvue-(umvue)_202507170937|Lehmann and Scheffe Theorem]] to prove that a statistic is MVUE.
