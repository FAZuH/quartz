---
publish: true
aliases:
  - MA(1) Process Model
created: 2026-03-29T17:33:47.075+07:00
modified: 2026-03-30T01:50:04.259+07:00
published: 2026-03-30T01:50:04.259+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Definition

The first-order moving average process:
$$Z\_t = a\_t - \theta a\_{t-1}$$
where ${a\_t}$ is [[white-noise_202603161400|white noise]].

## Autocorrelation Bounds

For an MA(1) process, the [[lag-definition_202603161400|lag]]-1 [[autocovariance-and-autocorrelation_202603161400|autocorrelation]] is:
$$\rho\_1 = \frac{-\theta}{1 + \theta^2}$$
This value is bounded: $-0.5 \leq \rho\_1 \leq 0.5$.
The maximum value $0.5$ is reached when $\theta = -1$, and the minimum $-0.5$ when $\theta = 1$.

## Model Non-Uniqueness

The MA(1) model is not uniquely determined by its [[autocovariance-and-autocorrelation_202603161400|autocorrelation function]]. Replacing $\theta$ with $1/\theta$ results in the same $\rho\_1$.
To ensure uniqueness, we impose the invertibility condition ($|\theta| < 1$).

## Invertibility Condition

An MA(1) process is **invertible** if it can be represented as an infinite-order [[arp-process-model_202603161400|AR process]]. This requires:
$$|\theta| < 1$$
Invertibility allows us to express current shocks $a\_t$ as a function of current and past observations $Z\_t$.

## Inverting MA(1) to AR(infty)

Let $Z\_{t} = a\_{t} - \theta a\_{t-1}$

Then $a\_{t} = Z\_{t} + \theta a\_{t-1}$

Substituting into $Z\_{t}$,
$$
\begin{align}
Z\_{t} & = a\_{t} - \theta(Z\_{t-1} + \theta a\_{t-2}) \\
& = a\_{t} - \theta Z\_{t-1} - \theta^{2}a\_{t-2} \\
& = a\_{t} - \theta Z\_{t-1} - \theta^{2}Z\_{t-2} - \dots - \theta^nZ\_{t-n}
\end{align}
$$

Notice that the value of $Z\_{t}$ converges if $|\theta|<1$, since every subsequent regression/step will result in a smaller value of $\theta^n$.
