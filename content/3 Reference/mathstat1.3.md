---
publish: true
aliases:
  - 1.3 The Probability Set Function
created: 2026-03-25T15:22:40.644+07:00
modified: 2026-03-25T15:22:40.644+07:00
published: 2026-03-25T15:22:40.644+07:00
creation-time: 2025-06-18 18:15
status: complete
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

<< [[mathstat1.2|1.2 Sets]] | [[mathstat1.4|1.4 Conditional Probability and Independence]] >>

## Definition 1.3.1: Probability set function

![[Def-probability-set-function#Definition]]

## Theorems

> Let $\mathcal{B}$ : Set of events
>
> Then
>
> - $P(A)=1-P(A^C),\quad\forall A\in\mathcal B$
> - $P(\phi)=0$
> - $A\subset\mathcal B\implies P(A)\leq P(\mathcal B)$
> - $0\leq P(A)\leq 1, \quad \forall A\in\mathcal B$
> - $A,B\in\mathcal C \implies P(A\cup B)=P(A)+P(B)-P(A\cup B)$

## Definition 1.3.2: Equilikely Case

![[def-equilikely-case#Definition]]

## Theorem 1.3.6

> Let ${ C\_{n} }$ : Sequence of events
>
> > If ${ C\_{n} }$ is nondecreasing
> >
> > Then
> > $$
> > \lim\_{ n \to \infty } P(C\_{n}) = P\left(\lim\_{ n \to \infty } C\_{n}\right) = P\left(\bigcup\_{n=1}^\infty C\_{n}\right)
> > $$
>
> > If ${ C\_{n} }$ is decreasing
> >
> > Then
> > $$
> > \lim\_{ n \to \infty } P(C\_{n}) = P\left(\lim\_{ n \to \infty } C\_{n}\right) = P\left(\bigcap\_{n=1}^\infty C\_{n}\right)
> > $$

## Theorem 1.3.7: Boole's inequality

> Let ${ C\_{n} }$ : Arbitrary sequence of events
>
> Then
> $$
> P\left(\bigcup\_{n=1}^\infty C\_{n}\right)\leq \sum\_{n=1}^\infty P(C\_{n})
> $$
