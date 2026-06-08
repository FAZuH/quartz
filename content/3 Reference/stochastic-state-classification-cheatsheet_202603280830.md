---
publish: true
aliases:
  - State Classification Cheatsheet
created: 2026-04-09T23:07:39.608+07:00
modified: 2026-04-09T23:07:39.609+07:00
published: 2026-04-09T23:07:39.609+07:00
creation-time: 2026-03-28 08:30
status: in progress
parent:
  - "[[stochastic-model]]"
---

# Cheatsheet: State Classification

| **Property** | Definition |
| --- | --- |
| [[def-accessible-state_202603280820\|Accessible]] ($i \to j$) | $P_{ij}^n > 0$ for some $n$ |
| [[def-communication_202603280821\|Communication]] ($i \leftrightarrow j$) | $i \to j$ and $j \to i$ |
| [[def-recurrent-transient_202603280824\|Recurrent]] | $f_i = 1$ (returns infinitely often) |
| [[def-recurrent-transient_202603280824\|Transient]] | $f_i < 1$ (finite expected visits) |
| [[def-period-stochastic_202603280825\|Periodic]] | Returns at regular intervals ($d > 1$) |
| [[def-period-stochastic_202603280825\|Aperiodic]] | Returns at irregular times ($d = 1$) |
| [[def-irreducible_202603280823\|Irreducible]] | All [[def-state-stochastic_202603280801\|states]] [[def-communication_202603280821\|communicate]] |
| [[def-regular-tpm_202603280832\|Regular]] | $P^k$ has all positive entries for some $k$ |

## Relationships

- Irreducible + Aperiodic → Regular
- Regular → Irreducible and Aperiodic
- Recurrent + Aperiodic → Ergodic
