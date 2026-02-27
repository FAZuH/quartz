---
publish: true
created: 2026-02-22T19:23:58.368+07:00
modified: 2026-02-22T19:23:58.369+07:00
published: 2026-02-22T19:23:58.369+07:00
cssclasses: ""
creation-time: 2025-03-06 08:09
status: elder
tags:
parent:
  - "[[sql]]"
---


## SELECT statement

```sql
SELECT *
FROM movies;
```

## Clauses

### WHERE clause

Fitler rows to match a condition.
  
```sql
SELECT title
FROM library
WHERE pub_year = 2017;
```

### AS clause

Rename colums or tables in the result set.

```sql
SELECT name AS 'movie_title'
FROM movies;
```

### ORDER BY clause

Orders the result based on a column and order type.

```sql
SELECT *
FROM contacts
ORDER BY birth_date DESC;
```

### DISTINCT clause

Removes duplicate rows from the result set
  
```sql
SELECT DISTINCT city
FROM contact_details;
```

### LIMIT clause

Limits the result set up to a specified number of rows.

```sql
SELECT *
FROM movies
LIMIT 5;
```

## Operators

### AND operator

Combines multiple condition with AND.

```sql
SELECT model 
FROM cars 
WHERE color = 'blue' 
  AND year > 2014;
```

### OR operator

Combines multiple conditions with OR.

```sql
SELECT name
FROM customers
WHERE state = 'CA'
   OR state = 'NY';
```

### NOT operator

Negates a condition.

```sql
SELECT address
FROM records
WHERE address IS NOT NULL;
```

### IN operator

Check if a value is in a collection.

```sql
SELECT name, degree
FROM students
WHERE degree IN ("Math", "Statistics", "Computer Science");
```


### BETWEEN operator

Filter values based on a range.

```sql
SELECT *
FROM movies
WHERE year BETWEEN 1980 AND 1990;
```  

### LIKE operator

Conditional with pattern matching.

```sql
SELECT name
FROM movies
WHERE name LIKE 'Star%';
```

> [!NOTE]
> - `%` wildcard can be used along with `LIKE` to match $\geq$ 0 unspecified characters.
> - $\_$ wildcard can be used to match 1 unspecified character.
