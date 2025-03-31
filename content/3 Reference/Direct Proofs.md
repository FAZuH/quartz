---
{"creation-time":"2025-03-29 16:06","status":"baby","tag":null,"parent":["[[how to write proofs]]"],"source":"https://zimmer.csufresno.edu/~larryc/proofs/proofs.direct.html","publish":true,"PassFrontmatter":true}
---


## Structure: If p, then q

A direct proof should be thought of as a flow of implications, beginning with $p$ and ending with $q$.

$$
p \Rightarrow \dots \Rightarrow q
$$

> [!TIP] Always try direct proof first.
> 
> Unless you have a good reason not to.

## Some examples

The following examples demonstrates proofing using direct proofs.

Try identifying which one is $p$ and which one is $q$.

### Divisibility is transitive

Definition: Let $a, b \in \mathbb N$. If there exists $k \in \mathbb N$ such that $b = ak$, then we say that $a$ **divides** $b$

Theorem: If $a$ divides $b$, and $b$ divides $c$, then $a$ divides $c$.

Proof:

*Let $a,b,c \in \mathbb N$. Suppose that $a$ divides $b$ and $b$ divides $c$*.

By definition of divisibility, there exists $k_1, k_2 \in \mathbb N$ such that 
$$
b = ak_{1} \quad \text{and} \quad c = bk_{2}
$$

Consequently,
$$
c = bk_{2} = ak_{1}k_{2}
$$

Let $k=k_{1}k_{2}$. Then $k \in \mathbb N$ (why?) and $c=ak$.

**$\therefore$ By the definition of divisibility, $a$ divides $c$**.

---

Here, we have
- $p$ as "$a, b, c \in \mathbb N$ and $a$ divides $b$ and $b$ divides $c$", and 
- $q$ as "$a$ divides $c$".

### Root of polynomials

Definition: A number $r$ is called a **root** of the the polynomial $p(x)$, if $p(r) = 0$.

Theorem: If both $r_{1}\neq r_{2}$ are roots of the polynomial $p(x) = x^2 + bx + c$, then $r_{1} + r_{2} = b$ and $r_{1}r_{2} = c$.

Proof:

It follows from our assumptions that $p(x)$ will factor
$$
p(x) = (x-r_{1})(x-r_{2})
$$

If we expand the right hand side we get

$$
p(x) = x^2 - (r_{1} + r_{2})x + r_{1} r_{2}
$$

Compare the coefficients above with those of $p(x) = x^2 + bx + c$ to get $r_{1} + r_{2} = b$ and $r_{1}r_{2} = c$

## Exerise solutions (from source)

Prove each of the following:

### Number 1

If $a$ divides $b$ and $a$ divides $c$, then $a$ divides $b + c$.

**We need to prove that there exists $k\in\mathbb N$ such that $b + c = ak$**.

Proof:

*Let $a, b, c \in \mathbb R$*.

Suppose that *$a$ divides $b$ and $a$ divides $c$*.

By definition of divisibility, there exists $k_{1}, k_{2} \in \mathbb N$ such that $b = a k_{1}$ and $c = a k_{2}$.

Suppose that $k = k_{1} + k_{2}$. Then $k \in \mathbb N$.

Adding $b$ and $c$ we obtain:
$$
\begin{align}
b + c &= ak_{1} + ak_{2} \\
&= a(k_{1} + k_{2}) \\
&= ak
\end{align}
$$

**Therefore, by definition of divisility we find that $a$ divides $b + c$**.

### Number 2

If $a$ is an integer, divisible by $4$, then $a$ is the difference of two perfect squares.
