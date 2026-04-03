---
publish: true
aliases:
  - Communication
created: 2026-03-29T12:54:01.177+07:00
modified: 2026-03-29T12:54:01.177+07:00
published: 2026-03-29T12:54:01.177+07:00
cssclasses: ""
creation-time: 2026-03-28 08:21
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

Two [[3 Reference/def-state-stochastic_202603280801\|states]] $i$ and $j$ **communicate** if they are mutually [[3 Reference/def-accessible-state_202603280820\|accessible]]:

- $i \to j$ ([[3 Reference/def-accessible-state_202603280820\|accessible]])
- $j \to i$ ([[3 Reference/def-accessible-state_202603280820\|accessible]])

Notation: $i \leftrightarrow j$

## Properties

Communication is an equivalence relation:

1. **Reflexive**: $i \leftrightarrow i$ (since $P_{ii}^0 = 1$)
2. **Symmetric**: If $i \leftrightarrow j$, then $j \leftrightarrow i$
3. **Transitive**: If $i \leftrightarrow j$ and $j \leftrightarrow k$, then $i \leftrightarrow k$

### Proof of Transitivity

If $P_{ij}^n > 0$ and $P_{jk}^m > 0$, then by [[3 Reference/def-chapman-kolmogorov_202603280811\|Chapman-Kolmogorov]]:

$$P_{ik}^{n+m} = \sum_r P_{ir}^n P_{rk}^m \geq P_{ij}^n P_{jk}^m > 0$$

## Related

- [[3 Reference/def-accessible-state_202603280820\|Accessible State]]
- [[3 Reference/def-communicating-classes_202603280822\|Communicating Classes]]
- [[3 Reference/def-irreducible_202603280823\|Irreducible]]
