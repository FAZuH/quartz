---
publish: true
aliases:
  - Ergodic State
created: 2026-04-09T23:07:39.141+07:00
modified: 2026-04-09T23:07:39.142+07:00
published: 2026-04-09T23:07:39.142+07:00
cssclasses: ""
creation-time: 2026-03-28 08:35
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Definition

A [[3 Reference/def-state-stochastic_202603280801\|state]] is **ergodic** if it is both:
- **Positive recurrent**: expected return time is finite
- [[3 Reference/def-period-stochastic_202603280825\|Aperiodic]]: period $d = 1$

## Properties

- In a finite [[3 Reference/def-irreducible_202603280823\|irreducible]] [[3 Reference/def-discrete-time-markov-chain_202603280806\|Markov chain]], all states are positive recurrent
- If the chain is also aperiodic, all states are ergodic
- For an irreducible ergodic Markov chain, the [[3 Reference/def-limiting-probability_202603280831\|limiting distribution]] always exists and equals the unique [[3 Reference/def-stationary-distribution_202603280834\|stationary distribution]]
- The limiting distribution, when it exists, is always a stationary distribution

## About Positive Recurrent

Positive recurrent: "Closed" communicative state. In Markov chain 0→1→2→0, $\mu_{00} = 3$ because we expect to return to 0 in 3 steps.

When there are other possible states, we deal with the expectation of time to return.

**Null recurrent**: [[3 Reference/def-random-walk-markov-chain_202603280814\|Random walks]] on $\mathbb{Z}$ cause $\mu_{ii} = \infty$. We can be anywhere on $\mathbb{Z} = (-\infty, \infty)$, meaning it's possible to return to state $i$, but the expected time is infinite.

## Related

- [[3 Reference/def-recurrent-transient_202603280824\|Recurrent vs Transient]]
- [[3 Reference/def-period-stochastic_202603280825\|Period (Stochastic)]]
- [[3 Reference/def-stationary-distribution_202603280834\|Stationary Distribution]]
- [[3 Reference/about-positive-recurrent_202603280902\|Positive Recurrent State]]
