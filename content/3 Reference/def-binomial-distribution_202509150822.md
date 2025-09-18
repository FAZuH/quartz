---
{"publish":true,"aliases":["Binomial Distribution"],"created":"2025-09-15T08:22:25.578+07:00","modified":"2025-09-15T08:47:29.351+07:00","published":"2025-09-15T08:47:29.351+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-15 08:22","status":"baby","parent":["[[mathematical-statistics]]"]}
---


## Definition

$X \sim B(n,p)$

Models the number of successes in a fixed number of independent Bernoulli trials, each with the same probability of success

$x$ is the amount of success outcomes

- pmf: $\binom{n}{x}p^x(1-p)^{n-x}$, $x \in {0,1,2,\ldots,n}$
- mean: $np$
- var: $np(1-p)$
- mgf: $(1-p+pe^t)^n$