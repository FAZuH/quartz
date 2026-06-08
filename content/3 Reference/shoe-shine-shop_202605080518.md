---
publish: true
aliases:
  - Shoe Shine Shop
created: 2026-05-08T05:33:03.438+07:00
modified: 2026-06-05T03:02:00.023+07:00
published: 2026-06-05T03:02:00.023+07:00
creation-time: 2026-05-08 05:18
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Example

Consider a shoe shine establishment consisting of two chairs — chair 1 and chair 2. A customer upon arrival goes initially to chair 1 where shoes are cleaned and polish is applied. After this, the customer moves to chair 2 where the polish is buffed.

**Assumptions:**

- Service times at chair 1 are $\text{Exp}(\mu_1)$
- Service times at chair 2 are $\text{Exp}(\mu_2)$
- Potential customers arrive according to a Poisson process with rate $\lambda$
- A customer will enter **only if both chairs are empty**

> [!NOTE]- Solution
> **State Space.** Define $X(t)$ as the current chair a customer is in. $S = \{0, 1, 2\}$:
>
> | State | Interpretation |
> |-------|---------------|
> | 0 | System is empty |
> | 1 | A customer is in chair 1 |
> | 2 | A customer is in chair 2 |
>
> **Q-matrix:**
>
> $Q = \begin{pmatrix} -\lambda & \lambda & 0 \\ 0 & -\mu_1 & \mu_1 \\ \mu_2 & 0 & -\mu_2 \end{pmatrix}$
>
> **Sojourn rates:** $\nu_0 = \lambda$, $\nu_1 = \mu_1$, $\nu_2 = \mu_2$
>
> **Transition probabilities:**
>
> $P = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{pmatrix}$
>
> That is: $P_{01} = P_{12} = P_{20} = 1$, and all other $P_{ij} = 0$.

## Related

- [[continuous-time-markov-chain_202605080515|Continuous-Time Markov Chain]]
- [[transition-rate-matrix_202605080516|Transition Rate Matrix]]
