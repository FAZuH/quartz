---
{"publish":true,"aliases":["Updating Tailscale Node IP of Headscale"],"created":"2025-08-25T07:58:50.648+07:00","modified":"2025-08-25T08:01:17.575+07:00","published":"2025-08-25T08:01:17.575+07:00","cssclasses":"","creation-time":"2025-08-25 07:58","status":"baby","tag":null,"parent":"[[fleeting]]"}
---

1. Open sqlite[^1] on `/var/lib/headscale/sqlite.db`
2. Do
```bash
update nodes set ipv4 = 'new-ip' where given_name = 'machine-name';
```

For reference, here's schema of `nodes` table as of 2025-08-25:
```
sqlite> pragma table_info(nodes);
0|id|INTEGER|0||1
1|machine_key|TEXT|0||0
2|node_key|TEXT|0||0
3|disco_key|TEXT|0||0
4|endpoints|TEXT|0||0
5|host_info|TEXT|0||0
6|ipv4|TEXT|0||0
7|ipv6|TEXT|0||0
8|hostname|TEXT|0||0
9|given_name|varchar(63)|0||0
10|user_id|INTEGER|0||0
11|register_method|TEXT|0||0
12|forced_tags|TEXT|0||0
13|auth_key_id|INTEGER|0||0
14|expiry|datetime|0||0
15|last_seen|datetime|0||0
16|approved_routes|TEXT|0||0
17|created_at|datetime|0||0
18|updated_at|datetime|0||0
19|deleted_at|datetime|0||0
```

[^1]: https://sqlite.org/
