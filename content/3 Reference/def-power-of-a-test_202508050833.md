---
publish: true
aliases:
  - Power of a Test
  - Power
created: 2026-04-09T23:07:39.265+07:00
modified: 2026-04-09T23:07:39.266+07:00
published: 2026-04-09T23:07:39.266+07:00
creation-time: 2025-08-05 08:33
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let $\theta\in \omega_{1}$[^1]

Then

- $1-P_{\theta}[\text{Type II Error}] = \textcolor{yellow}{P_{\theta}[(X_{1},\dots,X_{n})\in C]}$
- We say $P_{\theta}[(X_{1},\dots,X_{n})\in C]$ the **power** of the test at $\theta$

## Remark

Note that $P_{\theta}[(X_{1},\dots,X_{n})\in C]$ should be read as the probability that $(X_{1},\dots,X_{n})\in C$ when $\theta$ is the true parameter.

Over all [[def-test_202508050827|critical regions]] of [[def-size-of-critical-region_202507291323|size]] $\alpha$, we want to consider those which have lower probabilities of Type II error.

We also can look at the complement of a [[def-test-error-types_202508050828|Type II error]], i.e., rejecting $H_{0}$ when $H_{1}$ is true, which is a correct decision. Since we want the probability of this to be as large as possible, therefore we need to maximize the **power** of the test at $\theta$.

Minimizing the probability of Type II error is equivalent to maximizing power.

## Related

- [[def-power-function_202508050833|Power Function]]

[^1]: See [[def-hypothesis_202508050806|Hypothesis]]
