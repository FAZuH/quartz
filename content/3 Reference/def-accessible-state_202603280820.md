---
publish: true
aliases:
  - Accessible State
created: 2026-03-29T12:54:01.177+07:00
modified: 2026-03-29T12:54:01.177+07:00
published: 2026-03-29T12:54:01.177+07:00
cssclasses: ""
creation-time: 2026-03-28 08:20
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

A [[3 Reference/def-state-stochastic_202603280801\|state]] $j$ is said to be **accessible** from [[3 Reference/def-state-stochastic_202603280801\|state]] $i$ if:

$$P_{ij}^n > 0 \quad \text{for some } n \geq 0$$

Notation: $i \to j$

> [!TIP] Interpretation
> Starting from state $i$, it is possible to eventually enter state $j$.

## Non-Accessibility

If $j$ is not accessible from $i$, then:

$$P\{\text{ever enter } j \mid \text{start in } i\} = \sum_{n=0}^{\infty} P_{ij}^n = 0$$

## Related

- [[3 Reference/def-communication_202603280821\|Communication]]
- [[3 Reference/def-communicating-classes_202603280822\|Communicating Classes]]
- [[3 Reference/def-irreducible_202603280823\|Irreducible]]
