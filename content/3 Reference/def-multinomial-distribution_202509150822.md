---
publish: true
aliases:
  - Multinomial Distribution
created: 2025-10-14T04:15:27.071+07:00
modified: 2025-10-14T04:15:27.071+07:00
published: 2025-10-14T04:15:27.071+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-09-15 08:22
status: baby
parent:
  - "[[mathematical-statistics]]"
---


## Definition

$\mathbf{X} \sim \text{Multinomial}(n; p_1, p_2, \ldots, p_k)$

Extension of [[3 Reference/def-binomial-distribution_202509150822\|binomial distribution]] to $k$ categories.

$x_{i}$ is the number of success in the $i$-th variable.

- [[3 Reference/Def-probability-mass-function-(pmf)\|pmf]]: $\dfrac{n!}{x_1!\cdots x_k!}p_1^{x_1}\cdots p_k^{x_k}$
	- $x_k = n-(x_1+\cdots+x_{k-1})$ 
	- $p_k = 1-(p_1+\cdots+p_{k-1})$
- [[3 Reference/Def-mean\|Mean]]: $E(X_i) = np_i$
- [[3 Reference/Def-variance\|Variance]]: $\text{Var}(X_i) = np_i(1-p_i)$
- Covariance: $\text{Cov}(X_i, X_j) = -np_ip_j$