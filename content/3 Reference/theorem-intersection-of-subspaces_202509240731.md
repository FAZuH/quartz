---
publish: true
aliases:
  - Intersection of Subspaces
created: 2026-03-25T15:22:40.598+07:00
modified: 2026-03-25T15:22:40.598+07:00
published: 2026-03-25T15:22:40.598+07:00
tags:
  - 
creation-time: 2025-09-24 07:31
status: in progress
parent:
  - "[[linear-algebra|linear algebra]]"
---

## Theorem

If $W\_{1},W\_{2},\dots,W\_{r}$ subspaces of [[def-vector-space-axioms_202509240715|vector space]] $V$ then intersection of those subspaces is also subspace of $V$.

## Proof

Let $W$ be the intersection of the subspaces $W\_1, W\_2, \ldots, W\_r$. This set is not empty because each of these subspaces contains the zero vector of $V$, and hence so does their intersection. Thus, it remains to show that $W$ is closed under addition and scalar multiplication.

To prove closure under addition, let $\mathbf{u}$ and $\mathbf{v}$ be vectors in $W$. Since $W$ is the intersection of $W\_1, W\_2, \ldots, W\_r$, it follows that $\mathbf{u}$ and $\mathbf{v}$ also lie in each of these subspaces. Moreover, since these subspaces are closed under addition and scalar multiplication, they also contain the vectors $\mathbf{u} + \mathbf{v}$ and $k\mathbf{u}$ for every scalar $k$, and hence so does their intersection $W$. This proves that $W$ is closed under addition and scalar multiplication.
