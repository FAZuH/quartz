---
publish: true
aliases:
  - Impulse Response Function (IRF)
created: 2026-06-01T12:24:23.790+07:00
modified: 2026-06-01T12:24:23.791+07:00
published: 2026-06-01T12:24:23.791+07:00
creation-time: 2026-06-01 12:24
status: in progress
tags:
parent:
  - "[[forecasting methods]]"
---

Traces the response of endogenous variables in a VAR to a one-standard-deviation shock in the error terms over time.

## Procedure

Since individual coefficients in a [[Vector Autoregression (VAR)]] are difficult to interpret, the **Impulse Response Function (IRF)** provides an alternative way to analyze the dynamic relationships between variables.

### Concept

Just as an [[arp-process-model_202603161400|AR]] model can be expressed as an [[moving-average-process-maq_202603161400|MA(∞)]] (Wold representation), a VAR can be expressed as a **Vector Moving Average (VMA)**. The IRF traces the effect of a **one-standard-deviation shock** to one variable's error term on all variables in the system over time.

### Intuition

Consider a bivariate VAR with $\{y_t\}$ and $\{z_t\}$:

- A shock to $e_{1t}$ (in the $y$ equation) increases $y$ by one standard deviation
- This affects $y$ now and in future periods
- Since $y$ also appears in the $z$ equation, the shock to $e_{1t}$ also **spills over** to affect $z$

Similarly, a shock to $e_{2t}$ (in the $z$ equation) affects both $z$ and $y$ over time.

### Output

An IRF produces $n^2$ graphs for an $n$-variable VAR. Only $n(n-1)$ are typically analyzed — those showing the response of one variable to a shock in **another** variable (the cross-effects). The $n$ graphs showing a variable's response to its own shock are usually omitted.

> [!TIP] Reading IRF Graphs
>
> - **Convergence to zero**: The shock's effect dies out over time → system is stable
> - **Persistence**: The effect doesn't decay → shock has permanent effects
> - **Sign and magnitude**: Direction and strength of the response at each horizon

### Example

In a GDP-Import VAR:

- A shock to Import → GDP initially falls, then rises in later periods
- A shock to GDP → Import initially falls, rises at period 3, then gradually declines over 10 years

## Related

- [[Vector Autoregression (VAR)]]
- [[Variance Decomposition]]
- [[Granger Causality Test]]
- [[moving-average-process-maq_202603161400|MA(q) Process Model]]
