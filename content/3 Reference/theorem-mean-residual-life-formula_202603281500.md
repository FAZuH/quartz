---
publish: true
aliases:
  - Mean Residual Life Formula
created: 2026-03-30T13:58:25.262+07:00
modified: 2026-03-30T13:58:25.262+07:00
published: 2026-03-30T13:58:25.262+07:00
creation-time: 2026-03-28 15:00
status: in progress
parent:
  - "[[survival-model]]"
---

## Theorem

> Let $mrl(t) = E\[T - t \mid T > t]$. Then
> $$mrl(t) = \frac{\int\_t^\infty S(u)du}{S(t)}$$

## Proof

By definition of [[def-conditional-probability|Conditional Probability]]. For a[[Def-continuous-random-variable|Continuous Random Variable]], the conditional density given $T > t$ is:

$$f(u \mid T > t) = \frac{f(u)}{\Pr(T > t)} = \frac{f(u)}{S(t)}, \quad u > t$$

Let $T = u$, then $T - t = u - t$. So, by definition of [[Def-expectation|Expectation]] for continuous random variable:

$$E\[T - t \mid T > t] = \int\_t^\infty \underbrace{(u - t)}_{\text{value of }T-t} \cdot \underbrace{\frac{f(u)}{S(t)}}_{\text{pdf of }T} du$$[[integration-cheatsheet_202512120549#Integration by Parts|Integration by parts]] with $v' = f(u)$, $w = u - t$:

$$\int\_t^\infty (u-t)f(u)du = \left\[-(u-t)S(u)\right]\_t^\infty + \int\_t^\infty S(u)du$$

The boundary term: at $u=t$, $(t-t)S(t)=0$. At $u=\infty$, $(u-t)S(u)\to 0$ (assuming finite mean). So the boundary term vanishes, leaving:

$$\int\_t^\infty (u-t)f(u)du = \int\_t^\infty S(u)du$$

Therefore:

$$\boxed{mrl(t) = \frac{\int\_t^\infty S(u)du}{S(t)}}$$

## Related

- [[def-mean-residual-life_202603281500|Mean Residual Life]]
- [[def-survival-function_202603281500|Survival Function]]
