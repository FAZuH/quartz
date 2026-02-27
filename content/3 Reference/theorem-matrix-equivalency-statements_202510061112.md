---
publish: true
aliases:
  - Matrix Equivalency Statements
created: 2026-02-22T19:24:22.822+07:00
modified: 2026-02-22T19:24:22.822+07:00
published: 2026-02-22T19:24:22.822+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-10-06 11:12
status: baby
parent:
  - "[[Elementary Linear Algebra]]"
---


## Theorem

Let $A$ : $n\times n$ [[3 Reference/Def-matrix\|square matrix]]

Then the following statements are **equivalent**:
- (a) $A$ is [[3 Reference/theorem-matrix-invertibility_202509241243\|invertible]]^a
- (b) $A\mathbf{x}=\mathbf{0}$ has only the [[3 Reference/Def-trivial-solution\|trivial solution]]^b
- (c) The [[3 Reference/Def-reduced-row-echelon-form-(rref)\|reduced row echelon form]] of $A$ is $I_{n}$^c
- (d) $A$ can be expressed as a product of [[3 Reference/def-elementary-matrix_202510021412\|elementary matrices]]^d
- (e) $A\mathbf{x}=\mathbf{b}$ is [[3 Reference/Def-consistency-of-linear-system\|consistent]] for every $n\times 1$ matrix $\mathbf{b}$^e
- (f) $A\mathbf{x}=\mathbf{b}$ has exactly one [[3 Reference/Def-solution-of-linear-system\|solution]] for every $n\times 1$ matrix $\mathbf{b}$^f
- (g) $\det(A) \neq 0$^g
- (h) The [[3 Reference/def-row-and-column-vector_202509240741\|column vectors]] of $A$ are [[3 Reference/def-linear-independence_202510060445\|linearly independent]]^h
- (i) The [[3 Reference/def-row-and-column-vector_202509240741\|row vectors]] of $A$ are linearly independent^i
- (j) The column vectors of $A$ [[3 Reference/def-span_202509240805\|span]] $R^n$^j
- (k) The row vectors of $A$ span $R^n$^k
- (l) The column vectors of $A$ form a [[3 Reference/def-basis_202510061042\|basis]] for $R^n$^l
- (m) The row vectors of $A$ for a basis for $R^n$^m
- (n) $A$ has [[3 Reference/def-rank-and-nullity_202510080316\|rank]] $n$^n
- (o) $A$ has [[3 Reference/def-rank-and-nullity_202510080316\|nullity]] $0$^o
- (p) The [[3 Reference/def-orthogonal_202510011638\|orthogonal]] complement of the [[3 Reference/def-row-space,-column-space,-null-space_202510061124\|null space]] of $A$ is $R^n$^p
- (q) The orthogonal complement of the [[3 Reference/def-row-space,-column-space,-null-space_202510061124\|row space]] of $A$ is $\{ \mathbf{0} \}$^q
- (r) The [[3 Reference/def-kernel-and-range_202511050657\|kernel]] of  is $\{ \mathbf{0} \}$^r
- (s) The [[3 Reference/def-kernel-and-range_202511050657\|range]] of $T_{A}$ is $R^n$^s
- (t) $T_{A}$ is one-to-one^t
- (u) $\lambda=0$ is not an [[3 Reference/def-eigenvalue-eigenvector_202511050458\|eigenvalue]] of $A$^u