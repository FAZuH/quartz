---
publish: true
aliases:
  - Existence of CTMC Limit Probabilities
created: 2026-05-08T06:23:06.529+07:00
modified: 2026-05-08T06:23:06.529+07:00
published: 2026-05-08T06:23:06.529+07:00
cssclasses: ""
creation-time: 2026-05-08 06:17
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---


## Theorem

If a CTMC $\{X(t) : t \geq 0\}$ on state space $S$ is:

1. **Irreducible**, and
2. **Positive recurrent**

then for all $j \in S$:

$$\pi_j = \lim_{t \to \infty} P_{ij}(t)$$

exists and is **independent** of the initial state $i$. Such a process is called **ergodic**.

> [!TIP] Interpretation
> The conditions mirror those for discrete-time Markov chains: irreducible (all states communicate) and positive recurrent (expected return time is finite) guarantee a unique limiting distribution. Since CTMCs have no periodicity issues, these two conditions are sufficient.

## Implication: Balance Equations

When the limit distribution exists, the steady-state probabilities $\pi_j \geq 0$ satisfy the system of linear equations (balance equations):

$$\nu_j \pi_j = \sum_{k \neq j} q_{kj} \pi_k, \quad \forall j$$
$$\sum_{k \in S} \pi_k = 1$$

Also: $\pi_j = \nu_j / (\sum_{i \in S} \nu_i)$ in terms of the sojourn rates.

> [!NOTE]
> In practice, it is very difficult to prove positive recurrence for chains with infinitely many states. Instead, we solve the balance equations and determine the condition under which these probabilities exist.

## Related

- [[3 Reference/ctmc-limit-probabilities_202605080616\|CTMC Limit Probabilities]]
- [[3 Reference/ctmc-balance-equations_202605080617\|CTMC Balance Equations]]
- [[3 Reference/def-irreducible_202603280823\|Irreducible]]
- [[3 Reference/def-ergodic-state_202603280835\|Ergodic State]]