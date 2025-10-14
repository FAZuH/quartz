---
{"publish":true,"aliases":["cdf of Order Statistics"],"created":"2025-10-14T04:15:27.075+07:00","modified":"2025-10-14T04:15:27.075+07:00","published":"2025-10-14T04:15:27.075+07:00","tags":[null],"cssclasses":"","creation-time":"2025-10-03 10:46","status":"adult","parent":["[[Introduction to Mathematical Statistics]]"]}
---


[[3 Reference/Def-random-sample\|Random Sample]]
## Theorem

Let 
- $X_{1},\dots,X_{n}$ : [[3 Reference/Def-random-sample\|Random sample]] with [[3 Reference/Def-probability-density-function-(pdf)\|pdf]] $f(x)$
- $Y_{1},\dots,Y_{n}$ : [[3 Reference/Def-order-statistics\|Order statistics]] of $X_{1},\dots,X_{n}$

Then [[3 Reference/Def-cumulative-distribution-function-(cdf)\|cdf]] of $Y_{1},\dots, Y_{n}$ is given by

- $Y_{1}$[^2]
$$
F_{Y_{1}}(x) = 1-[1-F_{X}(x)]^n
$$

- $Y_{k}$[^1]
$$
F_{Y_{k}}(x) = \sum_{j=k}^n \binom n j [F_{X}(x)]^j[1-F_{X}(x)]^{n-j}
$$

- $Y_{n}$[^2]
$$
F_{Y_{n}}(x) = [F_{X}(x)]^n
$$


[^1]: https://en.wikipedia.org/wiki/Order_statistic#Cumulative_distribution_function_of_order_statistics (Taken in 2025-06-24)

[^2]: https://www.colorado.edu/amath/sites/default/files/attached-files/order_stats.pdf