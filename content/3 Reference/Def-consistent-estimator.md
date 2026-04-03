---
publish: true
aliases:
  - Consistent Estimator
created: 2026-03-25T15:22:40.614+07:00
modified: 2026-03-25T15:22:40.614+07:00
published: 2026-03-25T15:22:40.614+07:00
cssclasses: ""
creation-time: 2025-07-15 07:28
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---


## Definition

Let
- $X$ : [[3 Reference/Def-random-variable\|Random variable]], with
	- $\Omega$ : Parameter space
	- [[3 Reference/mathstat1.5#Definition 1.5.2 Cumulative distribution function (cdf)\|cdf]] $F(x;\theta\in \Omega)$
- $X_{1},\dots, X_{n}$  : [[3 Reference/mathstat4.1#Definition 4.1.1 Random sample\|Random sample]] of $X$
- $T_{n}$ : [[3 Reference/mathstat4.1#Definition 4.1.2 Statistic\|Statistic]]

If
$$
T_{n}\xrightarrow P \theta
$$

Then we say $T_{n}$ is a **consistent** [[3 Reference/Def-estimator\|estimator]] of $\theta$