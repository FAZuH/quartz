---
publish: true
aliases:
  - De Morgan's Laws for Set Complements
created: 2026-03-25T15:22:40.646+07:00
modified: 2026-03-25T15:22:40.646+07:00
published: 2026-03-25T15:22:40.646+07:00
tags:
  - 
creation-time: 2025-10-03 01:43
status: complete
parent:
  - "[[sets]]"
---

## Theorem

Let $A,B$ be any [[def-set_202510022014|set]]

Then
$$
\begin{align}
(A\cap B)^C=A^C\cup B^C \\
(A\cup B)^C=A^C\cap B^C
\end{align}
$$

## Proof

### First law

> $(A \cap B)^C = A^C \cup B^C$

Prove $x \in (A \cap B)^C \iff x \in A^C \cup B^C$

($\Rightarrow$) Assume $x \in (A \cap B)^C$

- Then $x \notin A \cap B$
- So $\neg(x \in A \land x \in B)$
- By logic: $\neg(x \in A) \lor \neg(x \in B)$
- Thus $x \notin A$ or $x \notin B$
- Therefore $x \in A^C$ or $x \in B^C$
- So $x \in A^C \cup B^C$

($\Leftarrow$) Assume $x \in A^C \cup B^C$

- Then $x \in A^C$ or $x \in B^C$
- So $x \notin A$ or $x \notin B$
- Thus $\neg(x \in A \land x \in B)$
- Therefore $x \notin A \cap B$
- So $x \in (A \cap B)^C$

### Second law

> $(A \cup B)^C = A^C \cap B^C$

Prove $x \in (A \cup B)^C \iff x \in A^C \cap B^C$

($\Rightarrow$) Assume $x \in (A \cup B)^C$

- Then $x \notin A \cup B$
- So $\neg(x \in A \lor x \in B)$
- By logic: $\neg(x \in A) \land \neg(x \in B)$
- Thus $x \notin A$ and $x \notin B$
- Therefore $x \in A^C$ and $x \in B^C$
- So $x \in A^C \cap B^C$

($\Leftarrow$) Assume $x \in A^C \cap B^C$

- Then $x \in A^C$ and $x \in B^C$
- So $x \notin A$ and $x \notin B$
- Thus $\neg(x \in A \lor x \in B)$
- Therefore $x \notin A \cup B$
- So $x \in (A \cup B)^C$
