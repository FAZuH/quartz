---
publish: true
aliases:
  - General Linear Process
  - GLP
created: 2026-04-09T23:07:39.399+07:00
modified: 2026-04-09T23:07:39.400+07:00
published: 2026-04-09T23:07:39.400+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

A process $\{Z_t\}$ is a **general linear process** if it can be represented as a weighted linear combination of current and past [[white-noise_202603161400|white noise]] shocks:
$Z_t = a_t + \psi_1 a_{t-1} + \psi_2 a_{t-2} + \dots = \sum_{j=0}^\infty \psi_j a_{t-j}$
where $\psi_0 = 1$ and $\{a_t\}$ is white noise.

## Stationarity Condition

For a general linear process to be [[weakly-stationary_202603161400|stationary]], the weights must satisfy:
$\sum_{j=0}^\infty \psi_j^2 < \infty$
This ensures the [[autocovariance-and-autocorrelation_202603161400|variance]] of the process is finite.

## Example: Representing AR(1) as GLP

Let $\{ Z_{t} \}$ be defined as

$$
Z_{t}  =  a_{t} + \phi Z_{t-1}
$$

where $\{ a_{t} \}$ is white noise.

Expanding:

$$
\begin{align}
Z_{t} & = a_{t} + \phi Z_{t -1}  \\
 & = a_{t} +  \phi ( a_{t-1} + \phi Z_{t-2}) \\
  & = a_{t} + \phi a_{t-1} + \phi^{2}Z_{t-2}  \\
  & = a_{t} + \phi a_{t-1} + \phi^{2}(a_{t-2} + \phi Z_{t-3})  \\
  & = a_{t} + \phi a_{t-1} + \phi^{2}a_{t-2} + \phi^3 Z_{t-3}  \\
   & \quad\quad\quad\vdots \\
    & = \sum_{j=0}^\infty \phi^j a_{t-j}
\end{align}
$$

The process above can be represented as GLM with $\psi_{j} = \phi^j$

## Example: Representing AR(2) as GLP

Let $\{ Z_{t} \}$ be defined as

$$
Z_{t}  =  a_{t} + \phi_{1} Z_{t-1} + \phi_{2} Z_{t-2}
$$

where $\{ a_{t} \}$ is white noise.

Expanding:

$$
\begin{align}
Z_{t}  & =  a_{t} + \textcolor{lime}{\phi_{1}} Z_{t-1} + \textcolor{cyan}{\phi_{2}} Z_{t-2} \\
& = a_{t} + \textcolor{lime}{\phi_{1}}(a_{t-1} + \textcolor{lime}{\phi_{1}} Z_{t-2} + \textcolor{cyan}{\phi_{2}} Z_{t-3}) + \textcolor{cyan}{\phi_{2}}(a_{t-2} + \textcolor{lime}{\phi_{1}} Z_{t-3} + \textcolor{cyan}{\phi_{2}} Z_{t-4}) \\
& = a_{t} + [\textcolor{lime}{\phi_{1}} a_{t-1} + \textcolor{lime}{\phi_{1}}^{2}Z_{t-2} + \textcolor{lime}{\phi_{1}}\textcolor{cyan}{\phi_{2}}Z_{t-3}] + [\textcolor{cyan}{\phi_{2}}a_{t-2} + \textcolor{lime}{\phi_{1}}\textcolor{cyan}{\phi_{2}}Z_{t-3} + \textcolor{cyan}{\phi_{2}}^{2}Z_{t-4}] \\
& = a_{t} + \textcolor{lime}{\phi_{1}} a_{t-1} + \textcolor{cyan}{\phi_{2}} a_{t-2} + \textcolor{lime}{\phi_{1}}^{2}Z_{t-2} + 2\textcolor{lime}{\phi_{1}}\textcolor{cyan}{\phi_{2}}Z_{t-3} + \textcolor{cyan}{\phi_{2}}^{2}Z_{t-4} \\
& = a_{t} + \textcolor{lime}{\phi_{1}}a_{t-1} + \textcolor{cyan}{\phi_{2}}a_{t-2} + \textcolor{lime}{\phi_{1}}^{2} (a_{t-2} + \textcolor{lime}{\phi_{1}}Z_{t-3} + \textcolor{cyan}{\phi_{2}}Z_{t-4}) + 2\textcolor{lime}{\phi_{1}}\textcolor{cyan}{\phi_{2}}Z_{t-3} + \textcolor{cyan}{\phi_{2}}^{2}Z_{t-4} \\
& = a_{t} + \textcolor{lime}{\phi_{1}}a_{t-1} + \textcolor{cyan}{\phi_{2}}a_{t-2} + \textcolor{lime}{\phi_{1}}^{2}a_{t-2} + \textcolor{lime}{\phi_{1}}^{3}Z_{t-3} + \textcolor{lime}{\phi_{1}}^{2}\textcolor{cyan}{\phi_{2}}Z_{t-4} + 2\textcolor{lime}{\phi_{1}}\textcolor{cyan}{\phi_{2}}Z_{t-3} + \textcolor{cyan}{\phi_{2}}^{2}Z_{t-4} \\
& = a_{t} + \textcolor{lime}{\phi_{1}}a_{t-1} + (\textcolor{lime}{\phi_{1}}^{2} + \textcolor{cyan}{\phi_{2}})a_{t-2} + (\textcolor{lime}{\phi_{1}}^{3} + 2\textcolor{lime}{\phi_{1}}\textcolor{cyan}{\phi_{2}})Z_{t-3} + (\textcolor{lime}{\phi_{1}}^{2}\textcolor{cyan}{\phi_{2}} + \textcolor{cyan}{\phi_{2}}^{2})Z_{t-4} \\
& \quad\quad\quad\vdots \\
\end{align}
$$

Notice that the equation above can be written as $Z_{t} = \sum_{j=0}^\infty a_{t-j}\psi_{j}$, where

$$
\begin{align}
\psi_{0} & = \textcolor{red}{1} \\
\psi_{1} & = \textcolor{lime}{\phi_{1}} \\
\psi_{2} & = \textcolor{cyan}{\phi_{1}^{2}+\phi_{2}} & &  = \phi_{1}(\textcolor{lime}{\phi_{1}}) + \phi_{2}(\textcolor{red}{1})   \\
\psi_{3} & = \phi_{1}^{3}+2\phi_{1}\phi_{2} & &  = \phi_{1}(\textcolor{cyan}{\phi_{1}^{2} + \phi_{2}}) + \phi_{2}(\textcolor{lime}{\phi_{1}}) \\
 & \quad\quad\quad\vdots \\
 \psi_{j} & = \phi_{1}\psi_{j-1} + \phi_{2}\psi_{j-2}
\end{align}
$$

$\therefore$ So, AR(2) process can be represented as GLM as:

$$
Z_{t} = \sum_{j=0}^\infty \psi_{j} a_{t-j},\quad\psi_{j} = \phi_{1}\psi_{j-1} + \phi_{2}\psi_{j-2},\quad j\geq 2
$$
