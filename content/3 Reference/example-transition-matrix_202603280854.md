---
publish: true
aliases:
  - Transition Matrix Example
created: 2026-03-29T12:54:01.178+07:00
modified: 2026-03-29T12:54:01.178+07:00
published: 2026-03-29T12:54:01.178+07:00
cssclasses: ""
creation-time: 2026-03-28 08:54
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Example: Transition Matrix

Consider [[3 Reference/def-state-stochastic_202603280801\|state space]] whether it *rains* today ([[3 Reference/def-state-stochastic_202603280801\|state]] 0) or will be *sunny* ([[3 Reference/def-state-stochastic_202603280801\|state]] 1).

Let the [[3 Reference/def-transition-probability_202603280807\|transition probabilities]]:
- $P_{00} = \alpha$: Probability it *rains* (0) today, then stay in *rains* (0) tomorrow
- $P_{10} = \beta$: Probability it's *sunny* (1) today, then change to *rains* (0) tomorrow

The [[3 Reference/def-transition-probability-matrix_202603280810\|transition matrix]] is:

$$\mathbf{P} = \begin{Vmatrix} \alpha & 1 - \alpha \\ \beta & 1 - \beta \end{Vmatrix}$$

Where:
- $P_{01} = 1-\alpha$: Probability it *rains* (0) today, then change to *sunny* (1) tomorrow
- $P_{11} = 1-\beta$: Probability it's *sunny* (1) today, then stay *sunny* tomorrow

## Related

- [[3 Reference/def-transition-probability-matrix_202603280810\|Transition Probability Matrix]]
- [[3 Reference/example-n-step-transition_202603280855\|n-step Transition Matrix Example]]
