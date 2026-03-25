---
publish: true
aliases:
  - Integration Cheatsheet
created: 2026-03-25T15:22:40.614+07:00
modified: 2026-03-25T15:22:40.614+07:00
published: 2026-03-25T15:22:40.614+07:00
tags:
  - 
creation-time: 2025-12-12 05:49
status: in progress
parent:
  - "[[calculus]]"
---

## Basic Definition

**Indefinite Integral**: The antiderivative of function $f$ $$\int f(x),dx = F(x) + C \quad \text{where } F'(x) = f(x)$$

**Definite Integral**: Net area under curve from $a$ to $b$ $$\int\_a^b f(x),dx = F(b) - F(a) = \[F(x)]\_a^b$$

**Note**: For brevity, we write $f$ instead of $f(x)$, $\sin x$ instead of $\sin(x)$, etc. We omit $dx$ when context is clear. Constant of integration $C$ is implied for indefinite integrals.

## Basic Integration Rules

### Constant and Power Rules

$$ \begin{align} \int c &= cx + C \quad \text{(constant)} \ \int x^n &= \frac{x^{n+1}}{n+1} + C \quad \text{(power rule, } n \neq -1\text{)} \ \int \frac{1}{x} &= \ln|x| + C \ \int \sqrt{x} &= \frac{2}{3}x^{3/2} + C \ \int \frac{1}{x^2} &= -\frac{1}{x} + C \ \int \frac{1}{\sqrt{x}} &= 2\sqrt{x} + C \end{align} $$

### Linear Combination Rules

$$ \begin{align} \int cf &= c\int f \quad \text{(constant multiple)} \ \int \[f + g] &= \int f + \int g \quad \text{(sum rule)} \ \int \[f - g] &= \int f - \int g \quad \text{(difference rule)} \end{align} $$

### General Power of Function

$$\int \[f]^n f' = \frac{\[f]^{n+1}}{n+1} + C \quad \text{(for } n \neq -1\text{)}$$

**Special case** ($n = -1$): $$\int \frac{f'}{f} = \ln|f| + C$$

**Examples**: $$ \begin{align} \int \sin^3 x \cos x &= \frac{\sin^4 x}{4} + C \ \int (x^2+1)^5 \cdot 2x &= \frac{(x^2+1)^6}{6} + C \ \int \frac{2x}{x^2+1} &= \ln(x^2+1) + C \end{align} $$

## Exponential and Logarithmic Functions

$$ \begin{align} \int e^x &= e^x + C \ \int a^x &= \frac{a^x}{\ln a} + C \ \int e^{ax} &= \frac{1}{a}e^{ax} + C \ \int \frac{1}{x} &= \ln|x| + C \ \int \ln x &= x\ln x - x + C \ \int \log\_a x &= \frac{x\ln x - x}{\ln a} + C \ \int \frac{f'}{f} &= \ln|f| + C \end{align} $$

## Trigonometric Functions

$$ \begin{align} \int \sin x &= -\cos x + C \ \int \cos x &= \sin x + C \ \int \tan x &= -\ln|\cos x| + C = \ln|\sec x| + C \ \int \cot x &= \ln|\sin x| + C \ \int \sec x &= \ln|\sec x + \tan x| + C \ \int \csc x &= -\ln|\csc x + \cot x| + C \ \int \sec^2 x &= \tan x + C \ \int \csc^2 x &= -\cot x + C \ \int \sec x \tan x &= \sec x + C \ \int \csc x \cot x &= -\csc x + C \end{align} $$

## Inverse Trigonometric Functions

$$ \begin{align} \int \frac{1}{\sqrt{1-x^2}} &= \arcsin x + C = -\arccos x + C \ \int \frac{1}{1+x^2} &= \arctan x + C = -\text{arccot } x + C \ \int \frac{1}{x\sqrt{x^2-1}} &= \text{arcsec } |x| + C \ \int \frac{1}{\sqrt{a^2-x^2}} &= \arcsin\frac{x}{a} + C \ \int \frac{1}{a^2+x^2} &= \frac{1}{a}\arctan\frac{x}{a} + C \ \int \frac{1}{x\sqrt{x^2-a^2}} &= \frac{1}{a}\text{arcsec}\frac{|x|}{a} + C \end{align} $$

## Hyperbolic Functions

$$ \begin{align} \int \sinh x &= \cosh x + C \ \int \cosh x &= \sinh x + C \ \int \tanh x &= \ln|\cosh x| + C \ \int \coth x &= \ln|\sinh x| + C \ \int \text{sech } x &= \arctan(\sinh x) + C \ \int \text{csch } x &= \ln\left|\tanh\frac{x}{2}\right| + C \ \int \text{sech}^2 x &= \tanh x + C \ \int \text{csch}^2 x &= -\coth x + C \end{align} $$

## Integration Techniques

### Substitution (u-substitution)

If $u = g$, then $du = g',dx$: $$\int f(g)g',dx = \int f(u),du$$

**Example**: $$\int 2x\cos(x^2),dx = \int \cos u,du = \sin u + C = \sin(x^2) + C \quad \text{where } u = x^2$$

### Integration by Parts

$$\int u,dv = uv - \int v,du$$

**LIATE rule** (priority for choosing $u$): Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential

**Common patterns**: $$ \begin{align} \int x e^x &= xe^x - e^x + C \ \int x \sin x &= -x\cos x + \sin x + C \ \int x^n e^x &= x^n e^x - n\int x^{n-1}e^x \ \int e^{ax}\sin bx &= \frac{e^{ax}(a\sin bx - b\cos bx)}{a^2+b^2} + C \ \int e^{ax}\cos bx &= \frac{e^{ax}(a\cos bx + b\sin bx)}{a^2+b^2} + C \end{align} $$

### Partial Fractions

For rational functions $\frac{P}{Q}$ where $\deg P < \deg Q$:

**Linear factors**: $\frac{A}{x-a}$ $$\int \frac{1}{x-a} = \ln|x-a| + C$$

**Repeated linear factors**: $\frac{A}{(x-a)^n}$ $$\int \frac{1}{(x-a)^n} = \frac{(x-a)^{-n+1}}{-n+1} + C \quad \text{(for } n \neq 1\text{)}$$

**Quadratic factors**: $\frac{Ax+B}{x^2+bx+c}$

Complete the square and use substitution or arctan formula

### Trigonometric Substitution

**For $\sqrt{a^2-x^2}$**: Use $x = a\sin\theta$, $dx = a\cos\theta,d\theta$ $$\sqrt{a^2-x^2} = a\cos\theta$$

**For $\sqrt{a^2+x^2}$**: Use $x = a\tan\theta$, $dx = a\sec^2\theta,d\theta$ $$\sqrt{a^2+x^2} = a\sec\theta$$

**For $\sqrt{x^2-a^2}$**: Use $x = a\sec\theta$, $dx = a\sec\theta\tan\theta,d\theta$ $$\sqrt{x^2-a^2} = a\tan\theta$$

## Common Integration Patterns

$$ \begin{align} \int e^{ax} &= \frac{1}{a}e^{ax} + C \ \int \sin ax &= -\frac{1}{a}\cos ax + C \ \int \cos ax &= \frac{1}{a}\sin ax + C \ \int (ax+b)^n &= \frac{(ax+b)^{n+1}}{a(n+1)} + C \quad \text{(for } n \neq -1\text{)} \ \int \frac{1}{ax+b} &= \frac{1}{a}\ln|ax+b| + C \ \int x^n e^x &= x^n e^x - n\int x^{n-1}e^x \quad \text{(reduction formula)} \end{align} $$

## Special Integrals

$$ \begin{align} \int \frac{1}{x^2+a^2} &= \frac{1}{a}\arctan\frac{x}{a} + C \ \int \frac{1}{x^2-a^2} &= \frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right| + C \ \int \frac{1}{\sqrt{x^2+a^2}} &= \ln|x+\sqrt{x^2+a^2}| + C \ \int \frac{1}{\sqrt{x^2-a^2}} &= \ln|x+\sqrt{x^2-a^2}| + C \ \int \frac{1}{\sqrt{a^2-x^2}} &= \arcsin\frac{x}{a} + C \ \int \sqrt{a^2-x^2} &= \frac{x}{2}\sqrt{a^2-x^2} + \frac{a^2}{2}\arcsin\frac{x}{a} + C \ \int \sqrt{x^2+a^2} &= \frac{x}{2}\sqrt{x^2+a^2} + \frac{a^2}{2}\ln|x+\sqrt{x^2+a^2}| + C \end{align} $$

## Properties of Definite Integrals

$$ \begin{align} \int\_a^b f,dx &= -\int\_b^a f,dx \ \int\_a^a f,dx &= 0 \ \int\_a^b f,dx &= \int\_a^c f,dx + \int\_c^b f,dx \ \int\_a^b cf,dx &= c\int\_a^b f,dx \ \int\_a^b \[f \pm g],dx &= \int\_a^b f,dx \pm \int\_a^b g,dx \end{align} $$

### Symmetry Properties

**Even function** ($f(-x) = f(x)$): $$\int\_{-a}^a f,dx = 2\int\_0^a f,dx$$

**Odd function** ($f(-x) = -f(x)$): $$\int\_{-a}^a f,dx = 0$$

## Fundamental Theorem of Calculus

**Part 1**: If $F(x) = \int\_a^x f(t),dt$, then $F'(x) = f(x)$

**Part 2**: If $F' = f$, then: $$\int\_a^b f,dx = F(b) - F(a)$$

**Leibniz Rule** (differentiating under integral): $$\frac{d}{dx}\int\_{a(x)}^{b(x)} f(x,t),dt = f(x,b(x))b'(x) - f(x,a(x))a'(x) + \int\_{a(x)}^{b(x)} \frac{\partial f}{\partial x}(x,t),dt$$

## Applications in Statistics

### Probability Density Functions

$$\int\_{-\infty}^\infty f(x),dx = 1 \quad \text{(normalization)}$$

### Expected Value

$$E\[X] = \int\_{-\infty}^\infty xf(x),dx$$

### Variance

$$\text{Var}(X) = \int\_{-\infty}^\infty (x-\mu)^2 f(x),dx = E\[X^2] - (E\[X])^2$$

### Cumulative Distribution Function

$$F(x) = \int\_{-\infty}^x f(t),dt$$

### Moment Generating Function

$$M\_X(t) = E\[e^{tX}] = \int\_{-\infty}^\infty e^{tx}f(x),dx$$
