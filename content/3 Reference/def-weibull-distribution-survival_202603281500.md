---
publish: true
aliases:
  - Weibull Distribution (Survival)
created: 2026-03-28T14:53:30.999+07:00
modified: 2026-03-28T14:53:30.999+07:00
published: 2026-03-28T14:53:30.999+07:00
creation-time: 2026-03-28 15:00
status: in progress
parent:
  - "[[survival-model]]"
---

## Definition

**Weibull Distribution** for survival: Generalization of exponential with shape parameter $\alpha$. Can model increasing, decreasing, or constant hazard.

For $T \sim \text{Weibull}(\lambda, \alpha)$:

$$
\begin{align}
f(t) &= \alpha\lambda t^{\alpha-1} e^{-\lambda t^\alpha}, \quad t > 0 \\
S(t) &= \exp(-\lambda t^\alpha) \\
h(t) &= \alpha\lambda t^{\alpha-1} \\
H(t) &= \lambda t^\alpha
\end{align}
$$

## Property: Shape Parameter Effects

- $\alpha < 1$: Decreasing hazard
- $\alpha = 1$: Constant hazard (reduces to exponential)
- $\alpha > 1$: Increasing hazard

## Example

**Case**: Risk of getting sick during flu season. Hazard increases over time as the season peaks.

Use Weibull with $\lambda = 0.001$, $\alpha = 2$ (increasing hazard):

$$h(t) = \alpha\lambda t^{\alpha-1} = 0.002t$$

| $t$ (days) | $h(t)$ |
|------------|--------|
| 10 | 0.02 |
| 30 | 0.06 |
| 60 | 0.12 |

**Interpretation**: On day 10, survivors are getting sick at 0.02/day. By day 60, that rate jumps to 0.12—the flu season is peaking.

## Related

- [[def-exponential-distribution-survival_202603281500|Exponential Distribution (Survival)]]
- [[parametric-survival-distributions-cheatsheet_202603281500|Parametric Survival Distributions Cheatsheet]]
