---
publish: true
created: 2026-04-09T23:07:39.614+07:00
modified: 2026-04-09T23:07:39.616+07:00
published: 2026-04-09T23:07:39.616+07:00
cssclasses: ""
creation-time: 2025-03-28 21:19
status: in progress
tags:
parent:
  - "[[mysql data types]]"
---


## CHAR and VARCHAR types

Syntax:
- `[NATIONAL] VARCHAR(M) [CHARACTER SET charset_name] [COLLATE collation_name]`
- `[NATIONAL] CHAR[(M)] [CHARACTER SET charset_name] [COLLATE collation_name]`

Where `M` is the number of characters.

Range:
- `VARCHAR`: 0 to 65,535 characters.
- `CHAR`: 0 to 255 characters.

For more information collation, character sets and unicode, see: https://dev.mysql.com/doc/refman/8.4/en/charset.html

If strict mode is enabled, values that exceed the column length are not stored, and an error results.

### Length prefix

`VARCHAR` data is stored along a length prefix.

The length prefix indicates the length of the value in a cell.

If a cell require no more than 255 bytes of storage, the length prefix size is 1 byte. Otherwise, it's 2 bytes.

### Storage

| Value        | CHAR(4)  | Storage Required | VARCHAR(4) | Storage Required |
| ------------ | -------- | ---------------- | ---------- | ---------------- |
| `''`         | `'    '` | 4 bytes          | `''`       | 1 byte           |
| `'ab'`       | `'ab  '` | 4 bytes          | `'ab'`     | 3 bytes          |
| `'abcd'`     | `'abcd'` | 4 bytes          | `'abcd'`   | 5 bytes          |
| `'abcdefgh'` | `'abcd'` | 4 bytes          | `'abcd'`   | 5 bytes          |

## BINARY and VARBINARY types

Like [[3 Reference/String Data Types#CHAR and VARCHAR types]] but stores **strings as binaries**.

Syntax:
- `VARBINARY(M)`
- `BINARY[(M)]`

Where `M` is the length of binary.

## BLOB and TEXT types

`BLOB` (**B**inary **L**arge **Ob**ject) holds a variables amount of data as binary.

`BLOB` values are treated as binary (byte) strings, while `TEXT` values are treated as nonbinary (character) strings.

Unlike [[3 Reference/String Data Types#CHAR and VARCHAR types]], there is no padding on insert and no bytes are stripped on select.

If `TEXT` is indexed and the *index require unique values*, duplicate-key **errors occur for values that differ only in number of trailing spaces**. This is not true for `BLOB` columns.

Each `BLOB` or `TEXT` value is **represented internally by a separately allocated object** unlike other data types, where storage is allocated once when the table is opened.

Because `BLOB` and`TEXT` can be extremely long, you might encounter these constraints:

- Only the first [max_sort_length](https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_max_sort_length) bytes of the column are used when sorting. Defaults to 1024.

- Instances of `BLOB` or `TEXT` columns in the result of a query that is processed using a temporary table causes the server to use a table on disk rather than in memory. So, **only include `BLOB` or `TEXT` in the reuslt only if they are really needed**.

## ENUM type

