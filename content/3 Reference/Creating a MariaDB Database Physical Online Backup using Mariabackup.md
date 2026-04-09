---
publish: true
created: 2026-04-09T23:07:39.077+07:00
modified: 2026-04-09T23:07:39.078+07:00
published: 2026-04-09T23:07:39.078+07:00
tags:
  - content-type/procedural
cssclasses: ""
creation-time: 2025-04-20 14:27
status: in progress
parent:
  - "[[database]]"
---


Create a physical hot backup of a MariaDB database without interrupting operations.

---

## Prerequisites

- MariaDB installed (version 10.1 or later).
- MariaBackup installed (`mariadb-backup` package).
- User with `RELOAD`, `BACKUP_ADMIN`, and `SELECT` privileges.
- Terminal access.
- Sufficient disk space for backup.

## Procedure

1.Open terminal
    
2. **Create Backup Directory**:
    
    ```bash
    mkdir /backup/mariadb
    chmod 700 /backup/mariadb
    ```
    
3. **Run MariaBackup Command**:
    
    ```bash
    mariadb-backup --backup --user=[username] --password=[password] --target-dir=/backup/mariadb
    ```
    
    - Replace `[username]` with your MariaDB username.
    - Replace `[password]` with your password.
    - `--target-dir`: Specifies backup location.
4. **Prepare Backup** (make it consistent):
    
    ```bash
    mariadb-backup --prepare --target-dir=/backup/mariadb
    ```
    
5. **Verify Backup**: Check `/backup/mariadb` for data files and logs.
    
6. Optionally, secure backup by moving it to a safe location and restrict file permissions (`chmod 600 backup.sql`)

## Optional Flags

- `--compress`: Compress backup files.
- `--incremental`: Create an incremental backup (requires a full backup first).
- `--stream=xbstream`: Stream backup to another server or file.
- `--use-memory=[MB]`: Set memory for preparing backup (e.g., `1GB`).

## Notes

- Use for InnoDB and Aria tables; minimal locking for hot backups.
- Schedule with `cron` for automation (e.g., `0 2 * * *` for daily at 2 AM).
- Test restore process:
    1. Stop MariaDB: `systemctl stop mariadb`.
    2. Copy backup to data directory: `mariadb-backup --copy-back --target-dir=/backup/mariadb`.
    3. Fix permissions: `chown -R mysql:mysql /var/lib/mysql`.
    4. Start MariaDB: `systemctl start mariadb`.
- Monitor disk space and backup duration for large databases.