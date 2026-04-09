---
publish: true
aliases:
  - Hazard Function Derivation
created: 2026-04-09T23:07:39.664+07:00
modified: 2026-04-09T23:07:39.665+07:00
published: 2026-04-09T23:07:39.665+07:00
cssclasses: ""
creation-time: 2026-03-28 15:00
status: in progress
parent:
  - "[[survival-model]]"
---


## Theorem

> Let:
> - $f(t)$ = probability density function
> - $S(t)$ = survival function
> 
> Then
> $$h(t) = \frac{f(t)}{S(t)}$$

## Proof

$$
\begin{align}
h(t) & = \lim_{\Delta t \to 0} \frac{1}{\Delta t} \cdot \frac{\Pr(t < T \leq t+\Delta t)}{\Pr(T > t)} \\
& = \lim_{\Delta t \to 0} \frac{F(t+\Delta t) - F(t)}{\Delta t \cdot S(t)}
\end{align}
$$

The limit $\lim_{\Delta t \to 0} \frac{F(t+\Delta t) - F(t)}{\Delta t}$ is by definition $F'(t) = f(t)$.

Therefore:
$$\boxed{h(t) = \frac{f(t)}{S(t)}}$$

## Related

- [[3 Reference/def-hazard-function_202603281500\|Hazard Function]]
- [[3 Reference/def-survival-function_202603281500\|Survival Function]]