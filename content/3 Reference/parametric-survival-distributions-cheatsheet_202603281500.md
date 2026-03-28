---
publish: true
aliases:
  - Parametric Survival Distributions Cheatsheet
created: 2026-03-28T14:54:10.158+07:00
modified: 2026-03-28T14:54:10.158+07:00
published: 2026-03-28T14:54:10.158+07:00
creation-time: 2026-03-28 15:00
status: in progress
parent:
  - "[[survival-model]]"
---

# Cheatsheet: Parametric Survival Distributions

## Comparison Table

| Distribution | $S(t)$ | $h(t)$ | $f(t) = S(t)\cdot h(t)$ | $H(t)$ | $E(T)$ | $V(T)$ |
|--------------|--------|--------|-------------------------|--------|--------|--------|
| **Exp** | $e^{-\lambda t}$ | $\lambda$ | $\lambda e^{-\lambda t}$ | $\lambda t$ | $\frac{1}{\lambda}$ | $\frac{1}{\lambda^2}$ |
| **Weibull** | $e^{-\lambda t^\alpha}$ | $\alpha\lambda t^{\alpha-1}$ | $\alpha\lambda t^{\alpha-1}e^{-\lambda t^\alpha}$ | $\lambda t^\alpha$ | — | — |
| **Gamma** | — | — | $\frac{\lambda^\alpha t^{\alpha-1}e^{-\lambda t}}{\Gamma(\alpha)}$ | — | $\frac{\alpha}{\lambda}$ | $\frac{\alpha}{\lambda^2}$ |

## Shape Parameter (Weibull)

- $\alpha < 1$: Decreasing hazard
- $\alpha = 1$: Constant hazard (exponential)
- $\alpha > 1$: Increasing hazard
