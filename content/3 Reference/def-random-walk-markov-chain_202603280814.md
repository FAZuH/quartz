---
publish: true
aliases:
  - Random Walk Markov Chain
created: 2026-03-29T12:54:01.178+07:00
modified: 2026-03-29T12:54:01.178+07:00
published: 2026-03-29T12:54:01.178+07:00
cssclasses: ""
creation-time: 2026-03-28 08:14
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

A **Random Walk** is a [[3 Reference/def-discrete-time-markov-chain_202603280806\|Markov chain]] whose [[3 Reference/def-state-stochastic_202603280801\|state space]] is given by the integers $i = 0, \pm 1, \pm 2, \dots$ where at each point in time the process either moves:
- One step to the right with probability $p$
- One step to the left with probability $1 - p = q$

$$P_{i,i+1} = p, \quad P_{i,i-1} = 1 - p$$

where $0 < p < 1$.

> [!TIP] Interpretation
> Think of it as a model for an individual walking on a straight line who at each point in time either takes one step to the right with probability $p$ or one step to the left with probability $1-p$.

## Example

See [[3 Reference/example-random-walk-model_202603280910\|Random Walk Model Example]] and [[3 Reference/example-gambling-model_202603280856\|Gambling Model Example]].

## Related

- [[3 Reference/def-discrete-time-markov-chain_202603280806\|Discrete-time Markov Chain]]
- [[3 Reference/example-gambling-model_202603280856\|Gambling Model]]
