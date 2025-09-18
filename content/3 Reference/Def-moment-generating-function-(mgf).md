---
{"publish":true,"aliases":["Moment Generating Function (mgf)","Moment Generating Function (mgf)"],"created":"2025-09-13T18:58:57.526+07:00","modified":"2025-09-13T01:05:23.000+07:00","published":"2025-09-13T01:05:23.000+07:00","cssclasses":"","creation-time":"2025-07-15 06:54","status":"baby","tag":null,"parent":"[[Introduction to Mathematical Statistics]]"}
---


## Definition

Let $X$ : Random variable

If
$$
\exists h>0\ni E(e^{tX}) <\infty,\; \forall t\in(-h,h)
$$

Then we say $M_{X}(t)=E(e^{tX})$ is the **moment generating function** (mgf) of $X$

## Remark
Another way of defining mgf in terms of [[3 Reference/2.2 Absolute Value and the Real Line#2.2.7 Definition Neighborhood\|neighborhood]] is given below

> Let $X$ : Random variable
> 
> If $E(e^{tX})$ exists and is finite in some neighborhood of $t=0$
> 
> Then we say $M_{X}(t)=E(e^{tX})$ is the **moment generating function** (mgf) of $X$

Most important property of mgf is that it ==uniquely identify distributions==, as shown in the following theorem:

## Related theorems
- [[3 Reference/mathstat1.9#Theorem 1.9.2 Uniqueness of mgf\|Uniqueness of MGF]]
