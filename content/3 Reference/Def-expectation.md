---
publish: true
aliases:
  - Expectation
created: 2026-04-09T23:07:39.144+07:00
modified: 2026-04-09T23:07:39.145+07:00
published: 2026-04-09T23:07:39.145+07:00
cssclasses: ""
creation-time: 2025-07-15 06:29
status: in progress
tag:
parent: "[[Introduction to Mathematical Statistics]]"
---


## Definition

### Continuous random variable
Let
- $X$ : [[3 Reference/mathstat1.7#Definition 1.7.1 Continuous random variable\|Continuous random variable]]
- $f(x)$ : [[3 Reference/mathstat1.7#Definition Probability density function (pdf)\|pdf]] of $X$
- $\int_{-\infty}^\infty |x|\ f(x)\ dx < \infty$

If
$$E(X) = \int_{-\infty}^\infty x\ f(x)\ dx$$

Then we say $E(X)$ is the **expectation** of $X$

### Discrete random variable
 Let
- $X$ : [[3 Reference/mathstat1.6\|Discrete random variable]]
- $p(x)$ : [[3 Reference/mathstat1.6#Definition 1.6.2 Probability mass function (pmf)\|pmf]] of $X$
- $\sum_{x}|x|p(x)<\infty$

If
$$E(X) = \sum_{x}xp(x)$$

Then we say $E(X)$ is the **expectation** of $X$

## Remark
Sometimes $E(X)$ is called the **mathematical expectation**, **expected value**, or **mean** of $X$. When "mean" is used, we often denote $E(X)=\mu$.

## Related theorems
- [[3 Reference/mathstat1.8#Theorem 1.8.1 Expectation of a function\|Expectation of a function]]
- [[3 Reference/mathstat1.8#Theorem 1.8.2 Linearity of expectation\|Linearity of expectation]]
- [[3 Reference/mathstat1.10#Theorem 1.10.1 Existence of lower order moments\|Existence of lower order moments]]