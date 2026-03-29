---
publish: true
aliases:
  - Absorbing State
created: 2026-03-29T12:54:01.177+07:00
modified: 2026-03-29T12:54:01.177+07:00
published: 2026-03-29T12:54:01.177+07:00
creation-time: 2026-03-28 08:05
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

A [[def-state-stochastic_202603280801|state]] is **absorbing** if its [[def-transition-probability_202603280807|transition probability]] to itself is 1:

$$P\_{ii} = 1$$

> [!TIP] Interpretation
> Once entering an absorbing state, the process stays there forever. All other transition probabilities from that state are 0.

## Example

In a [[example-gambling-model_202603280856|gambling model]], states $0$ (broke) and $N$ (target fortune) are absorbing:

- $P\_{00} = 1$ — once broke, always broke
- $P\_{NN} = 1$ — once reaching target, the game ends

## Related

- [[def-state-stochastic_202603280801|State]]
- [[def-transition-probability_202603280807|Transition Probability]]
- [[def-recurrent-transient_202603280824|Recurrent vs Transient]]
