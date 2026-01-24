---
publish: true
created: 2025-10-14T04:15:27.046+07:00
modified: 2025-10-14T04:15:27.046+07:00
published: 2025-10-14T04:15:27.046+07:00
tags:
  - category/exercise
cssclasses: ""
creation-time: 2025-03-28 18:57
status: baby
parent:
  - "[[Time Series Analysis With Applications in R]]"
---


![[assets/Pasted image 20250327221623.png]]

---

## (a) Display and Interpret Time Series Plot

Karena data file "SP" tidak tersedia secara publik, akan disimulasikan data SP sebagai berikut:

```R
set.seed(123)
t <- 1:168
SP <- 100 * exp(0.015 * t) * (1 + 0.1 * rnorm(168))
plot(SP, type="l", xlab="Time (Q1 1936 - Q4 1977)", ylab="S&P Index", main="S&P Index")
```

Output:

![[assets/Pasted image 20250327221758.png]]

Interpretasi:
- Trend naik (perkembangan ekonomi).
- Variansi yang meningkat.
- Data nonstasioner

## (b) Log Transform and Plot

Data akan ditransformasikan secara logaritmik menggunakan kode berikut (melanjuti kode sebelumnya).

```R
log_SP <- log(SP)
plot(log_SP, type="l", xlab="Time", ylab="Log(S&P Index)", main="Log S&P Index")
```

Output:

![[assets/Pasted image 20250327222047.png]]

Efeknya adalah trend menjadi lebih linear dan variansi menjadi lebih stabil.

## (c) Compare Fractional Changes and Log Differences

`SP` dan `log_SP` akan dibandingkan dengan kode berikut:

```R
rel_change <- diff(SP) / SP[-length(SP)]  # (Y_t - Y_{t-1}) / Y_{t-1}
log_diff <- diff(log(SP))                # ∇log(Y_t)
plot(rel_change, log_diff, xlab="Relative Change", ylab="Log Difference", main="Comparison")
abline(0, 1, col="red")

small_idx <- which(abs(rel_change) < 0.2)
large_idx <- which(abs(rel_change) >= 0.2)
cat("Small changes (mean):", mean(rel_change[small_idx] - log_diff[small_idx]), "\n")
cat("Large changes (mean):", mean(rel_change[large_idx] - log_diff[large_idx]), "\n")
```

Output:

![[assets/Pasted image 20250327222301.png]]

Untuk data dengan nilai yang kecil, perbedaan juga untuk kecil.

Untuk data dengan nilai yang lebih besar, log difference meng-underestimate nilai positif, dan meng-overestimate nilai negatif, karena $\log(1 + x) \approx x$.
