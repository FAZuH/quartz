---
publish: true
aliases:
  - Recurrent vs Transient
created: 2026-03-28T17:50:20.849+07:00
modified: 2026-03-28T17:50:20.850+07:00
published: 2026-03-28T17:50:20.850+07:00
creation-time: 2026-03-28 08:24
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

Let $f\_i$ = probability that, starting from [[def-state-stochastic_202603280801|state]] $i$, the process will ever return to [[def-state-stochastic_202603280801|state]] $i$.

- **Recurrent**: $f\_i = 1$ (will return with probability 1)
- **Transient**: $f\_i < 1$ (positive probability of never returning)

> [!TIP] Interpretation
>
> - **Transient**: Will eventually leave and never come back
> - **Recurrent**: Will always come back, no matter how many times it leaves
>
> Unlike [[def-transition-probability_202603280807|transition probability]], this talks about whether or not a state will return to itself in the future.

## Properties

- If $i$ is recurrent: returns infinitely many times
- If $i$ is transient: number of visits to $i$ has geometric distribution with finite mean $\frac{1}{1 - f\_i}$
- [[def-state-stochastic_202603280801|State]] $i$ is recurrent iff expected number of time periods in [[def-state-stochastic_202603280801|state]] $i$ is infinite

## Example

When an [[def-absorbing-state_202603280805|absorbing state]] occurs, it's absorbed there forever and never goes to other states, which makes the other states "transient".

## Related

- [[def-state-stochastic_202603280801|State]]
- [[def-absorbing-state_202603280805|Absorbing State]]
- [[def-ergodic-state_202603280835|Ergodic State]]
