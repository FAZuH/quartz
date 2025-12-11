---
{"publish":true,"aliases":["Derivative Cheatsheet"],"created":"2025-12-12T05:34:56.174+07:00","modified":"2025-12-12T05:43:50.037+07:00","published":"2025-12-12T05:43:50.037+07:00","tags":[null],"cssclasses":"","creation-time":"2025-12-12 05:34","status":"baby","parent":["[[calculus]]"]}
---


# Cheatsheet: Derivative Rules

## Basic Definition

**Derivative**: The instantaneous rate of change of function $f$ at point $x$ $$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

**Alternative notations**: $$f'(x) = \frac{df}{dx} = \frac{d}{dx}f = Df = \dot{f}$$

**Note**: For brevity, we write $f$ instead of $f(x)$, $\sin x$ instead of $\sin(x)$, etc.

## Basic Derivative Rules


$$
\frac{d}{dx} f^n = n \cdot f^{n-1} \cdot f'
$$

### Constant and Power Rules

$$ \begin{align} \frac{d}{dx} c &= 0 \quad \text{(constant)} \\ \frac{d}{dx} x^n &= nx^{n-1} \quad \text{(power rule)} \\ \frac{d}{dx} cx &= c \\ \frac{d}{dx} \frac{1}{x} &= -\frac{1}{x^2} \\ \frac{d}{dx} \sqrt{x} &= \frac{1}{2\sqrt{x}} \end{align} $$

### Linear Combination Rules

$$ \begin{align} \frac{d}{dx}[cf] &= cf' \quad \text{(constant multiple)} \\ \frac{d}{dx}[f + g] &= f' + g' \quad \text{(sum rule)} \\ \frac{d}{dx}[f - g] &= f' - g' \quad \text{(difference rule)} \end{align} $$

## Product and Quotient Rules

$$ \begin{align} \frac{d}{dx}[fg] &= f'g + fg' \quad \text{(product rule)} \\ \frac{d}{dx}\left[\frac{f}{g}\right] &= \frac{f'g - fg'}{g^2} \quad \text{(quotient rule)} \end{align} $$

**Generalized product rule** (for $n$ functions): $$\frac{d}{dx}[f_1 f_2 \cdots f_n] = f_1' f_2 \cdots f_n + f_1 f_2' \cdots f_n + \cdots + f_1 f_2 \cdots f_n'$$

## Chain Rule

$$ \begin{align} \frac{d}{dx}[f(g)] &= f'(g) \cdot g' \\ \frac{dy}{dx} &= \frac{dy}{du} \cdot \frac{du}{dx} \quad \text{(where } u = g) \end{align} $$

**Multiple composition**: $$\frac{d}{dx}[f(g(h))] = f'(g(h)) \cdot g'(h) \cdot h'$$

## Exponential and Logarithmic Functions

$$ \begin{align} \frac{d}{dx} e^x &= e^x \\ \frac{d}{dx} a^x &= a^x \ln a \\ \frac{d}{dx} e^f &= e^f f' \\ \frac{d}{dx} \ln x &= \frac{1}{x} \\ \frac{d}{dx} \ln |x| &= \frac{1}{x} \\ \frac{d}{dx} \log_a x &= \frac{1}{x \ln a} \\ \frac{d}{dx} \ln f &= \frac{f'}{f} \end{align} $$

## Trigonometric Functions

$$ \begin{align} \frac{d}{dx} \sin x &= \cos x \\ \frac{d}{dx} \cos x &= -\sin x \\ \frac{d}{dx} \tan x &= \sec^2 x = \frac{1}{\cos^2 x} \\ \frac{d}{dx} \cot x &= -\csc^2 x = -\frac{1}{\sin^2 x} \\ \frac{d}{dx} \sec x &= \sec x \tan x \\ \frac{d}{dx} \csc x &= -\csc x \cot x \end{align} $$

## Inverse Trigonometric Functions

$$ \begin{align} \frac{d}{dx} \arcsin x &= \frac{1}{\sqrt{1-x^2}} \\ \frac{d}{dx} \arccos x &= -\frac{1}{\sqrt{1-x^2}} \\ \frac{d}{dx} \arctan x &= \frac{1}{1+x^2} \\ \frac{d}{dx} \text{arccot } x &= -\frac{1}{1+x^2} \\ \frac{d}{dx} \text{arcsec } x &= \frac{1}{|x|\sqrt{x^2-1}} \\ \frac{d}{dx} \text{arccsc } x &= -\frac{1}{|x|\sqrt{x^2-1}} \end{align} $$

## Hyperbolic Functions

$$ \begin{align} \frac{d}{dx} \sinh x &= \cosh x \\ \frac{d}{dx} \cosh x &= \sinh x \\ \frac{d}{dx} \tanh x &= \text{sech}^2 x = \frac{1}{\cosh^2 x} \\ \frac{d}{dx} \coth x &= -\text{csch}^2 x = -\frac{1}{\sinh^2 x} \\ \frac{d}{dx} \text{sech } x &= -\text{sech } x \tanh x \\ \frac{d}{dx} \text{csch } x &= -\text{csch } x \coth x \end{align} $$

## Special Techniques

### Implicit Differentiation

For equation $F(x,y) = 0$: $$\frac{dy}{dx} = -\frac{\frac{\partial F}{\partial x}}{\frac{\partial F}{\partial y}}$$

**Example**: For $x^2 + y^2 = r^2$: $$2x + 2y\frac{dy}{dx} = 0 \implies \frac{dy}{dx} = -\frac{x}{y}$$

### Logarithmic Differentiation

For $y = f^g$: $$ \begin{align} \ln y &= g\ln f \\ \frac{1}{y}\frac{dy}{dx} &= g'\ln f + g\frac{f'}{f} \\ \frac{dy}{dx} &= f^g\left[g'\ln f + g\frac{f'}{f}\right] \end{align} $$

### Parametric Differentiation

For $x = x(t)$, $y = y(t)$: $$\frac{dy}{dx} = \frac{dy/dt}{dx/dt} = \frac{y'(t)}{x'(t)}$$

**Second derivative**: $$\frac{d^2y}{dx^2} = \frac{d}{dx}\left(\frac{dy}{dx}\right) = \frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{dx/dt}$$

## Higher Order Derivatives

$$ \begin{align} f'' &= \frac{d^2f}{dx^2} = \frac{d}{dx}\left[\frac{df}{dx}\right] \quad \text{(second derivative)} \\ f''' &= \frac{d^3f}{dx^3} \quad \text{(third derivative)} \\ f^{(n)} &= \frac{d^nf}{dx^n} \quad \text{(n-th derivative)} \end{align} $$

## Partial Derivatives

For $f(x,y)$: $$ \begin{align} \frac{\partial f}{\partial x} &= \lim_{h \to 0}\frac{f(x+h,y) - f(x,y)}{h} \quad \text{(hold } y \text{ constant)} \\ \frac{\partial f}{\partial y} &= \lim_{h \to 0}\frac{f(x,y+h) - f(x,y)}{h} \quad \text{(hold } x \text{ constant)} \end{align} $$

**Mixed partial derivatives**: $$\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right) = \frac{\partial^2 f}{\partial y \partial x} \quad \text{(if continuous)}$$

## Common Derivative Patterns

$$ \begin{align} \frac{d}{dx} e^{ax} &= ae^{ax} \\ \frac{d}{dx} \sin ax &= a\cos ax \\ \frac{d}{dx} \cos ax &= -a\sin ax \\ \frac{d}{dx} (ax+b)^n &= an(ax+b)^{n-1} \\ \frac{d}{dx} \frac{1}{ax+b} &= -\frac{a}{(ax+b)^2} \\ \frac{d}{dx} \ln(ax+b) &= \frac{a}{ax+b} \end{align} $$

## Applications in Statistics

### Likelihood Functions

$$\frac{d}{d\theta}\ln L(\theta) = \frac{1}{L(\theta)}\frac{dL(\theta)}{d\theta} = \frac{L'(\theta)}{L(\theta)}$$

### Score Function

$$U(\theta) = \frac{\partial \ln L(\theta)}{\partial \theta}$$

### Fisher Information

$$I(\theta) = -E\left[\frac{\partial^2 \ln L(\theta)}{\partial \theta^2}\right]$$

### Maximum Likelihood Estimation

Set $\frac{\partial \ln L(\theta)}{\partial \theta} = 0$ and solve for $\hat{\theta}$