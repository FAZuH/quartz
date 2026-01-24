---
publish: true
created: 2025-10-14T04:15:27.052+07:00
modified: 2025-10-14T04:15:27.052+07:00
published: 2025-10-14T04:15:27.052+07:00
cssclasses: ""
creation-time: 2025-03-06 04:58
status: adult
tags:
parent:
  - "[[sql]]"
---


> [!NOTE]
> This note only includes description, syntax and examples for commands related to tables.
> Many statements here also supports other database objects, although not included in the scope of this note. See [[3 Reference/Database Objects]] to read further.

## DDL (Data Definition Language)

### Column attributes

- Data Type
- `DEFAULT`
- `AUTO_INCREMENT`
- `SERIAL`
- `UNSIGNED`
- `ZEROFILL`

### Column constraints

Rules applied to the **values of individual columns**.

- `PRIMARY KEY`
- `UNIQUE`
- `NOT NULL`
- `DEFAULT`
- `CHECK`

```sql title:"Column attributes & constraints example"
CREATE TABLE employees (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    role VARCHAR(50) DEFAULT 'staff' NOT NULL,
    dept_id INT,
    hire_date DATE DEFAULT CURRENT_DATE,
    salary DECIMAL(10,2) CHECK (salary >= 0),
    FOREIGN KEY (dept_id) REFERENCES departments(id)
);
```

### CREATE TABLE statement

Creates a new table.

Example with [[3 Reference/SQL Commands#Column constraints]]
```sql
CREATE TABLE table_name (
	col1 INTEGER PRIMARY KEY,
	col2 INTEGER DEFAULT 10
	col3 TEXT
)
```

So, for each column in a create table statement, 
`<column name> <data type> [constraint]`.

### DROP TABLE statement

Deletes 

### ALTER TABLE statement

Add/delete >=1 columns of an existing table.

```sql
-- 1️⃣ Add a column
ALTER TABLE table_name ADD COLUMN column_name datatype;

-- 2️⃣ Modify a column
ALTER TABLE table_name MODIFY COLUMN column_name new_datatype; -- MySQL
ALTER TABLE table_name ALTER COLUMN column_name TYPE new_datatype; -- PostgreSQL

-- 3️⃣ Rename a column
ALTER TABLE table_name RENAME COLUMN old_name TO new_name;

-- 4️⃣ Drop a column
ALTER TABLE table_name DROP COLUMN column_name;

-- 5️⃣ Rename the table
ALTER TABLE table_name RENAME TO new_table_name;

-- 6️⃣ Add/remove constraints
ALTER TABLE table_name ADD CONSTRAINT constraint_name UNIQUE (column_name);
ALTER TABLE table_name DROP CONSTRAINT constraint_name;
```

### TRUNCATE TABLE statement

Removes all rows from  a table.

```sql
TRUNCATE TABLE table_name;
```

## DML (Data Manipulation Language)

### INSERT statement

**Inserts >=1 new rows** into a table.

The column names are optional, but is recommended, as column order can change.

Values can be omitted on columns that has a `DEFAULT` [[3 Reference/SQL Commands#Column constraints\|constraint]].

String literals has to be defined using single ticks ('). Double ticks (") are reserved for identifiers (column & table names).

```sql
-- With column names
INSERT INTO table_name (col1, col2, col3)
VALUES 
	(1, 2, 'val1'),
	(2, 2, 'val2'),
	(3, 2, 'val3');

-- Without column names
INSERT INTO foo
VALUES
	(1, 2, 'val1'),
	(2, 2, 'val2'),
	(3, 2, 'val3');

-- Using a column's default value (col2's default = 10)
INSERT INT foo (col1, col3)
VALUES
	(1, 'val1'),
	(2, 'val2'),
	(3, 'val3');
```

### UPDATE statement

Edit >=1 values in >=1 rows.

```sql
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE some_column = some_value;
```

### DELETE statement

Delete >=1 rows from a table.

```sql
-- Syntax
DELETE FROM table_name
WHERE condition;
```

Where clause specifies the rows to delete. If omitted, all rows will be deleted.

## DQL (Data Query Language)

See [[3 Reference/SQL Query]]

## DCL (Data Control Language)

### GRANT statement

Assigns privileges to a user.

```sql
-- Syntax
GRANT privilege_type [(column_list)] ON [object_type] object_name TO user [WITH GRANT OPTION];

-- Example
GRANT ALL PRIVILEGES ON database TO user;
GRANT SELECT, INSERT ON table_name TO user;
```

### `REVOKE` statement

Removes privileges from a user.

```sql
-- Syntax
REVOKE privilege_type [(column_list)] ON [object_type] object_name FROM user;

-- Example
REVOKE SELECT, INSERT ON table_name FROM user;
```

## TCL (Transaction Control Language)


## Others

Other useful SQL commands include:

- [[3 Reference/SQL EXPLAIN and DESCRIBE Command]]
