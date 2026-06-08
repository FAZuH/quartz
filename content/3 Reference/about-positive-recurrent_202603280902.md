---
publish: true
aliases:
  - Positive Recurrent State
created: 2026-04-09T23:07:38.972+07:00
modified: 2026-05-22T06:40:37.356+07:00
published: 2026-05-22T06:40:37.356+07:00
creation-time: 2026-03-28 09:02
status: in progress
parent:
  - "[[stochastic-model]]"
---

### Positive Recurrent

A state is **positive recurrent** if it is [[def-recurrent-transient_202603280824|recurrent]] and the expected time to return to it is finite.

Imagine a "closed" communicative state. In Markov chain 0→1→2→0:

$\mu_{00} = 3$

We expect that if we start from 0, we eventually return back to 0 in 3 steps.

The example above is "deterministic." When there are other possible states each state can take, then it's "probabilistic," and we deal with the notion of expectation of the time to return to 0.

### Null Recurrent

[[def-random-walk-markov-chain_202603280814|Random walks]] on $\mathbb{Z}$ cause $\mu_{ii} = \infty$.

We can be ANYWHERE on $\mathbb{Z} = (-\infty, \infty)$, which means it's possible to "return" to state $i$, but the expected time is basically infinite, since we could've traversed anywhere.

## Relation to Ergodic

A state is [[def-ergodic-state_202603280835|ergodic]] if it is both positive recurrent and [[def-period-stochastic_202603280825|aperiodic]].

## Related

- [[def-ergodic-state_202603280835|Ergodic State]]
- [[def-recurrent-transient_202603280824|Recurrent vs Transient]]
