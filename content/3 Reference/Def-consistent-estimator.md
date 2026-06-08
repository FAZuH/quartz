---
publish: true
aliases:
  - Consistent Estimator
created: 2026-04-09T23:07:39.116+07:00
modified: 2026-04-09T23:07:39.117+07:00
published: 2026-04-09T23:07:39.117+07:00
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
- $X_{1},\dots, X_{n}$  : [[mathstat4.1#Definition 4.1.1 Random sample|Random sample]] of $X$
- $T_{n}$ : [[mathstat4.1#Definition 4.1.2 Statistic|Statistic]]

If

$$
T_{n}\xrightarrow P \theta
$$

Then we say $T_{n}$ is a **consistent** [[Def-estimator|estimator]] of $\theta$
