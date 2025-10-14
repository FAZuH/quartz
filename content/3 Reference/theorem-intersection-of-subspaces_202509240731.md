---
{"publish":true,"aliases":["Intersection of Subspaces"],"created":"2025-10-14T04:15:27.073+07:00","modified":"2025-10-14T04:15:27.073+07:00","published":"2025-10-14T04:15:27.073+07:00","tags":[null],"cssclasses":"","creation-time":"2025-09-24 07:31","status":"baby","parent":["[[linear-algebra|linear algebra]]"]}
---


## Theorem

If $W_{1},W_{2},\dots,W_{r}$ subspaces of [[3 Reference/def-vector-space-axioms_202509240715\|vector space]] $V$ then intersection of those subspaces is also subspace of $V$.

## Proof


Let $W$ be the intersection of the subspaces $W_1, W_2, \ldots, W_r$. This set is not empty because each of these subspaces contains the zero vector of $V$, and hence so does their intersection. Thus, it remains to show that $W$ is closed under addition and scalar multiplication.

To prove closure under addition, let $\mathbf{u}$ and $\mathbf{v}$ be vectors in $W$. Since $W$ is the intersection of $W_1, W_2, \ldots, W_r$, it follows that $\mathbf{u}$ and $\mathbf{v}$ also lie in each of these subspaces. Moreover, since these subspaces are closed under addition and scalar multiplication, they also contain the vectors $\mathbf{u} + \mathbf{v}$ and $k\mathbf{u}$ for every scalar $k$, and hence so does their intersection $W$. This proves that $W$ is closed under addition and scalar multiplication.