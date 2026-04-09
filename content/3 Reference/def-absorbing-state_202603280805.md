---
publish: true
aliases:
  - Absorbing State
created: 2026-04-09T23:07:39.089+07:00
modified: 2026-04-09T23:07:39.090+07:00
published: 2026-04-09T23:07:39.090+07:00
cssclasses: ""
creation-time: 2026-03-28 08:05
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

A [[3 Reference/def-state-stochastic_202603280801\|state]] is **absorbing** if its [[3 Reference/def-transition-probability_202603280807\|transition probability]] to itself is 1:

$$P_{ii} = 1$$

> [!TIP] Interpretation
> Once entering an absorbing state, the process stays there forever. All other transition probabilities from that state are 0.

## Example

In a [[3 Reference/example-gambling-model_202603280856\|gambling model]], states $0$ (broke) and $N$ (target fortune) are absorbing:
- $P_{00} = 1$ — once broke, always broke
- $P_{NN} = 1$ — once reaching target, the game ends

## Related

- [[3 Reference/def-state-stochastic_202603280801\|State]]
- [[3 Reference/def-transition-probability_202603280807\|Transition Probability]]
- [[3 Reference/def-recurrent-transient_202603280824\|Recurrent vs Transient]]
