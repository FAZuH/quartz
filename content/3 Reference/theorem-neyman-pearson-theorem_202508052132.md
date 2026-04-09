---
publish: true
aliases:
  - Neyman-Pearson Theorem
created: 2026-04-09T23:07:39.691+07:00
modified: 2026-04-09T23:07:39.692+07:00
published: 2026-04-09T23:07:39.692+07:00
cssclasses: ""
creation-time: 2025-08-05 21:32
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Theorem
Let 
- $X_{1},\dots,X_{n}$ : [[3 Reference/Def-random-sample\|Random sample]] with [[3 Reference/Def-probability-density-function-(pdf)\|pdf]]/[[3 Reference/Def-probability-mass-function-(pmf)\|pmf]] $f(x;\theta)$
- $L(\theta, \mathbf{x})$ : [[3 Reference/Def-likelihood-function\|Likelihood function]] of $X_{1},..,X_{n}$
- $\theta'$ and $\theta''$ be distinct fixed values of $\theta$ so that $\Omega=\{ \theta: \theta=\theta',\theta'' \}$
- $C$ : [[3 Reference/def-subset_202507240733\|Subset]] of the [[3 Reference/Def-sample-space\|sample space]] 

If for any $k>0$

1. $$ \frac{L(\theta';\mathbf{x})}{L(\theta'';\mathbf{x})} \leq k, \quad \forall \mathbf{x}\in C $$
2. $$ \frac{L(\theta';\mathbf{x})}{L(\theta'';\mathbf{x})} \geq k, \quad \forall \mathbf{x}\in C^c $$
3. $\alpha=P_{H_{0}}[\mathbf{X}\in C]$ (significance level)

Then $C$ is a [[3 Reference/def-best-critical-region_202508052110\|best critical region]] of [[3 Reference/def-size-of-critical-region_202507291323\|size]] $\alpha$ for testing the [[3 Reference/def-types-of-statistical-hypotheses_202508051003\|simple hypothesis]] $H_{0}: \theta=\theta'$ against the [[3 Reference/def-hypothesis_202508050806\|alternative simple hypothesis]] $H_{1}: \theta=\theta''$

## Corollary

As in [[3 Reference/theorem-neyman-pearson-theorem_202508052132\|Neyman-Pearson Theorem]],

Let 
- $C$ : [[3 Reference/def-test_202508050827\|Critical region]] of the [[3 Reference/def-best-critical-region_202508052110\|best test]] of $H_{0}: \theta=\theta'$ versus $H_{1}: \theta = \theta''$
- $\alpha$ : [[3 Reference/def-size-of-critical-region_202507291323\|Significance level]] of the test
- $\gamma_{C}(\theta'') = P_{\theta''}[\mathbf{X}\in C]$ : [[3 Reference/def-power-function_202508050833\|Power function]] of the test

Then
- $$ \alpha \leq \gamma_{C}(\theta'') $$
- The best test is an [[3 Reference/def-unbiased-test_202508071550\|unbiased test]]