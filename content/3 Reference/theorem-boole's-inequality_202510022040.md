---
publish: true
aliases:
  - Boole's Inequality
created: 2026-03-25T15:22:40.640+07:00
modified: 2026-03-25T15:22:40.640+07:00
published: 2026-03-25T15:22:40.640+07:00
tags:
  - 
creation-time: 2025-10-02 20:40
status: complete
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

## Theorem

Let ${ C\_{n} }$ : Any [[3.1 Sequences and Their Limits#3.1.1 Definition Sequence of real numbers|sequence]] of [[Def-events|events]]

Then
$$
P\left(\bigcup\_{n=1}^\infty C\_{n}\right)\leq \sum\_{n=1}^\infty P(C\_{n})
$$

## Proof

Let $D\_{n} = \bigcup\_{i=1}^n C\_{i}$. Then ${ D\_{n} }$ is an [[def-monotone-sequence_202510030252|increasing sequence]] of [[Def-events|events]] that go up to $\bigcup\_{n=1}^\infty C\_{n}$.

Also, for all $j$, $D\_{j}=D\_{j-1}\cup C\_{j}$. Hence, by point 5 of [[theorem-property-of-probability-set-function_202510022034|Property of Probability Set Function]],
$$
P(D\_{j})\leq P(D\_{j-1})+P(C\_{j})
$$
that is,
$$
P(D\_{j})-P(D\_{j-1})\leq P(C\_{j})
$$

In this case, the $C\_{i}$s are replaced by the $D\_{i}$s in expression
