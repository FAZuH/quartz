---
publish: true
aliases:
  - Ujian 2 Modstok 1 — Pembahasan
created: 2026-06-05T04:46:35.038+07:00
modified: 2026-06-05T05:10:58.767+07:00
published: 2026-06-05T05:10:58.767+07:00
creation-time: 2026-06-05 04:46
status: in progress
tags:
parent:
  - "[[uas_202606050137]]"
---

Pembahasan **Ujian 2 Modstok 1** Semester ATA 2024/2025 (Rabu, 23 April 2025).

CPMK: Mengklasifikasikan permasalahan di berbagai bidang terkait, terutama ilmu data, kesehatan, dan industri ke dalam model stokastik (C3).

> [!NOTE]- Q1 — Proses Poisson: Sifat Scaling (20 poin)
> **Soal.** Misalkan $\{N(t) : t \geq 0\}$ adalah suatu proses Poisson dengan rate $\lambda$, dan $c > 0$. Buktikan bahwa $\{N(ct) : t \geq 0\}$ juga merupakan proses Poisson dan tentukan rate/laju dari proses tersebut.
>
> **Jawaban.** Untuk membuktikan $\{N(ct)\}$ adalah proses Poisson, periksa ketiga aksioma:
>
> 1. \*\*$N(c\cdot t) = 0$ saat $t=0$: \*\*$N(c \cdot 0) = N(0) = 0$ ✓
> 2. **Increment bebas:** Karena $\{N(t)\}$ memiliki independent increments, maka untuk setiap $t_1 < t_2 < \ldots$, increment $N(ct_{i+1}) - N(ct_i)$ juga bebas (transformasi linear waktu tidak mengubah sifat kebebasan) ✓
> 3. **Distribusi Poisson:** $N(c(t+s)) - N(ct) \sim \text{Po}(\lambda cs)$ karena $N(t + \Delta) - N(t) \sim \text{Po}(\lambda \Delta)$ untuk $\Delta = cs$ ✓
>
> Jadi $\{N(ct) : t \geq 0\}$ adalah proses Poisson dengan **rate $c\lambda$**.

> [!NOTE]- Q2 — Kelahiran Bayi (20 poin)
> **Soal.** Rata-rata 26.280 kelahiran/tahun. Model sebagai proses Poisson homogen.
>
> Rate per jam: $\lambda = \dfrac{26.280}{365 \times 24} = \dfrac{26.280}{8.760} = 3$ bayi/jam.
>
> **(a)** Peluang antara 1 hingga 3 bayi dalam 2 jam.
>
> $N(2) \sim \text{Po}(6)$.
>
> Diketahui $P(N(t) = k) = \frac{e^{-x} x^k}{k!}$
> sehingga,
>
> $$$\begin{aligned}
> P(1 \leq N(2) \leq 3) &= P(N=1) + P(N=2) + P(N=3) \\[0.3em]
> &= e^{-6}\left(\frac{6^1}{1!} + \frac{6^2}{2!} + \frac{6^3}{3!}\right) \\[0.3em]
> &= e^{-6}(6 + 18 + 36) \\[0.3em]
> &= 60e^{-6} \approx 0{,}1487
> \end{aligned}$$
>
> **(b)** Diketahui 55 bayi lahir dalam 5 hari pertama. Peluang total 65 bayi dalam 1 minggu pertama.
>
> Rate per hari: $72$ bayi/hari.
>
> Misal $N_5$ = kelahiran 5 hari pertama, $N_7$ = kelahiran 7 hari pertama.
> Interval 2 hari sisanya: $N_7 - N_5 \sim \text{Po}(144)$.
>
> $N_7 = 65$ dengan $N_5 = 55$ berarti $N_7 - N_5 = 10$.
>
> $$\begin{aligned}
> P(N_7 = 65 \mid N_5 = 55) &= P(N_7 - N_5 = 10) \quad \text{(independent increments)} \\[0.3em]
> &= \frac{e^{-144} \cdot 144^{10}}{10!} \\[0.3em]
> &\approx 3{,}17 \times 10^{-48}
> \end{aligned}$$
> $$$

> [!NOTE]- Q3 — Mixed Poisson: Supermarket (20 poin)
> **Soal.** Kedatangan pelanggan mengikuti proses Poisson dengan rate $\Lambda \sim \text{Gamma}(\alpha, \beta)$, dengan $\mathbb{E}[\Lambda] = \text{Var}(\Lambda) = 6$.
>
> **Parameter Gamma:** $\mathbb{E}[\Lambda] = \alpha/\beta = 6$, $\text{Var}(\Lambda) = \alpha/\beta^2 = 6$ → $6/\beta = 6$ → $\beta = 1$, $\alpha = 6$.
>
> Jadi $\Lambda \sim \text{Gamma}(6, 1)$ dengan pdf $f(\lambda) = \dfrac{\lambda^5 e^{-\lambda}}{\Gamma(6)}$.
>
> **(a)** $P$ (tidak ada pelanggan dalam 1 jam) = $\mathbb{E}[e^{-\Lambda}]$.
>
> $$$\begin{aligned}
> \mathbb{E}[e^{-\Lambda}] &= \int_0^\infty e^{-\lambda} \cdot \frac{\lambda^5 e^{-\lambda}}{\Gamma(6)} \, d\lambda
> = \int_0^\infty \frac{\lambda^5 e^{-2\lambda}}{\Gamma(6)} \, d\lambda \\[0.5em]
> &= \frac{\Gamma(6)}{\Gamma(6)} \left(\frac{1}{2}\right)^6
> = \left(\frac{1}{2}\right)^6 = \frac{1}{64}
> \end{aligned}$$
>
> (Menggunakan MGF Gamma: $M(-1) = (\beta/(\beta+1))^\alpha = (1/2)^6$.)
>
> **(b)** Diketahui tepat 3 pelanggan datang dalam 1 jam. $\mathbb{E}[\Lambda \mid N=3]$.
>
> Dengan Bayes:
> $$\pi(\lambda \mid N=3) \propto \lambda^{6-1} e^{-\lambda} \cdot e^{-\lambda} \lambda^3 = \lambda^{8} e^{-2\lambda}$$
>
> Jadi $\Lambda \mid N=3 \sim \text{Gamma}(\alpha + 3, \beta + 1) = \text{Gamma}(9, 2)$.
>
> $\mathbb{E}[\Lambda \mid N=3] = \dfrac{9}{2} = 4{,}5$.
> $$$

> [!NOTE]- Q4 — Compound Poisson: Pusat Distribusi (20 poin)
> **Soal.** Truk tiba dengan rate 4/jam. Banyak peti per truk: $P(X=1)=0{,}4$, $P(X=2)=0{,}35$, $P(X=3)=0{,}25$. Berat peti $\sim \text{Exp}(1/15)$ kg.
>
> **Statistik $X$ (banyak peti per truk):**
>
> $$$\begin{aligned}
> \mathbb{E}[X] &= 1(0{,}4) + 2(0{,}35) + 3(0{,}25) = 0{,}4 + 0{,}7 + 0{,}75 = 1{,}85 \\
> \mathbb{E}[X^2] &= 1(0{,}4) + 4(0{,}35) + 9(0{,}25) = 0{,}4 + 1{,}4 + 2{,}25 = 4{,}05 \\
> \text{Var}(X) &= 4{,}05 - 1{,}85^2 = 4{,}05 - 3{,}4225 = 0{,}6275
> \end{aligned}$$
>
> **Statistik $W$ (berat per peti):** $\mathbb{E}[W] = 15$, $\text{Var}(W) = 225$.
>
> **(a)** Total peti dalam 3 jam: $Y = \sum_{i=1}^{N(3)} X_i$ (compound Poisson dengan $t=3$).
>
> $$\begin{aligned}
> \mathbb{E}[Y] &= \mathbb{E}[N(3)] \cdot \mathbb{E}[X] = (4 \cdot 3) \cdot 1{,}85 = 12 \cdot 1{,}85 = 22{,}2 \\
> \text{Var}(Y) &= \mathbb{E}[N(3)] \cdot \mathbb{E}[X^2] = 12 \cdot 4{,}05 = 48{,}6
> \end{aligned}$$
>
> **(b)** Total berat semua peti dalam 3 jam: $Z = \sum_{k=1}^{Y} W_k$.
>
> $$\begin{aligned}
> \mathbb{E}[Z] &= \mathbb{E}[Y] \cdot \mathbb{E}[W] = 22{,}2 \cdot 15 = 333 \\
> \text{Var}(Z) &= \mathbb{E}[Y] \cdot \text{Var}(W) + \text{Var}(Y) \cdot \mathbb{E}[W]^2 \\
> &= 22{,}2(225) + 48{,}6(225) \\
> &= (22{,}2 + 48{,}6) \cdot 225 \\
> &= 70{,}8 \cdot 225 = 15.930
> \end{aligned}$$
>
> **(c)** Diketahui 8 truk dalam 3 jam. Ekspektasi total berat.
>
> $$\begin{aligned}
> \mathbb{E}[Y \mid N=8] &= 8 \cdot \mathbb{E}[X] = 8 \cdot 1{,}85 = 14{,}8 \\
> \mathbb{E}[Z \mid N=8] &= \mathbb{E}[Y \mid N=8] \cdot \mathbb{E}[W] = 14{,}8 \cdot 15 = 222
> \end{aligned}$$
> $$$

> [!NOTE]- Q5 — M/M/1: Unit Gawat Darurat (20 poin)
> **Soal.** Kasus datang rata-rata 1 setiap 5 jam. Pemeriksaan medis 15 menit. Sistem steady state.
>
> Model [[m-m-1-queueing-system_202605080520|M/M/1]]:
>
> - $\lambda = \frac{1}{5} = 0{,}2$ pasien/jam
> - $\mu = 4$ pasien/jam (15 menit per pasien)
> - $\rho = \frac{\lambda}{\mu} = \frac{0{,}2}{4} = 0{,}05 < 1$ ✓
>
> **(a)** Rata-rata jumlah pasien yang belum dioperasi ($L$):
>
> $L = \frac{\rho}{1-\rho} = \frac{0{,}05}{0{,}95} = \frac{1}{19} \approx 0{,}0526 \text{ pasien}$
>
> **(b)** Rata-rata waktu tunggu hingga masuk ruang operasi ($W$):
>
> $W = \frac{1}{\mu - \lambda} = \frac{1}{3{,}8} = \frac{5}{19} \approx 0{,}263 \text{ jam} \approx 15{,}79 \text{ menit}$
>
> **(c)** Rata-rata waktu tunggu hingga diperiksa ($W_Q$):
>
> $W_Q = \frac{\rho}{\mu - \lambda} = \frac{0{,}05}{3{,}8} = \frac{1}{76} \approx 0{,}0132 \text{ jam} \approx 47{,}4 \text{ detik}$
>
> **(d)** Rata-rata jumlah pasien menunggu diperiksa ($L_Q$):
>
> $L_Q = \frac{\rho^2}{1-\rho} = \frac{0{,}0025}{0{,}95} = \frac{1}{380} \approx 0{,}00263 \text{ pasien}$
>
> **Verifikasi Little:** $L = \lambda W = 0{,}2 \times 0{,}263 = 0{,}0526$ ✓, $L_Q = \lambda W_Q = 0{,}2 \times 0{,}0132 = 0{,}00264$ ✓

## Referensi

- [[hospital-emergency-room-m-m-1_202606050312|Hospital Emergency Room M/M/1]] (contoh terpisah untuk Q5)
- [[poisson-process_202604031845|Poisson Process]]
- [[compound-poisson-process_202604031847|Compound Poisson Process]]
- [[mixed-poisson-process_202604092032|Mixed Poisson Process]]
- [[m-m-1-queueing-system_202605080520|M/M/1 Queueing System]]
- [[poisson-process-cheatsheet_202604031847|Poisson Process Cheatsheet]]
