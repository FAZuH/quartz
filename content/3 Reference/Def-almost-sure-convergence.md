---
publish: true
aliases:
  - Almost Sure Convergence
  - Almost Sure Convergence
created: 2026-02-22T19:23:58.353+07:00
modified: 2026-02-22T19:23:58.353+07:00
published: 2026-02-22T19:23:58.353+07:00
cssclasses: ""
creation-time: 2025-07-15 07:28
status: baby
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---


## Definition


Let

- ${ X_{n} }$ : Sequence of [[3 Reference/Def-random-variable\|Random variables]]
- $X$ : Random variable

If $$ P\left[\lim_{n \to \infty} X_{n} = X\right] = 1 $$

Then

- We say ${ X_{n} }$ **converges almost surely** to $X$
- We write $$ X_{n} \xrightarrow{a.s.} X $$
## Remark
Almost sure convergence is stronger than [[3 Reference/Def-convergence-in-probability\|convergence in probability]], i.e., if $X_{n} \xrightarrow{a.s.} X$, then $X_{n} \xrightarrow{P} X$, but not necessarly the other way around.

Like convergence in probability, sometimes $X_{n}$ converges almost surely to a constant $c$. In that case, we may write $X_n\xrightarrow{\text{a.s.}}c$.

## Related theorems
- [[3 Reference/mathstat5.1#Theorem Strong law of large numbers]] : $\bar{X}_{n} \xrightarrow{a.s.}\mu$