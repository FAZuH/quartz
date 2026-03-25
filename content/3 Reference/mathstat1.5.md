---
publish: true
aliases:
  - 1.5 Random Variables
created: 2026-03-25T15:22:40.616+07:00
modified: 2026-03-25T15:22:40.616+07:00
published: 2026-03-25T15:22:40.616+07:00
creation-time: 2025-06-18 18:15
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---

<< [[mathstat1.4|1.4 Conditional Probability and Independence]] | [[mathstat1.6|1.6 Discrete Random Variables]] >>

## Definition 1.5.1: Random variable

![[Def-random-variable#Definition]]

## Definition 1.5.2:  Cumulative distribution function (cdf)

![[Def-cumulative-distribution-function-(cdf)]]

## Definition: Equal in distribution

> Let $X,Y$ : two random variables
>
> If $F\_{X}(x)=F\_{Y}(x),\quad\forall x\in \mathbb{R}$
>
> Then
>
> - We say $X$ and $Y$ are **equal in distribution**
> - We write $X \stackrel D= Y$

## Theorem 1.5.1

> Let
>
> - $X$ : Random variable
> - $F\_{X}(x)$ : cdf of $X$
>
> Then
>
> - $\forall a,b\in \mathbb{R}, a\<b\implies F(a)\leq F(b), \quad \forall a,b\in \mathbb{R}$  ($F$ is nondecreasing)
> - $\lim\_{ n \to -\infty }F(x)=0$ (lower limit of $F$ is 0)
> - $\lim\_{ n \to \infty }F(x)=1$ (upper limit of $F$ is 1)
> - $\lim\_{ x \downarrow x\_{0} }F(x)=F(x\_{0})$ (F is right continuous)

## Theorem 1.5.2

> Let
>
> - $X$ : Random variable
> - $F\_{X}$ : cdf of $X$
>
> Then $$ P\[a\<X\leq b]=F\_{X}(b) - F\_{X}(a), \quad \forall a\<b $$

## Theorem 1.5.3

> For any random variable,
> $$
> P\[X=x]=F\_{X}(x)-F\_{X}(x-)
> $$
> $\forall x\in \mathbb{R}, F\_{X}(x-)=\lim\_{ z \uparrow x }F\_{X}(z)$

## Remark 1.5.1

> The subscript $X$ on $P\_{X}$ and $f\_{X}$ identifies the pmf and pdf, respectively, with the random variable.
>
> If the identity of the random variable is clear, **we often suppress the subscripts**.

## Exercise

### Example: Random variable representing sum of 2 dice rolls

Let $X$ be a random variable which represents the sum of rolls from 2 dices. So, $X\big((a,b)\big) =  a+b$, where $a$ and $b$ are rolls from 1st and 2nd dice respectively. In this case, $X$ has value space $\set{(1,1),(1,2),\dots,(6,5),(6,6)}$, and range $\set{2,3,\dots,12}$.

### Example: pmf of discrete random variable

Let $X$ represent sum of rolls of 2 dices. So $X\big((x,y)\big) = x + y$. $\mathcal D$ of $X$ is $\set{ 2, 3, \dots, 12 }$. The pmf of $X$ is

![[1 Fleeting/Mathematical Statistics/1 5 Random Variables/image.png]]

### Example: pdf of continuous random variable

Choose a real number at random from the interval $(0,1)$. It is reasonable to assign $P\_X\[(a,b)] = b-a,\quad \text{for } 0\<a\<b<1$.

Let $X$ be the number chosen. $pdf$ of $X$ is

$$
f\_X(x) =
\begin{cases}
1 & 0 < x < 1\\
0 & \text{elsewhere.}
\end{cases}
$$

Probability that $X<\frac{1}{8}$ or $X>\frac{7}{8}$ is

$$
\begin{align}
P\big\[\set{X<\frac{1}{8}}\cup\set{X>\frac{7}{8}}\big]
&=
P\[X<\frac{1}{8}] + P\[X<\frac{7}{8}]\\
&=
\int\_{-\infty}^\frac{1}{8} dx +
\int\_\frac{7}{8}^\infty dx\\
&=
\int\_{-\infty}^0dx + \int\_0^{\frac{1}{8}}dx + \int\_\frac{7}{8}^1 dx + \int\_1^\infty dx\\
&=
0 + \int\_0^\frac{1}{8} dx +
\int\_\frac{7}{8}^0 dx + 0\\
&=
\frac{1}{4}
\end{align}
$$

### 1.6.1.

![[1 Fleeting/Mathematical Statistics/1 5 Random Variables/image 1.png]]

### 1.6.2.

![[1 Fleeting/Mathematical Statistics/1 5 Random Variables/image 2.png]]

### 1.6.3.

![[1 Fleeting/Mathematical Statistics/1 5 Random Variables/image 3.png]]

### 1.6.4.

![[1 Fleeting/Mathematical Statistics/1 5 Random Variables/image 4.png]]
