---
{"publish":true,"aliases":["Multinomial Distribution"],"created":"2025-09-15T08:22:43.206+07:00","modified":"2025-09-15T08:25:21.944+07:00","published":"2025-09-15T08:25:21.944+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-15 08:22","status":"baby","parent":["[[mathematical-statistics]]"]}
---


## Definition

$\mathbf{X} \sim \text{Multinomial}(n; p_1, p_2, \ldots, p_k)$

Extension of binomial distribution to $k$ categories.

$x_{i}$ is the number of success in the $i$-th variable.

- pmf: $\dfrac{n!}{x_1!\cdots x_k!}p_1^{x_1}\cdots p_k^{x_k}$
- where $x_k = n-(x_1+\cdots+x_{k-1})$ and $p_k = 1-(p_1+\cdots+p_{k-1})$
- mean: $E(X_i) = np_i$
- var: $\text{Var}(X_i) = np_i(1-p_i)$
- cov: $\text{Cov}(X_i, X_j) = -np_ip_j$