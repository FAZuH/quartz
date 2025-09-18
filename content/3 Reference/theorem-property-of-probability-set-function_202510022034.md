---
{"publish":true,"aliases":["Property of Probability Set Function"],"created":"2025-10-02T20:34:41.402+07:00","modified":"2025-10-02T21:00:24.094+07:00","published":"2025-10-02T21:00:24.094+07:00","tags":[null],"cssclasses":"","creation-time":"2025-10-02 20:34","status":"baby","parent":["[[Introduction to Mathematical Statistics]]"]}
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

Hence from axiom 3 of probability set function,
$$
P(B) = P(A) + P(A^C\cap B)
$$

From axiom 1 of probability set function, we have $P(A^C\cap B)\geq 0$. 

Now we have
$$
\begin{align}
     & P(B)         && = P(A) + P(A^C\cap B) \\
\iff & P(A^C\cap B) && = P(B) - P(A) \geq 0 \\
\iff & P(B)         && \geq P(A)
\end{align}
$$

> 4. $0\leq P(A)\leq 1, \quad\forall A\subset \mathcal{B}$

Since $\phi \subset A\subset \mathcal{C}$, by point 3 we have that
$$
P(\phi)\leq P(A)\leq P(\mathcal{C}) \implies 0\leq P(A)\leq 1
$$

> 5. $A,B\in\mathcal C \implies P(A\cup B)=P(A)+P(B)-P(A\cup B)$

