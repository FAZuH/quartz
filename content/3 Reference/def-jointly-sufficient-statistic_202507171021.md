---
publish: true
aliases:
  - Jointly Sufficient Statistic
created: 2026-02-22T19:23:58.394+07:00
modified: 2026-02-22T19:23:58.394+07:00
published: 2026-02-22T19:23:58.394+07:00
cssclasses: ""
creation-time: 2025-07-17 10:21
status: baby
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---


## Definition

Let
- $X_{1},\dots,X_{n}$ : [[3 Reference/Def-random-sample\|Random sample]], with
	- [[3 Reference/Def-probability-density-function-(pdf)\|pdf]]/[[3 Reference/Def-probability-mass-function-(pmf)\|pmf]] $f(x;\boldsymbol{\theta})$, $\boldsymbol{\theta}\in \Omega \subset R^p$
- $\mathcal{S}$ : Support of $X$
- $\mathbf{Y}=(Y_{1},\dots,Y_{m})'$ : $m$-dimensional [[3 Reference/def-random-vector_202507171028\|random vector]] of [[3 Reference/Def-statistic\|statistics]], with
	- $Y_{i}=u_{i}(X_{1},\dots,X_{n}),i=1,\dots,m$
	- pdf/pmf $f_{\mathbf{Y}}(\mathbf{y};\boldsymbol{\theta})$, $\mathbf{y}\in R^m$

Then $\mathbf{Y}$ is **jointly sufficient** for $\boldsymbol{\theta}$

If and only if 
$$
\frac{\prod_{i=1}^nf(x;\boldsymbol{\theta})}{f_{\mathbf{Y}}(\mathbf{y};\boldsymbol{\theta})} = H(x_{1},\dots,x_{n}), \quad \forall x_{i}\in \mathcal{S}
$$

Where $H(x_{1},\dots,x_{n})$ does not depend upon $\boldsymbol{\theta}$