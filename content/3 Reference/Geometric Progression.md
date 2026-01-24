---
publish: true
created: 2025-10-14T04:15:27.072+07:00
modified: 2025-10-14T04:15:27.072+07:00
published: 2025-10-14T04:15:27.072+07:00
cssclasses: ""
creation-time: 2025-03-11 07:00
status: adult
tags:
parent:
  - "[[mathematics]]"
---


- #TODO 
	- Add product of a range of geometric progression.

---

Geometric progression is sequence of numbers where the **ratio between any two consecutive numbers is constant**.

For example, $3, 6, 12, 24$ is a geometric progression with constant $2$.

## Sum of a range of geometric progression

$$S_n = \begin{cases}
	\dfrac{bk - a}{k - 1}, &k \neq 1,\\
	an, &k = 1
\end{cases}$$
Where:
- $a$: The first number
- $b$: The last number
- $k$: Ratio between the consecutive numbers

### Proof

Let $a, k \in \mathbb R, n \in \mathbb N, n > 0$.

Define $S_n$ by
$$
S_n = \sum_{i = 0}^n ak^i = a + ak + ak^2 + \dots + ak^{n-1} + ak^n
$$

Consider all cases for $k$:

- $k \neq 1$ 
	Multiplying $S_n$ by $k$, we get
	$$
	kS_n = \sum_{i = 0}^n ak^{i + 1} = ak + ak^2 + ak^3 + \dots + ak^{n} + ak^{n+1}
	$$
	Solving $k S_n - S$, we get
	$$\begin{align}k S_n - S_n &= (ak + ak^2 + ak^3 + \dots + ak^{n} + \textcolor{yellow}{ak^{n+1}}) - (\textcolor{yellow}a + ak + ak^2 + \dots + ak^{n-1} + ak^n)\\
	&= ak - ak + ak^2 - ak^2 + \dots + ak^n - ak^n + \textcolor{yellow}{ak^{n+1} - a}\\
	&= \textcolor{yellow}{ak^{n+1} - a}
	\end{align}$$
	Define $b$ by $b = ak^{n}$, then $ak^{n+1} = ak^{n}\cdot k = b\cdot k$, thus
	$$\begin{array}{rrl}
	&kS_n - S_n &= bk - a\\
	\iff &S_n(k - 1) &= bk - a\\
	\iff &S_n &= \frac{bk - a}{k - 1}
	\end{array}$$

- $k = 1$
	Notice that $S_n = \sum_{i = 0}^n a\cdot 1 = an$

From all cases of $k$, we get
$$S_n = \begin{cases}
	\dfrac{bk - a}{k - 1}, &k \neq 1,\\
	an, &k = 1
\end{cases}$$
