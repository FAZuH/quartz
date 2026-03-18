---
publish: true
aliases:
  - Double Moving Average
  - DMA
created: 2026-03-16T11:05:05.471+07:00
modified: 2026-03-16T11:08:12.224+07:00
published: 2026-03-16T11:08:12.224+07:00
cssclasses: ""
creation-time: 2026-03-16 14:00
status: baby
parent: "[[forecasting methods]]"
---


## Formula

$$
\begin{aligned}
S_{1,t} &= \text{SMA of } X \\
S_{2,t} &= \text{SMA of } S_1 \\
F_{t+h} &= A_t + hB_t \\
A_t &= 2S_{1,t} - S_{2,t} \\
B_t &= \frac{2}{m-1}(S_{1,t} - S_{2,t})
\end{aligned}
$$

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
> SMA process performed twice. Suitable for data with trends.
