---
publish: true
aliases:
  - Mean Time Spent in Transient States
created: 2026-04-09T23:07:39.226+07:00
modified: 2026-04-09T23:07:39.227+07:00
published: 2026-04-09T23:07:39.227+07:00
cssclasses: ""
creation-time: 2026-03-28 08:40
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

For a finite [[3 Reference/def-discrete-time-markov-chain_202603280806\|Markov chain]], let $T = \{1, 2, \dots, t\}$ be the set of [[3 Reference/def-recurrent-transient_202603280824\|transient states]].

The [[3 Reference/def-transition-probability-matrix_202603280810\|transition matrix]] restricted to [[3 Reference/def-recurrent-transient_202603280824\|transient states]] is $\mathbf{Q}$ (or $\mathbf{P}_T$).

The matrix $\boldsymbol{\mu}$ contains the **expected number of time periods** spent in [[3 Reference/def-recurrent-transient_202603280824\|transient state]] $j$ given starting in [[3 Reference/def-recurrent-transient_202603280824\|transient state]] $i$:

$$\boldsymbol{\mu} = (\mathbf{I} - \mathbf{Q})^{-1}$$

## Properties

- $\mu_{ij}$ (or $\mu_i(j)$): Expected number of visits to [[3 Reference/def-state-stochastic_202603280801\|state]] $j$ starting from $i$
- $\mathbf{I}$: Identity matrix of size $t$

## Relation to Absorption Time

The mean time matrix $\boldsymbol{\mu}$ relates to expected time to absorption $\mu_i$:

$$\mu_{i} = \sum_{j} \boldsymbol{\mu}_{ij}$$

Where:
- $\mu_i$: single value representing total time until any absorption
- $\boldsymbol{\mu}$: matrix containing detailed information about visits to *each* transient state $j$ before absorption

## Related

- [[3 Reference/def-hitting-probability-transient_202603280841\|Hitting Probability (Transient)]]
- [[3 Reference/procedure-first-step-analysis_202603280842\|First Step Analysis]]
