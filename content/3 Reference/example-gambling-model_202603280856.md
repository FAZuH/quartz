---
publish: true
aliases:
  - Gambling Model
created: 2026-03-29T12:54:01.178+07:00
modified: 2026-03-29T12:54:01.178+07:00
published: 2026-03-29T12:54:01.178+07:00
creation-time: 2026-03-28 08:56
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Example: Gambling Model

Consider a gambler who, at each play of the game, either wins $1 with probability $p$ or loses $1 with probability $1-p$. If the gambler quits playing either when going broke or attaining a fortune of $N$, then the gambler's fortune is a [[def-discrete-time-markov-chain_202603280806|Markov chain]] having [[def-transition-probability_202603280807|transition probabilities]]:

$$P\_{i,i+1} = p = 1 - P\_{i,i-1}, \quad i = 1,2,\dots,N-1$$

$$P\_{00} = P\_{NN} = 1$$

[[def-state-stochastic_202603280801|States]] 0 and $N$ are [[def-absorbing-state_202603280805|absorbing]] states since once entered they are never left.

## Transition Matrix

The [[def-transition-probability-matrix_202603280810|transition matrix]] $\mathbf{P}$ is $(N+1) \times (N+1)$. For $N=10$, $p=0.6$:

[[def-transition-probability_202603280807|Transition probabilities]]:

- $P\_{i,i+1} = p = 0.6$ for $i \in {1,2,...,9}$
- $P\_{i,i-1} = 1-p = 0.4$ for $i \in {1,2,...,9}$
- $P\_{0,0} = 1$ ([[def-absorbing-state_202603280805|absorbing]])
- $P\_{10,10} = 1$ ([[def-absorbing-state_202603280805|absorbing]])

## Simulation Examples

Parameters: $p = 0.6$ (win probability), $N = 10$ (target), starting fortune = $5

**Simulation 1 (Success):**

- Start: $5 → Win(0.6) → $6 → Lose(0.4) → $5 → Win(0.6) → $6 → Win(0.6) → $7 → Lose(0.4) → $6 → Win(0.6) → $7 → Win(0.6) → $8 → Win(0.6) → $9 → Win(0.6) → $10 (absorbed)
- **Result: Reached target in 9 games**

**Simulation 2 (Failure):**

- Start: $5 → Lose(0.4) → $4 → Lose(0.4) → $3 → Lose(0.4) → $2 → Win(0.6) → $3 → Lose(0.4) → $2 → Lose(0.4) → $1 → Lose(0.4) → $0 (absorbed)
- **Result: Went broke in 7 games**

## Related

- [[def-random-walk-markov-chain_202603280814|Random Walk Markov Chain]]
- [[def-absorbing-state_202603280805|Absorbing State]]
- [[example-gambler-ruin-fsa_202603280843|First Step Analysis - Gambler's Ruin]]
