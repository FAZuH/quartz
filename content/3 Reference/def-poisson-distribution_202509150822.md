---
publish: true
aliases:
  - Poisson Distribution
created: 2026-03-25T15:22:40.591+07:00
modified: 2026-04-03T18:48:12.098+07:00
published: 2026-04-03T18:48:12.098+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-09-15 08:22
status: in progress
parent:
  - "[[mathematical-statistics]]"
---


## Definition

$X \sim \text{Poisson}(\lambda)$

Models number of [[3 Reference/Def-events\|events]] occurring in fixed intervals of time/space when:

- Events are independent of one another
- [[3 Reference/Def-probability-mass-function-(pmf)\|pmf]]: $\dfrac{e^{-\lambda}\lambda^x}{x!}$, $x \in {0,1,2,\ldots}$, $\lambda > 0$
- [[3 Reference/Def-mean\|mean]]: $\lambda$ (events occur at <u>constant rate</u> $\lambda$)
- [[3 Reference/Def-variance\|variance]]: $\lambda$
- [[3 Reference/Def-moment-generating-function-(mgf)\|mgf]]: $e^{\lambda(e^t-1)}$

## Notes

When modeling count data, use [[3 Reference/def-negative-binomial-distribution_202509150822\|negative binomial distribution]] instead of [[3 Reference/def-poisson-distribution_202509150822\|poisson distribution]] to handle [[3 Reference/overdispersion_202509150835\|overdispersion]].

Count data refers to numerical data that represents the number of times an event occurs.

The Poisson distribution is suitable for count data when the <u>mean and variance are approximately equal</u>, assuming events occur independently and at a constant average rate.

However, in real-world count data, overdispersion often occurs, where the variance exceeds the mean due to factors like clustering or unobserved heterogeneity.

The negative binomial distribution accommodates this overdispersion by introducing an additional parameter to model the variance more flexibly.

## Connection to Poisson Process

The Poisson distribution arises naturally in the [[3 Reference/poisson-process_202604031845\|Poisson Process]]: if events occur according to a Poisson process of rate $\lambda$, then the number of events in any interval of length $t$ follows $\text{Po}(\lambda t)$.

Key theorems:
- **[[3 Reference/sum-of-poisson-random-variables_202604031845\|Sum of Poisson RVs]]**: If $X \sim \text{Po}(\mu)$ and $Y \sim \text{Po}(\nu)$ are independent, then $X + Y \sim \text{Po}(\mu + \nu)$.
- **[[3 Reference/poisson-binomial-distribution_202604031845\|Poisson-Binomial]]**: If $N \sim \text{Po}(\mu)$ and $M \mid N \sim \text{Bin}(N, p)$, then $M \sim \text{Po}(\mu p)$.