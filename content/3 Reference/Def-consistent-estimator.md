---
publish: true
aliases:
  - Consistent Estimator
created: 2026-03-25T15:22:40.614+07:00
modified: 2026-03-25T15:22:40.614+07:00
published: 2026-03-25T15:22:40.614+07:00
creation-time: 2025-07-15 07:28
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let

- $X$ : [[Def-random-variable|Random variable]], with
  - $\Omega$ : Parameter space
  - [[mathstat1.5#Definition 1.5.2 Cumulative distribution function (cdf)|cdf]] $F(x;\theta\in \Omega)$
- $X\_{1},\dots, X\_{n}$  : [[mathstat4.1#Definition 4.1.1 Random sample|Random sample]] of $X$
- $T\_{n}$ : [[mathstat4.1#Definition 4.1.2 Statistic|Statistic]]

If
$$
T\_{n}\xrightarrow P \theta
$$

Then we say $T\_{n}$ is a **consistent** [[Def-estimator|estimator]] of $\theta$
