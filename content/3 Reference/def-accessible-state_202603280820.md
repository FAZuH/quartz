---
publish: true
aliases:
  - Accessible State
created: 2026-03-29T12:54:01.177+07:00
modified: 2026-03-29T12:54:01.177+07:00
published: 2026-03-29T12:54:01.177+07:00
creation-time: 2026-03-28 08:20
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

A [[def-state-stochastic_202603280801|state]] $j$ is said to be **accessible** from [[def-state-stochastic_202603280801|state]] $i$ if:

$$P\_{ij}^n > 0 \quad \text{for some } n \geq 0$$

Notation: $i \to j$

> [!TIP] Interpretation
> Starting from state $i$, it is possible to eventually enter state $j$.

## Non-Accessibility

If $j$ is not accessible from $i$, then:

$$P{\text{ever enter } j \mid \text{start in } i} = \sum\_{n=0}^{\infty} P\_{ij}^n = 0$$

## Related

- [[def-communication_202603280821|Communication]]
- [[def-communicating-classes_202603280822|Communicating Classes]]
- [[def-irreducible_202603280823|Irreducible]]
