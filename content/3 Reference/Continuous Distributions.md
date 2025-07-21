---
{"publish":true,"cssclasses":""}
---


## Uniform distribution

$X \sim U(a,b)$

All outcomes in an interval are equally likely

- pdf: $\dfrac{1}{b-a}$, $a < x < b$
- mean: $\dfrac{a+b}{2}$
- var: $\dfrac{(b-a)^2}{12}$
- mgf: $\dfrac{e^{bt}-e^{at}}{t(b-a)}$, $t \neq 0$

## Gamma distribution

$X \sim \Gamma(\alpha,\beta)$

Commonly used to model waiting time until an event occurs

- pdf: $\dfrac{1}{\Gamma(\alpha)\beta^\alpha} x^{\alpha-1}e^{-x/\beta}$, $x > 0$, $\alpha > 0$, $\beta > 0$
- mean: $\alpha\beta$
- var: $\alpha\beta^2$
- mgf: $(1-\beta t)^{-\alpha}$, $t < \dfrac{1}{\beta}$

> [!note] Gamma function 
> $$\Gamma(\alpha) = (\alpha-1)\Gamma(\alpha-1) = \int_0^\infty y^{\alpha-1}e^{-y},dy$$ For positive integers: $\Gamma(n) = (n-1)!$

## Exponential distribution

$X \sim \text{Exp}(\lambda)$

Models time between events in a Poisson process. Special case of Gamma distribution with $\alpha = 1$, $\beta = \dfrac{1}{\lambda}$.

- pdf: $\lambda e^{-\lambda x}$, $x > 0$, $\lambda > 0$
- mean: $\dfrac{1}{\lambda}$
- var: $\dfrac{1}{\lambda^2}$
- mgf: $\dfrac{\lambda}{\lambda - t}$, $t < \lambda$

## Chi-square distribution

$X \sim \chi^2(r)$

Special case of Gamma distribution with $\alpha = \dfrac{r}{2}$, $\beta = 2$. Used in hypothesis testing and confidence intervals.

- pdf: $\dfrac{1}{\Gamma(r/2)2^{r/2}}x^{(r/2)-1}e^{-x/2}$, $x > 0$, $r > 0$
- mean: $r$
- var: $2r$
- mgf: $(1-2t)^{-r/2}$, $t < \dfrac{1}{2}$

## Normal distribution

$X \sim N(\mu,\sigma^2)$

The most important continuous distribution, appears naturally due to Central Limit Theorem

- pdf: $\dfrac{1}{\sigma\sqrt{2\pi}}\exp\left(-\dfrac{(x-\mu)^2}{2\sigma^2}\right)$, $x \in \mathbb{R}$
- mean: $\mu$
- var: $\sigma^2$
- mgf: $\exp\left(\mu t+\dfrac{\sigma^2t^2}{2}\right)$

**Standardization:** If $X \sim N(\mu,\sigma^2)$, then $Z = \dfrac{X-\mu}{\sigma} \sim N(0,1)$

**Relationship to Chi-square:** If $X \sim N(\mu,\sigma^2)$, then $\left(\dfrac{X-\mu}{\sigma}\right)^2 \sim \chi^2(1)$

## Bivariate normal distribution

$(X,Y) \sim N_2(\mu_1,\mu_2,\sigma_1^2,\sigma_2^2,\rho)$

Joint distribution of two normally distributed variables

- pdf: $\dfrac{1}{2\pi\sigma_1\sigma_2\sqrt{1-\rho^2}} \exp\left(\dfrac{-1}{2(1-\rho^2)}\left[\dfrac{(x-\mu_1)^2}{\sigma_1^2} - \dfrac{2\rho(x-\mu_1)(y-\mu_2)}{\sigma_1\sigma_2} + \dfrac{(y-\mu_2)^2}{\sigma_2^2}\right]\right)$
- mean: $E(X) = \mu_1$, $E(Y) = \mu_2$
- var: $\text{Var}(X) = \sigma_1^2$, $\text{Var}(Y) = \sigma_2^2$
- mgf: $\exp\left(\mu_1t_1+\mu_2t_2+\dfrac{\sigma_1^2t_1^2+2\rho\sigma_1\sigma_2t_1t_2+\sigma_2^2t_2^2}{2}\right)$

**Independence:** $X$ and $Y$ are independent if and only if $\rho = 0$

**Conditional distributions:**

- $Y|X=x \sim N\left(\mu_2+\rho\dfrac{\sigma_2}{\sigma_1}(x-\mu_1), \sigma_2^2(1-\rho^2)\right)$
- $X|Y=y \sim N\left(\mu_1+\rho\dfrac{\sigma_1}{\sigma_2}(y-\mu_2), \sigma_1^2(1-\rho^2)\right)$

## Summary

|Distribution|pdf|Mean|Variance|mgf|
|---|---|---|---|---|
|**Uniform** <br> $U(a,b)$|$\dfrac{1}{b-a}$|$\dfrac{a+b}{2}$|$\dfrac{(b-a)^2}{12}$|$\dfrac{e^{bt}-e^{at}}{t(b-a)}$|
|**Gamma** <br> $\Gamma(\alpha,\beta)$|$\dfrac{1}{\Gamma(\alpha)\beta^\alpha} x^{\alpha-1}e^{-x/\beta}$|$\alpha\beta$|$\alpha\beta^2$|$(1-\beta t)^{-\alpha}$|
|**Exponential** <br> $\text{Exp}(\lambda)$|$\lambda e^{-\lambda x}$|$\dfrac{1}{\lambda}$|$\dfrac{1}{\lambda^2}$|$\dfrac{\lambda}{\lambda - t}$|
|**Chi-square** <br> $\chi^2(r)$|$\dfrac{1}{\Gamma(r/2)2^{r/2}}x^{(r/2)-1}e^{-x/2}$|$r$|$2r$|$(1-2t)^{-r/2}$|
|**Normal** <br> $N(\mu,\sigma^2)$|$\dfrac{1}{\sigma\sqrt{2\pi}}\exp\left(-\dfrac{(x-\mu)^2}{2\sigma^2}\right)$|$\mu$|$\sigma^2$|$\exp\left(\mu t+\dfrac{\sigma^2t^2}{2}\right)$|
|**Bivariate Normal** <br> $N_2(\mu_1,\mu_2,\sigma_1^2,\sigma_2^2,\rho)$|See formula above|$(\mu_1,\mu_2)$|$(\sigma_1^2,\sigma_2^2)$|See formula above|