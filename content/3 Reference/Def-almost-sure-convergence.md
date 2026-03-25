---
publish: true
aliases:
  - Almost Sure Convergence
  - Almost Sure Convergence
created: 2026-03-25T15:22:40.587+07:00
modified: 2026-03-25T15:22:40.588+07:00
published: 2026-03-25T15:22:40.588+07:00
creation-time: 2025-07-15 07:28
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---

## Definition

Let

- ${ X\_{n} }$ : Sequence of [[Def-random-variable|Random variables]]
- $X$ : Random variable

If $$ P\left\[\lim\_{n \to \infty} X\_{n} = X\right] = 1 $$

Then

- We say ${ X\_{n} }$ **converges almost surely** to $X$
- We write $$ X\_{n} \xrightarrow{a.s.} X $$

## Remark

Almost sure convergence is stronger than [[Def-convergence-in-probability|convergence in probability]], i.e., if $X\_{n} \xrightarrow{a.s.} X$, then $X\_{n} \xrightarrow{P} X$, but not necessarly the other way around.

Like convergence in probability, sometimes $X\_{n}$ converges almost surely to a constant $c$. In that case, we may write $X\_n\xrightarrow{\text{a.s.}}c$.

## Related theorems

- [[mathstat5.1#Theorem Strong law of large numbers]] : $\bar{X}\_{n} \xrightarrow{a.s.}\mu$
