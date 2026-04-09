---
publish: true
aliases:
  - Elementary Row Operation
created: 2026-04-09T23:07:39.658+07:00
modified: 2026-04-09T23:07:39.659+07:00
published: 2026-04-09T23:07:39.659+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-10-02 14:05
status: complete
parent:
  - "[[Elementary Linear Algebra]]"
---


## Theorem

Let $\mathbf{Ax}=\mathbf{b}$ : [[3 Reference/Def-augmented-matrix\|Augmented matrix]] of a [[3 Reference/Def-linear-system\|linear system]]

If any of the following operations are done to an augmented [[3 Reference/Def-matrix\|matrix]]:
1. Multiply an row through by a nonzero constant
2. Interchange two row
3. Add a constant times one row to another

Then the underlying linear system in the resulting augmented matrix has the **same [[3 Reference/Def-solution-of-linear-system\|solution set]] as the original** 

> [!tip]
> The above operations do not alter the solution set, and may be used to produce a succession of increasingly simple systems.

## Remark

Because resulting matrix from elementary row operations retain the same solution as the original, it may be used to simplify and solve a linear system. See [[3 Reference/1.1 Introduction to Systems of Linear Equations#Solving linear system with elementary row operations\|Solving linear system with elementary row operations]] for demonstration.

## Reversing elementary row operations

It should be evident if we let $B$ be the [[3 Reference/Def-matrix\|matrix]] that results from $A$ by performing one of the elementary row operations, then the matrix $A$ can be recovered from $B$ by performing the corresponding operation in the following table:

| Operations on $I$<br>that produces $E$ | Operations on $E$<br>that reproduces $I$ |
| -------------------------------------- | ---------------------------------------- |
| Multiply row $i$ by $c\neq 0$          | Multiply row $i$ by $1 / c$              |
| Interchange rows $i$ and $j$           | Interchange rows $i$ and $j$             |
| Add $c$ times row $i$ to row $j$       | Add $-c$ times row $i$ to row $j$        |
