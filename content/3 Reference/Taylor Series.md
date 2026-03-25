---
publish: true
created: 2026-03-25T15:22:40.590+07:00
modified: 2026-03-25T15:22:40.590+07:00
published: 2026-03-25T15:22:40.590+07:00
creation-time: 2025-06-30 07:16
status: in progress
tags:
parent:
  - "[[Introduction to Real Analysis]]"
---

Bartle & Donald's book\[^1] on real analysis provides two theorems for Taylor series

## Theorem 6.4.1: Taylor's theorem

Let

- $n\in \mathbb{N}$
- $I:=\[a,b]$
- $f:I\to \mathbb{R}$ such that
  - $f$ and its derivatives $(f',f'',\dots f^{(n)})$ are continuous on $I$
  - $f^{(n+1)}$ exists on $(a,b)$

If $x\_{0}\in I$

Then
$$
\begin{align}
\forall x\in I,\exists c\in(x,x\_{0}) & \ni \\

f(x) =& f(x\_{0}) + f'(x\_{0})(x-x\_{0})+ \frac{f''(x\_{0})}{2!}(x-x\_{0})^2 \\
& + \dots + \frac{f^{(n)}(x\_{0})}{n!}(x-x\_{0})^n + \frac{f^{(n+1)}(c)}{(n+1)!}(x-x\_{0})^{n+1}
\end{align}
$$

## Theorem 7.3.18: Taylor's Theorem with the Remainder

Suppose

- $f',\dots f^{(n)},f^{(n+1)}$ exists on $\[a,b]$
- $f^{(n+1)}\in \mathcal{R}\[a,b]$

Then
$$
f(b) = f(a) + \frac{f'(a)}{1!}(b-a)+\dots+ \frac{f^{(n)}(a)}{n!}(b-a)^n + R\_{n}
$$

Where remainder $R\_{n}$ is given by
$$
R\_{n} = \frac{1}{n!}\int\_{a}^b f^{(n+1)}(t)\cdot(b-t)^ndt
$$

## Extra: Maclaurun series

This theorem not included in Introduction to Real Analysis book but is important for common applications of Taylor series#6.4.1

Maclaurun series is a Taylor series expansion of a function centered at $x=0$. Below are some common Maclaurun series

$$
\begin{array}{|l|l|l|c|}
\hline
\frac{1}{1-x} & \displaystyle\sum\_{k=0}^{\infty} x^k & 1+x+x^2+x^3+\dots & (-1,1) \\
\hline
\frac{1}{1+x^2} & \displaystyle\sum\_{k=0}^{\infty} (-1)^k x^{2k} & 1-x^2+x^4-x^6+\dots & (-1,1) \\
\hline
e^x & \displaystyle\sum\_{k=0}^{\infty} \frac{x^k}{k!} & 1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+\dots & (-\infty,\infty) \\
\hline
\sin x & \displaystyle\sum\_{k=0}^{\infty} \frac{(-1)^k x^{2k+1}}{(2k+1)!} & x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\dots & (-\infty,\infty) \\
\hline
\cos x & \displaystyle\sum\_{k=0}^{\infty} \frac{(-1)^k x^{2k}}{(2k)!} & 1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\dots & (-\infty,\infty) \\
\hline
\ln(1+x) & \displaystyle\sum\_{k=1}^{\infty} \frac{(-1)^{k+1}x^k}{k} & x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\dots & (-1,1] \\
\hline
\tan^{-1} x & \displaystyle\sum\_{k=0}^{\infty} \frac{(-1)^k x^{2k+1}}{2k+1} & x-\frac{x^3}{3}+\frac{x^5}{5}-\frac{x^7}{7}+\dots & \[-1,1] \\
\hline
\sinh x & \displaystyle\sum\_{k=0}^{\infty} \frac{x^{2k+1}}{(2k+1)!} & x+\frac{x^3}{3!}+\frac{x^5}{5!}+\frac{x^7}{7!}+\dots & (-\infty,\infty) \\
\hline
\cosh x & \displaystyle\sum\_{k=0}^{\infty} \frac{x^{2k}}{(2k)!} & 1+\frac{x^2}{2!}+\frac{x^4}{4!}+\frac{x^6}{6!}+\dots & (-\infty,\infty) \\
\hline
(1+x)^m & \displaystyle\sum\_{k=0}^{\infty} \binom{m}{k} x^k & 1+mx+\frac{m(m-1)}{2!}x^2+\dots & (-1,1)^\* \\
\hline
\end{array}
$$

\[^1]: Bartle, Robert G., and Donald R. Sherbert. _Introduction to Real Analysis_.
