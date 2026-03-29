---
publish: true
aliases:
  - Random Walk Model Example
created: 2026-03-28T17:54:20.911+07:00
modified: 2026-03-28T17:54:20.912+07:00
published: 2026-03-28T17:54:20.912+07:00
creation-time: 2026-03-28 09:10
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Example: Random Walk Model

A [[def-discrete-time-markov-chain_202603280806|Markov chain]] whose [[def-state-stochastic_202603280801|state space]] is given by the integers $i = 0, \pm 1, \pm 2, \dots$ is said to be a random walk if, for some number $0 < p < 1$:

$$P\_{i,i+1} = p = 1 - P\_{i,i-1}, \quad i = 0, \pm 1, \dots$$

## Interpretation

Think of it as a model for an individual walking on a straight line who at each point in time either takes one step to the right with probability $p$ or one step to the left with probability $1-p$.

## Transition Probabilities

- $P\_{i,i+1} = p$ — probability of moving right
- $P\_{i,i-1} = 1 - p$ — probability of moving left

## Related

- [[def-random-walk-markov-chain_202603280814|Random Walk Markov Chain]]
- [[example-gambling-model_202603280856|Gambling Model]]
