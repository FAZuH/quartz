---
publish: true
created: 2026-02-22T19:23:58.367+07:00
modified: 2026-02-22T19:23:58.367+07:00
published: 2026-02-22T19:23:58.367+07:00
cssclasses: ""
creation-time: 2025-03-14 11:14
status: adult
tags:
parent:
  - "[[mysql data types]]"
---


## Summary

```
TINYINT([M]) [UNSIGNED] [ZEROFILL]
SMALLINT(M) [UNSIGNED] [ZEROFILL]
MEDIUMINT(M) [UNSIGNED] [ZEROFILL]
INT(M) [UNSIGNED] [ZEROFILL]
BIGINT(M) [UNSIGNED] [ZEROFILL]
DECIMAL[(M[,D])] [UNSIGNED] [ZEROFILL]
FLOAT[(M,D)|(P)] [UNSIGNED] [ZEROFILL]
BIT[(M)]
```

`ZEROFILL` is deprecated. Use `LPAD()` instead for padding values.

`SERIAL`: An alias for `BIGINT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE`.

## Integers

| Type      | Storage (bytes) | Possible values                                 |
| --------- | --------------- | ----------------------------------------------- |
| TINYINT   | 1               | 256                                             |
| SMALLINT  | 2               | 65,536                                          |
| MEDIUMINT | 3               | 16,777,216                                      |
| INT       | 4               | 4,294,967,296                                   |
| BIGINT    | 8               | 18,446,744,073,709,551,616<br>(18.446 trillion) |

Syntax for each data type above is: `<type>[(M)] [UNSIGNED] [ZEROFILL]`.

## Fixed-points (exact value)

`DECIMAL` and `NUMERIC` types store exact numeric data values.

**Syntax**

`DECIMAL[(M[,D])] [UNSIGNED] [ZEROFILL]`

Where:
- `M` (precision): Number of **significant digits**. Defaults to 10.
- `D` (scale): Digits stored **after a decimal** point. Default 0.

When trying to insert a value with more digits than `D`, usually **truncated** (OS specific).

#TODO: How is this stored?

## Floating-points (approximate value)

`FLOAT` and `DOUBLE` types represent approximate numeric data values.

**Syntax**

`FLOAT(p)`

Where:
- `p`: Precision in bits. 

`p` 0-23 results in 4-bytes single precision `FLOAT`.
`p` 24-54 results in 8-bytes double precision `DOUBLE`.

 `FLOAT(7,4)` is displayed as `-999.9999`.
 
 MySQL performs **rounding when storing values**, so if you insert `999.00009` into a `FLOAT(7,4)` column, the approximate result is `999.0001`.

> [!WARNING]
> Because floating-point values are approximate and not stored as exact values, attempts to treat them as exact in comparisons may lead to problems.
> 
> Read further: https://dev.mysql.com/doc/refman/8.4/en/problems-with-float.html

##  Bit-value

The `BIT` data type is used to store bit values.

Syntax

`BIT[(M)]`

Where:
- `M`: Number of bits stored. Ranges 1-64. Default 1.

To specify bit values in [[3 Reference/structure/sql]], use  `b'value'`, where the value is binary in zeros and ones, e.g., `b'111'`.

## AUTO_INCREMENT attribute

[[3 Reference/Numeric Data Types#Integers\|Integer]] types can have `AUTO_INCREMENT` [[3 Reference/SQL Commands#Column attributes\|attribute]].

When inserting `NULL`, the **value is set to next sequence value** `value+1`, where `value` is the current largest value.

Note that if `NOT NULL` [[3 Reference/SQL Commands#Column constraints\|constraint]] is not specified, **`NULL` will be inserted instead**.

Also,
- Begins with 1.
- Negative values not supported.
- Does not work with [[3 Reference/Numeric Data Types#Floating-points (approximate value)\|floating types]].
