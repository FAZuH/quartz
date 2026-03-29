---
publish: true
aliases:
  - Transition Matrix Example
created: 2026-03-28T17:53:06.241+07:00
modified: 2026-03-28T17:53:06.242+07:00
published: 2026-03-28T17:53:06.242+07:00
creation-time: 2026-03-28 08:54
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Example: Transition Matrix

Consider [[def-state-stochastic_202603280801|state space]] whether it _rains_ today ([[def-state-stochastic_202603280801|state]] 0) or will be _sunny_ ([[def-state-stochastic_202603280801|state]] 1).

Let the [[def-transition-probability_202603280807|transition probabilities]]:

- $P\_{00} = \alpha$: Probability it _rains_ (0) today, then stay in _rains_ (0) tomorrow
- $P\_{10} = \beta$: Probability it's _sunny_ (1) today, then change to _rains_ (0) tomorrow

The [[def-transition-probability-matrix_202603280810|transition matrix]] is:

$$\mathbf{P} = \begin{Vmatrix} \alpha & 1 - \alpha \ \beta & 1 - \beta \end{Vmatrix}$$

Where:

- $P\_{01} = 1-\alpha$: Probability it _rains_ (0) today, then change to _sunny_ (1) tomorrow
- $P\_{11} = 1-\beta$: Probability it's _sunny_ (1) today, then stay _sunny_ tomorrow

## Related

- [[def-transition-probability-matrix_202603280810|Transition Probability Matrix]]
- [[example-n-step-transition_202603280855|n-step Transition Matrix Example]]
