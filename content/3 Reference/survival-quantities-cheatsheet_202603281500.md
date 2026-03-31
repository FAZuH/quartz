---
publish: true
aliases:
  - Survival Quantities Cheatsheet
created: 2026-03-30T13:58:25.262+07:00
modified: 2026-03-30T13:58:25.262+07:00
published: 2026-03-30T13:58:25.262+07:00
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
H(t) &= \int\_0^t h(u)du = -\ln S(t) \\
mrl(t) &= E\[T - t \mid T > t] = \frac{\int\_t^\infty S(u)du}{S(t)} \\
\mu &= E\[T] = \int\_0^\infty S(u)du
\end{align}
$$

## Relationships

| Quantity | Formula | Derivation |
|----------|---------|------------|
| $S(t)$ | $\exp\[-H(t)]$ | From$H(t) = -\ln S(t)$ |
| $h(t)$ | $\frac{f(t)}{S(t)}$ | [[theorem-hazard-function-derivation_202603281500\|Proof]] |
| $H(t)$ | $-\ln S(t)$ | Integral of $h(t)$ |

## Total Time on Test (TTT)

Cumulative operating time until last failure.
