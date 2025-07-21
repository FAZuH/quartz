---
{"publish":true,"aliases":"1.5 Random Variables","cssclasses":""}
---

<< [[3 Reference/mathstat1.4\|1.4 Conditional Probability and Independence]] | [[3 Reference/mathstat1.6\|1.6 Discrete Random Variables]] >>

## Definition 1.5.1: Random variable

## Definition

Let
- $\mathcal{C}$ : [[3 Reference/Def-sample-space\|Sample space]]
- $X$ : Function

If $X$ assigns each element $c\in \mathcal{C}$ one and only one number $X(c)=x$

Then we say $X$ is a **random variable**



## Definition 1.5.2:  Cumulative distribution function (cdf)


## Definition
Let $X$ : [[3 Reference/Def-random-variable\|Random variable]]

If
$$
\begin{align}
F_X(x)
&= P_X\big((-\infty,x]\big)\\
&= P(\set{c \in \mathcal C : X(c) \leq x})\\
&= P(X\leq x)\\
&= \int_{-\infty}^x f_X(t)\ dt
\end{align}
$$

Then we say $F_{X}(x)$ is the **cumulative distribution function** (cdf) of $X$.

## Remark
We often shorten
- $P(\{ c\in \mathcal{C}:X(c)\leq x \})$ to $P(X\leq x)$
- "Cumulative distribution function" to "**distribution function**" or "**cdf**"

## Definition: Equal in distribution
> Let $X,Y$ : two random variables
> 
> If $F_{X}(x)=F_{Y}(x),\quad\forall x\in \mathbb{R}$
> 
> Then 
> - We say $X$ and $Y$ are **equal in distribution**
> - We write $X \stackrel D= Y$

## Theorem 1.5.1
> Let
> - $X$ : Random variable
> - $F_{X}(x)$ : cdf of $X$
> 
> Then
> - $\forall a,b\in \mathbb{R}, a<b\implies F(a)\leq F(b), \quad \forall a,b\in \mathbb{R}$  ($F$ is nondecreasing)
> - $\lim_{ n \to -\infty }F(x)=0$ (lower limit of $F$ is 0)
> - $\lim_{ n \to \infty }F(x)=1$ (upper limit of $F$ is 1)
> - $\lim_{ x \downarrow x_{0} }F(x)=F(x_{0})$ (F is right continuous)

## Theorem 1.5.2
> Let
> - $X$ : Random variable
> - $F_{X}$ : cdf of $X$
> 
> Then $$ P[a<X\leq b]=F_{X}(b) - F_{X}(a), \quad \forall a<b $$

## Theorem 1.5.3
> For any random variable,
> $$
> P[X=x]=F_{X}(x)-F_{X}(x-)
> $$
> $\forall x\in \mathbb{R}, F_{X}(x-)=\lim_{ z \uparrow x }F_{X}(z)$

## Remark 1.5.1
> The subscript $X$ on $P_{X}$ and $f_{X}$ identifies the pmf and pdf, respectively, with the random variable. 
> 
> If the identity of the random variable is clear, **we often suppress the subscripts**.

## Exercise

### Example: Random variable representing sum of 2 dice rolls

Let $X$ be a random variable which represents the sum of rolls from 2 dices. So, $X\big((a,b)\big) =  a+b$, where $a$ and $b$ are rolls from 1st and 2nd dice respectively. In this case, $X$ has value space $\set{(1,1),(1,2),\dots,(6,5),(6,6)}$, and range $\set{2,3,\dots,12}$.

### Example: pmf of discrete random variable

Let $X$ represent sum of rolls of 2 dices. So $X\big((x,y)\big) = x + y$. $\mathcal D$ of $X$ is $\set{ 2, 3, \dots, 12 }$. The pmf of $X$ is

![[1 Fleeting/Mathematical Statistics/1 5 Random Variables/image.png]]

### Example: pdf of continuous random variable

Choose a real number at random from the interval $(0,1)$. It is reasonable to assign $P_X[(a,b)] = b-a,\quad \text{for } 0<a<b<1$.

Let $X$ be the number chosen. $pdf$ of $X$ is

$$
f_X(x) =
\begin{cases}
1 & 0 < x < 1\\
0 & \text{elsewhere.}
\end{cases}
$$

Probability that $X<\frac{1}{8}$ or $X>\frac{7}{8}$ is

$$
\begin{align}
P\big[\set{X<\frac{1}{8}}\cup\set{X>\frac{7}{8}}\big]
&=
P[X<\frac{1}{8}] + P[X<\frac{7}{8}]\\
&=
\int_{-\infty}^\frac{1}{8} dx +
\int_\frac{7}{8}^\infty dx\\
&=
\int_{-\infty}^0dx + \int_0^{\frac{1}{8}}dx + \int_\frac{7}{8}^1 dx + \int_1^\infty dx\\
&=
0 + \int_0^\frac{1}{8} dx +
\int_\frac{7}{8}^0 dx + 0\\
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
