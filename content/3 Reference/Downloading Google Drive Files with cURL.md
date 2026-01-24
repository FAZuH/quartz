---
publish: true
created: 2025-10-14T04:15:27.073+07:00
modified: 2025-10-14T04:15:27.073+07:00
published: 2025-10-14T04:15:27.073+07:00
cssclasses: ""
creation-time: 2025-03-21 18:31
status: baby
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

