---
publish: true
aliases:
  - Jointly Sufficient Statistic
created: 2026-03-25T15:22:40.619+07:00
modified: 2026-03-25T15:22:40.619+07:00
published: 2026-03-25T15:22:40.619+07:00
creation-time: 2025-07-17 10:21
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let

- $X\_{1},\dots,X\_{n}$ : [[Def-random-sample|Random sample]], with
  - [[Def-probability-density-function-(pdf)|pdf]]/[[Def-probability-mass-function-(pmf)|pmf]] $f(x;\boldsymbol{\theta})$, $\boldsymbol{\theta}\in \Omega \subset R^p$
- $\mathcal{S}$ : Support of $X$
- $\mathbf{Y}=(Y\_{1},\dots,Y\_{m})'$ : $m$-dimensional [[def-random-vector_202507171028|random vector]] of [[Def-statistic|statistics]], with
  - $Y\_{i}=u\_{i}(X\_{1},\dots,X\_{n}),i=1,\dots,m$
  - pdf/pmf $f\_{\mathbf{Y}}(\mathbf{y};\boldsymbol{\theta})$, $\mathbf{y}\in R^m$

Then $\mathbf{Y}$ is **jointly sufficient** for $\boldsymbol{\theta}$

If and only if
$$
\frac{\prod\_{i=1}^nf(x;\boldsymbol{\theta})}{f\_{\mathbf{Y}}(\mathbf{y};\boldsymbol{\theta})} = H(x\_{1},\dots,x\_{n}), \quad \forall x\_{i}\in \mathcal{S}
$$

Where $H(x\_{1},\dots,x\_{n})$ does not depend upon $\boldsymbol{\theta}$
