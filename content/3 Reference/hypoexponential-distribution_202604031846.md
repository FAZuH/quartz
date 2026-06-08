---
publish: true
aliases:
  - Hypoexponential Distribution
created: 2026-04-09T23:07:39.412+07:00
modified: 2026-04-09T23:07:39.413+07:00
published: 2026-04-09T23:07:39.413+07:00
tags:
  - type/definition
creation-time: 2026-04-03 18:46
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

Let $X_1, \dots, X_n$ be independent [[def-exponential-distribution-survival_202603281500|exponential random variables]] with **distinct** rates $\lambda_1, \dots, \lambda_n$ (i.e., $\lambda_i \neq \lambda_j$ for $i \neq j$).

The **Hypoexponential Random Variable** is their sum:

$S = \sum_{i=1}^n X_i$

PDF:
$f_S(t) = \sum_{i=1}^n C_{i,n} \lambda_i e^{-\lambda_i t}$

where:
$C_{i,n} = \prod_{j \neq i} \frac{\lambda_j}{\lambda_j - \lambda_i}$

Tail distribution:
$P(S > t) = \sum_{i=1}^n C_{i,n} e^{-\lambda_i t}$

> [!TIP] Interpretation
> The hypoexponential is the total time to pass through $n$ sequential stages, each with its own exponential rate. Unlike the gamma distribution (which requires identical rates), this handles different rates at each stage.

## Asymptotic Behavior

As $t \to \infty$:
$r_S(t) \to \min_i \lambda_i$

The remaining lifetime of a hypoexponentially distributed item that has survived to large age $t$ is approximately exponential with rate equal to the minimum of the component rates.

## Remark

The coefficients $C_{i,n}$ are **not** probabilities — some will be negative. Despite the similar form to the [[hyperexponential-distribution_202604031846|hyperexponential]] density, these two distributions are very different.

## Related

- [[def-exponential-distribution-survival_202603281500|Exponential Distribution]]
- [[hyperexponential-distribution_202604031846|Hyperexponential Distribution]]
- [[coxian-distribution_202604031846|Coxian Distribution]]
