---
publish: true
aliases:
  - MA(1) Process Model
created: 2026-03-25T15:22:40.608+07:00
modified: 2026-03-25T15:22:40.608+07:00
published: 2026-03-25T15:22:40.608+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

The first-order moving average process:
$$Z\_t = a\_t - \theta a\_{t-1}$$
where ${a\_t}$ is white noise.

## Autocorrelation Bounds

For an MA(1) process, the lag-1 autocorrelation is:
$$\rho\_1 = \frac{-\theta}{1 + \theta^2}$$
This value is bounded: $-0.5 \leq \rho\_1 \leq 0.5$.
The maximum value $0.5$ is reached when $\theta = -1$, and the minimum $-0.5$ when $\theta = 1$.

## Model Non-Uniqueness

The MA(1) model is not uniquely determined by its autocorrelation function. Replacing $\theta$ with $1/\theta$ results in the same $\rho\_1$.
To ensure uniqueness, we impose the invertibility condition ($|\theta| < 1$).

## Invertibility Condition

An MA(1) process is invertible if it can be represented as an infinite-order AR process. This requires:
$$|\theta| < 1$$
Invertibility allows us to express current shocks $a\_t$ as a function of current and past observations $Z\_t$.
