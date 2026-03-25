---
publish: true
created: 2026-03-25T15:22:40.645+07:00
modified: 2026-03-25T15:22:40.645+07:00
published: 2026-03-25T15:22:40.645+07:00
tags:
  - category/exercise
creation-time: 2025-03-28 18:58
status: complete
parent:
  - "[[Time Series Analysis With Applications in R]]"
---

![[assets/Pasted image 20250327224820.png]]

---

Misal diberikan tabel ACF dengan $n=100$ Seperti berikut:

| Lag | 1    | 2    | 3    | 4    | 5    | 6    |
|-----|------|------|------|------|------|------|
| ACF for $Y\_t$  | 0.97 | 0.97 | 0.93 | 0.85 | 0.80 | 0.71 |
| ACF for $\nabla Y\_t$ | -0.42 | 0.18 | -0.02 | 0.07 | -0.10 | -0.09 |

"ACF for $Y\_t$" yang menurun secara lambat mengindikasikan adanya ketidakstasioneran ($d=1$).

"ACF for $nabla Y\_t$" terlihat signifikan pada lag 1 (-0.42), mengindikasikan bentuk MA(1).

$Y\_t$ terlihat seperti nonstasioner, tetapi $\nabla Y\_t$ terlihat seperti MA(1).

Tidak dapat ditentukan term AR ($p=0$) tanpa data PACF, meskipun lag 2 (0.18) mendekati signifikan.

Setelah mempertimbangkan hasil tabel ACF, akan diusulkan model ARIMA(0,1,1).

**Note**: Could explore ARIMA(1,1,0) or ARIMA(1,1,1) with PACF data, but ACF alone points to ARIMA(0,1,1).
