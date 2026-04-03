---
publish: true
aliases:
  - 2.1 Distributions of Two Random Variables.md
created: 2026-03-25T15:22:40.605+07:00
modified: 2026-03-25T15:22:40.605+07:00
published: 2026-03-25T15:22:40.605+07:00
cssclasses: ""
creation-time: 2025-07-02 23:50
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---


<< [[3 Reference/mathstat1.10\|1.10 Important Inequalities.md]] | [[3 Reference/2.2-transformations-bivariate-random-variables_202507240549\|2.2 Transformations: Bivariate Random Variables]] >>

#TODO: Marginal distributions

## Definition 2.1.1: Random vector
## Definition

> Let
> - $\mathcal{C}$ : Sample space
> - $X_{1},X_{2}$ : [[3 Reference/mathstat1.5#Definition 1.5.1 Random variable\|Random variables]]
> 
> If $X_{1}$ and $X_{2}$ assigns to each $c\in \mathcal{C}$ one and only one ordered pair of numbers $X_{1}(c)=x_{1},X_{2}(c)=x_{2}$
> 
> Then
> - We say $(X_{1},X_{2})$ is a **random vector**
> - We say $\mathcal{D}=\{ (x_{1},x_{2}):x_{1}=X_{1}(c),x_{2}=X_{2}(c),c\in \mathcal{C} \}$ is the space of $(X_{1},X_{2})$

We often denote random vectors using $\mathbf{X}=(X_{1},X_{2})'$

Also, we often use $(X,Y)$ to denote random vectors

### Cumulative distribution function (cdf)
$ F_{X,Y}(x,y) = P[\{ X\leq x \}\cap \{ Y\leq y \}], \forall(x,y)\in \mathbb{R}^2 $$

We may also write $P[\{ X\leq x \}\cap \{ Y\leq y \}]$ as $P[X\leq x,Y\leq y]$

### Joint cumulative distribution function (cdf)
As exercise 2.1.3 shows, 
$$
P[a_{1}<X\leq b_{1}, a_{2}<Y\leq b_{2}] = F(b_{1},b_{2})-F(a_{1},b_{2}) - F(b_{1},a_{2}) + F(a_{1},a_{2})
$$

Hence, all induced probabilities of this form can be formulated in terms of the cdf. We call this cdf the **joint cumulative distribution function** of $(X,Y)$

### Discrete random vector
> Let $(X,Y)$ : Random vector 
> 
> If space of $(X,Y)$ is finite or countable
> 
> Then 
> - We say $(X,Y)$ is a **discrete random vector**
> - Both $X,Y$ are [[3 Reference/mathstat1.6#Definition 1.6.1 Discrete random variable\|discrete random variable]]

### Joint probability mass function (pmf)
> Let $(X,Y)$ : Random vector
> 
> If
> $$
> p_{X,Y}(x,y)=P[X=x,Y=y], \quad \forall(x,y)\in \mathcal{D}
> $$
> 
> Then we say $p_{X,Y}$ is the **joint [[3 Reference/mathstat1.6#Definition 1.6.2 Probability mass function (pmf)\|probability mass function]]** (pmf) of $(X,Y)$

As with random variables, the joint pmf have the following 2 properties:
1. $0\leq p_{X,Y}(x,y)\leq 1$
2. $\sum_{(x,y) \in \mathcal{D}}p_{X,Y}(x,y)=1$

Also, for an event $B\in \mathcal{D}$, we have
$$
P[(X,Y)\in B]=\sum_{(x,y)\in \mathcal{D}}p_{X,Y}(x,y)
$$

### Support of discrete random vector
> Let $(X,Y)$ : Random vector
> 
> If $\mathcal{S}_{X,Y} = \{ (x,y) : p_{X,Y}(x,y) > 0 \}$
> 
> Then $\mathcal{S}_{X,Y}$ is the **support** of $(X,Y)$

### Continuous random vector
> Let $(X,Y)$ : Random vector
> 
> If cdf of $(X,Y)$ is continuous
> 
> Then we say $(X,Y)$ is a **continuous random vector**

### Joint probability density function (pdf)
> Let $(X,Y)$ : Random vector
> 
> If
> $$
> F_{X,Y}(x,y)=\int_{-\infty}^x \int_{-\infty}^y f_{X,Y}(v,w)dv\,dw,\quad\forall(x,y)\in \mathbb{R}> $$
> 
> Then we say $F_{X,Y}$ is the **joint [[3 Reference/mathstat1.7#Definition Probability density function (pdf)\|probability density function]]** (pmf) of $(X,Y)$

And
$$
\frac{\partial^2F_{X,Y}(x,y)}{\partial x\partial y} = f_{X,Y}(x,y)
$$

As with random variables, the joint pdf have the following 2 properties:
1. $f_{X,Y}(x,y)\geq 0$
2. $\int \int_{\mathcal{D}}f_{X,Y}(x,y)dx\,dy=1$

Also, for an event $A\in \mathcal{D}$, we have
$$
P[(X,Y)\in A]=\int \int_{A}f_{X,Y}(x,y)dx\,dy
$$


## Theorem 2.1.1
> Let 
> - $(X_{1},X_{2})$ : Random vector
> - $Y_{1}=g_{1}(X_{1},X_{2})$
> - $Y_{2}=g_{2}(X_{1},X_{2})$
> - $E(Y_{1}),E(Y_{2})$ exist
> 
> Then
> $$
> E(k_{1}Y_{1}+k_{2}Y_{2}) = k_{1}E(Y_{1}) + k_{2}E(Y_{2}), \quad \forall k_{1},k_{2}\in \mathbb{R}
> $$

## Definition 2.1.2: mgf of random vector of two random variables
> Let $\mathbf{X}=(X_{1},X_{2})'$ : Random vector
> 
> If
> $$
> M_{X_{1},X_{2}}(t_{1},t_{2}) = E(e^{ t_{1}X_{1}+t_{2}X_{2} })\text{ exists}, \quad |t_{1}|<h_{1},|t_{2}|<h_{2},h_{1}\in \mathbb{P}, h_{2}\in \mathbb{P}
> $$
> 
> Then we say $M_{X_{1},X_{2}}$ is the mgf of $\mathbf{X}$

## Definition 2.1.3: Expected value of random vector of two random variables
> Let $\mathbf{X}=(X,Y)'$ : Random vector
> 
> If $E(X),E(Y)$ exist
> 
> Then $E[\mathbf{X}]=E\left[\begin{matrix}E(X) \\ E(Y)\end{matrix}\right]$ exist
