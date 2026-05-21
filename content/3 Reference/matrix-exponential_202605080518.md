---
publish: true
aliases:
  - Matrix Exponential
created: 2026-05-08T05:33:03.419+07:00
modified: 2026-05-21T20:59:53.877+07:00
published: 2026-05-21T20:59:53.877+07:00
cssclasses: ""
creation-time: 2026-05-08 05:18
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Definition

Given a square matrix $A$, the **matrix exponential** $e^{At}$ of $At$ is defined as the series:

$$e^{At} = \sum_{n=0}^{\infty} \frac{(At)^n}{n!} = I + At + \frac{(At)^2}{2!} + \frac{(At)^3}{3!} + \cdots$$

where $I$ is the identity matrix.

> [!TIP] Interpretation
> The matrix exponential generalizes the scalar exponential $e^{at}$ to square matrices. It is the fundamental solution to the system of linear differential equations $\frac{d}{dt}P(t) = AP(t)$.

## Key Property

If $A$ is diagonalizable as $A = M \Lambda M^{-1}$, where $\Lambda$ is diagonal matrix of eigenvalues and $M$ is the matrix of eigenvectors, then:

$$e^{At} = M e^{\Lambda t} M^{-1}$$

where $e^{\Lambda t}$ is the diagonal matrix with entries $e^{\lambda_i t}$.

This provides a computationally practical way to compute $e^{At}$.

## Role in CTMCs

For a [[3 Reference/transition-rate-matrix_202605080516\|transition rate matrix]] $Q$, the transition probability matrix is:

$$P(t) = e^{Qt}$$

which solves both the forward and backward [[3 Reference/kolmogorov-differential-equations_202605080518\|Kolmogorov equations]].

## Related

- [[3 Reference/derivative-of-matrix-exponential_202605080518\|Derivative of Matrix Exponential]]
- [[3 Reference/transition-rate-matrix_202605080516\|Transition Rate Matrix]]
- [[3 Reference/kolmogorov-differential-equations_202605080518\|Kolmogorov Differential Equations]]

## Exercises

> [!NOTE] Back to [[4 Projects/kuis-2_202605211907#Roadmap\|Roadmap 📖 → 🃏 → ✏]]

**CTMC 2-state.** Untuk $Q = \begin{bmatrix} -\lambda & \lambda \\ \mu & -\mu \end{bmatrix}$, hitung $P(t) = e^{Qt}$ menggunakan diagonalisasi.

> **Jawaban:** Eigenvalues $\lambda_1 = 0$, $\lambda_2 = -(\lambda+\mu)$. Eigenvectors $v_1 = (\mu, \lambda)^T$, $v_2 = (1, -1)^T$. Maka:
> $$P(t) = \frac{1}{\lambda+\mu}\begin{bmatrix} \mu & \lambda \\ \mu & \lambda \end{bmatrix} + \frac{e^{-(\lambda+\mu)t}}{\lambda+\mu}\begin{bmatrix} \lambda & -\lambda \\ -\mu & \mu \end{bmatrix}$$

**Verifikasi.** Periksa bahwa $\lim_{t \to \infty} P(t) = \begin{bmatrix} \frac{\mu}{\lambda+\mu} & \frac{\lambda}{\lambda+\mu} \\ \frac{\mu}{\lambda+\mu} & \frac{\lambda}{\lambda+\mu} \end{bmatrix}$.

> Baris identik → limit probabilitas independen dari state awal: $\pi_0 = \frac{\mu}{\lambda+\mu}$, $\pi_1 = \frac{\lambda}{\lambda+\mu}$.