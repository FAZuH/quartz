---
publish: true
aliases:
  - Limit Theorem for Monotone Events
created: 2026-03-25T15:22:40.621+07:00
modified: 2026-03-25T15:22:40.621+07:00
published: 2026-03-25T15:22:40.621+07:00
tags:
  - 
creation-time: 2025-10-02 20:37
status: in progress
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

## Theorem

Let ${ C\_{n} }$ : [[3.1 Sequences and Their Limits#3.1.1 Definition Sequence of real numbers|Sequence]] of [[Def-events|events]]

If ${ C\_{n} }$ is [[3.3 Monotone Sequences#3.3.1 Definition of monotone sequences|increasing]]

Then
$$
\lim\_{ n \to \infty } P(C\_{n}) = P\left(\lim\_{ n \to \infty } C\_{n}\right) = P\left(\bigcup\_{n=1}^\infty C\_{n}\right)
$$

If ${ C\_{n} }$ is [[3.3 Monotone Sequences#3.3.1 Definition of monotone sequences|decreasing]]

Then
$$
\lim\_{ n \to \infty } P(C\_{n}) = P\left(\lim\_{ n \to \infty } C\_{n}\right) = P\left(\bigcap\_{n=1}^\infty C\_{n}\right)
$$

## Proof

Let $R\_{1}=C\_{1}$ be any [[def-set_202510022014|set]] and let $R\_{n}=C\_{n}\cap C\_{n-1}^C$ for $n>1$

It follows that $\bigcup\_{n=1}^\infty C\_{n}=\bigcup\_{n=1}^\infty R\_n$ and that $R\_{m}\cap R\_{n}=\phi$, for $m\neq n$.

Also, $P(R\_{n})=P(C\_{n})-P(C\_{n-1})$.

Applying the third axiom of [[Def-probability-set-function|probability set function]] yields the following string of equalities:
$$
\begin{align}
P\left\[\lim\_{ n \to \infty } C\_{n}\right] & = P\left( \bigcup\_{n=1}^\infty C\_{n} \right) \\
& = P\left( \bigcup\_{n=1}^\infty R\_{n} \right) \\
& = \sum\_{n=1}^\infty P(R\_{n}) \\
& = \lim\_{ n \to \infty } \sum\_{j=1}^n P(R\_{j}) \\
& = \lim\_{ n \to \infty } \left{ P(C\_{1}) + \sum\_{j=2}^n \[P(C\_{j}) - P(C\_{j-1})] \right} \\
& = \lim\_{ n \to \infty } P(C\_{n})
\end{align}
$$
