---
{"publish":true,"created":"2025-07-24T11:50:56.419+07:00","modified":"2025-07-24T11:50:56.420+07:00","published":"2025-07-24T11:50:56.420+07:00","tags":["content-type/procedural"],"cssclasses":"","creation-time":"2025-04-20 14:28","status":"adult","parent":["[[database]]"]}
---


Create a backup of a MySQL database using `mysqldump`.

---

## Prerequisites

- MySQL installed
- User with database access
- Terminal access

## Procedure

1. Open terminal

2. **Run mysqldump Command**:
    
    ```bash
    mysqldump -u [username] -p [database_name] > backup.sql
    ```
    
    - Replace `[username]` with your MySQL username.
    - Replace `[database_name]` with the target database.
    - Enter password when prompted.

3. **Verify Backup**: Check `backup.sql` exists in the current directory.

4. Optionally, secure backup by moving it to a safe location and restrict file permissions (`chmod 600 backup.sql`)

## Optional Flags

- `--databases`: Backup multiple databases.
- `--all-databases`: Backup all databases.
- `--no-data`: Backup only schema, no data.
- `-h [hostname]`: Set the MySQL server host. Defaults to localhost.
- `-P [port]`: Set the MySQL server port. Defaults to 3306.

## Restore Backup

To restore: `mysql -u [username] -p [database_name] < backup.sql`

## See also

- https://dev.mysql.com/doc/refman/8.4/en/mysqldump.html
- [Creating a MariaDB Database Physical Online Backup using Mariabackup](Creating%20a%20MariaDB%20Database%20Physical%20Online%20Backup%20using%20Mariabackup.md)
- https://mariadb.com/kb/en/mariabackup/