---
publish: true
aliases:
  - Social Class Problem Example
created: 2026-03-28T17:54:20.908+07:00
modified: 2026-03-28T17:54:20.909+07:00
published: 2026-03-28T17:54:20.909+07:00
creation-time: 2026-03-28 09:00
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Example: Social Class Problem

Given [[def-transition-probability-matrix_202603280810|TPM]]:

$$\mathbf{P} = \begin{bmatrix}
\frac{1}{2} & \frac{1}{2} & 0 \\
\frac{1}{4} & \frac{1}{2} & \frac{1}{4} \\
0 & \frac{1}{2} & \frac{1}{2}
\end{bmatrix}$$

Solving $\pi = \pi \mathbf{P}$ for the [[def-stationary-distribution_202603280834|stationary distribution]]:

$$\begin{bmatrix} \pi\_{1} & \pi\_{2} & \pi\_{3} \end{bmatrix} =
\begin{bmatrix} \pi\_{1} & \pi\_{2} & \pi\_{3} \end{bmatrix}
\begin{bmatrix}
\frac{1}{2} & \frac{1}{2} & 0 \\
\frac{1}{4} & \frac{1}{2} & \frac{1}{4} \\
0 & \frac{1}{2} & \frac{1}{2} \\
\end{bmatrix}$$

## Matching Components

$$
\begin{aligned}
\pi\_1 &= \frac{1}{2}\pi\_1 + \frac{1}{4}\pi\_2 \\
\pi\_2 &= \frac{1}{2}\pi\_1 + \frac{1}{2}\pi\_2 + \frac{1}{2}\pi\_3 \\
\pi\_3 &= \frac{1}{4}\pi\_2 + \frac{1}{2}\pi\_3
\end{aligned}
$$

## Solution

From equation 1: $\frac{1}{2}\pi\_1 = \frac{1}{4}\pi\_2 \Rightarrow \pi\_2 = 2\pi\_1$

From equation 3: $\frac{1}{2}\pi\_3 = \frac{1}{4}\pi\_2 \Rightarrow \pi\_3 = \frac{1}{2}\pi\_2 = \pi\_1$

Substituting into $\pi\_1 + \pi\_2 + \pi\_3 = 1$:

$$\pi\_1 + 2\pi\_1 + \pi\_1 = 1 \Rightarrow 4\pi\_1 = 1 \Rightarrow \pi\_1 = \frac{1}{4}$$

Therefore: $\pi\_2 = \frac{1}{2}$, $\pi\_3 = \frac{1}{4}$

## Related

- [[def-stationary-distribution_202603280834|Stationary Distribution]]
- [[theorem-limiting-distribution_202603280833|Limiting Distribution Theorem]]
