---
publish: true
aliases:
  - n-step Transition Matrix Identity
created: 2026-04-09T23:07:39.694+07:00
modified: 2026-04-09T23:07:39.695+07:00
published: 2026-04-09T23:07:39.695+07:00
cssclasses: ""
creation-time: 2026-03-28 08:13
status: in progress
parent:
  - "[[stochastic-model]]"
---


## Theorem

For any $n \geq 1$, the n-step Transition Matrix $\mathbf{P}^{(n)}$ is the $n$-th power of the [[3 Reference/def-transition-probability-matrix_202603280810\|transition matrix]] $\mathbf{P}$:

$$\mathbf{P}^{(n)} = \mathbf{P}^n$$

## Proof by Induction

### Base Case ($n=1$)

By definition of [[3 Reference/def-transition-probability_202603280807\|transition probability]], $P_{ij}^{(1)}$ is the probability of transitioning from [[3 Reference/def-state-stochastic_202603280801\|state]] $i$ to $j$ in one step, which is $P_{ij}$. Thus:

$$\mathbf{P}^{(1)} = \mathbf{P}^1$$

### Inductive Hypothesis

Assume $\mathbf{P}^{(n)} = \mathbf{P}^n$ holds for some $n \geq 1$.

### Inductive Step

Consider $\mathbf{P}^{(n+1)}$. By the [[3 Reference/def-chapman-kolmogorov_202603280811\|Chapman-Kolmogorov]] equation with $m=1$:

$$P_{ij}^{(n+1)} = \sum_k P_{ik}^{(n)} P_{kj}^{(1)}$$

Substituting $P_{kj}^{(1)} = P_{kj}$ and using the inductive hypothesis $P_{ik}^{(n)} = (\mathbf{P}^n)_{ik}$:

$$P_{ij}^{(n+1)} = \sum_k (\mathbf{P}^n)_{ik} P_{kj}$$

The right-hand side corresponds to the entry in row $i$ and column $j$ of the matrix product $\mathbf{P}^n \cdot \mathbf{P}$.

Therefore:

$$\mathbf{P}^{(n+1)} = \mathbf{P}^n \cdot \mathbf{P} = \mathbf{P}^{n+1}$$

By induction, the identity holds for all $n \geq 1$.

## Related

- [[3 Reference/def-n-step-transition-matrix_202603280812\|n-step Transition Matrix]]
- [[3 Reference/def-chapman-kolmogorov_202603280811\|Chapman-Kolmogorov Equation]]
