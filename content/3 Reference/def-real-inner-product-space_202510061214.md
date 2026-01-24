---
publish: true
aliases:
  - Real Inner Product Space
created: 2025-10-14T04:15:27.064+07:00
modified: 2025-10-14T04:15:27.064+07:00
published: 2025-10-14T04:15:27.064+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-10-06 12:14
status: baby
parent:
  - "[[Elementary Linear Algebra]]"
---


## Definition

An **inner product** on a real [[3 Reference/def-vector-space-axioms_202509240715\|vector space]] $V$ is a function that associates a real number $\langle \mathbf{u},\mathbf{v} \rangle$ with each pair of vectors in $V$ in such a way that the following axioms are satisfied for all vectors $\mathbf{u},\mathbf{v},\mathbf{w}\in V$ and all [[3 Reference/Def-matrix\|scalars]] $k$.
1. $\langle \mathbf{u},\mathbf{v} \rangle = \langle \mathbf{v},\mathbf{u} \rangle$ (Symmetry axiom)
2. $\langle \mathbf{u}+\mathbf{v},\mathbf{w} \rangle=\langle \mathbf{u},\mathbf{w} \rangle+\langle \mathbf{v},\mathbf{w} \rangle$ (Additivity axiom)
3. $\langle k\mathbf{u},\mathbf{v} \rangle=k\langle \mathbf{u},\mathbf{v} \rangle$ (Homogeneity axiom)
4. $\langle \mathbf{v},\mathbf{v} \rangle\geq 0$ and $\langle \mathbf{v},\mathbf{v} \rangle=0$ if and only if $\mathbf{v}=vf_{0}$ (Positivity axiom)

A real vector space with an inner product is called a **real inner product space**