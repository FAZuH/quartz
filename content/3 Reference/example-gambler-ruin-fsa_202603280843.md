---
publish: true
aliases:
  - First Step Analysis - Gambler's Ruin
created: 2026-04-09T23:07:39.379+07:00
modified: 2026-04-09T23:07:39.380+07:00
published: 2026-04-09T23:07:39.380+07:00
creation-time: 2026-03-28 08:43
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Example: First Step Analysis - Gambler's Ruin

Using the scenario from [[example-gambling-model_202603280856|gambling model]], consider a gambler with $N=3$ and win probability $p=0.4$ (lose probability $q=0.6$).

We want to find the probability of reaching the target ($3$) starting from state $1$.

### Hitting Probability

Let $\pi_i$ be the probability of hitting state $3$ starting from state $i$.

**Boundary Conditions:**

- $\pi_3 = 1$ (Target reached)
- $\pi_0 = 0$ (Broke)

**Equations for Transient States:**

- $\pi_1 = 0.4 \pi_2 + 0.6 \pi_0 \implies \pi_1 = 0.4 \pi_2$
- $\pi_2 = 0.4 \pi_3 + 0.6 \pi_1 \implies \pi_2 = 0.4(1) + 0.6 \pi_1$

**Solution:**

$\pi_1 = 0.4(0.4 + 0.6 \pi_1) = 0.16 + 0.24 \pi_1$

$0.76 \pi_1 = 0.16 \implies \pi_1 \approx 0.2105$

### Expected Time to Absorption

Let $\mu_i$ be the expected number of steps until reaching state $i$.

**Boundary Conditions:**

- $\mu_0 = 0$
- $\mu_3 = 0$

**Equations:**

- $\mu_1 = 1 + 0.4 \mu_2 + 0.6 \mu_0 \implies \mu_1 = 1 + 0.4 \mu_2$
- $\mu_2 = 1 + 0.4 \mu_3 + 0.6 \mu_1 \implies \mu_2 = 1 + 0.6 \mu_1$

**Solution:**

$\mu_1 = 1 + 0.4(1 + 0.6 \mu_1) = 1 + 0.4 + 0.24 \mu_1$

$0.76 \mu_1 = 1.4 \implies \mu_1 \approx 1.8421 \text{ steps}$

## Related

- [[procedure-first-step-analysis_202603280842|First Step Analysis]]
- [[example-gambling-model_202603280856|Gambling Model]]
