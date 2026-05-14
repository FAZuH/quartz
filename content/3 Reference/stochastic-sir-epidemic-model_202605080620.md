---
publish: true
aliases:
  - Stochastic SIR Epidemic Model
created: 2026-05-08T06:23:06.547+07:00
modified: 2026-05-08T06:23:06.548+07:00
published: 2026-05-08T06:23:06.548+07:00
cssclasses: ""
creation-time: 2026-05-08 06:20
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Definition

The **Stochastic SIR (Susceptible-Infected-Removed) Epidemic Model** is a bivariate continuous-time Markov chain where recovered individuals have permanent immunity.

- $N$: constant total population ($S(t) + I(t) + R(t) = N$)
- $S(t)$: number of susceptibles
- $I(t)$: number of infectives
- $R(t)$: number of removed (recovered/immune)
- $\beta$: contact (transmission) rate
- $\gamma$: recovery rate

## State Space

The process $\{(S(t), I(t)) : t \geq 0\}$ has state space $\{(i, j) : i = 0, \ldots, N; j = 0, \ldots, N-i\}$. $R(t) = N - S(t) - I(t)$.

## Transition Rates

$$\begin{aligned} P_{(i,j) \to (i-1, j+1)}(\Delta t) &= \frac{\beta i j}{N} \Delta t + o(\Delta t) \quad \text{(infection)} \\ P_{(i,j) \to (i, j-1)}(\Delta t) &= \gamma j \Delta t + o(\Delta t) \quad \text{(recovery)} \end{aligned}$$

> [!TIP] Interpretation
> Unlike the SIS model, the SIR model is not a simple birth-death process — it is **bivariate**. The state $(i, j)$ tracks both susceptibles and infectives. All states with $j = 0$ (no infectives) are absorbing — the epidemic ends.

## Key Properties

- **Not a standard B/D process**: The absorbing states are $\{(i, 0) : i = 0, \ldots, N\}$ (epidemic always ends)
- **Basic Reproduction Number**: $\mathcal{R}_0 = \beta/\gamma$, same as SIS
- **Final Epidemic Size**: $S(\infty)$ satisfies the implicit equation:

$$S(\infty) = S(0) \exp\left[-\frac{\mathcal{R}_0(N - S(\infty) + I(0))}{N}\right]$$

- **Expected Duration**: Computed from the submatrix $Q$ of the generator, solving $Q\boldsymbol{\tau} = -\mathbf{1}$ over transient states

## Deterministic Analog

$$\frac{dS}{dt} = -\frac{\beta SI}{N}, \quad \frac{dI}{dt} = \frac{\beta SI}{N} - \gamma I, \quad \frac{dR}{dt} = \gamma I$$

If $\mathcal{R}_0 S(0)/N \leq 1$, $I(t)$ decreases monotonically. If $\mathcal{R}_0 S(0)/N > 1$, $I(t)$ first increases to a maximum, then decreases to zero (the epidemic "burns through" the susceptibles).

## Related

- [[3 Reference/stochastic-sis-epidemic-model_202605080620\|Stochastic SIS Epidemic Model]]
- [[3 Reference/birth-and-death-process_202605080517\|Birth and Death Process]]
- [[3 Reference/continuous-time-markov-chain_202605080515\|Continuous-Time Markov Chain]]
- [[3 Reference/probability-of-population-extinction_202605080618\|Probability of Population Extinction]]