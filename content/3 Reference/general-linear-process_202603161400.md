---
publish: true
aliases:
  - General Linear Process
  - GLP
created: 2026-03-31T14:31:16.152+07:00
modified: 2026-03-31T19:53:19.749+07:00
published: 2026-03-31T19:53:19.749+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

A process ${Z\_t}$ is a **general linear process** if it can be represented as a weighted linear combination of current and past [[white-noise_202603161400|white noise]] shocks:
$$Z\_t = a\_t + \psi\_1 a\_{t-1} + \psi\_2 a\_{t-2} + \dots = \sum\_{j=0}^\infty \psi\_j a\_{t-j}$$
where $\psi\_0 = 1$ and ${a\_t}$ is white noise.

## Stationarity Condition

For a general linear process to be [[weakly-stationary_202603161400|stationary]], the weights must satisfy:
$$\sum\_{j=0}^\infty \psi\_j^2 < \infty$$
This ensures the [[autocovariance-and-autocorrelation_202603161400|variance]] of the process is finite.

## Example: Representing AR(1) as GLP

Let ${ Z\_{t} }$ be defined as
$$
Z\_{t}  =  a\_{t} + \phi Z\_{t-1}
$$
where ${ a\_{t} }$ is white noise.

Expanding:
$$
\begin{align}
Z\_{t} & = a\_{t} + \phi Z\_{t -1}  \\
& = a\_{t} +  \phi ( a\_{t-1} + \phi Z\_{t-2}) \\
& = a\_{t} + \phi a\_{t-1} + \phi^{2}Z\_{t-2}  \\
& = a\_{t} + \phi a\_{t-1} + \phi^{2}(a\_{t-2} + \phi Z\_{t-3})  \\
& = a\_{t} + \phi a\_{t-1} + \phi^{2}a\_{t-2} + \phi^3 Z\_{t-3}  \\
& \quad\quad\quad\vdots \\
& = \sum\_{j=0}^\infty \phi^j a\_{t-j}
\end{align}
$$

The process above can be represented as GLM with $\psi\_{j} = \phi^j$

## Example: Representing AR(2) as GLP

Let ${ Z\_{t} }$ be defined as
$$
Z\_{t}  =  a\_{t} + \phi\_{1} Z\_{t-1} + \phi\_{2} Z\_{t-2}
$$
where ${ a\_{t} }$ is white noise.

Expanding:
$$
\begin{align}
Z\_{t}  & =  a\_{t} + \textcolor{lime}{\phi\_{1}} Z\_{t-1} + \textcolor{cyan}{\phi\_{2}} Z\_{t-2} \\
& = a\_{t} + \textcolor{lime}{\phi\_{1}}(a\_{t-1} + \textcolor{lime}{\phi\_{1}} Z\_{t-2} + \textcolor{cyan}{\phi\_{2}} Z\_{t-3}) + \textcolor{cyan}{\phi\_{2}}(a\_{t-2} + \textcolor{lime}{\phi\_{1}} Z\_{t-3} + \textcolor{cyan}{\phi\_{2}} Z\_{t-4}) \\
& = a\_{t} + \[\textcolor{lime}{\phi\_{1}} a\_{t-1} + \textcolor{lime}{\phi\_{1}}^{2}Z\_{t-2} + \textcolor{lime}{\phi\_{1}}\textcolor{cyan}{\phi\_{2}}Z\_{t-3}] + \[\textcolor{cyan}{\phi\_{2}}a\_{t-2} + \textcolor{lime}{\phi\_{1}}\textcolor{cyan}{\phi\_{2}}Z\_{t-3} + \textcolor{cyan}{\phi\_{2}}^{2}Z\_{t-4}] \\
& = a\_{t} + \textcolor{lime}{\phi\_{1}} a\_{t-1} + \textcolor{cyan}{\phi\_{2}} a\_{t-2} + \textcolor{lime}{\phi\_{1}}^{2}Z\_{t-2} + 2\textcolor{lime}{\phi\_{1}}\textcolor{cyan}{\phi\_{2}}Z\_{t-3} + \textcolor{cyan}{\phi\_{2}}^{2}Z\_{t-4} \\
& = a\_{t} + \textcolor{lime}{\phi\_{1}}a\_{t-1} + \textcolor{cyan}{\phi\_{2}}a\_{t-2} + \textcolor{lime}{\phi\_{1}}^{2} (a\_{t-2} + \textcolor{lime}{\phi\_{1}}Z\_{t-3} + \textcolor{cyan}{\phi\_{2}}Z\_{t-4}) + 2\textcolor{lime}{\phi\_{1}}\textcolor{cyan}{\phi\_{2}}Z\_{t-3} + \textcolor{cyan}{\phi\_{2}}^{2}Z\_{t-4} \\
& = a\_{t} + \textcolor{lime}{\phi\_{1}}a\_{t-1} + \textcolor{cyan}{\phi\_{2}}a\_{t-2} + \textcolor{lime}{\phi\_{1}}^{2}a\_{t-2} + \textcolor{lime}{\phi\_{1}}^{3}Z\_{t-3} + \textcolor{lime}{\phi\_{1}}^{2}\textcolor{cyan}{\phi\_{2}}Z\_{t-4} + 2\textcolor{lime}{\phi\_{1}}\textcolor{cyan}{\phi\_{2}}Z\_{t-3} + \textcolor{cyan}{\phi\_{2}}^{2}Z\_{t-4} \\
& = a\_{t} + \textcolor{lime}{\phi\_{1}}a\_{t-1} + (\textcolor{lime}{\phi\_{1}}^{2} + \textcolor{cyan}{\phi\_{2}})a\_{t-2} + (\textcolor{lime}{\phi\_{1}}^{3} + 2\textcolor{lime}{\phi\_{1}}\textcolor{cyan}{\phi\_{2}})Z\_{t-3} + (\textcolor{lime}{\phi\_{1}}^{2}\textcolor{cyan}{\phi\_{2}} + \textcolor{cyan}{\phi\_{2}}^{2})Z\_{t-4} \\
& \quad\quad\quad\vdots \\
\end{align}
$$

Notice that the equation above can be written as $Z\_{t} = \sum\_{j=0}^\infty a\_{t-j}\psi\_{j}$, where
$$
\begin{align}
\psi\_{0} & = \textcolor{red}{1} \\
\psi\_{1} & = \textcolor{lime}{\phi\_{1}} \\
\psi\_{2} & = \textcolor{cyan}{\phi\_{1}^{2}+\phi\_{2}} & &  = \phi\_{1}(\textcolor{lime}{\phi\_{1}}) + \phi\_{2}(\textcolor{red}{1})   \\
\psi\_{3} & = \phi\_{1}^{3}+2\phi\_{1}\phi\_{2} & &  = \phi\_{1}(\textcolor{cyan}{\phi\_{1}^{2} + \phi\_{2}}) + \phi\_{2}(\textcolor{lime}{\phi\_{1}}) \\
& \quad\quad\quad\vdots \\
\psi\_{j} & = \phi\_{1}\psi\_{j-1} + \phi\_{2}\psi\_{j-2}
\end{align}
$$

$\therefore$ So, AR(2) process can be represented as GLM as:
$$
Z\_{t} = \sum\_{j=0}^\infty \psi\_{j} a\_{t-j},\quad\psi\_{j} = \phi\_{1}\psi\_{j-1} + \phi\_{2}\psi\_{j-2},\quad j\geq 2
$$
