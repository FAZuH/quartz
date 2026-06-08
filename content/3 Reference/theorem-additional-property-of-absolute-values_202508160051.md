---
publish: true
aliases:
  - Additional Property of Absolute Values
created: 2026-04-09T23:07:39.637+07:00
modified: 2026-04-09T23:07:39.638+07:00
published: 2026-04-09T23:07:39.638+07:00
creation-time: 2025-08-16 00:51
status: in progress
tag:
parent: "[[Introduction to Real Analysis]]"
---

## Theorem

$\forall a,b,c\in\mathbb R, c \geq 0:$

1. $|ab| = |a||b|$
2. $|a|^2 = a^2$
3. $|a|\leq c \iff -c\leq a \leq c$
4. $-|a|\leq a \leq |a|$

## Proof

### (a)

Tinjau semua kasus yang mungkin dari $a$ dan $b$:

- Jika $a = 0$ atau $b = 0$ maka $ab = 0$.
  Sehingga $|ab| = |0| = 0$.
  Selanjutnya, karena $|a| = 0$ atau $|b| = 0$, maka $|a||b| = 0$.
  Hal ini menunjukkan bahwa $|ab| = |a||b| = 0$.

- Jika $a > 0$ dan $b> 0$
  1. Karena $a > 0$ maka $|a| = a$
  2. Karena $b > 0$ maka $|b| = b$
  3. Dari $(1)$ dan $(2)$, diperoleh $|a| |b| = (a)(b) = ab$
  - Karena $a > 0$ dan $b > 0$ maka berdasarkan [[2.1 The Algebraic and Order Properties of R#2.1.5 Definition The order properties of R|2.1.5 (a)]] $ab\in\mathbb P$. Sehingga,

$\begin{align*} |ab| &= ab &&\qquad \text{Definisi 2.2.1}\\ &= |a||b| &&\qquad \text{Persamaan }(3) \end{align*}$

- Jika $a > 0$ dan $b < 0$
  1. Karena $a > 0$ maka $|a| = a$
  2. Karena $b < 0$ maka $|b| = -b$
  3. Dari $(1)$ dan $(2)$, diperoleh $|a||b| = (a)(-b) = -ab$
  - Karena $a > 0$ dan $b < 0$ maka berdasarkan [[2.1 The Algebraic and Order Properties of R#2.1.11 Corollary From 2.1.10|2.1.11]] $ab < 0$. Sehingga,

$\begin{align*}|ab| &= -ab &&\qquad \text{Definisi 2.2.1}\\ &= |a||b| &&\qquad \text{Persamaan }(3)\end{align*}$

- Jika $a < 0$ dan $b > 0$
  1. Karena $a < 0$ maka $|a| = -a$
  2. Karena $b > 0$ maka $|b| = b$
  3. Dari $(1)$ dan $(2)$, diperoleh $|a||b| = (-a)(b) = -ab$
  - Karena $a < 0$ dan $b > 0$ maka berdasarkan [[2.1 The Algebraic and Order Properties of R#2.1.11 Corollary From 2.1.10|2.1.11]] $ab<0$. Sehingga,

$\begin{align*}|ab| &= -ab &&\qquad \text{Definisi 2.2.1}\\ &= |a||b| &&\qquad \text{Persamaan }(3)\end{align*}$

- Jika $a<0$ dan $b < 0$
  1. Karena $a < 0$ maka $|a| = -a$
  2. Karena $b < 0$ maka $|b| = -b$
  3. Dari $(1)$ dan $(2)$, diperoleh $|a||b| = (-a)(-b) = ab$
  - Karena $a< 0$ dan $b < 0$ maka berdasarkan [[2.1 The Algebraic and Order Properties of R#2.1.10 Theorem Inference from multiplication and inequality|2.1.10]] $ab > 0$. Sehingga,

$\begin{align*}|ab| &= ab &&\qquad \text{Definisi 2.2.1}\\ &= |a||b| &&\qquad \text{Persamaan }(3)\end{align*}$

Semua kasus menjamin bahwa hanya terdapat satu kemungkinan yaitu

- $|ab| = |a||b|$
  $\therefore \forall a,b\in\mathbb R \ni |ab| = |a||b|$

### (b)

Ambil sembarang $a \in\mathbb R$. Akan dibuktikan $|a|^2 = a^2$, atau secara ekuivalen, $|a||a| = a\cdot a$

Tinjau semua kasus yang mungkin dari $a$ berdasarkan **definisi trikotomi**.

- Jika $-a\in\mathbb P$, berdasarkan [[2.2 Absolute Value and the Real Line#2.2.1 Definition Absolute value|2.2.1 Definition Absolute value]], $|a| = -a$

$\begin{align*}|a||a|  &= (-a)(-a)\\        &= a \cdot a\end{align*}$

- Jika $a = 0$, berdasarkan [[2.2 Absolute Value and the Real Line#2.2.1 Definition Absolute value|2.2.1 Definition Absolute value]], $|a| = 0$

$\begin{align*}|a||a|  &= 0 \cdot 0\\        &= a \cdot a\end{align*}$

- Jika $a \in\mathbb P$, berdasarkan [[2.2 Absolute Value and the Real Line#2.2.1 Definition Absolute value|2.2.1 Definition Absolute value]], $|a| = a$

$\begin{align*}|a||a|  &= a \cdot a\end{align*}$

Semua kasus menjamin bahwa hanya terdapat satu kemungkinan yaitu

- $|a||a| = a\cdot a$, atau secara equivalen, $|a|^2 = a^2$

$\therefore \forall a \in\mathbb R \ni |a|^2 = a^2$

> [!NOTE]
>
> Dapat digunakan bukti dari [[#(a)]], yang membuktikan $\forall a,b\in\mathbb R \ni |ab| = |a||b|$.
>
> Dengan $a = b$ maka:
>
> $\begin{align*} |a|^2 &= |a||a|\\ &= |aa| &&\qquad (a)\\ &= |a^2|\\ &= a^2 &&\qquad\text{Berdasarkan }a^2>0\text{ dan definisi }2.2.1\\\end{align*}$

### (c)

Ambil sembarang $a,c\in\mathbb R$. Akan dibuktikan $|a| \geq c$ jika dan hanya jika $-c\leq a \leq c$.

Tinjau semua kasus yang mungkin dari $a$ berdasarkan **definisi trikotomi**. Pembuktian akan dilakukan 2 arah.

---

Misalkan $|a| \leq c$. Akan dibuktikan $-c\leq a \leq c$.

- Jika $a\leq 0$, berdasarkan 2.2.1, $-a=|a|\leq c \implies a\geq -c$
- Jika $a \geq 0$, berdasarkan 2.2.1, $a = |a| \leq c\implies a\leq c$

Dengan menggabungkan pertidaksamaan $a\geq -c$ dan $a \leq c$ diperoleh $-c\leq a \leq c$.

Terbukti $\forall a,c\in\mathbb R$ dengan $|a|\leq c$ maka $-c\leq a\leq c$.

---

Misalkan $-c\leq a \leq c$. Akan dibuktikan $|a|\leq c$.

- Jika $a<0 (-a\in\mathbb P)$, berdasarkan [2.2.1](https://www.notion.so/Week-2-195a55f037f2801a9944f2bdac4df950?pvs=21), $|a| = -a$. Sehingga,

$\begin{align*} |a| &= -a &&\qquad \text{Definisi 2.2.1}\\ &\leq c &&\qquad -c\leq a\leq c \end{align*}$

- Jika $a = 0$, berdasarkan 2.2.1, $|a| = 0$. Sehingga,

$\begin{align*}|a| &= 0 &&\qquad \text{Definisi 2.2.1}\\ &\leq c &&\qquad -c\leq a\leq c, a = 0\end{align*}$

- Jika $a>0 (-a\in\mathbb P)$, berdasarkan [2.2.1](https://www.notion.so/Week-2-195a55f037f2801a9944f2bdac4df950?pvs=21), $|a| = a$. Sehingga,

$\begin{align*} |a| &= a &&\qquad \text{Definisi 2.2.1}\\ &\leq c &&\qquad -c\leq a\leq c \end{align*}$

Terbukti $\forall a,c\in\mathbb R$ dengan $-c\leq a \leq c$ maka $|a|\leq c$.

> [!NOTE]
> Tunjukkan, dengan semua kemungkinan $a$ berdasarkan trikotomi, $|a|\leq c$ berlaku dengan “memanfaatkan” $-c\leq a\leq c$.
>
> Intinya, peroleh $|a| \leq c$ dari definisi $|a|$ (2.2.1).

---

$\therefore\forall a,c\in\mathbb R, -c\leq a \leq c \iff|a|\leq c$.

### (d)

Ambil sembarang $a,c\in\mathbb R$. Untuk membuktikan $-|a|\leq a\leq |a|$, gunakan $c = |a|$ pada bukti (c).
