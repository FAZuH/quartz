---
publish: true
created: 2026-04-09T23:07:39.372+07:00
modified: 2026-04-09T23:07:39.373+07:00
published: 2026-04-09T23:07:39.373+07:00
creation-time: 2025-03-21 18:31
status: in progress
tags:
parent:
  - "[[computers]]"
---

Make sure the google drive link is accessible to the public

Then install with

```bash
curl -L -o file.csv "https://drive.google.com/uc?export=download&id=FILE_ID"
```

Replace `FILE_ID` with the id you want to download.

e.g., on `https://drive.google.com/file/d/1mVGL7ghqicXzHNyY7OPpzTL5M3PJKWn3/view?usp=sharing`
the `FILE_ID` here is `1mVGL7ghqicXzHNyY7OPpzTL5M3PJKWn3`.
