---
publish: true
aliases:
  - Hypoexponential Distribution
created: 2026-04-03T18:46:38.964+07:00
modified: 2026-04-03T19:13:39.613+07:00
published: 2026-04-03T19:13:39.613+07:00
tags:
  - type/definition
creation-time: 2026-04-03 18:46
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

Let $X\_1, \dots, X\_n$ be independent [[def-exponential-distribution-survival_202603281500|exponential random variables]] with **distinct** rates $\lambda\_1, \dots, \lambda\_n$ (i.e., $\lambda\_i \neq \lambda\_j$ for $i \neq j$).

The **Hypoexponential Random Variable** is their sum:

$$S = \sum\_{i=1}^n X\_i$$

PDF:
$$f\_S(t) = \sum\_{i=1}^n C\_{i,n} \lambda\_i e^{-\lambda\_i t}$$

where:
$$C\_{i,n} = \prod\_{j \neq i} \frac{\lambda\_j}{\lambda\_j - \lambda\_i}$$

Tail distribution:
$$P(S > t) = \sum\_{i=1}^n C\_{i,n} e^{-\lambda\_i t}$$

> [!TIP] Interpretation
> The hypoexponential is the total time to pass through $n$ sequential stages, each with its own exponential rate. Unlike the gamma distribution (which requires identical rates), this handles different rates at each stage.

## Asymptotic Behavior

As $t \to \infty$:
$$r\_S(t) \to \min\_i \lambda\_i$$

The remaining lifetime of a hypoexponentially distributed item that has survived to large age $t$ is approximately exponential with rate equal to the minimum of the component rates.

## Remark

The coefficients $C\_{i,n}$ are **not** probabilities — some will be negative. Despite the similar form to the [[hyperexponential-distribution_202604031846|hyperexponential]] density, these two distributions are very different.

## Related

- [[def-exponential-distribution-survival_202603281500|Exponential Distribution]]
- [[hyperexponential-distribution_202604031846|Hyperexponential Distribution]]
- [[coxian-distribution_202604031846|Coxian Distribution]]
