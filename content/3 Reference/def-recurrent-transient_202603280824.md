---
publish: true
aliases:
  - Recurrent vs Transient
created: 2026-03-29T12:54:01.178+07:00
modified: 2026-03-29T12:54:01.178+07:00
published: 2026-03-29T12:54:01.178+07:00
cssclasses: ""
creation-time: 2026-03-28 08:24
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

Let $f_i$ = probability that, starting from [[3 Reference/def-state-stochastic_202603280801\|state]] $i$, the process will ever return to [[3 Reference/def-state-stochastic_202603280801\|state]] $i$.

- **Recurrent**: $f_i = 1$ (will return with probability 1)
- **Transient**: $f_i < 1$ (positive probability of never returning)

> [!TIP] Interpretation
> - **Transient**: Will eventually leave and never come back
> - **Recurrent**: Will always come back, no matter how many times it leaves
>
> Unlike [[3 Reference/def-transition-probability_202603280807\|transition probability]], this talks about whether or not a state will return to itself in the future.

## Properties

- If $i$ is recurrent: returns infinitely many times
- If $i$ is transient: number of visits to $i$ has geometric distribution with finite mean $\frac{1}{1 - f_i}$
- [[3 Reference/def-state-stochastic_202603280801\|State]] $i$ is recurrent iff expected number of time periods in [[3 Reference/def-state-stochastic_202603280801\|state]] $i$ is infinite

## Example

When an [[3 Reference/def-absorbing-state_202603280805\|absorbing state]] occurs, it's absorbed there forever and never goes to other states, which makes the other states "transient".

## Related

- [[3 Reference/def-state-stochastic_202603280801\|State]]
- [[3 Reference/def-absorbing-state_202603280805\|Absorbing State]]
- [[3 Reference/def-ergodic-state_202603280835\|Ergodic State]]
