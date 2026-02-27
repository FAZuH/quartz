---
publish: true
created: 2026-02-22T19:23:58.369+07:00
modified: 2026-02-22T19:23:58.369+07:00
published: 2026-02-22T19:23:58.369+07:00
cssclasses: ""
creation-time: 2025-04-18 16:38
status: adult
tags:
parent:
  - "[[3 Reference/structure/finance]]"
---


You can use `--infer-market-prices` to infer from price of a currency from transactions made with `@@`.

For example, to see `gold` prices: `hledger prices --infer-market-prices gold`.

To see gold prices along with percentage and amount differences, run the following Python script:

```python
import re
import subprocess

result = subprocess.run(
    ["hledger", "prices", "--infer-market-prices", "gold"],
    capture_output=True,
    text=True
)
lines = result.stdout.splitlines()

prices = []
for line in lines:
    if not line.startswith("P"):
        continue
    match = re.match(r"P\s+(\S+)\s+(\S+)\s+([\d,.]+)\s+(\S+)", line.strip())
    if not match:
        continue
    date, commodity, price, currency = match.groups()
    price = price.replace(",", "")
    prices.append((date.replace("-", "/"), float(price)))

prices.sort()

for i in range(1, len(prices)):
    date, price = prices[i]
    prev_date, prev_price = prices[i-1]

    price_diff = price - prev_price
    perc_diff = price_diff / prev_price

    sign = "+" if price_diff >= 0 else "-"
    print(f"{prev_date} - {date}:    {sign}{abs(perc_diff):.2%} ({sign}{abs(price_diff):.2f} IDR)")
```