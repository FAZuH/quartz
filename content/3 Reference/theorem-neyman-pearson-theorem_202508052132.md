---
publish: true
aliases:
  - Neyman-Pearson Theorem
created: 2026-03-25T15:22:40.600+07:00
modified: 2026-03-25T15:22:40.600+07:00
published: 2026-03-25T15:22:40.600+07:00
creation-time: 2025-08-05 21:32
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Theorem

Let

- $X\_{1},\dots,X\_{n}$ : [[Def-random-sample|Random sample]] with [[Def-probability-density-function-(pdf)|pdf]]/[[Def-probability-mass-function-(pmf)|pmf]] $f(x;\theta)$
- $L(\theta, \mathbf{x})$ : [[Def-likelihood-function|Likelihood function]] of $X\_{1},..,X\_{n}$
- $\theta'$ and $\theta''$ be distinct fixed values of $\theta$ so that $\Omega={ \theta: \theta=\theta',\theta'' }$
- $C$ : [[def-subset_202507240733|Subset]] of the [[Def-sample-space|sample space]]

If for any $k>0$

1. $$ \frac{L(\theta';\mathbf{x})}{L(\theta'';\mathbf{x})} \leq k, \quad \forall \mathbf{x}\in C $$
2. $$ \frac{L(\theta';\mathbf{x})}{L(\theta'';\mathbf{x})} \geq k, \quad \forall \mathbf{x}\in C^c $$
3. $\alpha=P\_{H\_{0}}\[\mathbf{X}\in C]$ (significance level)

Then $C$ is a [[def-best-critical-region_202508052110|best critical region]] of [[def-size-of-critical-region_202507291323|size]] $\alpha$ for testing the [[def-types-of-statistical-hypotheses_202508051003|simple hypothesis]] $H\_{0}: \theta=\theta'$ against the [[def-hypothesis_202508050806|alternative simple hypothesis]] $H\_{1}: \theta=\theta''$

## Corollary

As in [[theorem-neyman-pearson-theorem_202508052132|Neyman-Pearson Theorem]],

Let

- $C$ : [[def-test_202508050827|Critical region]] of the [[def-best-critical-region_202508052110|best test]] of $H\_{0}: \theta=\theta'$ versus $H\_{1}: \theta = \theta''$
- $\alpha$ : [[def-size-of-critical-region_202507291323|Significance level]] of the test
- $\gamma\_{C}(\theta'') = P\_{\theta''}\[\mathbf{X}\in C]$ : [[def-power-function_202508050833|Power function]] of the test

Then

- $$ \alpha \leq \gamma\_{C}(\theta'') $$
- The best test is an [[def-unbiased-test_202508071550|unbiased test]]
