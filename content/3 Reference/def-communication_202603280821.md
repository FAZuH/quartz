---
publish: true
aliases:
  - Communication
created: 2026-03-29T12:54:01.177+07:00
modified: 2026-03-29T12:54:01.177+07:00
published: 2026-03-29T12:54:01.177+07:00
creation-time: 2026-03-28 08:21
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

Two [[def-state-stochastic_202603280801|states]] $i$ and $j$ **communicate** if they are mutually [[def-accessible-state_202603280820|accessible]]:

- $i \to j$ ([[def-accessible-state_202603280820|accessible]])
- $j \to i$ ([[def-accessible-state_202603280820|accessible]])

Notation: $i \leftrightarrow j$

## Properties

Communication is an equivalence relation:

1. **Reflexive**: $i \leftrightarrow i$ (since $P\_{ii}^0 = 1$)
2. **Symmetric**: If $i \leftrightarrow j$, then $j \leftrightarrow i$
3. **Transitive**: If $i \leftrightarrow j$ and $j \leftrightarrow k$, then $i \leftrightarrow k$

### Proof of Transitivity

If $P\_{ij}^n > 0$ and $P\_{jk}^m > 0$, then by [[def-chapman-kolmogorov_202603280811|Chapman-Kolmogorov]]:

$$P\_{ik}^{n+m} = \sum\_r P\_{ir}^n P\_{rk}^m \geq P\_{ij}^n P\_{jk}^m > 0$$

## Related

- [[def-accessible-state_202603280820|Accessible State]]
- [[def-communicating-classes_202603280822|Communicating Classes]]
- [[def-irreducible_202603280823|Irreducible]]
