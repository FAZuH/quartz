---
publish: true
aliases:
  - Properties of Inverse Matrix
created: 2025-10-14T04:15:27.042+07:00
modified: 2025-10-14T04:15:27.042+07:00
published: 2025-10-14T04:15:27.042+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-09-24 12:35
status: adult
parent:
  - "[[linear-algebra|linear algebra]]"
  - "[[matrices]]"
---


## Theorem

If $B$ and $C$ are both [[3 Reference/def-inverse-matrix_202509241225\|inverses]] of the [[3 Reference/Def-matrix\|matrix]] $A$, then $B=C$

## Proof

Let $B,C$ be inverse of $A$. Then we have $BA=I$.

Multiplying both sizes by $C$ gives $(BA)C=IC=C$.

But it is also true that $(BA)C=B(AC)=BI=B$.

Thus, $B=C$.

## Remark

As a consequence of this theorem, if $A$ is [[3 Reference/theorem-matrix-invertibility_202509241243\|invertible]], we simply denote inverse of $A$ as $A^{-1}$. Thus,
$$
AA^{-1}=A^{-1}A=I
$$