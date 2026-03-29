---
publish: true
aliases:
  - n-step Transition Matrix Identity
created: 2026-03-28T17:47:24.555+07:00
modified: 2026-03-28T17:47:24.555+07:00
published: 2026-03-28T17:47:24.555+07:00
creation-time: 2026-03-28 08:13
status: in progress
parent:
  - "[[stochastic-model]]"
---

## Theorem

For any $n \geq 1$, the n-step Transition Matrix $\mathbf{P}^{(n)}$ is the $n$-th power of the [[def-transition-probability-matrix_202603280810|transition matrix]] $\mathbf{P}$:

$$\mathbf{P}^{(n)} = \mathbf{P}^n$$

## Proof by Induction

### Base Case ($n=1$)

By definition of [[def-transition-probability_202603280807|transition probability]], $P\_{ij}^{(1)}$ is the probability of transitioning from [[def-state-stochastic_202603280801|state]] $i$ to $j$ in one step, which is $P\_{ij}$. Thus:

$$\mathbf{P}^{(1)} = \mathbf{P}^1$$

### Inductive Hypothesis

Assume $\mathbf{P}^{(n)} = \mathbf{P}^n$ holds for some $n \geq 1$.

### Inductive Step

Consider $\mathbf{P}^{(n+1)}$. By the [[def-chapman-kolmogorov_202603280811|Chapman-Kolmogorov]] equation with $m=1$:

$$P\_{ij}^{(n+1)} = \sum\_k P\_{ik}^{(n)} P\_{kj}^{(1)}$$

Substituting $P\_{kj}^{(1)} = P\_{kj}$ and using the inductive hypothesis $P\_{ik}^{(n)} = (\mathbf{P}^n)\_{ik}$:

$$P\_{ij}^{(n+1)} = \sum\_k (\mathbf{P}^n)_{ik} P_{kj}$$

The right-hand side corresponds to the entry in row $i$ and column $j$ of the matrix product $\mathbf{P}^n \cdot \mathbf{P}$.

Therefore:

$$\mathbf{P}^{(n+1)} = \mathbf{P}^n \cdot \mathbf{P} = \mathbf{P}^{n+1}$$

By induction, the identity holds for all $n \geq 1$.

## Related

- [[def-n-step-transition-matrix_202603280812|n-step Transition Matrix]]
- [[def-chapman-kolmogorov_202603280811|Chapman-Kolmogorov Equation]]
