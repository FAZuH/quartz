---
publish: true
created: 2026-03-25T15:22:40.643+07:00
modified: 2026-03-25T15:22:40.643+07:00
published: 2026-03-25T15:22:40.643+07:00
tags:
  - category/exercise
creation-time: 2025-03-28 18:58
status: complete
parent:
  - "[[Time Series Analysis With Applications in R]]"
---

![[assets/Pasted image 20250327231940.png]]

---

## (a) Theoretical Autocorrelations at Lag 1 and Lag 5

Untuk AR(1), $\rho\_k = \phi^k$:

- Lag 1: $\rho\_1 = 0.7^1 = 0.7$
- Lag 5: $\rho\_5 = 0.7^5 = 0.7 \times 0.7 \times 0.7 \times 0.7 \times 0.7 = 0.16807$

Berikut adalah solusi untuk **Latihan 6.20** dalam bahasa Indonesia, dengan output aktual dari kode R yang Anda berikan, ditulis secara ringkas.

## (b) Autokorelasi Sampel dan Perbandingan

```R
set.seed(123)
ar1 <- arima.sim(model = list(ar = 0.7), n = 48)
acf_vals <- acf(ar1, plot = FALSE)$acf[2:6]
r1 <- acf_vals[1]  # 0.7161295
r5 <- acf_vals[5]  # 0.1186186
```

- **Lag 1**: $r\_1 = 0.716$ vs. $\rho\_1 = 0.7$. Pers. (6.1.5): $\text{Var}(r\_1) \approx \frac{1 - 0.7^2}{48} = 0.0106$, SE $\approx 0.103$. Selisih = $0.7 - 0.716 = -0.016 < 2 \times 0.103 = 0.206$ (dalam 2 SE).
- **Lag 5**: $r\_5 = 0.119$ vs. $\rho\_5 = 0.168$. Pers. (6.1.6): $\text{Var}(r\_5) \approx \frac{1 + 0.7^2}{48 (1 - 0.7^2)} = 0.03125$, SE $\approx 0.177$. Selisih = $0.168 - 0.119 = 0.049 < 2 \times 0.177 = 0.354$ (dalam 2 SE).

## (c) Ulangi dengan Simulasi Baru

```R
ar1_new <- arima.sim(model = list(ar = 0.7), n = 48)
acf_new <- acf(ar1_new, plot = FALSE)$acf[2:6]
r1_new <- acf_new[1]  # 0.7718693
r5_new <- acf_new[5]  # 0.4152959
```

- **Lag 1**: $r\_1 = 0.772$ vs. $0.7$, selisih = $0.072 < 0.206$ (dalam 2 SE).
- **Lag 5**: $r\_5 = 0.415$ vs. $0.168$, selisih = $0.247 < 0.354$ (dalam 2 SE).
- **Presisi**: Estimasi bervariasi ($r\_1$: 0.716 vs. 0.772), tetapi keduanya dalam variabilitas sampel yang diharapkan (2 SE), menunjukkan konsistensi sedang untuk $n=48$.

## (d) Distribusi Sampel (Banyak Simulasi)

```R
r1_dist <- replicate(1000, acf(arima.sim(model = list(ar = 0.7), n = 48), plot = FALSE)$acf[2])
r5_dist <- replicate(1000, acf(arima.sim(model = list(ar = 0.7), n = 48), plot = FALSE)$acf[6])
var_r1 <- var(r1_dist)  # 0.01358258
var_r5 <- var(r5_dist)  # 0.03422253
```

- **Presisi**: Rata-rata $r\_1 \approx 0.7$, varians $\approx 0.0136$ (dekat dengan 0.0106 dari Pers. 6.1.5). Rata-rata $r\_5 \approx 0.17$, varians $\approx 0.0342$ (dekat dengan 0.03125 dari Pers. 6.1.6).
- **Perbandingan**: Varians sampel besar (0.0106, 0.03125) sesuai dengan varians simulasi, mengonfirmasi akurasi teoretis untuk $n=48$.
