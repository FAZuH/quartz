---
publish: true
aliases:
  - Ergodic Birth and Death Process is Time Reversible
created: 2026-05-08T06:23:06.526+07:00
modified: 2026-05-08T06:23:06.527+07:00
published: 2026-05-08T06:23:06.527+07:00
creation-time: 2026-05-08 06:17
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Theorem

Every ergodic [[birth-and-death-process_202605080517|birth and death process]] is **time reversible**.

> [!TIP] Interpretation
> Since a birth and death process can only move between neighboring states ($n$ and $n+1$), any transition from $n$ to $n+1$ must eventually be followed by a transition from $n+1$ back to $n$. In the long run, the rates in both directions must balance.

## Proof Sketch

In any length of time $t$, the number of transitions from $i$ to $i+1$ must equal (to within 1) the number from $i+1$ to $i$, since the process can only go from $i$ to $i+1$ and must return through $i+1$. As $t \to \infty$, the rates become equal:

$\lambda_i \pi_i = \mu_{i+1} \pi_{i+1}$

which is exactly the time reversibility condition $P_i q_{i,i+1} = P_{i+1} q_{i+1,i}$ (equivalently, $\pi_i \lambda_i = \pi_{i+1} \mu_{i+1}$).

## Important Consequence

The **output process** of an M/M/s queue (with $\lambda < s\mu$) in steady state is a **Poisson process** with rate $\lambda$. This follows because the M/M/s process is a birth-death process (hence time reversible), and going backward in time, the points where the process decreases by 1 (departures) must form a Poisson process, just as the arrival points do going forward.

## Related

- [[time-reversible-ctmc_202605080617|Time Reversible CTMC]]
- [[birth-and-death-process_202605080517|Birth and Death Process]]
- [[truncated-time-reversible-ctmc_202605080618|Truncated Time Reversible CTMC]]
