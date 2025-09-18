---
{"publish":true,"created":"2025-09-13T18:58:59.148+07:00","modified":"2025-09-13T01:10:46.000+07:00","published":"2025-09-13T01:10:46.000+07:00","cssclasses":"","creation-time":"2025-06-30 07:16","status":"baby","tags":null,"parent":["[[Introduction to Real Analysis]]"]}
---


Bartle & Donald's book[^1] on real analysis provides two theorems for Taylor series

## 6.4.1 Taylor's theorem

Let
- $n\in \mathbb{N}$
- $I:=[a,b]$
- $f:I\to \mathbb{R}$ such that 
	- $f$ and its derivatives $(f',f'',\dots f^{(n)})$ are continuous on $I$
	- $f^{(n+1)}$ exists on $(a,b)$

If
- $x_{0}\in I$

Then
$$
\begin{align}
\forall x\in I,\exists c\in(x,x_{0}) & \ni \\

f(x) &= f(x_{0}) + f'(x_{0})(x-x_{0})+ \frac{f''(x_{0})}{2!}(x-x_{0})^2 \\
 & + \dots + \frac{f^{(n)}(x_{0})}{n!}(x-x_{0})^n + \frac{f^{(n+1)}(c)}{(n+1)!}(x-x_{0})^{n+1}
\end{align}
$$

## 7.3.18 Taylor's Theorem with the Remainder

Suppose
- $f',\dots f^{(n)},f^{(n+1)}$ exists on $[a,b]$
- $f^{(n+1)}\in \mathcal{R}[a,b]$

Then
$$
f(b) = f(a) + \frac{f'(a)}{1!}(b-a)+\dots+ \frac{f^{(n)}(a)}{n!}(b-a)^n + R_{n}
$$

Where remainder $R_{n}$ is given by
$$
R_{n} = \frac{1}{n!}\int_{a}^b f^{(n+1)}(t)\cdot(b-t)^ndt
$$

## Extra: Maclaurun series

This theorem not included in Introduction to Real Analysis book but is important for common applications of Taylor series#6.4.1

Maclaurun series is a Taylor series expansion of a function centered at $x=0$. Below are some common Maclaurun series


[^1]: Bartle, Robert G., and Donald R. Sherbert. _Introduction to Real Analysis_.
