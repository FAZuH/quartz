---
publish: true
aliases:
  - 1.3 The Probability Set Function
created: 2025-10-14T04:15:27.055+07:00
modified: 2025-10-14T04:15:27.056+07:00
published: 2025-10-14T04:15:27.056+07:00
cssclasses: ""
creation-time: 2025-06-18 18:15
status: adult
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

<< [[3 Reference/mathstat1.2\|1.2 Sets]] | [[3 Reference/mathstat1.4\|1.4 Conditional Probability and Independence]] >>

## Definition 1.3.1: Probability set function
## Definition
Let
- $\mathcal C$ : [[3 Reference/Def-sample-space\|Sample space]]
- $\mathcal B$ : [[3 Reference/Def-events\|Events]] ($\mathcal{B}\subset \mathcal{C}$)
- $P : \mathcal B \to \mathbb{R}$  (Function)

If
1. $P(A)\geq 0,\quad\forall A\subset\mathcal B$
2. $P(\mathcal C) = 1$
3. If $\{ A_{n} \}\in \mathcal B$ and $A_{m}\cap A_{n}=\phi,\;\forall m\neq n$ then
$$
P\left(\bigcup_{n=1}^{\infty} A_n\right)=\sum_{n=1}^{\infty} P\left(A_n\right)
$$

Then 
- We say $P$ is a **probability set function**
- We call the return value of $P$ as the probability



## Theorems
> Let $\mathcal{B}$ : Set of events
> 
> Then
> - $P(A)=1-P(A^C),\quad\forall A\in\mathcal B$
> - $P(\phi)=0$
> - $A\subset\mathcal B\implies P(A)\leq P(\mathcal B)$
> - $0\leq P(A)\leq 1, \quad \forall A\in\mathcal B$
> - $A,B\in\mathcal C \implies P(A\cup B)=P(A)+P(B)-P(A\cup B)$

## Definition 1.3.2: Equilikely Case
## Definition
Let
- $\mathcal C=\{ x_{1},\dots, x_{m} \}$ : Finite [[3 Reference/Def-sample-space\|sample space]]
- $p_{i}=1/m,\quad\forall i=1,\dots, m$
- $\#(A)$ : Number of elements in [[3 Reference/def-set_202510022014\|set]] $A$
- $P(A)$ : [[3 Reference/Def-probability-set-function\|Probability set function]]

If
$P(A)=\sum_{x_{i}\in A} \frac{1}{m}=\frac{\#(A)}{m},\quad\forall A\subset\mathcal C$$

Then we say $P$ is a probability on $\mathcal C$, which we refer to as the **equilikely case**


## Theorem 1.3.6
> Let $\{ C_{n} \}$ : Sequence of events
> 
>   > If $\{ C_{n} \}$ is nondecreasing
>   > 
>   > Then
>   > $$
>  > \lim_{ n \to \infty } P(C_{n}) = P\left(\lim_{ n \to \infty } C_{n}\right) = P\left(\bigcup_{n=1}^\infty C_{n}\right)
>  > $$
> 
>   > If $\{ C_{n} \}$ is decreasing
>   > 
>   > Then
>   > $$
>  > \lim_{ n \to \infty } P(C_{n}) = P\left(\lim_{ n \to \infty } C_{n}\right) = P\left(\bigcap_{n=1}^\infty C_{n}\right)
>  > $$

## Theorem 1.3.7: Boole's inequality
> Let $\{ C_{n} \}$ : Arbitrary sequence of events
> 
> Then
> $$
> P\left(\bigcup_{n=1}^\infty C_{n}\right)\leq \sum_{n=1}^\infty P(C_{n})
> $$
