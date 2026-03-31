---
publish: true
aliases:
  - Sufficient Statistic
created: 2026-03-25T15:22:40.617+07:00
modified: 2026-03-31T10:09:51.195+07:00
published: 2026-03-31T10:09:51.195+07:00
creation-time: 2025-07-17 09:25
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let

- $X\_1,\dots,X\_n$ : [[mathstat4.1#Definition 4.1.1 Random sample|Random sample]], with joint [[Def-probability-density-function-(pdf)|pdf]]/[[Def-probability-mass-function-(pmf)|pmf]] $f(x;\theta)$, $\theta\in \Omega$
- $Y = u(\mathbf{X})$ : [[mathstat4.1#Definition 4.1.2 Statistic|Statistic]], with pdf/pmf $f\_{Y}(y;\theta)$

Then $Y$ is a **sufficient statistic** for $\theta$

If and only if

- $$ \frac{\prod\_{i=1}^nf(x\_{i};\theta)}{f\_{Y}\[u(\mathbf{x});\theta]} = H(\mathbf{x}) $$
- $H(\mathbf{X})$ does not depend upon $\theta$

> [!tip]
> A **sufficient statistic** $Y$ for $\theta$ (function of $\mathbf{x}$) completely explains $\theta$ for any $\mathbf{x}$ such that $Y=y$, meaning:
>
> - For any $\mathbf{x}$ such that $Y=y$, $\mathbf{x}$ no longer tells anything more about $\theta$ beyond what $Y = y$ already explains

## Remark

To prove $Y$ is a **sufficient statistic**, we must show that $\dfrac{f}{f\_{Y}}$ does not depend on $\theta$, i.e., does not have any $\theta$ terms in it.

A **sufficient statistic** captures all the information about $\theta$ contained in the sample, so the ratio of joint to marginal densities should be free of $\theta$.

Also, a **sufficient statistic** <u>does not require the random variables to be independent</u>.

## Subdefinition

- [[def-complete-sufficient-statistic_202507170931|Complete Sufficient Statistic]]
- [[def-jointly-sufficient-statistic_202507171021|Jointly Sufficient Statistic]]

## Related theorems

- [[theorem-neyman-theorem_202508052229|Neyman Theorem]]
