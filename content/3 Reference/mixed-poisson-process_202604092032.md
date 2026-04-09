---
publish: true
aliases:
  - Mixed Poisson Process
created: 2026-04-09T23:07:39.497+07:00
modified: 2026-04-09T23:07:39.498+07:00
published: 2026-04-09T23:07:39.498+07:00
cssclasses: ""
creation-time: 2026-04-09 20:32
status: in progress
tags:
parent:
  - "[[stochastic-model|Stochastic Model]]"
---


## Definition

Let $N(t), t \geq 0$ be a [[3 Reference/counting-process_202604031839\|Counting Process]].

We say that $N(t)$ is a **Mixed Poisson Process** if, conditional on a positive random variable $L = \lambda$, the process $N(t)$ is a [[3 Reference/poisson-process_202604031845\|Poisson process]] having rate $\lambda$.

If the PDF of $L$ is $g(\lambda)$, then:
$$P\{N(t+s) - N(s) = n\} = \int_0^\infty \frac{e^{-\lambda t}(\lambda t)^n}{n!} g(\lambda) d\lambda$$

## Properties

- A mixed Poisson process possesses **stationary increments**.
- It does **not** generally have independent increments. Because knowing how many events occur in an interval gives information about the possible value of $L$, which affects the distribution of the number of events in any other interval.
