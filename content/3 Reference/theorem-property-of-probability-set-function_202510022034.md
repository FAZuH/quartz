---
publish: true
aliases:
  - Property of Probability Set Function
created: 2026-03-25T15:22:40.642+07:00
modified: 2026-03-25T15:22:40.642+07:00
published: 2026-03-25T15:22:40.642+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-10-02 20:34
status: complete
parent:
  - "[[Introduction to Mathematical Statistics]]"
---


## Theorem

Let $\mathcal{B}$ : [[3 Reference/def-set_202510022014\|Set]] of [[3 Reference/Def-events\|events]]

Then
1. $P(A)=1-P(A^C),\quad\forall A\in\mathcal B$
2. $P(\phi)=0$
3. $A\subset B\implies P(A)\leq P(B)$
4. $0\leq P(A)\leq 1, \quad \forall A\in\mathcal B$
5. $A,B\subset\mathcal C \implies P(A\cup B)=P(A)+P(B)-P(A\cup B)$

## Proof

Let 
- $\mathcal{C}$ : [[3 Reference/Def-sample-space\|Sample space]]
- $\mathcal{B}$ : Set of events

> 1. $P(A)=1-P(A^C),\quad\forall A\in \mathcal{B}$

Let $A$ be any [[3 Reference/def-subset_202507240733\|subset]] of $\mathcal{B}$

We have $\mathcal{C}=A\cup A^C$ and $A\cap A^C=\phi$. Thus from axiom 2 and 3 of [[3 Reference/Def-probability-set-function\|probability set function]], it follows that
$$
P(\mathcal{C}) = P(A\cup A^C) = P(A) + P(A^C) = 1
$$

> 2. $P(\phi)=0$

Based on point 1, we have that $P(A)=1-P(A^C)$.

Choose $A=\phi$. Because $\phi^C=\mathcal{C}$, we have
$$
\begin{align}
P(\phi) & = 1 - P(\phi^C) \\
 & = 1 - P(\mathcal{C}) \\
 & = 1 - 1 \\
 & = 0
\end{align}
$$

> 3. $A\subset \mathcal{B}\implies P(A)\leq P(\mathcal{B})$

Let $B$ be any subset of $\mathcal{B}$ and let $A$ be any subset of $A$.

Now $B=A\cup(A^C\cap B)$ and $A\cap (A^C\cap B)=\phi$.

Hence from 3rd axiom of probability set function,
$$
P(B) = P(A) + P(A^C\cap B)
$$

From 1st axiom of probability set function, we have $P(A^C\cap B)\geq 0$. 

Now we have
$$
\begin{align}
     && P(B)         & = P(A) + P(A^C\cap B) \\
\iff && P(A^C\cap B) & = P(B) - P(A) \geq 0 \\
\iff && P(B)         & \geq P(A)
\end{align}
$$

> 4. $0\leq P(A)\leq 1, \quad\forall A\subset \mathcal{B}$

Since $\phi \subset A\subset \mathcal{C}$, by point 3 we have that
$$
P(\phi)\leq P(A)\leq P(\mathcal{C}) \implies 0\leq P(A)\leq 1
$$

> 5. $A,B\subset\mathcal C \implies P(A\cup B)=P(A)+P(B)-P(A\cup B)$

Let $A$ and $B$ be any subset of $\mathcal{C}$. 

We have
$$
\begin{align}
A\cup B & = U\cap(A\cup B) & \text{Identity law} \\
 & = (A\cup A^C)\cap(A\cup B) & \text{Complement law} \\
 & = A\cup(A^C\cap B) & \text{Distributive law} \\ \\

B & = U\cap B & \text{Identity law} \\
 & = (A\cup A^C)\cap B & \text{Complement law} \\
 & = (A\cap B)\cup(A^C\cap B) & \text{Distributive law}
\end{align}
$$
[^1][^2][^3]

![[assets/image-34.png|538x207]]

Thus, from 3rd axiom of probability set function,
$$ P(A\cup B)=P(A)+P(A^C\cap B) $$
and
$$
P(B) = P(A\cap B)+P(A^C\cap B)
$$

Now we have
$$
\begin{align}
P(A\cup B) - P(A) & = P(A^C\cap B) \\ \\
\iff P(B) & = P(A\cap B) + P(A\cup B) - P(A) \\
\iff P(A\cup B) & = P(A) + P(B) - P(A\cap B)
\end{align}
$$
which completes the proof.

[^1]: [[3 Reference/theorem-identity-laws-of-sets_202510030212\|Identity Laws of Sets]]

[^2]: [[3 Reference/theorem-complement-laws-of-sets_202510030212\|Complement Laws of Sets]]

[^3]: [[3 Reference/theorem-distributive-laws-of-sets_202510030129\|Distributive Laws of Sets]]
