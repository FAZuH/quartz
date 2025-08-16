---
{"publish":true,"created":"2025-08-15T13:53:58.546+07:00","modified":"2025-08-15T13:53:58.546+07:00","published":"2025-08-15T13:53:58.546+07:00","cssclasses":"","creation-time":"2025-03-27 16:53","status":"baby","tags":null,"parent":["[[nextcloud]]"]}
---


You can’t access files because they are locked and you find such errors in your logfile:

`{"reqId":"0DijSqEkfOg2iyh9VD8J","remoteAddr":"xx.xx.xx.xx","app":"webdav","message":"Exception: {\"Message\":\"HTTP\\\/1.1 423 \\\"path\\\/file.extension\\\" is locked\",\"Exception\":\"OCA\\\\DAV\\\\Connector\\\\Sabre\\\\Exception\\\\FileLocked\",\"Code\":0,\"Trace\":\"#0`

**Manually disable locking state:**

1. Put Nextcloud in maintenance mode: edit `config/config.php` and change this line:  
    `'maintenance' => true,`
2. Empty table `oc_file_locks`: Use tools such as phpmyadmin or connect directly to your database and run (the default table prefix is `oc_`, this prefix can be different or even empty):  
    `DELETE FROM db_name.oc_file_locks WHERE true;`  
    or if you are connected to your database already, the table name is enough:  
    `DELETE FROM oc_file_locks WHERE true;`
3. Disable maintenance mode (undo first step).

**Tips**:

- Make sure your cron-jobs run properly (you admin page tells you when cron ran the last time): [Background jobs — Nextcloud latest Administration Manual latest documentation](https://docs.nextcloud.com/server/stable/admin_manual/configuration_server/background_jobs_configuration.html)
- Run a file check to update the filecache table, in case due to the locking errors, some files were not indexed properly: `sudo -u www-data php occ files:scan --all`
