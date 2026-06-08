---
publish: true
aliases:
  - Social Class Problem Example
created: 2026-04-09T23:07:39.382+07:00
modified: 2026-04-09T23:07:39.383+07:00
published: 2026-04-09T23:07:39.383+07:00
creation-time: 2026-03-28 09:00
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Example: Social Class Problem

Given [[def-transition-probability-matrix_202603280810|TPM]]:

$$$\mathbf{P} = \begin{bmatrix}
\frac{1}{2} & \frac{1}{2} & 0 \\
\frac{1}{4} & \frac{1}{2} & \frac{1}{4} \\
0 & \frac{1}{2} & \frac{1}{2}
\end{bmatrix}$$

Solving $\pi = \pi \mathbf{P}$ for the [[def-stationary-distribution_202603280834\|stationary distribution]]:

$$\begin{bmatrix} \pi_{1} & \pi_{2} & \pi_{3} \end{bmatrix} = 
\begin{bmatrix} \pi_{1} & \pi_{2} & \pi_{3} \end{bmatrix}
\begin{bmatrix}
\frac{1}{2} & \frac{1}{2} & 0 \\
\frac{1}{4} & \frac{1}{2} & \frac{1}{4} \\
0 & \frac{1}{2} & \frac{1}{2} \\
\end{bmatrix}$$

## Matching Components

$$$

\begin{aligned}
\pi\_1 &= \frac{1}{2}\pi\_1 + \frac{1}{4}\pi\_2 \\
\pi\_2 &= \frac{1}{2}\pi\_1 + \frac{1}{2}\pi\_2 + \frac{1}{2}\pi\_3 \\
\pi\_3 &= \frac{1}{4}\pi\_2 + \frac{1}{2}\pi\_3
\end{aligned}

$$$

## Solution

From equation 1: $\frac{1}{2}\pi_1 = \frac{1}{4}\pi_2 \Rightarrow \pi_2 = 2\pi_1$

From equation 3: $\frac{1}{2}\pi_3 = \frac{1}{4}\pi_2 \Rightarrow \pi_3 = \frac{1}{2}\pi_2 = \pi_1$

Substituting into $\pi_1 + \pi_2 + \pi_3 = 1$:

$$\pi_1 + 2\pi_1 + \pi_1 = 1 \Rightarrow 4\pi_1 = 1 \Rightarrow \pi_1 = \frac{1}{4}$$

Therefore: $\pi_2 = \frac{1}{2}$, $\pi_3 = \frac{1}{4}$

## Related

- [[def-stationary-distribution_202603280834\|Stationary Distribution]]
- [[theorem-limiting-distribution_202603280833\|Limiting Distribution Theorem]]
$$$
