---
publish: true
aliases:
  - Coxian Distribution
created: 2026-04-03T18:46:50.818+07:00
modified: 2026-04-03T19:14:05.001+07:00
published: 2026-04-03T19:14:05.001+07:00
tags:
  - type/definition
cssclasses: ""
creation-time: 2026-04-03 18:46
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

Let $X_1, \dots, X_m$ be independent [[3 Reference/def-exponential-distribution-survival_202603281500\|exponential random variables]] with distinct rates $\lambda_1, \dots, \lambda_m$. Let $N$ be a discrete random variable independent of these with $P(N = n) = P_n$.

The **Coxian Random Variable** is:

$$Y = \sum_{j=1}^N X_j$$

> [!TIP] Interpretation
> An item goes through up to $m$ stages of treatment. After completing stage $n$, it quits the program with probability $r(n) = P(N = n \mid N \geq n)$. The total time spent in the program is Coxian.

## Connection to Discrete Failure Rate

If we interpret $N$ as a lifetime measured in discrete time periods, then:

$$r(n) = P(N = n \mid N \geq n)$$

is the **discrete time failure rate** — the probability the item "dies" in period $n$ given it survived to that point. This is the discrete analog of the [[3 Reference/failure-rate-function_202604031840\|failure rate function]] $r(t)$.

## Density

Conditioning on $N$:
$$f_Y(t) = \sum_{n=1}^m P_n f_{X_1 + \cdots + X_n}(t)$$

where $f_{X_1 + \cdots + X_n}$ is the [[3 Reference/hypoexponential-distribution_202604031846\|hypoexponential]] density.

## Related

- [[3 Reference/def-exponential-distribution-survival_202603281500\|Exponential Distribution]]
- [[3 Reference/hypoexponential-distribution_202604031846\|Hypoexponential Distribution]]
- [[3 Reference/failure-rate-function_202604031840\|Failure Rate Function]]
