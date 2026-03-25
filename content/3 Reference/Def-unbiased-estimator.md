---
publish: true
aliases:
  - Unbiased Estimator
  - Unbiased
created: 2026-03-25T15:22:40.612+07:00
modified: 2026-03-25T15:22:40.612+07:00
published: 2026-03-25T15:22:40.612+07:00
creation-time: 2025-07-15 07:13
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let

- $X\_{1},\dots, X\_{n}$ : [[Def-random-sample|Random samples]], with
  - $\Omega$ : Parameter space
  - [[Def-probability-density-function-(pdf)|pdf]] $f(x;\theta), \quad \theta \in \Omega$
- $T$ : [[Def-statistic|Statistic]] of $X\_{1},\dots, X\_{n}$

If
$$E(T)=\theta,\quad \forall \theta\in \Omega$$

Then we say $T$ is an **unbiased** estimator of $\theta$

## Remark

More formally, $T$ is called a **point estimator** of $\theta$. We call its realization $t$ an **estimate** of $\theta$.

## Related theorems

**Obtain**

- [[mathstat7.3#Theorem 7.3.1 Rao-Blackwell|Rao-Blackwell]] : $E(Y\_{2}|Y\_{1}) = \varphi(Y\_{1})$, $Y\_{2}$ sufficient, $Y\_{1}$ unbiased

**Use**

- [[mathstat6.2#Corollary 6.2.1 Rao-Cramér bound for unbiased estimators|Rao-Cramer Lower Bound for Unbiased Estimators]]
