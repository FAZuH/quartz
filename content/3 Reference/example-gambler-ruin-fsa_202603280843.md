---
publish: true
aliases:
  - First Step Analysis - Gambler's Ruin
created: 2026-03-29T12:54:01.178+07:00
modified: 2026-03-29T12:54:01.178+07:00
published: 2026-03-29T12:54:01.178+07:00
creation-time: 2026-03-28 08:43
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Example: First Step Analysis - Gambler's Ruin

Using the scenario from [[example-gambling-model_202603280856|gambling model]], consider a gambler with $N=3$ and win probability $p=0.4$ (lose probability $q=0.6$).

We want to find the probability of reaching the target ($3$) starting from state $1$.

### Hitting Probability

Let $\pi\_i$ be the probability of hitting state $3$ starting from state $i$.

**Boundary Conditions:**

- $\pi\_3 = 1$ (Target reached)
- $\pi\_0 = 0$ (Broke)

**Equations for Transient States:**

- $\pi\_1 = 0.4 \pi\_2 + 0.6 \pi\_0 \implies \pi\_1 = 0.4 \pi\_2$
- $\pi\_2 = 0.4 \pi\_3 + 0.6 \pi\_1 \implies \pi\_2 = 0.4(1) + 0.6 \pi\_1$

**Solution:**

$$\pi\_1 = 0.4(0.4 + 0.6 \pi\_1) = 0.16 + 0.24 \pi\_1$$

$$0.76 \pi\_1 = 0.16 \implies \pi\_1 \approx 0.2105$$

### Expected Time to Absorption

Let $\mu\_i$ be the expected number of steps until reaching state $i$.

**Boundary Conditions:**

- $\mu\_0 = 0$
- $\mu\_3 = 0$

**Equations:**

- $\mu\_1 = 1 + 0.4 \mu\_2 + 0.6 \mu\_0 \implies \mu\_1 = 1 + 0.4 \mu\_2$
- $\mu\_2 = 1 + 0.4 \mu\_3 + 0.6 \mu\_1 \implies \mu\_2 = 1 + 0.6 \mu\_1$

**Solution:**

$$\mu\_1 = 1 + 0.4(1 + 0.6 \mu\_1) = 1 + 0.4 + 0.24 \mu\_1$$

$$0.76 \mu\_1 = 1.4 \implies \mu\_1 \approx 1.8421 \text{ steps}$$

## Related

- [[procedure-first-step-analysis_202603280842|First Step Analysis]]
- [[example-gambling-model_202603280856|Gambling Model]]
