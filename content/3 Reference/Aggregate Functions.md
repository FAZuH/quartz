---
publish: true
created: 2025-10-14T04:15:27.076+07:00
modified: 2025-10-14T04:15:27.076+07:00
published: 2025-10-14T04:15:27.076+07:00
cssclasses: ""
creation-time: 2025-03-06 09:06
status: elder
tags:
parent:
  - "[[sql]]"
---


## Column references

`GROUP BY` and `ORDER BY` clauses can **reference selected columns by the number** in which they appear in the `SELECT` statement.

```sql
SELECT COUNT(*) AS 'total_movies', 
   rating 
FROM movies 
GROUP BY 2 
ORDER BY 1;
```

- `GROUP BY` column `2` (`rating`)
- `ORDER BY` column `1` (`total_movies`)

## Aggregate functions

Aggregate functions **perform an aggregate calculation** return a single value.

- `COUNT()`
- `SUM()`
- `MAX()`
- `MIN()`
- `AVG()`

## ROUND() function

Rounds a number value up to a specified number of decimal points.

```sql
SELECT year, 
   ROUND(AVG(rating), 2) 
FROM movies 
WHERE year = 2015;
```

## GROUP BY clause

**Group rows** in a result set **by identical values** in one or more columns.

Often used in combination with aggregate functions.

```sql
SELECT rating,
	COUNT(*)
FROM movies
GROUP BY rating;
```

> [!NOTE]
> Notice that we have to `SELECT` rating, so `GROUP BY` receives them in the result set to group the result.

## HAVING clause

**Further filter the result set groups** provided by the `GROUP BY` clause.

Must always come after a `GROUP BY` clause but must come before any `ORDER BY` or `LIMIT` clause.

```sql
SELECT year, 
   COUNT(*) 
FROM movies 
GROUP BY year
HAVING COUNT(*) > 5;
```
