---
publish: true
aliases:
  - Hospital Emergency Room M/M/1
created: 2026-06-05T03:12:09.433+07:00
modified: 2026-06-05T03:12:09.433+07:00
published: 2026-06-05T03:12:09.433+07:00
creation-time: 2026-06-05 03:12
status: in progress
tags:
parent:
  - "[[stochastic-model]]"
---

## Example

Di unit gawat darurat sebuah rumah sakit, kasus gawat darurat datang mengikuti proses Poisson dengan rata-rata **satu kasus setiap 5 jam**. Setiap pasien harus menjalani pemeriksaan medis dan diagnosis yang memakan waktu **15 menit**. Asumsikan sistem dalam steady state.

_Sumber: Ujian 2 Modstok 1 2024/2025 No. 5_

> [!NOTE]- Solution
> Ini adalah sistem [[m-m-1-queueing-system_202605080520|M/M/1]]:
>
> - $\lambda = \frac{1}{5} = 0.2$ pasien/jam
> - $\mu = 4$ pasien/jam (1 pasien per 15 menit)
> - $\rho = \lambda/\mu = 0.2/4 = 0.05$
>
> **(a) Rata-rata jumlah pasien yang belum dioperasi ($L$):**
>
> $L = \frac{\rho}{1-\rho} = \frac{0.05}{0.95} = \frac{1}{19} \approx 0.0526 \text{ pasien}$
>
> **(b) Rata-rata waktu tunggu hingga masuk ruang operasi ($W$):**
>
> $W = \frac{1}{\mu - \lambda} = \frac{1}{4 - 0.2} = \frac{1}{3.8} = \frac{5}{19} \approx 0.263 \text{ jam} \approx 15.79 \text{ menit}$
>
> **(c) Rata-rata waktu tunggu hingga diperiksa ($W_Q$):**
>
> $W_Q = \frac{\rho}{\mu - \lambda} = \frac{0.05}{3.8} = \frac{1}{76} \approx 0.0132 \text{ jam} \approx 47.4 \text{ detik}$
>
> **(d) Rata-rata jumlah pasien yang menunggu untuk diperiksa ($L_Q$):**
>
> $L_Q = \frac{\rho^2}{1-\rho} = \frac{0.0025}{0.95} = \frac{1}{380} \approx 0.00263 \text{ pasien}$
>
> **Verifikasi Little:** $L = \lambda W = 0.2 \times 0.263 = 0.0526$ ✓, $L_Q = \lambda W_Q = 0.2 \times 0.0132 = 0.00264$ ✓

## Related

- [[m-m-1-queueing-system_202605080520|M/M/1 Queueing System]]
- [[queueing-formula-l-=-λw_202605080520|Queueing Formula L = λW]]
