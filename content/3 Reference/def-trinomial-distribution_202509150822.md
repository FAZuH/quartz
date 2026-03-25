---
publish: true
aliases:
  - Trinomial Distribution
created: 2026-03-25T15:22:40.590+07:00
modified: 2026-03-25T15:22:40.590+07:00
published: 2026-03-25T15:22:40.590+07:00
tags:
  - 
creation-time: 2025-09-15 08:22
status: in progress
parent:
  - "[[mathematical-statistics]]"
---

## Definition

$\mathbf{X} \sim \text{Trinomial}(n; p\_1, p\_2, p\_3)$

Like binomial, but with 3 possible outcomes. Special case of multinomial with $k=3$.

- pmf: $\dfrac{n!}{x\_1!x\_2!x\_3!}p\_1^{x\_1}p\_2^{x\_2}p\_3^{x\_3}$, where $x\_1+x\_2+x\_3=n$
- mean: $E(X\_i) = np\_i$
- var: $\text{Var}(X\_i) = np\_i(1-p\_i)$
- mgf: $(p\_1e^{t\_1}+p\_2e^{t\_2}+p\_3e^{t\_3})^n$

**Conditional distribution:** $E(X\_1|X\_2=x\_2) = (n-x\_2)\left(\dfrac{p\_1}{1-p\_2}\right)$

**Correlation coefficient:** $\rho(X\_1,X\_2) = -\sqrt{\dfrac{p\_1p\_2}{(1-p\_1)(1-p\_2)}}$
