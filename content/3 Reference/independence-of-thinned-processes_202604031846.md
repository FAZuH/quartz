---
publish: true
aliases:
  - Independence of Thinned Processes
created: 2026-04-09T23:07:39.414+07:00
modified: 2026-04-09T23:07:39.415+07:00
published: 2026-04-09T23:07:39.415+07:00
tags:
  - type/theorem
creation-time: 2026-04-03 18:46
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Theorem

> Let $\{N(t), t \geq 0\}$ be a [[poisson-process_202604031845|Poisson process]] of rate $\lambda$. Each event is independently classified as type I with probability $p$ or type II with probability $1-p$.
>
> Let $N_1(t)$ and $N_2(t)$ count type I and type II events respectively. Then:
>
> 1. $\{N_1(t), t \geq 0\}$ is a Poisson process with rate $\lambda p$
> 2. $\{N_2(t), t \geq 0\}$ is a Poisson process with rate $\lambda(1-p)$
> 3. $N_1$ and $N_2$ are **independent**

> [!TIP] Interpretation
> Splitting a Poisson process randomly produces two independent Poisson processes. The independence is non-obvious — you might expect that more type I events means fewer type II events, but the randomness of the total count balances this out.

## Proof Sketch

Verify $\{N_1(t)\}$ satisfies the axiomatic definition of a [[poisson-process_202604031845|Poisson process]]:

1. $N_1(0) = 0$ (inherited from $N(0) = 0$)
2. Independent and stationary increments inherited from $N(t)$
3. $P(N_1(h) = 1) = p(\lambda h + o(h)) + o(h) = \lambda p h + o(h)$
4. $P(N_1(h) \geq 2) \leq P(N(h) \geq 2) = o(h)$

Independence follows because the classification of each event is independent of everything else, so knowledge of type II event times gives no information about type I events.

## Example

Immigrants arrive at rate 10/week. Each is of English descent with probability $1/12$. The number of English immigrants in February (4 weeks) is $\text{Po}(4 \cdot 10 \cdot 1/12) = \text{Po}(10/3)$.

$P(\text{no English immigrants}) = e^{-10/3}$

## Related

- [[poisson-process_202604031845|Poisson Process]]
- [[thinning-(poisson)_202604031846|Thinning]]
