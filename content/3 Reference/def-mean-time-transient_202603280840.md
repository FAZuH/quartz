---
publish: true
aliases:
  - Mean Time Spent in Transient States
created: 2026-03-29T12:54:01.178+07:00
modified: 2026-03-29T12:54:01.178+07:00
published: 2026-03-29T12:54:01.178+07:00
creation-time: 2026-03-28 08:40
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Definition

For a finite [[def-discrete-time-markov-chain_202603280806|Markov chain]], let $T = {1, 2, \dots, t}$ be the set of [[def-recurrent-transient_202603280824|transient states]].

The [[def-transition-probability-matrix_202603280810|transition matrix]] restricted to [[def-recurrent-transient_202603280824|transient states]] is $\mathbf{Q}$ (or $\mathbf{P}\_T$).

The matrix $\boldsymbol{\mu}$ contains the **expected number of time periods** spent in [[def-recurrent-transient_202603280824|transient state]] $j$ given starting in [[def-recurrent-transient_202603280824|transient state]] $i$:

$$\boldsymbol{\mu} = (\mathbf{I} - \mathbf{Q})^{-1}$$

## Properties

- $\mu\_{ij}$ (or $\mu\_i(j)$): Expected number of visits to [[def-state-stochastic_202603280801|state]] $j$ starting from $i$
- $\mathbf{I}$: Identity matrix of size $t$

## Relation to Absorption Time

The mean time matrix $\boldsymbol{\mu}$ relates to expected time to absorption $\mu\_i$:

$$\mu\_{i} = \sum\_{j} \boldsymbol{\mu}\_{ij}$$

Where:

- $\mu\_i$: single value representing total time until any absorption
- $\boldsymbol{\mu}$: matrix containing detailed information about visits to _each_ transient state $j$ before absorption

## Related

- [[def-hitting-probability-transient_202603280841|Hitting Probability (Transient)]]
- [[procedure-first-step-analysis_202603280842|First Step Analysis]]
