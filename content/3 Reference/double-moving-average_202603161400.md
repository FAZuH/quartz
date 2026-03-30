---
publish: true
aliases:
  - Double Moving Average
  - DMA
created: 2026-03-29T17:33:47.075+07:00
modified: 2026-03-30T09:23:41.294+07:00
published: 2026-03-30T09:23:41.294+07:00
creation-time: 2026-03-16 14:00
status: in progress
parent: "[[forecasting methods]]"
---

## Formula

$$
\begin{aligned}
S\_{1,t} &= \text{SMA of } X \\
S\_{2,t} &= \text{SMA of } S\_1 \\
F\_{t+h} &= A\_t + hB\_t \\
A\_t &= 2S\_{1,t} - S\_{2,t} \\
B\_t &= \frac{2}{m-1}(S\_{1,t} - S\_{2,t})
\end{aligned}
$$
Where:

- $S\_{1,t}$ : first-order <u>[[single-moving-average_202603161400|SMA]] of $X$</u> at time $t$
- $S\_{2,t}$ : second-order SMA (<u>SMA of $S\_{1,t}$</u>) at time $t$
- $F\_{t+h}$ : <u>forecast</u> $h$ steps ahead from time $t$
- $A\_t$ : level estimate at time $t$
- $B\_t$ : trend (slope) estimate at time $t$
- $m$ : <u>window</u> size
- $h$ : forecast horizon (<u>steps ahead</u>)

```python
from dataclasses import dataclass


@dataclass
class DMAResult:
    t: int
    A: float
    B: float
    forecast: float


def _sma(x: list[float], m: int) -> list[float]:
    return [sum(x[i:i+m]) / m for i in range(len(x) - m + 1)]


def double_moving_average(x: list[float], m: int, h: int) -> list[DMAResult]:
    S1 = _sma(x, m)
    S2 = _sma(S1, m)

    offset_S1 = m - 1
    offset_S2 = 2 * m - 2

    results: list[DMAResult] = []
    for t in range(offset_S2, len(x)):
        s1 = S1[t - offset_S1]
        s2 = S2[t - offset_S2]
        A = 2 * s1 - s2
        B = (2 / (m - 1)) * (s1 - s2)
        results.append(DMAResult(t=t, A=A, B=B, forecast=A + h * B))

    return results
```

> [!tip]
> [[single-moving-average_202603161400|SMA]] process performed twice. Suitable for data with trends.
