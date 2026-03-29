---
publish: true
aliases:
  - Regular Chain is Irreducible and Aperiodic
created: 2026-03-29T12:54:01.179+07:00
modified: 2026-03-29T12:54:01.179+07:00
published: 2026-03-29T12:54:01.179+07:00
creation-time: 2026-03-28 09:01
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Theorem

A [[def-transition-probability-matrix_202603280810|TPM]] $\mathbf{P}$ is **regular** if $\mathbf{P}^k$ has **all positive entries** for some $k > 0$.

A regular chain is necessarily [[def-irreducible_202603280823|irreducible]] and [[def-period-stochastic_202603280825|aperiodic]].

## Proof of Irreducibility

**Definition:** A chain is irreducible if all states communicate ($i \leftrightarrow j$). This means for any two states $i$ and $j$, it is possible to go from $i$ to $j$ and from $j$ to $i$.

1. By the definition of a regular chain, there exists some $k$ such that $(\mathbf{P}^k)\_{ij} > 0$ for all $i, j$.
2. Since $(\mathbf{P}^k)\_{ij} > 0$, state $j$ is [[def-accessible-state_202603280820|accessible]] from state $i$ ($i \to j$).
3. Similarly, since $(\mathbf{P}^k)\_{ji} > 0$, state $i$ is [[def-accessible-state_202603280820|accessible]] from state $j$ ($j \to i$).
4. Because every state can reach every other state, they all belong to the same [[def-communicating-classes_202603280822|communicating class]].
5. **Conclusion:** The chain is irreducible.

## Proof of Aperiodicity

**Definition:** A state $i$ is aperiodic if its period $d(i) = 1$. The period is the GCD of all $n$ such that $(\mathbf{P}^n)\_{ii} > 0$.

1. In a regular chain, $(\mathbf{P}^k)\_{ii} > 0$ for all states $i$. This means $k$ is one possible time the process can return to state $i$.
2. If $\mathbf{P}^k$ has no zero elements, then $\mathbf{P}^{k+n}$ will also have no zero elements for all $n \geq 1$.
   - Why? $\mathbf{P}^{k+1} = \mathbf{P} \cdot \mathbf{P}^k$. To get from $i$ to $j$ in $k+1$ steps, take one step to some intermediate state $m$, then $k$ steps to $j$. Since $\mathbf{P}^k$ is all positive, a path always exists.
3. This implies that if $(\mathbf{P}^k)_{ii} > 0$, then $(\mathbf{P}^{k+1})_{ii} > 0$ as well.
4. The period $d(i)$ must be a common divisor of $k$ and $k+1$.
5. The only positive integer that divides two consecutive integers ($k$ and $k+1$) is **1**.
6. **Conclusion:** $d(i) = 1$ for all states, so the chain is aperiodic.

## Summary

- **Irreducible** because "all positive entries" means you can get **anywhere from anywhere**
- **Aperiodic** because "all positive entries" means you can return to a state at **any time** $n \ge k$, breaking any fixed "rhythm" or period
