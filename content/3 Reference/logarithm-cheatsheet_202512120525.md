---
publish: true
aliases:
  - Logarithm Cheatsheet
created: 2026-03-25T15:22:40.593+07:00
modified: 2026-03-25T15:22:40.593+07:00
published: 2026-03-25T15:22:40.593+07:00
tags:
  - 
creation-time: 2025-12-12 05:25
status: in progress
parent:
  - "[[calculus]]"
---

## Basic Definition

**Logarithm**: If $b^y = x$, then $\log\_b(x) = y$

- $b$ : base, $b > 0$, $b \neq 1$
- $x$ : argument, $x > 0$
- $y$ : logarithm result

**Special cases**: $$\ln(x) = \log\_e(x) \quad \text{(natural log)}, \qquad \log(x) = \log\_{10}(x) \quad \text{(common log)}$$

## Fundamental Properties

### Basic Identities

$$ \begin{align} \log\_b(b) &= 1 \ \log\_b(1) &= 0 \ \log\_b(b^x) &= x \ b^{\log\_b(x)} &= x \end{align} $$

### Operational Rules

$$ \begin{align} \log\_b(xy) &= \log\_b(x) + \log\_b(y) && \text{(Product Rule)} \ \log\_b\left(\frac{x}{y}\right) &= \log\_b(x) - \log\_b(y) && \text{(Quotient Rule)} \ \log\_b(x^p) &= p \log\_b(x) && \text{(Power Rule)} \ \log\_b(x\_1 x\_2 \cdots x\_n) &= \sum\_{i=1}^n \log\_b(x\_i) && \text{(Generalized Product)} \ \log\_b\left(\frac{1}{x}\right) &= -\log\_b(x) \ \log\_b(\sqrt{x}) &= \frac{1}{2}\log\_b(x) \end{align} $$

## Calculus Properties

### Derivatives

$$ \begin{align} \frac{d}{dx}\ln|x| &= \frac{1}{x} \ \frac{d}{dx}\ln(f(x)) &= \frac{f'(x)}{f(x)} \ \frac{d}{dx}\log\_b(x) &= \frac{1}{x \ln(b)} \end{align} $$

**Logarithmic Differentiation**: For $y = f(x)^{g(x)}$: $$ \begin{align} \ln(y) &= g(x) \ln(f(x)) \ \frac{1}{y}\frac{dy}{dx} &= g'(x)\ln(f(x)) + g(x)\frac{f'(x)}{f(x)} \end{align} $$

### Integrals

$$ \begin{align} \int \frac{1}{x} dx &= \ln|x| + C \ \int \frac{f'(x)}{f(x)} dx &= \ln|f(x)| + C \ \int \ln(x) dx &= x\ln(x) - x + C \ \int \log\_b(x) dx &= \frac{x\ln(x) - x}{\ln(b)} + C \end{align} $$

## Change of Base Formula

$$ \begin{align} \log\_b(x) &= \frac{\log\_a(x)}{\log\_a(b)} = \frac{\ln(x)}{\ln(b)} = \frac{\log\_{10}(x)}{\log\_{10}(b)} \ \log\_b(a) &= \frac{1}{\log\_a(b)} \quad \text{(Inverse Base)} \end{align} $$

## Properties with Exponents

$$ \begin{align} \ln(e^x) &= x, \quad \log\_b(b^x) = x \ e^{\ln(x)} &= x, \quad b^{\log\_b(x)} = x \ e^{x\ln(a)} &= a^x \end{align} $$

## Inequalities and Monotonicity

$$ \begin{align} \ln(x) &\leq x - 1 && \text{for } x > 0 \text{ (equality iff } x = 1\text{)} \ x\_1 < x\_2 &\implies \log\_b(x\_1) < \log\_b(x\_2) && \text{if } b > 1 \text{ (increasing)} \ x\_1 < x\_2 &\implies \log\_b(x\_1) > \log\_b(x\_2) && \text{if } 0 < b < 1 \text{ (decreasing)} \end{align} $$

## Common Applications in Statistics

### Log-Likelihood Transformation

$$\ln L(\theta) = \ln\left(\prod\_{i=1}^n f(x\_i;\theta)\right) = \sum\_{i=1}^n \ln f(x\_i;\theta)$$

### Product to Sum Conversion

$$\ln\left(\prod\_{i=1}^n x\_i\right) = \sum\_{i=1}^n \ln(x\_i)$$

### Simplifying Likelihood Ratios

$$\ln\left(\frac{L\_1}{L\_0}\right) = \ln(L\_1) - \ln(L\_0)$$

### Geometric Mean via Logarithm

$$\exp\left(\frac{1}{n}\sum\_{i=1}^n \ln(x\_i)\right) = \left(\prod\_{i=1}^n x\_i\right)^{1/n}$$
