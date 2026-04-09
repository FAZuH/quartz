---
publish: true
aliases:
  - Exponential Distribution (Survival)
created: 2026-04-09T23:07:39.145+07:00
modified: 2026-04-09T23:07:39.146+07:00
published: 2026-04-09T23:07:39.146+07:00
cssclasses: ""
creation-time: 2026-03-28 15:00
status: in progress
parent:
  - "[[survival-model]]"
---


## Definition

**Exponential Distribution** for survival: Simplest model; assumes constant hazard rate. Has "lack of memory" property.

For $T \sim \text{Exp}(\lambda)$, $\lambda > 0$:

$$
\begin{align}
f(t) &= \lambda e^{-\lambda t}, \quad t > 0 \\
S(t) &= e^{-\lambda t} \\
h(t) &= \lambda \quad \\
H(t) &= \lambda t \\
E(T) &= \frac{1}{\lambda}, \quad V(T) = \frac{1}{\lambda^2}
\end{align}
$$

## Property: Constant Hazard

Notice that $h(t) = \lambda$ is constant. We can interpret $\lambda$ as the hazard rate—see [[3 Reference/def-hazard-function_202603281500\|hazard function interpretation]].

## Related

- [[3 Reference/def-weibull-distribution-survival_202603281500\|Weibull Distribution (Survival)]]
- [[3 Reference/parametric-survival-distributions-cheatsheet_202603281500\|Parametric Survival Distributions Cheatsheet]]