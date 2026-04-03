---
publish: true
aliases:
  - Minimum Variance Unbiased Estimator (MVUE)
  - MVUE
  - UMVE
created: 2026-03-25T15:22:40.618+07:00
modified: 2026-03-31T09:13:48.120+07:00
published: 2026-03-31T09:13:48.120+07:00
cssclasses: ""
creation-time: 2025-07-17 09:25
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---


## Definition

Let
- $X_{1},\dots,X_{n}$ : [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|Random sample]]
- $Y = u(X_{1},\dots,X_{n})$ : [[3 Reference/mathstat4.1#Definition 4.1.2 Statistic\|Statistic]]
- $\theta$ : Parameter

If
- $Y$ : [[3 Reference/mathstat4.1#Definition 4.1.3 Unbiased estimator\|Unbiased estimator]] of $\theta$
- $\operatorname{Var}(Y)$ is lower than every other unbiased estimator of $\theta$

Then $Y$ is the **mininum variance unbiased estimator** (MVUE) of $\theta$

## Remark

We usually use [[3 Reference/unique-mvue-(umvue)_202507170937\|Lehmann and Scheffe Theorem]] to prove that a statistic is MVUE.