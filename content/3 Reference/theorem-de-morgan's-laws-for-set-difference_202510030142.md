---
{"publish":true,"aliases":["De Morgan's Laws for Set Difference"],"created":"2025-10-03T01:42:56.102+07:00","modified":"2025-10-03T01:47:05.410+07:00","published":"2025-10-03T01:47:05.410+07:00","tags":[null],"cssclasses":"","creation-time":"2025-10-03 01:42","status":"adult","parent":["[[sets]]"]}
---


## Theorem

Let $A,B,C$ be any [[3 Reference/def-set_202510022014\|set]]

Then
$$
\begin{align}
A-(B\cup C) & = (A-B)\cap(A-C) \\
A-(B\cap C) & = (A-B)\cup(A-B)
\end{align}
$$

## Proof

### First law

> $A - (B \cup C) = (A - B) \cap (A - C)$

Prove $x \in A - (B \cup C) \iff x \in (A - B) \cap (A - C)$

($\Rightarrow$) Assume $x \in A - (B \cup C)$

- Then $x \in A$ and $x \notin B \cup C$
- So $x \in A$ and $\neg(x \in B \lor x \in C)$
- Thus $x \in A$ and $x \notin B$ and $x \notin C$
- Therefore $(x \in A \land x \notin B)$ and $(x \in A \land x \notin C)$
- So $x \in A - B$ and $x \in A - C$
- Thus $x \in (A - B) \cap (A - C)$

($\Leftarrow$) Assume $x \in (A - B) \cap (A - C)$

- Then $x \in A - B$ and $x \in A - C$
- So $(x \in A \land x \notin B)$ and $(x \in A \land x \notin C)$
- Thus $x \in A$ and $x \notin B$ and $x \notin C$
- Therefore $x \in A$ and $\neg(x \in B \lor x \in C)$
- So $x \in A$ and $x \notin B \cup C$
- Thus $x \in A - (B \cup C)$

## Second law

> $A - (B \cap C) = (A - B) \cup (A - C)$

Prove $x \in A - (B \cap C) \iff x \in (A - B) \cup (A - C)$

($\Rightarrow$) Assume $x \in A - (B \cap C)$

- Then $x \in A$ and $x \notin B \cap C$
- So $x \in A$ and $\neg(x \in B \land x \in C)$
- Thus $x \in A$ and $(x \notin B \lor x \notin C)$
- Case 1: $x \in A$ and $x \notin B$, so $x \in A - B$
- Case 2: $x \in A$ and $x \notin C$, so $x \in A - C$
- Therefore $x \in (A - B) \cup (A - C)$

($\Leftarrow$) Assume $x \in (A - B) \cup (A - C)$

- Then $x \in A - B$ or $x \in A - C$
- Case 1: $x \in A - B$, so $x \in A$ and $x \notin B$, thus $x \notin B \cap C$
- Case 2: $x \in A - C$, so $x \in A$ and $x \notin C$, thus $x \notin B \cap C$
- In both cases: $x \in A$ and $x \notin B \cap C$
- Therefore $x \in A - (B \cap C)$