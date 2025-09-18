---
{"publish":true,"created":"2025-09-13T18:58:57.832+07:00","modified":"2025-09-15T08:48:30.074+07:00","published":"2025-09-15T08:48:30.074+07:00","cssclasses":"","creation-time":"2025-07-07 09:42","status":"baby","tags":null,"parent":["[[Introduction to Mathematical Statistics]]"]}
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

![[3 Reference/def-bernoulli-distribution_202509150822\|Bernoulli Distribution]]
## Binomial distribution

![[3 Reference/def-binomial-distribution_202509150822\|Binomial Distribution]]
## Trinomial distribution

![[3 Reference/def-trinomial-distribution_202509150822\|Trinomial Distribution]]
## Multinomial distribution

![[3 Reference/def-multinomial-distribution_202509150822\|Multinomial Distribution]]
## Negative binomial distribution

![[3 Reference/def-negative-binomial-distribution_202509150822\|Negative Binomial Distribution]]
## Poisson distribution

![[3 Reference/def-poisson-distribution_202509150822\|Poisson Distribution]]
    
## Geometric distribution

![[3 Reference/def-geometric-distribution_202509150848#Definition\|Geometric Distribution]]
## Hypergeometric distribution

$X \sim \text{Hypergeometric}(N,K,n)$

Distribution for number of successes in $n$ draws from finite population of size $N$ containing exactly $K$ successes (sampling without replacement)

- pmf: $\dfrac{\binom{K}{x}\binom{N-K}{n-x}}{\binom{N}{n}}$, $x \in {\max(0,n-N+K), \ldots, \min(n,K)}$
- mean: $n\dfrac{K}{N}$
- var: $n\dfrac{K}{N}\left(1-\dfrac{K}{N}\right)\dfrac{N-n}{N-1}$

