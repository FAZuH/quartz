---
publish: true
aliases:
  - Trinomial Distribution
created: 2026-04-09T23:07:39.339+07:00
modified: 2026-04-09T23:07:39.340+07:00
published: 2026-04-09T23:07:39.340+07:00
tags:
  - 
creation-time: 2025-09-15 08:22
status: in progress
parent:
  - "[[mathematical-statistics]]"
---

## Definition

$\mathbf{X} \sim \text{Trinomial}(n; p_1, p_2, p_3)$

Like binomial, but with 3 possible outcomes. Special case of multinomial with $k=3$.

- pmf: $\dfrac{n!}{x_1!x_2!x_3!}p_1^{x_1}p_2^{x_2}p_3^{x_3}$, where $x_1+x_2+x_3=n$
- mean: $E(X_i) = np_i$
- var: $\text{Var}(X_i) = np_i(1-p_i)$
- mgf: $(p_1e^{t_1}+p_2e^{t_2}+p_3e^{t_3})^n$

**Conditional distribution:** $E(X_1|X_2=x_2) = (n-x_2)\left(\dfrac{p_1}{1-p_2}\right)$

**Correlation coefficient:** $\rho(X_1,X_2) = -\sqrt{\dfrac{p_1p_2}{(1-p_1)(1-p_2)}}$
