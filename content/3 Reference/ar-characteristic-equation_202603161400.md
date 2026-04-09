---
publish: true
aliases:
  - AR Characteristic Equation
  - Characteristic Equation
created: 2026-04-09T23:07:38.995+07:00
modified: 2026-04-09T23:07:38.996+07:00
published: 2026-04-09T23:07:38.996+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---


## Definition

By expressing an [[3 Reference/arp-process-model_202603161400\|AR(p)]] process using the [[3 Reference/backshift-operator_202603161400\|backshift operator]]:
$$(1 - \phi_1 B - \phi_2 B^2 - \dots - \phi_p B^p) Z_t = a_t$$
The **characteristic equation** is:
$$1 - \phi_1 x - \phi_2 x^2 - \dots - \phi_p x^p = 0$$

## Stationarity Condition

An AR(p) process is stationary, if all roots of the **characteristic equation** lie outside the unit circle, i.e.,
$$ |x| > 1 $$

## Unit Root

An AR(p) process is called **unit root**, if one of the solution for its **characteristic equation** is $|x| = 1$

Example: [[3 Reference/ar-characteristic-equation_202603161400#Example Unit Root AR(2)]]

## Example: Unit Root AR(2)

Let $Y_{t}$ be an AR(2) process defined as:
$$ Y_{t} = 1.5 Y_{t-1} - 0.5 Y_{t-2} + a_{t} $$

Transforming the equation into its **characteristic equation**:
$$
\begin{align}
a_{t} & = Y_{t} - 1.5Y_{t-1} + 0.5 Y_{t-2} \\
 & = Y_{t} - 1.5 BY_{t} + 0.5 B^{2}Y_{t} \\
  & = Y_{t} ( 1 - 1.5B + 0.5 B^{2}) \\
  
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
Because one of its solution is $x=1$, then we say that $Y_{t}$ is an **unit root** process.
