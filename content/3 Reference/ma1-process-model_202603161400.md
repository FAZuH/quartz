---
publish: true
aliases:
  - MA(1) Process Model
created: 2026-03-16T11:15:42.312+07:00
modified: 2026-03-16T13:34:17.448+07:00
published: 2026-03-16T13:34:17.448+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: baby
parent: "[[forecasting methods]]"
---


## Definition

The first-order moving average process:
$$Z_t = a_t - \theta a_{t-1}$$
where $\{a_t\}$ is white noise.

## Autocorrelation Bounds

For an MA(1) process, the lag-1 autocorrelation is:
$$\rho_1 = \frac{-\theta}{1 + \theta^2}$$
This value is bounded: $-0.5 \leq \rho_1 \leq 0.5$.
The maximum value $0.5$ is reached when $\theta = -1$, and the minimum $-0.5$ when $\theta = 1$.

## Model Non-Uniqueness

The MA(1) model is not uniquely determined by its autocorrelation function. Replacing $\theta$ with $1/\theta$ results in the same $\rho_1$. 
To ensure uniqueness, we impose the invertibility condition ($|\theta| < 1$).

## Invertibility Condition

An MA(1) process is invertible if it can be represented as an infinite-order AR process. This requires:
$$|\theta| < 1$$
Invertibility allows us to express current shocks $a_t$ as a function of current and past observations $Z_t$.
