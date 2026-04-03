---
publish: true
aliases:
  - State Classification Cheatsheet
created: 2026-03-29T12:54:01.178+07:00
modified: 2026-03-29T12:54:01.178+07:00
published: 2026-03-29T12:54:01.178+07:00
cssclasses: ""
creation-time: 2026-03-28 08:30
status: in progress
parent:
  - "[[stochastic-model]]"
---


# Cheatsheet: State Classification

| **Property** | Definition |
| --- | --- |
| [[3 Reference/def-accessible-state_202603280820\|Accessible]] ($i \to j$) | $P_{ij}^n > 0$ for some $n$ |
| [[3 Reference/def-communication_202603280821\|Communication]] ($i \leftrightarrow j$) | $i \to j$ and $j \to i$ |
| [[3 Reference/def-recurrent-transient_202603280824\|Recurrent]] | $f_i = 1$ (returns infinitely often) |
| [[3 Reference/def-recurrent-transient_202603280824\|Transient]] | $f_i < 1$ (finite expected visits) |
| [[3 Reference/def-period-stochastic_202603280825\|Periodic]] | Returns at regular intervals ($d > 1$) |
| [[3 Reference/def-period-stochastic_202603280825\|Aperiodic]] | Returns at irregular times ($d = 1$) |
| [[3 Reference/def-irreducible_202603280823\|Irreducible]] | All [[3 Reference/def-state-stochastic_202603280801\|states]] [[3 Reference/def-communication_202603280821\|communicate]] |
| [[3 Reference/def-regular-tpm_202603280832\|Regular]] | $P^k$ has all positive entries for some $k$ |

## Relationships

- Irreducible + Aperiodic → Regular
- Regular → Irreducible and Aperiodic
- Recurrent + Aperiodic → Ergodic
