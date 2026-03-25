---
publish: true
aliases:
  - Inverse Matrix
  - Inverse
  - Singular
  - Left Inverse
  - Right Inverse
created: 2026-03-25T15:22:40.644+07:00
modified: 2026-03-25T15:22:40.644+07:00
published: 2026-03-25T15:22:40.644+07:00
tags:
  - 
creation-time: 2025-09-24 12:25
status: complete
parent:
  - "[[linear-algebra|linear algebra]]"
  - "[[matrices]]"
---

## Definition

Let

- $A,B$ : Square [[Def-matrix|matrix]]
- $I$ : [[def-identity-matrix_202509241204|Identity matrix]]

If $B$ is such that $AB=BA=I$

Then

- $A$ is called **invertible** (or **nonsingular**)
- $B$ is called **inverse** of $A$

If no such matrix $B$ is found, then $A$ is said to be **singular**

If $BA=I$, then we say $B$ is **left inverse** of $A$

If $AB=I$, then we say  is **right inverse** of $A$

## Remark

If $A$ is an invertible and $B$ is inverse of $A$, then it is also true that $B$ is invertible and $A$ is inverse of $B$. Thus, when $AB=BA=I$, then we say $A$ and $B$ are **inverses of one another**.
