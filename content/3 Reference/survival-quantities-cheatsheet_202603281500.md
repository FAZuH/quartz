---
publish: true
aliases:
  - Survival Quantities Cheatsheet
created: 2026-04-09T23:07:39.622+07:00
modified: 2026-04-09T23:07:39.623+07:00
published: 2026-04-09T23:07:39.623+07:00
cssclasses: ""
creation-time: 2026-03-28 15:00
status: in progress
parent:
  - "[[survival-model]]"
---


# Cheatsheet: Survival Quantities

## Basic Formulas

$$
\begin{align}
S(t) &= 1 - F(t) \\
h(t) &= \frac{f(t)}{S(t)} \\
H(t) &= \int_0^t h(u)du = -\ln S(t) \\
mrl(t) &= E[T - t \mid T > t] = \frac{\int_t^\infty S(u)du}{S(t)} \\
\mu &= E[T] = \int_0^\infty S(u)du
\end{align}
$$

## Relationships

| Quantity | Formula | Derivation |
|----------|---------|------------|
| $S(t)$ | $\exp[-H(t)]$ | From$H(t) = -\ln S(t)$ |
| $h(t)$ | $\frac{f(t)}{S(t)}$ | [[3 Reference/theorem-hazard-function-derivation_202603281500\|Proof]] |
| $H(t)$ | $-\ln S(t)$ | Integral of $h(t)$ |

## Total Time on Test (TTT)

Cumulative operating time until last failure.