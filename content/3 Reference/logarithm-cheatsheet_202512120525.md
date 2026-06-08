---
publish: true
aliases:
  - Logarithm Cheatsheet
created: 2026-04-09T23:07:39.450+07:00
modified: 2026-04-09T23:07:39.451+07:00
published: 2026-04-09T23:07:39.451+07:00
tags:
  - 
creation-time: 2025-12-12 05:25
status: in progress
parent:
  - "[[calculus]]"
---

## Basic Definition

**Logarithm**: If $b^y = x$, then $\log_b(x) = y$

- $b$ : base, $b > 0$, $b \neq 1$
- $x$ : argument, $x > 0$
- $y$ : logarithm result

**Special cases**: $\ln(x) = \log_e(x) \quad \text{(natural log)}, \qquad \log(x) = \log_{10}(x) \quad \text{(common log)}$

## Fundamental Properties

### Basic Identities

$\begin{align} \log_b(b) &= 1 \\ \log_b(1) &= 0 \\ \log_b(b^x) &= x \\ b^{\log_b(x)} &= x \end{align}$

### Operational Rules

$\begin{align} \log_b(xy) &= \log_b(x) + \log_b(y) && \text{(Product Rule)} \\ \log_b\left(\frac{x}{y}\right) &= \log_b(x) - \log_b(y) && \text{(Quotient Rule)} \\ \log_b(x^p) &= p \log_b(x) && \text{(Power Rule)} \\ \log_b(x_1 x_2 \cdots x_n) &= \sum_{i=1}^n \log_b(x_i) && \text{(Generalized Product)} \\ \log_b\left(\frac{1}{x}\right) &= -\log_b(x) \\ \log_b(\sqrt{x}) &= \frac{1}{2}\log_b(x) \end{align}$

## Calculus Properties

### Derivatives

$\begin{align} \frac{d}{dx}\ln|x| &= \frac{1}{x} \\ \frac{d}{dx}\ln(f(x)) &= \frac{f'(x)}{f(x)} \\ \frac{d}{dx}\log_b(x) &= \frac{1}{x \ln(b)} \end{align}$

**Logarithmic Differentiation**: For $y = f(x)^{g(x)}$: $\begin{align} \ln(y) &= g(x) \ln(f(x)) \\ \frac{1}{y}\frac{dy}{dx} &= g'(x)\ln(f(x)) + g(x)\frac{f'(x)}{f(x)} \end{align}$

### Integrals

$\begin{align} \int \frac{1}{x} dx &= \ln|x| + C \\ \int \frac{f'(x)}{f(x)} dx &= \ln|f(x)| + C \\ \int \ln(x) dx &= x\ln(x) - x + C \\ \int \log_b(x) dx &= \frac{x\ln(x) - x}{\ln(b)} + C \end{align}$

## Change of Base Formula

$\begin{align} \log_b(x) &= \frac{\log_a(x)}{\log_a(b)} = \frac{\ln(x)}{\ln(b)} = \frac{\log_{10}(x)}{\log_{10}(b)} \\ \log_b(a) &= \frac{1}{\log_a(b)} \quad \text{(Inverse Base)} \end{align}$

## Properties with Exponents

$\begin{align} \ln(e^x) &= x, \quad \log_b(b^x) = x \\ e^{\ln(x)} &= x, \quad b^{\log_b(x)} = x \\ e^{x\ln(a)} &= a^x \end{align}$

## Inequalities and Monotonicity

$\begin{align} \ln(x) &\leq x - 1 && \text{for } x > 0 \text{ (equality iff } x = 1\text{)} \\ x_1 < x_2 &\implies \log_b(x_1) < \log_b(x_2) && \text{if } b > 1 \text{ (increasing)} \\ x_1 < x_2 &\implies \log_b(x_1) > \log_b(x_2) && \text{if } 0 < b < 1 \text{ (decreasing)} \end{align}$

## Common Applications in Statistics

### Log-Likelihood Transformation

$\ln L(\theta) = \ln\left(\prod_{i=1}^n f(x_i;\theta)\right) = \sum_{i=1}^n \ln f(x_i;\theta)$

### Product to Sum Conversion

$\ln\left(\prod_{i=1}^n x_i\right) = \sum_{i=1}^n \ln(x_i)$

### Simplifying Likelihood Ratios

$\ln\left(\frac{L_1}{L_0}\right) = \ln(L_1) - \ln(L_0)$

### Geometric Mean via Logarithm

$\exp\left(\frac{1}{n}\sum_{i=1}^n \ln(x_i)\right) = \left(\prod_{i=1}^n x_i\right)^{1/n}$
