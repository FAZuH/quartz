---
publish: true
created: 2026-03-25T15:22:40.592+07:00
modified: 2026-03-25T15:22:40.592+07:00
published: 2026-03-25T15:22:40.592+07:00
cssclasses: ""
creation-time: 2025-07-07 09:42
status: in progress
tags:
parent:
  - "[[Introduction to Mathematical Statistics]]"
---



## Summary

|Distribution|pmf|Mean|Variance|mgf|
|---|---|---|---|---|
|**Discrete Uniform** <br> $U({1,2,\ldots,n})$|$\dfrac{1}{n}$|$\dfrac{n+1}{2}$|$\dfrac{n^2-1}{12}$|$\dfrac{e^t(1-e^{nt})}{n(1-e^t)}$|
|**Bernoulli** <br> $\text{Bernoulli}(p)$|$p^x(1-p)^{1-x}$|$p$|$p(1-p)$|$1-p+pe^t$|
|**Binomial** <br> $B(n,p)$|$\binom{n}{x}p^x(1-p)^{n-x}$|$np$|$np(1-p)$|$(1-p+pe^t)^n$|
|**Poisson** <br> $\text{Poisson}(\lambda)$|$\dfrac{e^{-\lambda}\lambda^x}{x!}$|$\lambda$|$\lambda$|$e^{\lambda(e^t-1)}$|
|**Negative Binomial** <br> $\text{NB}(r,p)$|$\binom{x+r-1}{r-1}p^r(1-p)^x$|$\dfrac{r(1-p)}{p}$|$\dfrac{r(1-p)}{p^2}$|$p^r[1-(1-p)e^t]^{-r}$|
|**Geometric** <br> $\text{Geom}(p)$|$(1-p)^xp$|$\dfrac{1-p}{p}$|$\dfrac{1-p}{p^2}$|$\dfrac{p}{1-(1-p)e^t}$|
|**Hypergeometric** <br> $\text{Hypergeometric}(N,K,n)$|$\dfrac{\binom{K}{x}\binom{N-K}{n-x}}{\binom{N}{n}}$|$n\dfrac{K}{N}$|$n\dfrac{K}{N}\left(1-\dfrac{K}{N}\right)\dfrac{N-n}{N-1}$|—|

## Discrete uniform distribution

$X \sim U({x_1, x_2, \ldots, x_n})$

Finite number of outcomes are equally likely

- pmf: $\dfrac{1}{n}$, $x \in {x_1, x_2, \ldots, x_n}$
- mean: $\dfrac{n+1}{2}$ (when $x_i = i$)
- var: $\dfrac{n^2-1}{12}$
- mgf: $\dfrac{e^t(1-e^{nt})}{n(1-e^t)}$

## Bernoulli distribution



## Definition

$X \sim \text{Bernoulli}(p)$

Models [[3 Reference/Def-random-experiment\|random experiment]] whose outcomes are "success" or "failure".

- [[3 Reference/Def-probability-mass-function-(pmf)\|pmf]]: $p^x(1-p)^{1-x}$, $x \in {0,1}$
- [[3 Reference/Def-mean\|Mean]]: $p$
- [[3 Reference/Def-variance\|Variance]]: $p(1-p)$
- [[3 Reference/Def-moment-generating-function-(mgf)\|mgf]]: $1-p+pe^t$



## Binomial distribution



## Definition

$X \sim B(n,p)$

Models the number of successes in a fixed number of independent Bernoulli trials, each with the same probability of success

$x$ is the amount of success outcomes

- [[3 Reference/Def-probability-mass-function-(pmf)\|pmf]]: $\binom{n}{x}p^x(1-p)^{n-x}$, $x \in {0,1,2,\ldots,n}$
- [[3 Reference/Def-mean\|Mean]]: $np$
- [[3 Reference/Def-variance\|Variance]]: $np(1-p)$
- [[3 Reference/Def-moment-generating-function-(mgf)\|mgf]]: $(1-p+pe^t)^n$
## Trinomial distribution



## Definition

$\mathbf{X} \sim \text{Trinomial}(n; p_1, p_2, p_3)$

Like binomial, but with 3 possible outcomes. Special case of multinomial with $k=3$.

- pmf: $\dfrac{n!}{x_1!x_2!x_3!}p_1^{x_1}p_2^{x_2}p_3^{x_3}$, where $x_1+x_2+x_3=n$
- mean: $E(X_i) = np_i$
- var: $\text{Var}(X_i) = np_i(1-p_i)$
- mgf: $(p_1e^{t_1}+p_2e^{t_2}+p_3e^{t_3})^n$

**Conditional distribution:** $E(X_1|X_2=x_2) = (n-x_2)\left(\dfrac{p_1}{1-p_2}\right)$

**Correlation coefficient:** $\rho(X_1,X_2) = -\sqrt{\dfrac{p_1p_2}{(1-p_1)(1-p_2)}}$
## Multinomial distribution



## Definition

$\mathbf{X} \sim \text{Multinomial}(n; p_1, p_2, \ldots, p_k)$

Extension of [[3 Reference/def-binomial-distribution_202509150822\|binomial distribution]] to $k$ categories.

$x_{i}$ is the number of success in the $i$-th variable.

- [[3 Reference/Def-probability-mass-function-(pmf)\|pmf]]: $\dfrac{n!}{x_1!\cdots x_k!}p_1^{x_1}\cdots p_k^{x_k}$
	- $x_k = n-(x_1+\cdots+x_{k-1})$ 
	- $p_k = 1-(p_1+\cdots+p_{k-1})$
- [[3 Reference/Def-mean\|Mean]]: $E(X_i) = np_i$
- [[3 Reference/Def-variance\|Variance]]: $\text{Var}(X_i) = np_i(1-p_i)$
- Covariance: $\text{Cov}(X_i, X_j) = -np_ip_j$
## Negative binomial distribution



## Definition

$X \sim \text{NB}(r,p)$

Distribution of number of failures ($x$) needed to get the $r$-th success

- pmf: $\binom{x+r-1}{r-1}p^r(1-p)^x$, $x \in {0,1,2,\ldots}$
- mean: $\dfrac{r(1-p)}{p}$
- var: $\dfrac{r(1-p)}{p^2}$
- mgf: $p^r[1-(1-p)e^t]^{-r}$, $t < -\ln(1-p)$

## Poisson distribution



## Definition

$X \sim \text{Poisson}(\lambda)$

Models number of [[3 Reference/Def-events\|events]] occurring in fixed intervals of time/space when:

- Events are independent of one another
- [[3 Reference/Def-probability-mass-function-(pmf)\|pmf]]: $\dfrac{e^{-\lambda}\lambda^x}{x!}$, $x \in {0,1,2,\ldots}$, $\lambda > 0$
- [[3 Reference/Def-mean\|mean]]: $\lambda$ (events occur at <u>constant rate</u> $\lambda$)
- [[3 Reference/Def-variance\|variance]]: $\lambda$
- [[3 Reference/Def-moment-generating-function-(mgf)\|mgf]]: $e^{\lambda(e^t-1)}$

## Notes

When modeling count data, use [[3 Reference/def-negative-binomial-distribution_202509150822\|negative binomial distribution]] instead of [[3 Reference/def-poisson-distribution_202509150822\|poisson distribution]] to handle [[3 Reference/overdispersion_202509150835\|overdispersion]].

Count data refers to numerical data that represents the number of times an event occurs.

The Poisson distribution is suitable for count data when the <u>mean and variance are approximately equal</u>, assuming events occur independently and at a constant average rate.

However, in real-world count data, overdispersion often occurs, where the variance exceeds the mean due to factors like clustering or unobserved heterogeneity.

The negative binomial distribution accommodates this overdispersion by introducing an additional parameter to model the variance more flexibly.

## Connection to Poisson Process

The Poisson distribution arises naturally in the [[3 Reference/poisson-process_202604031845\|Poisson Process]]: if events occur according to a Poisson process of rate $\lambda$, then the number of events in any interval of length $t$ follows $\text{Po}(\lambda t)$.

Key theorems:
- **[[3 Reference/sum-of-poisson-random-variables_202604031845\|Sum of Poisson RVs]]**: If $X \sim \text{Po}(\mu)$ and $Y \sim \text{Po}(\nu)$ are independent, then $X + Y \sim \text{Po}(\mu + \nu)$.
- **[[3 Reference/poisson-binomial-distribution_202604031845\|Poisson-Binomial]]**: If $N \sim \text{Po}(\mu)$ and $M \mid N \sim \text{Bin}(N, p)$, then $M \sim \text{Po}(\mu p)$.
    
## Geometric distribution

## Definition

$X \sim \text{Geom}(p)$

Special case of [[3 Reference/def-negative-binomial-distribution_202509150822\|negative binomial distribution]] with $r=1$. Distribution for number of failures needed for a single success. 

- pmf: $(1-p)^xp$, $x \in {0,1,2,\ldots}$
- mean: $\dfrac{1-p}{p}$
- var: $\dfrac{1-p}{p^2}$
- mgf: $\dfrac{p}{1-(1-p)e^t}$, $t < -\ln(1-p)$
## Hypergeometric distribution

$X \sim \text{Hypergeometric}(N,K,n)$

Distribution for number of successes in $n$ draws from finite population of size $N$ containing exactly $K$ successes (sampling without replacement)

- pmf: $\dfrac{\binom{K}{x}\binom{N-K}{n-x}}{\binom{N}{n}}$, $x \in {\max(0,n-N+K), \ldots, \min(n,K)}$
- mean: $n\dfrac{K}{N}$
- var: $n\dfrac{K}{N}\left(1-\dfrac{K}{N}\right)\dfrac{N-n}{N-1}$

