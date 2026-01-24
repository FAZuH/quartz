---
publish: true
aliases:
  - Minimum Variance Unbiased Estimator (MVUE)
  - Minimum Variance Unbiased Estimator (MVUE)
  - MVUE
  - UMVE
created: 2025-10-14T04:15:27.061+07:00
modified: 2025-10-14T04:15:27.061+07:00
published: 2025-10-14T04:15:27.061+07:00
cssclasses: ""
creation-time: 2025-07-17 09:25
status: baby
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