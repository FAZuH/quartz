---
{"publish":true,"created":"2025-07-24T11:50:56.322+07:00","modified":"2025-07-24T11:50:56.322+07:00","published":"2025-07-24T11:50:56.322+07:00","cssclasses":"","creation-time":"2025-07-07 09:42","status":"baby","tags":null,"parent":["[[mathematical statistics]]"]}
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

$X \sim \text{Bernoulli}(p)$

Models random experiment whose outcomes are "success" or "failure"

- pmf: $p^x(1-p)^{1-x}$, $x \in {0,1}$
- mean: $p$
- var: $p(1-p)$
- mgf: $1-p+pe^t$

## Binomial distribution

$X \sim B(n,p)$

Models the number of successes in a fixed number of independent Bernoulli trials, each with the same probability of success

- pmf: $\binom{n}{x}p^x(1-p)^{n-x}$, $x \in {0,1,2,\ldots,n}$
- mean: $np$
- var: $np(1-p)$
- mgf: $(1-p+pe^t)^n$

## Multinomial distribution

$\mathbf{X} \sim \text{Multinomial}(n; p_1, p_2, \ldots, p_k)$

Extension of binomial distribution to $k$ categories

- pmf: $\dfrac{n!}{x_1!\cdots x_k!}p_1^{x_1}\cdots p_k^{x_k}$
- where $x_k = n-(x_1+\cdots+x_{k-1})$ and $p_k = 1-(p_1+\cdots+p_{k-1})$
- mean: $E(X_i) = np_i$
- var: $\text{Var}(X_i) = np_i(1-p_i)$
- cov: $\text{Cov}(X_i, X_j) = -np_ip_j$

## Trinomial distribution

$\mathbf{X} \sim \text{Trinomial}(n; p_1, p_2, p_3)$

Like binomial, but with 3 possible outcomes. Special case of multinomial with $k=3$.

- pmf: $\dfrac{n!}{x_1!x_2!x_3!}p_1^{x_1}p_2^{x_2}p_3^{x_3}$, where $x_1+x_2+x_3=n$
- mean: $E(X_i) = np_i$
- var: $\text{Var}(X_i) = np_i(1-p_i)$
- mgf: $(p_1e^{t_1}+p_2e^{t_2}+p_3e^{t_3})^n$

**Conditional distribution:** $E(X_1|X_2=x_2) = (n-x_2)\left(\dfrac{p_1}{1-p_2}\right)$

**Correlation coefficient:** $\rho(X_1,X_2) = -\sqrt{\dfrac{p_1p_2}{(1-p_1)(1-p_2)}}$

## Poisson distribution

$X \sim \text{Poisson}(\lambda)$

Models number of events occurring in fixed intervals of time/space when:

- Events occur at constant rate $\lambda$
- Events are independent of one another
- pmf: $\dfrac{e^{-\lambda}\lambda^x}{x!}$, $x \in {0,1,2,\ldots}$, $\lambda > 0$
- mean: $\lambda$
- var: $\lambda$
- mgf: $e^{\lambda(e^t-1)}$
    

## Negative binomial distribution

$X \sim \text{NB}(r,p)$

Distribution of number of failures needed to get the $r$-th success

- pmf: $\binom{x+r-1}{r-1}p^r(1-p)^x$, $x \in {0,1,2,\ldots}$
- mean: $\dfrac{r(1-p)}{p}$
- var: $\dfrac{r(1-p)}{p^2}$
- mgf: $p^r[1-(1-p)e^t]^{-r}$, $t < -\ln(1-p)$

## Geometric distribution

$X \sim \text{Geom}(p)$

Distribution for number of failures needed for a single success. Special case of negative binomial with $r=1$.

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

