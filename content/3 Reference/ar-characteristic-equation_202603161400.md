---
publish: true
aliases:
  - AR Characteristic Equation
  - Characteristic Equation
created: 2026-03-29T17:33:47.073+07:00
modified: 2026-03-30T08:01:59.011+07:00
published: 2026-03-30T08:01:59.011+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

By expressing an [[arp-process-model_202603161400|AR(p)]] process using the [[backshift-operator_202603161400|backshift operator]]:
$$(1 - \phi\_1 B - \phi\_2 B^2 - \dots - \phi\_p B^p) Z\_t = a\_t$$
The **characteristic equation** is:
$$1 - \phi\_1 x - \phi\_2 x^2 - \dots - \phi\_p x^p = 0$$

## Stationarity Condition

An AR(p) process is stationary, if all roots of the **characteristic equation** lie outside the unit circle, i.e.,
$$ |x| > 1 $$

## Unit Root

An AR(p) process is called **unit root**, if one of the solution for its **characteristic equation** is $|x| = 1$

Example: [[#Example Unit Root AR(2)]]

## Example: Unit Root AR(2)

Let $Y\_{t}$ be an AR(2) process defined as:
$$ Y\_{t} = 1.5 Y\_{t-1} - 0.5 Y\_{t-2} + a\_{t} $$

Transforming the equation into its **characteristic equation**:
$$
\begin{align}
a\_{t} & = Y\_{t} - 1.5Y\_{t-1} + 0.5 Y\_{t-2} \\
& = Y\_{t} - 1.5 BY\_{t} + 0.5 B^{2}Y\_{t} \\
& = Y\_{t} ( 1 - 1.5B + 0.5 B^{2}) \\

\iff 0 & = 1 - 1.5 x + 0.5x^{2}
\end{align}
$$

Solving the polynomial:
$$
\begin{align}
1 - 1.5x + 0.5x^{2} & = 0 \\
2 - 3x + x^{2} & = 0 \\
(x-2)(x-1) & = 0
\end{align}
$$
Because one of its solution is $x=1$, then we say that $Y\_{t}$ is an **unit root** process.
