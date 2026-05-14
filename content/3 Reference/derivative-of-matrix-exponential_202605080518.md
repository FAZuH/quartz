---
publish: true
aliases:
  - Derivative of Matrix Exponential
created: 2026-05-08T05:33:03.411+07:00
modified: 2026-05-08T05:33:03.412+07:00
published: 2026-05-08T05:33:03.412+07:00
cssclasses: ""
creation-time: 2026-05-08 05:18
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Properties

For a square matrix $A$, the derivative of the matrix exponential $e^{At}$ with respect to $t$ is:

$$\frac{d}{dt} e^{At} = A e^{At} = e^{At} A$$

Equivalently:

$$\frac{\partial}{\partial t} e^{At} = e^{At} A$$

> [!TIP] Interpretation
> This property mirrors the scalar case $\frac{d}{dt} e^{at} = a e^{at}$. The matrix $A$ can be placed on either the left or right because $A$ commutes with its own exponential: $A e^{At} = e^{At} A$.

## Role in Kolmogorov Equations

This property is used to verify that $P(t) = e^{Qt}$ solves the Kolmogorov differential equations:

- **Backward equation**: $\frac{d}{dt}P(t) = Q e^{Qt} = Q P(t)$ ✓
- **Forward equation**: $\frac{d}{dt}P(t) = e^{Qt} Q = P(t) Q$ ✓

Also, $P(0) = e^{Q \cdot 0} = I$, satisfying the initial condition.

## Related

- [[3 Reference/matrix-exponential_202605080518\|Matrix Exponential]]
- [[3 Reference/kolmogorov-differential-equations_202605080518\|Kolmogorov Differential Equations]]