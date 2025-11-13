---
{"publish":true,"created":"2025-10-14T04:15:27.062+07:00","modified":"2025-10-14T04:15:27.062+07:00","published":"2025-10-14T04:15:27.062+07:00","cssclasses":"","creation-time":"2025-06-24 00:52","status":"baby","tags":null,"parent":["[[Introduction to Mathematical Statistics]]"]}
---


## Summary

| Distribution                                                                               | pdf                                                                                                                                           | Mean                                       | Variance                             | mgf                                             |
| ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------ | ----------------------------------------------- |
| **Uniform** <br> $U(a,b)$                                                                  | $\dfrac{1}{b-a}$                                                                                                                              | $\dfrac{a+b}{2}$                           | $\dfrac{(b-a)^2}{12}$                | $\dfrac{e^{bt}-e^{at}}{t(b-a)}$                 |
| **Gamma** <br> $\Gamma(\alpha,\beta)$                                                      | $\dfrac{1}{\Gamma(\alpha)\beta^\alpha} x^{\alpha-1}e^{-x/\beta}$                                                                              | $\alpha\beta$                              | $\alpha\beta^2$                      | $(1-\beta t)^{-\alpha}$                         |
| **Exponential** <br> $\text{Exp}(\lambda)$<br> $\Gamma\left( 1, \frac{1}{\lambda} \right)$ | $\lambda e^{-\lambda x}$                                                                                                                      | $\dfrac{1}{\lambda}$                       | $\dfrac{1}{\lambda^2}$               | $\dfrac{\lambda}{\lambda - t}$                  |
| **Chi-square** <br> $\chi^2(r)$<br> $\Gamma\left( \frac{r}{2},2 \right)$                   | $\dfrac{1}{\Gamma(r/2)2^{r/2}}x^{(r/2)-1}e^{-x/2}$                                                                                            | $r$                                        | $2r$                                 | $(1-2t)^{-r/2}$                                 |
| **Normal** <br> $N(\mu,\sigma^2)$                                                          | $\dfrac{1}{\sigma\sqrt{2\pi}}\exp\left(-\dfrac{(x-\mu)^2}{2\sigma^2}\right)$                                                                  | $\mu$                                      | $\sigma^2$                           | $\exp\left(\mu t+\dfrac{\sigma^2t^2}{2}\right)$ |
| **Standard Normal** <br> $Z \sim N(0,1)$                                                   | $\dfrac{1}{\sqrt{2\pi}}\exp\left(-\dfrac{x^2}{2}\right)$                                                                                      | $0$                                        | $1$                                  | $\exp\left(\dfrac{t^2}{2}\right)$               |
| **t-distribution** <br> $t(\nu)$                                                           | $\dfrac{\Gamma\left(\frac{\nu+1}{2}\right)}{\Gamma\left(\frac{\nu}{2}\right)\sqrt{\nu\pi}}\left(1+\dfrac{x^2}{\nu}\right)^{-\frac{\nu+1}{2}}$ | $0$ (for $\nu > 1$)                        | $\dfrac{\nu}{\nu-2}$ (for $\nu > 2$) | Does not exist                                  |
| **F-distribution** <br> $F(\nu_1,\nu_2)$                                                   | [[3 Reference/Continuous Distributions#F-distribution\|Here]]                                                                                                                     | $\dfrac{\nu_2}{\nu_2-2}$ (for $\nu_2 > 2$) | [[3 Reference/Continuous Distributions#F-distribution\|Here]]            | Does not exist                                  |
| **Bivariate Normal** <br> $N_2(\mu_1,\mu_2,\sigma_1^2,\sigma_2^2,\rho)$                    | [[3 Reference/Continuous Distributions#Bivariate normal distribution\|Here]]                                                                                                      | $(\mu_1,\mu_2)$                            | $(\sigma_1^2,\sigma_2^2)$            | [[3 Reference/Continuous Distributions#Bivariate normal distribution\|Here]]        |

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

> [!note] Gamma function $$\Gamma(\alpha) = (\alpha-1)\Gamma(\alpha-1) = \int_0^\infty y^{\alpha-1}e^{-y},dy$$ For positive integers: $\Gamma(n) = (n-1)!$

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

## Z-distribution

$Z \sim N(0,1)$

The standardized version of the normal distribution. Fundamental in statistical theory and hypothesis testing.

- pdf: $\dfrac{1}{\sqrt{2\pi}}\exp\left(-\dfrac{x^2}{2}\right)$, $x \in \mathbb{R}$
- mean: $0$
- var: $1$
- mgf: $\exp\left(\dfrac{t^2}{2}\right)$

**Properties:**

- $P(Z \leq z) = \Phi(z)$ where $\Phi$ is the standard normal CDF
- $P(Z \leq -z) = 1 - P(Z \leq z)$ (symmetry)
- $P(-z \leq Z \leq z) = 2\Phi(z) - 1$

## t-distribution

$X \sim t(\nu)$

Student's t-distribution with $\nu$ degrees of freedom. Used when population variance is unknown and estimated from sample data.

- pdf: $\dfrac{\Gamma\left(\frac{\nu+1}{2}\right)}{\Gamma\left(\frac{\nu}{2}\right)\sqrt{\nu\pi}}\left(1+\dfrac{x^2}{\nu}\right)^{-\frac{\nu+1}{2}}$, $x \in \mathbb{R}$, $\nu > 0$
- mean: $0$ (for $\nu > 1$)
- var: $\dfrac{\nu}{\nu-2}$ (for $\nu > 2$)
- mgf: Does not exist

**Key properties:**

- Symmetric around 0, bell-shaped like normal distribution
- Heavier tails than standard normal
- As $\nu \to \infty$, $t(\nu) \to N(0,1)$
- For $\nu = 1$, becomes Cauchy distribution

**Construction:** If $U \sim N(0,1)$ and $V \sim \chi^2(\nu)$ independently, then $T = \dfrac{U}{\sqrt{V/\nu}} \sim t(\nu)$

## F-distribution

$X \sim F(\nu_1,\nu_2)$

F-distribution with $\nu_1$ and $\nu_2$ degrees of freedom. Used to compare variances and in ANOVA.

- pdf: $\dfrac{\Gamma\left(\frac{\nu_1+\nu_2}{2}\right)}{\Gamma\left(\frac{\nu_1}{2}\right)\Gamma\left(\frac{\nu_2}{2}\right)}\left(\dfrac{\nu_1}{\nu_2}\right)^{\frac{\nu_1}{2}} \dfrac{x^{\frac{\nu_1}{2}-1}}{\left(1+\dfrac{\nu_1 x}{\nu_2}\right)^{\frac{\nu_1+\nu_2}{2}}}$, $x > 0$
- mean: $\dfrac{\nu_2}{\nu_2-2}$ (for $\nu_2 > 2$)
- var: $\dfrac{2\nu_2^2(\nu_1+\nu_2-2)}{\nu_1(\nu_2-2)^2(\nu_2-4)}$ (for $\nu_2 > 4$)
- mgf: Does not exist

**Key properties:**

- Right-skewed distribution
- $F(\nu_1,\nu_2) = \dfrac{1}{F(\nu_2,\nu_1)}$ (reciprocal property)
- As $\nu_1, \nu_2 \to \infty$, approaches normal distribution

**Construction:** If $U \sim \chi^2(\nu_1)$ and $V \sim \chi^2(\nu_2)$ independently, then $F = \dfrac{U/\nu_1}{V/\nu_2} \sim F(\nu_1,\nu_2)$

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