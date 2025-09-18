---
{"publish":true,"aliases":["Triangle Inequality"],"created":"2025-09-13T18:59:07.761+07:00","modified":"2025-09-13T01:10:47.000+07:00","published":"2025-09-13T01:10:47.000+07:00","cssclasses":"","creation-time":"2025-08-16 00:51","status":"baby","tag":null,"parent":"[[Introduction to Real Analysis]]"}
---


## Theorem

$\forall a,b\in\mathbb R:$
$$ |a+b|\leq |a| + |b| $$

## Corollary 1

There are multiple variations of [[3 Reference/theorem-triangle-inequality_202508160051\|Triangle Inequality]], which is:

$\forall a,b\in\mathbb R:$
1. $||a|-|b|| \leq |a-b|$
2. $|a-b|\leq|a|+|b|$

## Corollary 2

$$ |a_1+\dots+a_n|\leq |a_1|+\dots+|a_n|,\quad \forall a_{1},\dots,a_{n}\in \mathbb{R} $$

## Proof

### Theorem

Ambil sembarang $a,b\in\mathbb R$. Akan dibuktikan $|a+b|\leq |a|+|b|$.

Dari 2.2.2 (d), diperoleh $-|a|\leq a\leq|a|$ dan $-|b|\leq b\leq |b|$.

Dengan menjumlahkan kedua pertidaksamaan tersebut, diperoleh:

$$ \begin{align*} -|a| &\leq a &&\leq |a| \\ -|b| &\leq b &&\leq |b| \\ \hline -(|a| + |b|) &\leq a + b &&\leq |a| + |b| \end{align*} $$

Dengan 2.2.2 (c), berikutnya diperoleh $|a+b|\leq|a| + |b|$.

$\therefore\forall a,b\in\mathbb R\ni|a+b|\leq|a| + |b|$

### Corollary 1

![[assets/Drawing 2025-03-03 03.49.13.excalidraw]]