---
{"publish":true,"aliases":["Supremum and Infimum"],"created":"2025-09-13T18:59:05.049+07:00","modified":"2025-09-13T01:10:47.000+07:00","published":"2025-09-13T01:10:47.000+07:00","cssclasses":"","creation-time":"2025-08-16 01:09","status":"baby","tag":null,"parent":"[[Introduction to Real Analysis]]"}
---


## Definition

Let $S \subseteq \mathbb R, S \leq \emptyset$

1. If $S$ is bounded above, then a number $u$ is said to be a **supremum** (or a **least upper bound**) of $S$ if it satisfies the conditions: ^a
	1. $u$ is an [[3 Reference/def-bounded-set_202508160108\|upper bound]] of $S$, and ^b
	2. If $v$ is any upper bound of $S$, then $u\leq v$. ^c

2. If $S$ is bounded below, then a number $w$ is said to be an **infimum** (or a **greatest lower bound**) of $S$ if it satsifies the conditions:
	1. $w$ is a lower bound of $S$, and
	2. If $t$ is any lower bound of $S$, then $t \leq w$.
	
## Preposition: Uniqueness of Supremum

> For all $S\subseteq \mathbb R$, $\sup S$ is unique.

In other words,

If $u_1 = \sup S$ and $u_2 = \sup S$, it must be that $u_1 = u_2$.

> [!IMPORTANT]
> 
> - If $u'$ is an arbitrary upper bound of $S$, then $\sup S \leq u'$.
> - There are 4 possibilities for a nonempty subset $S$ of $\mathbb R$: it can
> 	1. Have both a supremum and an infimum.
> 	2. Have a supremum but no infimum.
> 	3. Have an infimum but no supremum.
> 	4. Have neither a supremum nor an infimum.
> - In order to show that $u = \sup S$ for some nonemtpy subset $S$ of $\mathbb R$, we need to show **[[3 Reference/def-supremum-and-infimum_202508160109#^b\|(1)]] and [[3 Reference/def-supremum-and-infimum_202508160109#^c\|(2)]] of [[3 Reference/def-supremum-and-infimum_202508160109#^a\|2.3.2 (1)]]** holds.
>   This can also be done using [[3 Reference/def-supremum-and-infimum_202508160109#2.3.3 Lemma]] or [[3 Reference/def-supremum-and-infimum_202508160109#2.3.4 Lemma]].
> - The following statements about an upper bound $u$ of a set $S$ are equivalent:
> 	1. If $v$ is any upper bound of $S$, then $u\leq v$.
> 	2. If $z < u$, then $z$ is not an upper bound of $S$.
> 	3. If $z< u$, then there exists $s_z \in S$ such that $z < s_z$.
> 	4. If $\varepsilon > 0$, then there exists $s_\varepsilon \in S$ such taht $u - \varepsilon < s_\varepsilon$.

## Lemma: Formal definition of supremum and infimum
> Let $S$ be a nonempty subset of $\mathbb R$. $u = \sup S$, if and only if:
> 1. $s \leq u, \forall s \in S$
> 2. If $v < u$ then there exists an $s' \in S$ such that $v < s'$

Point 2 is saying:

If $v$ not an upperbound of $S$
then there exists an element in $S$
that is bigger than $v$

> [!NOTE]
> This is the negation of [[3 Reference/def-supremum-and-infimum_202508160109#^c\|(2) of 2.3.2 (1)]]. 
> Here $v$ is under $u$, not above.

## Lemma: Limits in supremum and  infimum


> Let $S$ be a nonempty subset of $\mathbb R$. $u = \sup S$, if and only if:
> 1. $s \leq u, \forall s \in S$
> 2. $\forall \varepsilon > 0$, there exists an $s_\varepsilon \in S$ such that $u - \varepsilon < s_\varepsilon$

This lemma is **useful for working with limits**.

Point 2 is saying:

If $u$ is a supremum of $S$
then there exists an element in $S$
that is bigger when $u$ is subtracted with any positive number