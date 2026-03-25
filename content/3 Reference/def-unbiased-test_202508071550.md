---
publish: true
aliases:
  - Unbiased Test
created: 2026-03-25T15:22:40.618+07:00
modified: 2026-03-25T15:22:40.618+07:00
published: 2026-03-25T15:22:40.618+07:00
creation-time: 2025-08-07 15:50
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let

- $X$ : [[Def-random-variable|Random variable]] with [[Def-probability-density-function-(pdf)|pdf]]/[[Def-probability-mass-function-(pmf)|pmf]] $f(x;\theta), \theta\in \Omega$
- $\mathbf{X}'=(X\_{1},\dots,X\_{n})$ : [[Def-random-sample|Random sample]] on $X$

Consider

- [[def-hypothesis_202508050806|Hypotheses]] $H\_{0}: \theta \in \omega\_{0}$ versus $H\_{1}: \theta\in \omega\_{1}$
- A [[def-test_202508050827|test]] with [[def-test_202508050827|critical region]] $C$ and [[def-size-of-critical-region_202507291323|significance level]] $\alpha$

If
$$ P\_{\theta}(\mathbf{X}\in C) \geq \alpha, \quad \forall \theta \in \omega\_{1} $$

Then we say that this test is **unbiased**

## Related

- [[theorem-neyman-pearson-theorem_202508052132|Neyman-Pearson Theorem]]
